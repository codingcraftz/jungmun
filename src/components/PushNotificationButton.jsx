"use client";

import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  requestNotificationPermission,
  registerServiceWorker,
  subscribeToPushNotifications,
} from "@/lib/push-notification";

export default function PushNotificationButton() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 현재 푸시 알림 권한 상태 확인
    if (typeof window !== "undefined" && "Notification" in window) {
      if (Notification.permission === "granted") {
        setStatus("granted");
      } else if (Notification.permission === "denied") {
        setStatus("denied");
      }
    } else {
      setStatus("unsupported");
    }
  }, []);

  const handleSubscribe = async () => {
    setStatus("loading");
    setError(null);

    try {
      // 1. 알림 권한 요청
      const permissionResult = await requestNotificationPermission();
      if (!permissionResult.success) {
        throw new Error(permissionResult.error || "알림 권한을 얻을 수 없습니다.");
      }

      // 2. 서비스 워커 등록
      const swResult = await registerServiceWorker();
      if (!swResult.success) {
        throw new Error(swResult.error || "서비스 워커를 등록할 수 없습니다.");
      }

      // 3. 푸시 알림 구독
      const subResult = await subscribeToPushNotifications(swResult.registration);
      if (!subResult.success) {
        throw new Error(subResult.error || "푸시 알림 구독에 실패했습니다.");
      }

      setStatus("granted");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  if (status === "unsupported") {
    return null;
  }

  if (status === "granted") {
    return (
      <Button variant="ghost" size="icon" className="text-white">
        <Bell size={24} />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-white"
      disabled={status === "loading" || status === "denied"}
      onClick={handleSubscribe}
    >
      <Bell size={24} />
    </Button>
  );
}

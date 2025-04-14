// 푸시 알림 권한 요청
export async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    return { success: false, error: "이 브라우저는 알림을 지원하지 않습니다." };
  }

  if (Notification.permission === "granted") {
    return { success: true, permission: "granted" };
  }

  if (Notification.permission === "denied") {
    return { success: false, error: "알림 권한이 거부되었습니다." };
  }

  try {
    const permission = await Notification.requestPermission();
    return { success: permission === "granted", permission };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 서비스 워커 등록
export async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      return { success: true, registration };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  return { success: false, error: "이 브라우저는 서비스 워커를 지원하지 않습니다." };
}

// 푸시 알림 구독
export async function subscribeToPushNotifications(registration) {
  try {
    // VAPID 키는 나중에 백엔드 설정에서 생성해야 합니다
    const vapidPublicKey = "YOUR_PUBLIC_VAPID_KEY";
    const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: convertedVapidKey,
    });

    // 구독 정보를 서버에 저장하는 API 호출
    // await saveSubscription(subscription);

    return { success: true, subscription };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Base64 문자열을 Uint8Array로 변환 (VAPID 키 처리용)
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// 이 파일은 서비스 워커로, next-pwa에 의해 자동으로 관리됩니다.
// 여기에 코드를 추가하면 next-pwa가 생성하는 서비스 워커에 병합됩니다.

// 푸시 알림 수신 이벤트
self.addEventListener("push", function (event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "중문배드민턴 클럽";
  const options = {
    body: data.body || "새로운 알림이 있습니다.",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/icon-192x192.png",
    data: data.url || "/",
    vibrate: [100, 50, 100],
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// 알림 클릭 이벤트
self.addEventListener("notificationclick", function (event) {
  event.notification.close();

  event.waitUntil(clients.openWindow(event.notification.data));
});

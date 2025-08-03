import { useEffect } from "react";

export const useLockOrientation = () => {
  useEffect(() => {
    const lockOrientation = () => {
      // Проверяем, что код выполняется на клиенте
      if (typeof window !== "undefined") {
        // Современный API
        if (screen.orientation?.lock) {
          screen.orientation.lock("portrait").catch(error => {
            console.error("Orientation lock failed: ", error);
          });
        }
        // Устаревший API
        else if (window.screen.lockOrientation) {
          window.screen.lockOrientation("portrait");
        }
      }
    };

    lockOrientation();

    // Добавляем обработчик изменения ориентации
    window.addEventListener("orientationchange", lockOrientation);

    return () => {
      window.removeEventListener("orientationchange", lockOrientation);
    };
  }, []);
};

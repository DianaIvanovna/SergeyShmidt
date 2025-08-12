import { useEffect } from 'react';

type OrientationType = 'portrait' | 'landscape' | 'any';

/**
 * Хук, который блокирует ориентацию экрана на мобильных устройствах.
 * @param {OrientationType} orientation - Желаемая ориентация ('portrait', 'landscape' или 'any').
 * @param {boolean} [enabled=true] - Включить/отключить блокировку.
 */
export const  useLockOrientation = (
  orientation: OrientationType = 'portrait',
  enabled: boolean = true
) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const lockOrientation = async () => {
      try {
        // Поддержка Screen Orientation API (современные браузеры)
        if ('screen' in window && 'orientation' in window.screen) {
          await window.screen.orientation.lock(orientation);
        }
        // Альтернатива для iOS и старых Android (через CSS + мета-тег)
        else {
          const metaTag = document.createElement('meta');
          metaTag.setAttribute('name', 'viewport');

          if (orientation === 'portrait') {
            metaTag.setAttribute(
              'content',
              'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            );
          } else if (orientation === 'landscape') {
            metaTag.setAttribute(
              'content',
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
            );
          }

          // Удаляем старый мета-тег (если есть) и добавляем новый
          const existingMeta = document.querySelector('meta[name="viewport"]');
          if (existingMeta) {
            existingMeta.replaceWith(metaTag);
          } else {
            document.head.appendChild(metaTag);
          }
        }
      } catch (err) {
        console.error('Ошибка блокировки ориентации:', err);
      }
    };

    lockOrientation();

    // Восстанавливаем ориентацию при размонтировании
    return () => {
      if ('screen' in window && 'orientation' in window.screen) {
        window.screen.orientation.unlock();
      }
    };
  }, [orientation, enabled]);
};
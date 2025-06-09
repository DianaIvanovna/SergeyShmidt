import { useEffect, useRef, useState } from "react";

export const useHasScroll = <T extends HTMLElement>() => {
  const [hasScroll, setHasScroll] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (ref.current) {
        const hasVerticalScroll = ref.current.scrollHeight > ref.current.clientHeight;
        setHasScroll(hasVerticalScroll);
      }
    };

    // Проверяем сразу при монтировании
    checkScroll();

    // Добавляем обработчик ресайза
    window.addEventListener("resize", checkScroll);

    // Проверяем при изменении содержимого (MutationObserver)
    const observer = new MutationObserver(checkScroll);
    if (ref.current) {
      observer.observe(ref.current, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
      });
    }

    return () => {
      window.removeEventListener("resize", checkScroll);
      observer.disconnect();
    };
  }, []);

  return { ref, hasScroll };
};
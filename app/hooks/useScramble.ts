import { useRef, useCallback, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?#&";

export function useScramble(ref: React.RefObject<HTMLSpanElement | null>) {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const originalTextRef = useRef<string>("");

  // Запам'ятовуємо оригінальний текст при маунті
  useEffect(() => {
    if (ref.current) {
      originalTextRef.current = ref.current.textContent ?? "";
    }
  }, [ref]);

  const scrambleTo = useCallback(
    (target?: string) => {
      if (!ref.current) return;
      if (timerRef.current) clearInterval(timerRef.current);

      // Якщо target не вказано — повертаємось до оригінального тексту
      const resolvedTarget = target ?? originalTextRef.current;

      let iter = 0;
      const steps = resolvedTarget.length * 3;

      timerRef.current = setInterval(() => {
        if (!ref.current) return;
        ref.current.textContent = [...resolvedTarget]
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < Math.floor(iter / 3)) return resolvedTarget[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        if (++iter > steps) {
          clearInterval(timerRef.current!);
          if (ref.current) ref.current.textContent = resolvedTarget;
        }
      }, 28);
    },
    [ref],
  );

  useEffect(
    () => () => {
      if (timerRef.current) clearInterval(timerRef.current);
    },
    [],
  );

  return scrambleTo;
}

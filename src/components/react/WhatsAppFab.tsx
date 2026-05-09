import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  phone: string;
  message?: string;
}

export default function WhatsAppFab({ phone, message = '' }: Props) {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${phone.replace(/\D/g, '')}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="wa"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geç"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 20 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.45, ease: [0.2, 0.7, 0.3, 1] }}
          whileHover={reduce ? undefined : { scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="group fixed z-[60] right-5 bottom-5 md:right-7 md:bottom-7 w-[60px] h-[60px] md:w-[64px] md:h-[64px] grid place-items-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_rgba(18,140,126,0.45)] animate-wapulse"
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
            <path d="M19.05 4.91A10.05 10.05 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.49 1.34 5.01L2 22l5.13-1.34A9.94 9.94 0 0 0 12 22h.01c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.96-7.09zM12 20.13h-.01a8.09 8.09 0 0 1-4.13-1.13l-.3-.18-3.05.8.81-2.97-.19-.31A8.05 8.05 0 0 1 3.87 12c0-4.49 3.65-8.13 8.13-8.13 2.17 0 4.21.85 5.74 2.39A8.04 8.04 0 0 1 20.13 12c0 4.49-3.65 8.13-8.13 8.13zm4.46-6.1c-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.62.8-.76.96-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.57.18 1.1.16 1.51.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
          </svg>
          <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap bg-noir text-paper font-mono uppercase text-[0.65rem] tracking-[0.22em] py-2 px-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
            WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

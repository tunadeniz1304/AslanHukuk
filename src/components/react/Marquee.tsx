import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 38 }: Props) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items, ...items];

  return (
    <div className="border-y border-rule overflow-hidden py-5 bg-paper">
      <motion.div
        className="flex gap-16 whitespace-nowrap font-serif italic"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}
        animate={reduce ? undefined : { x: ['0%', '-33.333%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-16 text-ink">
            {it}
            <span className="text-gold not-italic" style={{ fontSize: '0.55em' }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

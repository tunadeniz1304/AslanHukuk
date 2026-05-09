import { motion, useReducedMotion } from 'framer-motion';
import { practices } from '../../data/site';

export default function PracticeList() {
  const reduce = useReducedMotion();

  return (
    <ul className="border-t border-rule">
      {practices.map((p, idx) => (
        <motion.li
          key={p.slug}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, delay: 0.05 * idx, ease: [0.2, 0.7, 0.3, 1] }}
          className="border-b border-rule"
        >
          <a
            href={`/calisma-alanlari#${p.slug}`}
            className="group relative grid grid-cols-[60px_1fr] md:grid-cols-[80px_1.4fr_2.2fr_auto] items-center gap-x-6 md:gap-x-12 py-7 md:py-10 transition-[padding] duration-500 hover:px-6 hover:pl-8"
          >
            {/* Soft paper-deep wash on hover */}
            <span className="absolute inset-0 bg-paper-deep opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            {/* Strong gold accent bar — left edge slides in on hover */}
            <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-gold scale-y-0 origin-center group-hover:scale-y-100 transition-transform duration-500 ease-editorial -z-10" />
            <span className="font-mono text-gold relative z-10" style={{ fontSize: '0.85rem', letterSpacing: '0.18em' }}>{p.no}</span>
            <span className="font-serif relative z-10" style={{ fontSize: 'clamp(1.45rem,2.5vw,2.1rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              {p.name}
            </span>
            <span className="hidden md:block text-ink-soft relative z-10" style={{ fontSize: '1rem', lineHeight: 1.55, maxWidth: '50ch' }}>
              {p.desc}
            </span>
            <span className="hidden md:block text-ink-mute group-hover:text-gold group-hover:translate-x-2 transition-all relative z-10 font-serif" style={{ fontSize: '1.5rem' }}>
              →
            </span>
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

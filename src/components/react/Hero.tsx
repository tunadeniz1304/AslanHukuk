import { motion, useReducedMotion } from 'framer-motion';

const META_LEFT  = 'AHB · İSTANBUL · 2003 — 2026';
const META_RIGHT = 'BAROYA KAYITLI · 12 AVUKAT';

const word = {
  hidden: { y: '100%', opacity: 0 },
  show:   (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 0.95, delay: 0.18 + i * 0.07, ease: [0.2, 0.7, 0.3, 1] },
  }),
};

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.2, 0.7, 0.3, 1] as const },
});

const HEADLINE = ['Sessiz', 'güç.', 'Kararlı', 'temsil.'];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="section pt-[clamp(2rem,4vw,4rem)] pb-[clamp(4rem,9vw,8rem)]">
      <div className="shell">
        {/* Top meta rule */}
        <motion.div
          {...(reduce ? {} : fade(0))}
          className="flex justify-between items-center py-4 border-b border-rule font-mono uppercase text-ink-mute flex-wrap gap-2"
          style={{ fontSize: '0.7rem', letterSpacing: '0.22em' }}
        >
          <span>{META_LEFT}</span>
          <span className="hidden sm:inline">İHTİSAS · 6 ALAN</span>
          <span>{META_RIGHT}</span>
        </motion.div>

        {/* Headline — staggered word reveal */}
        <h1 className="display mt-[clamp(2rem,5vw,4rem)] mb-0" style={{ maxWidth: '14ch' }}>
          {reduce ? (
            <>Sessiz güç. <em>Kararlı</em> temsil.</>
          ) : (
            HEADLINE.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.25em] last:mr-0">
                <motion.span
                  className="inline-block"
                  variants={word}
                  initial="hidden"
                  animate="show"
                  custom={i}
                  style={i === 2 ? { fontStyle: 'italic', color: '#8a6b2a' } : undefined}
                >
                  {w}
                </motion.span>
              </span>
            ))
          )}
        </h1>

        {/* Foot grid */}
        <motion.div
          {...(reduce ? {} : fade(0.75))}
          className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-8 md:gap-12 items-end mt-[clamp(3rem,6vw,5rem)] pt-8 border-t border-rule"
        >
          <p className="lead m-0" style={{ maxWidth: '38ch' }}>
            Aslan Hukuk Bürosu, 2003'ten bu yana ticaretin, ailenin ve devletin karşısında müvekkilini koruyan kararlı bir hukuk pratiğidir.
          </p>

          <div>
            <div className="font-serif" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
              22<span style={{ color: '#8a6b2a', fontStyle: 'italic' }}>.</span>
            </div>
            <div className="font-mono uppercase text-ink-mute mt-3" style={{ fontSize: '0.68rem', letterSpacing: '0.22em' }}>Yıl Pratik</div>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <a href="/iletisim" className="ed-btn">Görüşme Talep Et</a>
            <a href="/calisma-alanlari" className="ed-link">Çalışma Alanları</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

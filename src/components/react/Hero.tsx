import { motion, useReducedMotion } from 'framer-motion';

const META_LEFT  = 'AHB · İSTANBUL · 2003 — 2026';
const META_MID   = 'İHTİSAS · 6 ALAN';
const META_RIGHT = 'BAROYA KAYITLI · 12 AVUKAT';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.2, 0.7, 0.3, 1] as const },
});

const wordReveal = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: '0%',
    transition: { duration: 1.05, delay: 0.2 + i * 0.08, ease: [0.2, 0.7, 0.3, 1] },
  }),
};

const LINE_TOP    = ['Sessiz', 'güç.'];
const LINE_BOTTOM = ['Kararlı', 'temsil.'];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="section pt-[clamp(2rem,4vw,4rem)] pb-[clamp(4rem,9vw,8rem)]">
      <div className="shell">
        {/* Top meta rule */}
        <motion.div
          {...(reduce ? {} : fade(0))}
          className="flex justify-between items-center py-4 border-b border-rule font-mono uppercase text-ink flex-wrap gap-2"
          style={{ fontSize: '0.72rem', letterSpacing: '0.22em', fontWeight: 600 }}
        >
          <span>{META_LEFT}</span>
          <span className="hidden sm:inline">{META_MID}</span>
          <span>{META_RIGHT}</span>
        </motion.div>

        {/* Display headline — two lines, gold italic on bottom line */}
        <h1
          className="display mt-[clamp(2rem,5vw,4rem)] mb-0"
          style={{
            maxWidth: '15ch',
            // Critical: overflow visible + extra line-height so descenders (g, ç) never clip
            overflow: 'visible',
            lineHeight: 1.08,
          }}
        >
          {/* Line 1 — black */}
          <span className="block">
            {reduce ? (
              <>Sessiz güç.</>
            ) : (
              LINE_TOP.map((w, i) => (
                <span
                  key={i}
                  className="inline-block align-baseline mr-[0.22em] last:mr-0"
                  style={{
                    overflow: 'hidden',
                    paddingBottom: '0.18em',
                    paddingTop: '0.04em',
                    marginBottom: '-0.18em',
                    marginTop: '-0.04em',
                  }}
                >
                  <motion.span
                    className="inline-block"
                    variants={wordReveal}
                    initial="hidden"
                    animate="show"
                    custom={i}
                  >
                    {w}
                  </motion.span>
                </span>
              ))
            )}
          </span>

          {/* Line 2 — gold italic */}
          <span className="block">
            {reduce ? (
              <em
                style={{
                  color: '#8a6b2a',
                  fontStyle: 'italic',
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 0',
                }}
              >
                Kararlı temsil.
              </em>
            ) : (
              LINE_BOTTOM.map((w, i) => (
                <span
                  key={i}
                  className="inline-block align-baseline mr-[0.22em] last:mr-0"
                  style={{
                    overflow: 'hidden',
                    paddingBottom: '0.22em',
                    paddingTop: '0.04em',
                    marginBottom: '-0.22em',
                    marginTop: '-0.04em',
                  }}
                >
                  <motion.span
                    className="inline-block"
                    variants={wordReveal}
                    initial="hidden"
                    animate="show"
                    custom={LINE_TOP.length + i}
                    style={{
                      fontStyle: 'italic',
                      color: '#8a6b2a',
                      fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 0',
                    }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))
            )}
          </span>
        </h1>

        {/* Foot grid */}
        <motion.div
          {...(reduce ? {} : fade(0.85))}
          className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-8 md:gap-12 items-end mt-[clamp(3rem,6vw,5rem)] pt-8 border-t border-rule"
        >
          <p className="lead m-0" style={{ maxWidth: '42ch', color: '#1a1a1a' }}>
            Aslan Hukuk Bürosu, 2003'ten bu yana ticaretin, ailenin ve devletin karşısında müvekkilini koruyan kararlı bir hukuk pratiğidir.
          </p>

          <div>
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem,5vw,4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                fontWeight: 500,
              }}
            >
              22<span style={{ color: '#8a6b2a', fontStyle: 'italic' }}>.</span>
            </div>
            <div
              className="font-mono uppercase text-ink mt-3"
              style={{ fontSize: '0.7rem', letterSpacing: '0.22em', fontWeight: 600 }}
            >
              YIL PRATİK
            </div>
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

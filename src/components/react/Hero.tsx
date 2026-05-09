import { motion, useReducedMotion } from 'framer-motion';

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

const TITLES = [
  'Ankara Barosu KKTC Başkanı',
  'Çankayalı Hukukçular Derneği Başkan Vekili',
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="pt-[clamp(2.5rem,5vw,5rem)] pb-[clamp(3rem,6vw,5rem)]">
      <div className="shell">

        {/* ───── ROW 1: Headline (left) + Portrait (right), top-aligned ───── */}
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-10 lg:gap-14 items-start">

          {/* LEFT — Headline + lead + CTA, all stacked, vertical rhythm consistent */}
          <div className="flex flex-col">
            <h1
              className="display"
              style={{
                maxWidth: '14ch',
                overflow: 'visible',
                lineHeight: 1.06,
                margin: 0,
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

            {/* Standfirst */}
            <motion.p
              {...(reduce ? {} : fade(0.85))}
              className="lead"
              style={{ maxWidth: '40ch', color: '#1a1a1a', marginTop: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: 0 }}
            >
              Aslan Hukuk Bürosu, ticaretin, ailenin ve devletin karşısında müvekkilini koruyan, bireysel pratiğe verilen önemle yönetilen bir hukuk bürosudur.
            </motion.p>

            {/* CTA group */}
            <motion.div
              {...(reduce ? {} : fade(0.95))}
              className="flex gap-4 flex-wrap items-center"
              style={{ marginTop: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              <a href="/iletisim" className="ed-btn">Görüşme Talep Et</a>
              <a href="/calisma-alanlari" className="ed-link">Çalışma Alanları</a>
            </motion.div>
          </div>

          {/* RIGHT — Portrait, viewport-capped height, never overflows */}
          <motion.figure
            {...(reduce ? {} : fade(0.4))}
            className="relative m-0 lg:max-h-[78vh] flex flex-col"
          >
            <div
              className="bg-noir overflow-hidden relative w-full"
              style={{
                // Cap height to viewport — image will fit on any laptop screen
                aspectRatio: '4 / 5',
                maxHeight: 'clamp(420px, 72vh, 760px)',
              }}
            >
              <img
                src="/photos/mesut-aslan.png"
                alt="Av. Mesut Aslan — Kurucu Avukat"
                width="800"
                height="1000"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="absolute inset-0 w-full h-full transition duration-700 hover:scale-[1.02]"
                style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
              />
              {/* Bottom caption strip */}
              <figcaption className="absolute left-0 right-0 bottom-0 bg-noir text-paper px-5 py-4 flex items-end justify-between gap-4">
                <div>
                  <div
                    className="font-mono uppercase text-gold-soft mb-1"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.28em', fontWeight: 600 }}
                  >
                    KURUCU AVUKAT
                  </div>
                  <div
                    className="font-display text-paper"
                    style={{ fontSize: 'clamp(1.2rem,1.8vw,1.55rem)', letterSpacing: '-0.012em', fontWeight: 500 }}
                  >
                    Av. Mesut Aslan
                  </div>
                </div>
                <div
                  className="font-mono text-gold"
                  style={{ fontSize: '0.62rem', letterSpacing: '0.22em', fontWeight: 600 }}
                >
                  ANK · TR
                </div>
              </figcaption>
            </div>
            {/* Gold offset rule (decorative) */}
            <div className="absolute -bottom-3 -right-3 w-2/3 h-px bg-gold hidden lg:block" />
          </motion.figure>
        </div>

        {/* ───── ROW 2: Görevler & Üyelikler (full-width, separated) ───── */}
        <motion.div
          {...(reduce ? {} : fade(1.1))}
          className="mt-[clamp(3rem,6vw,5rem)] pt-7 border-t border-rule"
        >
          <div
            className="font-mono uppercase text-ink-mute mb-5 flex items-center gap-3"
            style={{ fontSize: '0.7rem', letterSpacing: '0.28em', fontWeight: 600 }}
          >
            <span className="text-gold">—</span> Görevler &amp; Üyelikler
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 list-none p-0 m-0">
            {TITLES.map((t, i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 font-display text-ink"
                style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', lineHeight: 1.35, fontWeight: 500 }}
              >
                <span
                  className="font-mono text-gold flex-shrink-0"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.18em', fontWeight: 600 }}
                >
                  0{i + 1}
                </span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

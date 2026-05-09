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
    <section className="pt-[clamp(2.5rem,5vw,5rem)] pb-[clamp(5rem,9vw,8rem)]">
      <div className="shell">

        {/* ───── ROW 1: Headline (left) + Portrait (right), stretch on desktop ───── */}
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-10 lg:gap-14 items-start lg:items-stretch">

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
                      fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
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
                          fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                        }}
                      >
                        {w}
                      </motion.span>
                    </span>
                  ))
                )}
              </span>
            </h1>

            {/* Concrete sub-headline — bireysel müvekkil için somut bilgi */}
            <motion.p
              {...(reduce ? {} : fade(0.78))}
              className="font-display text-ink-soft"
              style={{
                fontSize: 'clamp(1.15rem, 1.5vw, 1.4rem)',
                lineHeight: 1.4,
                fontWeight: 500,
                letterSpacing: '-0.01em',
                marginTop: 'clamp(1.5rem, 2.5vw, 2rem)',
                marginBottom: 0,
                maxWidth: '32ch',
              }}
            >
              Aile, ticaret, iş, ceza, gayrimenkul ve idare hukukunda <span style={{ color: '#8a6b2a' }}>Ankara</span>'da bireysel temsil.
            </motion.p>

            {/* Standfirst — niyet/manifesto seviyesi */}
            <motion.p
              {...(reduce ? {} : fade(0.88))}
              className="font-body text-ink-soft"
              style={{
                fontSize: 'clamp(1rem, 1.15vw, 1.1rem)',
                lineHeight: 1.6,
                fontWeight: 400,
                marginTop: 'clamp(1.25rem, 2vw, 1.75rem)',
                marginBottom: 0,
                maxWidth: '42ch',
              }}
            >
              Aslan Hukuk Bürosu, müvekkilini gürültüsüz ve tutarlı pratikle koruyan, bireysel ilkeyle yönetilen bir hukuk bürosudur.
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

          {/* RIGHT — Portrait, top edge slightly above headline, bottom aligned with CTA */}
          <motion.figure
            {...(reduce ? {} : fade(0.4))}
            className="relative m-0 flex flex-col group/portrait lg:-mt-3 xl:-mt-5 lg:h-full"
          >
            {/* Top gold hairline — separates portrait from sticky noir header */}
            <div className="hidden lg:block h-px bg-gold w-full mb-2" aria-hidden="true" />
            <div
              className="bg-noir overflow-hidden relative w-full hero-portrait-frame lg:flex-1"
            >
              <img
                src="/photos/mesut-aslan.png"
                alt="Av. Mesut Aslan — Kurucu Avukat"
                width="800"
                height="1000"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="absolute inset-0 w-full h-full transition-transform duration-500 ease-editorial group-hover/portrait:scale-[1.06]"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
              {/* Hover gold tint overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover/portrait:opacity-100"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(184,145,80,0.10) 0%, rgba(184,145,80,0) 40%, rgba(14,12,8,0.25) 100%)',
                  mixBlendMode: 'multiply',
                }}
              />
              {/* Top-right corner ribbon (location) */}
              <div
                className="absolute top-0 right-0 bg-gold text-noir font-mono uppercase z-20"
                style={{ fontSize: '0.62rem', letterSpacing: '0.22em', fontWeight: 700, padding: '0.5rem 0.85rem' }}
              >
                ANKARA · TÜRKİYE
              </div>

              {/* Bottom caption strip — only 2 pieces of info, F-pattern friendly */}
              <figcaption className="absolute left-0 right-0 bottom-0 bg-noir text-paper px-5 py-4 z-10">
                <div
                  className="font-mono uppercase text-gold-bright mb-1.5"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.28em', fontWeight: 600 }}
                >
                  KURUCU AVUKAT
                </div>
                <div
                  className="font-display text-paper"
                  style={{ fontSize: 'clamp(1.25rem,1.85vw,1.6rem)', letterSpacing: '-0.012em', fontWeight: 500, lineHeight: 1.1 }}
                >
                  Av. Mesut Aslan
                </div>
              </figcaption>
            </div>
            {/* Gold offset rule (decorative) — animates on hover */}
            <div className="absolute -bottom-3 -right-3 h-px bg-gold hidden lg:block transition-all duration-500 ease-editorial w-2/3 group-hover/portrait:w-[calc(100%+0.75rem)]" />
          </motion.figure>
        </div>

        {/* ───── ROW 2: Görevler & Üyelikler (full-width, separated) ───── */}
        <motion.div
          {...(reduce ? {} : fade(1.1))}
          className="mt-[clamp(4rem,8vw,7rem)] pt-7 border-t border-rule"
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

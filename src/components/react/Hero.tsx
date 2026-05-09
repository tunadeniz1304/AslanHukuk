import { motion, useReducedMotion } from 'framer-motion';

const META_LEFT  = 'ASLAN HUKUK · ANKARA';
const META_MID   = 'İHTİSAS · 6 ALAN';
const META_RIGHT = 'EST. 2025';

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

        {/* Two-column hero: headline + portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 lg:gap-16 items-end mt-[clamp(2rem,5vw,4rem)]">

          {/* LEFT — Headline */}
          <div>
            <h1
              className="display mb-0"
              style={{
                maxWidth: '12ch',
                overflow: 'visible',
                lineHeight: 1.06,
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
              className="lead mt-8 lg:mt-10"
              style={{ maxWidth: '40ch', color: '#1a1a1a' }}
            >
              Aslan Hukuk Bürosu, ticaretin, ailenin ve devletin karşısında müvekkilini koruyan, bireysel pratiğe verilen önemle yönetilen bir hukuk bürosudur.
            </motion.p>

            {/* CTA group */}
            <motion.div
              {...(reduce ? {} : fade(0.95))}
              className="mt-8 flex gap-4 flex-wrap items-center"
            >
              <a href="/iletisim" className="ed-btn">Görüşme Talep Et</a>
              <a href="/calisma-alanlari" className="ed-link">Çalışma Alanları</a>
            </motion.div>
          </div>

          {/* RIGHT — Portrait */}
          <motion.figure
            {...(reduce ? {} : fade(0.4))}
            className="relative"
          >
            <div className="aspect-[4/5] bg-noir overflow-hidden relative">
              <img
                src="/photos/mesut-aslan.png"
                alt="Av. Mesut Aslan — Kurucu Avukat"
                width="800"
                height="1000"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover transition duration-700 hover:scale-[1.02]"
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

            {/* Gold accent rule under portrait, offset like a stamp */}
            <div className="absolute -bottom-3 -right-3 w-2/3 h-px bg-gold hidden lg:block" />
          </motion.figure>
        </div>

        {/* Bottom — credibility band: Mesut'un gerçek unvanları */}
        <motion.div
          {...(reduce ? {} : fade(1.05))}
          className="mt-[clamp(3rem,6vw,5rem)] pt-7 border-t border-rule"
        >
          <div
            className="font-mono uppercase text-ink-mute mb-5"
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

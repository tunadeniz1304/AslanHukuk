import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStatus('— Mesajınız iletildi. En kısa sürede tarafınıza dönüş yapılacaktır.');
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  const fieldBase = 'w-full bg-transparent border-0 outline-0 p-0 font-body text-ink resize-none placeholder:italic placeholder:text-ink/30';
  const fieldWrap = 'flex flex-col border-b border-rule py-5 transition-colors focus-within:border-ink';
  const labelCls  = 'font-mono uppercase text-ink-mute mb-2.5';

  return (
    <form onSubmit={onSubmit} className="flex flex-col" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
        <div className={fieldWrap}>
          <label htmlFor="name" className={labelCls} style={{ fontSize: '0.66rem', letterSpacing: '0.28em' }}>Ad Soyad</label>
          <input id="name" name="name" type="text" required placeholder="Adınız Soyadınız" className={fieldBase} style={{ fontSize: '1.1rem' }} />
        </div>
        <div className={fieldWrap}>
          <label htmlFor="phone" className={labelCls} style={{ fontSize: '0.66rem', letterSpacing: '0.28em' }}>Telefon</label>
          <input id="phone" name="phone" type="tel" required placeholder="+90 5__ ___ __ __" className={fieldBase} style={{ fontSize: '1.1rem' }} />
        </div>
        <div className={fieldWrap}>
          <label htmlFor="email" className={labelCls} style={{ fontSize: '0.66rem', letterSpacing: '0.28em' }}>E-posta</label>
          <input id="email" name="email" type="email" placeholder="ornek@mail.com" className={fieldBase} style={{ fontSize: '1.1rem' }} />
        </div>
        <div className={fieldWrap}>
          <label htmlFor="topic" className={labelCls} style={{ fontSize: '0.66rem', letterSpacing: '0.28em' }}>Konu</label>
          <select id="topic" name="topic" className={fieldBase} style={{ fontSize: '1.1rem' }} defaultValue="">
            <option value="" disabled>— Seçiniz —</option>
            <option>Aile Hukuku</option>
            <option>Ticaret Hukuku</option>
            <option>İş Hukuku</option>
            <option>Ceza Hukuku</option>
            <option>Gayrimenkul</option>
            <option>İdare ve Vergi</option>
            <option>Diğer</option>
          </select>
        </div>
      </div>

      <div className={fieldWrap}>
        <label htmlFor="message" className={labelCls} style={{ fontSize: '0.66rem', letterSpacing: '0.28em' }}>Mesajınız</label>
        <textarea id="message" name="message" required rows={4} placeholder="Hukuki konuyu kısaca açıklayın…" className={fieldBase} style={{ fontSize: '1.1rem' }} />
      </div>

      <label className="flex items-start gap-3 mt-6 font-sans text-ink-mute" style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
        <input type="checkbox" required className="mt-1.5 accent-ink" />
        <span>
          Kişisel verilerimin <a href="#" className="text-ink border-b border-rule">aydınlatma metni</a> kapsamında işlenmesini kabul ediyorum.
        </span>
      </label>

      <div className="mt-8 flex items-center gap-6 flex-wrap">
        <button type="submit" disabled={submitting} className="ed-btn disabled:opacity-60">
          {submitting ? 'Gönderiliyor…' : 'Mesajı İlet'}
        </button>
        {status && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono uppercase text-gold m-0"
            style={{ fontSize: '0.78rem', letterSpacing: '0.16em' }}
          >{status}</motion.p>
        )}
      </div>
    </form>
  );
}

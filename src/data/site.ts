export const site = {
  name: 'Aslan Hukuk Bürosu',
  shortName: 'Aslan Hukuk',
  established: '2003',
  city: 'İstanbul',
  address: 'Levent Mah. Büyükdere Cad. No: 120, K:5 Şişli/İstanbul',
  phone: '+90 212 555 12 34',
  phoneAlt: '+90 532 123 45 67',
  email: 'info@aslanhukuk.com.tr',
  emailBooking: 'randevu@aslanhukuk.com.tr',
  hours: 'Pzt — Cum · 09:00 — 18:00',
};

export const nav = [
  { href: '/',                   label: 'Anasayfa' },
  { href: '/hakkimizda',         label: 'Hakkımızda' },
  { href: '/calisma-alanlari',   label: 'Çalışma Alanları' },
  { href: '/ekip',               label: 'Ekibimiz' },
  { href: '/iletisim',           label: 'İletişim' },
];

export const practices = [
  {
    no: '01',
    slug: 'aile',
    name: 'Aile Hukuku',
    desc: 'Boşanma, velayet, nafaka ve mal rejimi tasfiyesinde sessiz ve kararlı temsil.',
    items: [
      'Anlaşmalı ve çekişmeli boşanma',
      'Velayet ve nafaka davaları',
      'Mal paylaşımı ve katkı payı alacağı',
      'Aile içi şiddet ve koruma kararı',
    ],
  },
  {
    no: '02',
    slug: 'ticaret',
    name: 'Ticaret ve Şirketler Hukuku',
    desc: 'Şirket kuruluşundan birleşmelere, sözleşmelerden uyuşmazlık çözümüne kurumsal danışmanlık.',
    items: [
      'Şirket kuruluş, devir ve birleşme',
      'Ticari sözleşmeler ve müzakereler',
      'Kurumsal yönetim ve uyum danışmanlığı',
      'İcra-iflas ve alacak takibi',
    ],
  },
  {
    no: '03',
    slug: 'is',
    name: 'İş ve Sosyal Güvenlik Hukuku',
    desc: 'İşçi-işveren uyuşmazlıklarında dava ve İK departmanlarına proaktif danışmanlık.',
    items: [
      'Kıdem, ihbar tazminatı ve fazla mesai',
      'İşe iade ve mobbing davaları',
      'SGK ve iş kazası uyuşmazlıkları',
      'Toplu iş sözleşmeleri',
    ],
  },
  {
    no: '04',
    slug: 'ceza',
    name: 'Ceza Hukuku',
    desc: 'Soruşturmadan infaza, anayasal güvenceler çerçevesinde etkin müdafilik.',
    items: [
      'Şüpheli ve sanık müdafiliği',
      'Beyaz yaka ve ekonomik suçlar',
      'İstinaf, temyiz ve anayasa şikayeti',
      'İnfaz ve denetimli serbestlik',
    ],
  },
  {
    no: '05',
    slug: 'gayrimenkul',
    name: 'Gayrimenkul Hukuku',
    desc: 'Tapu, kira, kentsel dönüşüm ve imar süreçlerinde sonuç odaklı temsil.',
    items: [
      'Tapu iptal ve tescil davaları',
      'Kira tespiti ve tahliye',
      'Kentsel dönüşüm ve kamulaştırma',
      'Yatırım öncesi hukuki risk analizi',
    ],
  },
  {
    no: '06',
    slug: 'idare',
    name: 'İdare ve Vergi Hukuku',
    desc: 'İdari işlemlerin iptali, tam yargı davaları ve vergi uzlaşma süreçleri.',
    items: [
      'İptal ve tam yargı davaları',
      'Vergi cezaları ve uzlaşma',
      'Kamu ihale uyuşmazlıkları',
      'Düzenleyici işlem dava süreçleri',
    ],
  },
] as const;

export const stats = [
  { num: '22',   label: 'Yıllık Tecrübe' },
  { num: '1,500+', label: 'Sonuçlanan Dosya' },
  { num: '12',   label: 'Avukat Kadrosu' },
  { num: '%96',  label: 'Müvekkil Memnuniyeti' },
];

export const verdicts = [
  {
    year: '2025',
    area: 'Ticaret',
    lede: 'Yedi rakiplı tahkim sürecinde, çok uluslu inşaat şirketinin 14M USD alacak tahsili.',
    outcome: 'Lehe karar',
  },
  {
    year: '2024',
    area: 'İdare',
    lede: 'Düzenleyici kurum kararının iptali ile sektörel uygulamanın yeniden şekillendirilmesi.',
    outcome: 'İptal — Danıştay',
  },
  {
    year: '2024',
    area: 'İş Hukuku',
    lede: 'Yüksek profilli işe iade davasında müvekkilin tüm haklarının korunması.',
    outcome: 'Kabul + tam tazminat',
  },
];

export const partners = [
  {
    name: 'Av. Mehmet Aslan',
    role: 'Kurucu Ortak',
    title: 'İstanbul Üniversitesi Hukuk · 1998',
    bio: 'Ticaret ve şirketler hukukunda 25+ yıllık tecrübe. M&A ve uluslararası tahkim danışmanlığı.',
  },
  {
    name: 'Av. Zeynep Aslan',
    role: 'Yönetici Ortak',
    title: 'Ankara Üniversitesi Hukuk · 2005',
    bio: 'Aile ve miras hukukunda uzman. Yüksek profilli boşanma ve mal rejimi davalarında tanınan deneyim.',
  },
  {
    name: 'Av. Kemal Yıldız',
    role: 'Ortak',
    title: 'Galatasaray Üniversitesi Hukuk · 2007',
    bio: 'Ceza hukuku, beyaz yaka suçları ve istinaf süreçlerinde derinleşmiş pratik.',
  },
];

export const associates = [
  { name: 'Av. Elif Korkmaz', role: 'İş Hukuku',     title: 'İstanbul Üniversitesi · 2014' },
  { name: 'Av. Burak Şahin',   role: 'Gayrimenkul',   title: 'Bilkent Üniversitesi · 2015' },
  { name: 'Av. Selin Demir',  role: 'İdare ve Vergi', title: 'Marmara Üniversitesi · 2014' },
  { name: 'Av. Mert Özkan',   role: 'Ticaret',       title: 'Koç Üniversitesi · 2016' },
];

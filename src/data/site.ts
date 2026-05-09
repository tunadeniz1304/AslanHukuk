export const site = {
  name: 'Aslan Hukuk Bürosu',
  shortName: 'Aslan Hukuk',
  // Tek avukat — kurucu ve sahibi
  attorney: {
    name: 'Av. Mesut Aslan',
    role: 'Kurucu Avukat',
    education: 'Çankaya Üniversitesi Hukuk Fakültesi · 2022',
    barRegistration: 'Ankara Barosu',
    photo: '/photos/mesut-aslan.png',
    titles: [
      { label: 'Ankara Barosu KKTC Başkanı', short: 'KKTC BAŞKANI' },
      { label: 'Çankayalı Hukukçular Derneği Başkan Vekili', short: 'BAŞKAN VEKİLİ' },
    ],
  },
  established: '2025',
  city: 'Ankara',
  district: 'Sincan',
  address: 'Sincan · Ankara',                 // tam adres alınınca güncellenecek
  fullAddress: 'TODO_TAM_ADRES',              // sen verince doldurulacak
  phone: '+90 544 871 47 06',
  phoneAlt: '',
  whatsapp: '905448714706',
  email: '',                                   // henüz yok
  emailBooking: '',
  hours: 'Pzt — Cum · 09:00 — 18:00',
  social: {
    linkedin:  'https://www.linkedin.com/in/mesut-aslan-8757432b4/',
    instagram: 'https://www.instagram.com/avmesutaslan',
  },
};

export const nav = [
  { href: '/',                   label: 'Anasayfa' },
  { href: '/hakkimizda',         label: 'Hakkımızda' },
  { href: '/calisma-alanlari',   label: 'Çalışma Alanları' },
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
    desc: 'Şirket kuruluşundan sözleşme yönetimine, ticari uyuşmazlıklarda titiz danışmanlık.',
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
    desc: 'İşçi-işveren uyuşmazlıklarında dava ve İK ihtiyaçlarına proaktif danışmanlık.',
    items: [
      'Kıdem, ihbar tazminatı ve fazla mesai',
      'İşe iade ve mobbing davaları',
      'SGK ve iş kazası uyuşmazlıkları',
      'İş sözleşmesi inceleme ve müzakere',
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

// Yaklaşım (verdicts yerine geçer — büro yeni olduğu için 'kazanılmış davalar' yerine pratiğin yapı taşları)
export const approach = [
  {
    no: '01',
    title: 'Dinleme',
    desc: 'İlk görüşme, sizi ve dosyanızı tanımak içindir. Sürecin başından sonuna ne bekleyeceğinizi açık ve dürüst şekilde paylaşırım.',
  },
  {
    no: '02',
    title: 'Strateji',
    desc: 'Hukuki çerçeveyi netleştirir, alternatif yolları değerlendirir ve sizinle birlikte gerçekçi bir yol haritası belirleriz.',
  },
  {
    no: '03',
    title: 'Temsil',
    desc: 'Dosyanızı kendim yönetir, tüm aşamalarda sizi süreçten haberdar ederim. Müvekkil-avukat ilişkisinde aracı yoktur.',
  },
] as const;

// Pratiğin temel özellikleri (stats yerine geçer — sayı yerine kalite)
export const features = [
  {
    label: 'Bireysel Pratik',
    desc:  'Dosyanız kalabalık bir kadroya değil; doğrudan avukatınıza emanettir.',
  },
  {
    label: '6 Uzmanlık Alanı',
    desc:  'Aile, ticaret, iş, ceza, gayrimenkul ve idare hukuku.',
  },
  {
    label: 'Tam Gizlilik',
    desc:  'Müvekkil sırrı, hukukun verdiği güvencenin de ötesinde korunur.',
  },
];

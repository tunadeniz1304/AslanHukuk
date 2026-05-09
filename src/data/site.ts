export const site = {
  name: 'Aslan Hukuk Bürosu',
  shortName: 'Aslan Hukuk',
  // Tek avukat — kurucu ve sahibi
  attorney: {
    name: 'Av. Mesut Aslan',
    role: 'Kurucu Avukat',
    education: 'TODO_UNIVERSITE_ve_YIL',          // örn: 'İstanbul Üniversitesi Hukuk Fakültesi · 2003'
    barRegistration: 'TODO_BARO_ve_SICIL',        // örn: 'İstanbul Barosu · Sicil No: 12345'
    photo: '/photos/mesut-aslan.png',
  },
  established: 'TODO_KURULUS_YILI',               // örn: '2003'
  city: 'İstanbul',
  address: 'TODO_TAM_ADRES',                      // örn: 'Levent Mah. Büyükdere Cad. No: 120, K:5 Şişli/İstanbul'
  phone: 'TODO_TELEFON',                          // örn: '+90 212 555 12 34'
  phoneAlt: 'TODO_TELEFON_2_OPSIYONEL',           // boş bırakılabilir
  whatsapp: 'TODO_WHATSAPP_NUMARASI',             // örn: '905321234567' (başında + yok, boşluk yok)
  email: 'TODO_EMAIL',                            // örn: 'info@aslanhukuk.com.tr'
  emailBooking: 'TODO_RANDEVU_EMAIL_OPSIYONEL',   // boş bırakılabilir
  hours: 'Pzt — Cum · 09:00 — 18:00',
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

// Sayılar — gerçek değerler kullanıcıdan alınınca güncellenecek
// TODO: Mesut Aslan'ın yıl tecrübesi, dosya sayısı vb. doğrulanacak
export const stats = [
  { num: 'TODO_YIL',       label: 'Yıllık Tecrübe' },
  { num: 'TODO_DOSYA',     label: 'Sonuçlanan Dosya' },
  { num: '6',              label: 'Uzmanlık Alanı' },
  { num: 'Tam',            label: 'Gizlilik Esası' },
];

// Verdicts (seçilmiş sonuçlar) — placeholder, gerçek dosyalardan anonimleştirilmiş
// TODO: Mesut Aslan'dan kendi sonuçlarını alıp güncelle
export const verdicts = [
  {
    year: 'TODO_YIL',
    area: 'Ticaret',
    lede: 'TODO: Anonimleştirilmiş dava özeti — sonuç ve sürecin kısa açıklaması.',
    outcome: 'TODO_SONUC',
  },
  {
    year: 'TODO_YIL',
    area: 'İdare',
    lede: 'TODO: Anonimleştirilmiş dava özeti.',
    outcome: 'TODO_SONUC',
  },
  {
    year: 'TODO_YIL',
    area: 'İş Hukuku',
    lede: 'TODO: Anonimleştirilmiş dava özeti.',
    outcome: 'TODO_SONUC',
  },
];

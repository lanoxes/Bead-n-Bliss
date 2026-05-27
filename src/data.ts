import { Product, Testimonial, ShippingPaymentInfo } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'cincin-manik',
    name: 'Blissful Ring (Cincin Manik)',
    description: 'Cincin manik yang cantik, mungil, dan unik. Sempurna untuk menambahkan sentuhan gaya manis ke jari-jemari Anda.',
    longDescription: 'Didesain khusus secara handmade dengan ketelitian tinggi Dan Effort Pembuat, cincin manik ini memadukan kombinasi warna yang beragam dan Menarik. Ukurannya elastis dan sangat nyaman dipakai untuk aktivitas sehari-hari maupun sebagai pelengkap gaya foto aesthetic Anda.',
    price: 'Rp 2.000',
    image: 'https://www.image2url.com/r2/default/images/1779908464862-61ecc3c6-4d70-45fd-a228-0b3393e5978c.jpeg',
    images: [
      'https://www.image2url.com/r2/default/images/1779908464862-61ecc3c6-4d70-45fd-a228-0b3393e5978c.jpeg'
    ],
    tags: ['Aesthetic', 'Best Seller', 'Handmade'],
    materials: [
      'Memiliki Warna Yang Beragam',
      'Bahan Yang Halus Jadi Nyaman Untuk Dipakai',
      'Aksesoris Cincin Yang Cute Dan Stylish'
    ],
    style: 'Playful & Minimalist'
  },
  {
    id: 'gelang-manik',
    name: 'Charming Bracelet (Gelang Manik)',
    description: 'Gelang manik yang berwarna-warni, ceria, dan mengasyikkan. Cocok untuk dipakai sehari-hari atau kado manis untuk sahabat.',
    longDescription: 'Bawa keceriaan dalam hari Anda dengan gelang manik penuh warna! Menampilkan manik-manik kristal berkilauan yang memantulkan cahaya dengan indah, dapat dipasangkan dengan aksesoris tambahan seperti bentuk ekor mermaid/kerang akrilik yang unik. Gelang ini dapat membuat mu terlihat lebih stylish!',
    price: 'Rp 5.000',
    image: 'https://www.image2url.com/r2/default/images/1779908812815-69412ea1-9830-49c4-a8e7-74a5c00500cd.jpeg',
    images: [
      'https://www.image2url.com/r2/default/images/1779908812815-69412ea1-9830-49c4-a8e7-74a5c00500cd.jpeg',
      'https://www.image2url.com/r2/default/images/1779909074066-0cad3f0d-b6ba-4797-b542-a41457396053.jpeg',
      'https://www.image2url.com/r2/default/images/1779909312475-d166b1d0-e174-4a7c-a02c-4470d114cff5.jpeg'
    ],
    tags: ['Colorful', 'Customizable', 'Favorite'],
    materials: [
      'Bisa Request Tambahan Akrilik Aermaid/Kerang Yang Lucu Dan Menarik!',
      'Bisa Request Pakai Cantolan Atau Tidak',
      'Warna Yang Beragam'
    ],
    style: 'Playful, Boho & Colorful'
  },
  {
    id: 'strap-hp-manik',
    name: 'Elegant Phone Strap (Strap HP Manik)',
    description: 'Strap HP manik yang elegan, kuat, dan praktis. Biarkan handphone Anda tampil beda, estetik, sekaligus terlindungi.',
    longDescription: 'Strap gantungan HP yang tidak hanya berfungsi sebagai pengaman agar ponsel tidak mudah jatuh, namun juga sebagai aksesoris fashion yang cute dan styllish lohh!',
    price: 'Rp 10.000',
    image: 'https://www.image2url.com/r2/default/images/1779909463325-baf858f5-196c-462b-8c7d-800698161548.jpeg',
    images: [
      'https://www.image2url.com/r2/default/images/1779909463325-baf858f5-196c-462b-8c7d-800698161548.jpeg',
      'https://www.image2url.com/r2/default/images/1779909748500-c48e1e67-6fb6-48d6-a856-ad30a7574012.jpeg',
      'https://www.image2url.com/r2/default/images/1779909981126-92657604-a832-40d9-ae4e-a69251a3425a.jpeg',
      'https://www.image2url.com/r2/default/images/1779910138840-2bf8adbf-0e47-4610-b1d5-e90d7b049974.jpeg',
      'https://www.image2url.com/r2/default/images/1779910273829-4a40269f-5b5c-48f6-b462-2a3c345e1af1.jpeg'
    ],
    tags: ['Elegant', 'Useful', 'Trendy'],
    materials: [
      'Memiliki Pita Akrilik Yang Lucu',
      'Memiliki Banyak Jenis Sehingga Bikin Penasaran !',
      'Memiliki Warna Yang Beragam'
    ],
    style: 'Elegant & Modern Chic'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Temen - Temen Smp',
    handle: '@banyak',
    rating: 5,
    review: 'Ini keren si dan harganya murmer parahh!',
    productName: 'Blissful Ring',
    date: '2 hari yang lalu'
  },
  {
    id: '2',
    name: 'Rijal TKJ4',
    handle: '@54Kingsman',
    rating: 5,
    review: 'Bagus nis gelangnyaa, harga nya juga cuma goceng njir , semangat nis jualannya!',
    productName: 'Charming Bracelet',
    date: '1 minggu yang lalu'
  },
  {
    id: '3',
    name: 'Teman - Teman Smk',
    handle: '@banyakk',
    rating: 5,
    review: 'Ah ini keren banget sii , cocok banget buat yang casing hpnya terasa flat! ',
    productName: 'Elegant Phone Strap',
    date: '2 minggu yang lalu'
  }
];

export const PHILOSOPHY = {
  title: 'Filosofi Bead n Bliss',
  subtitle: 'Handcrafted with Love, Shared with Joy',
  description1: 'Di Bead n Bliss, kami percaya bahwa setiap manik-manik memiliki cerita indah tersendiri untuk diceritakan. Setiap karya yang kami buat bukanlah sekadar aksesoris biasa, melainkan simfoni dari ketelitian tangan, keindahan bahan berkualitas, dan pancaran kepribadian Anda yang unik.',
  description2: 'Komitmen utama kami adalah memberikan pengalaman berbelanja yang menyenangkan, ramah, dan memuaskan bagi setiap Blissmates.',
  values: [
    {
      title: '100% Buatan Tangan (Handcrafted)',
      desc: 'Setiap cincin, gelang, dan gantungan dirangkai manual satu-per-satu dengan penuh cinta dan kehati-hatian.',
      icon: 'Heart'
    },
    {
      title: 'Harga Yang Masuk Ke Kantong Pelajar',
      desc: 'Harga product disini mulai dari Rp.2000an aja loh , cocok buat kamu yang suka aksesoris cute dan stylish.',
      icon: 'Sparkles'
    },
    {
      title: 'Desain Kustom Unik',
      desc: 'Saya menyediakan banyak jenis product manik manik yang memiliki kombinasi warna yang cute dan stylish,kalian bisa pilih product yang sesuai dengan keinginan kalian.',
      icon: 'Palette'
    }
  ]
};

export const SHIPPING_PAYMENT: ShippingPaymentInfo = {
  shipping: {
    methods: ['Cash on Delivery (COD)', 'Ambil di Tempat (Self-Pickup)', 'Ketemuan Langsung (Meetup Wilayah Bekasi)'],
    cost: 'Bebas Biaya Pengiriman / Tanpa Ongkir (Untuk wilayah COD yang telah disepakati).',
    duration: 'Pengerjaan aksesoris custom 1-3 hari kerja sebelum diserahterimakan langsung.'
  },
  payment: {
    methods: ['Tunai / Cash saat COD', 'Bayar di Tempat saat barang diterima', 'E-Wallet Transfer Langsung saat bertemu'],
    steps: [
      'Pilih model atau custom aksesoris manik yang Anda inginkan (cincin, gelang, atau strap HP) beserta ukurannya.',
      'Klik tombol "Pesan Sekarang" untuk terhubung ke WhatsApp kami atau kirim Direct Message (DM) via Instagram.',
      'Tentukan detail desain custom, ukuran lingkar jari/pergelangan tangan, dan jadwalkan lokasi pertemuan (meetup/COD).',
      'Kami akan langsung merakit aksesoris pesanan Anda secara handmade dengan penuh cinta.',
      'Lakukan pertemuan (COD / Ambil langsung) di titik lokasi yang disepakati bersama.',
      'Selesaikan transaksi secara offline dengan pembayaran tunai (Cash) di lokasi seteleh Anda memeriksa dan menyukai hasilnya.'
    ]
  }
};

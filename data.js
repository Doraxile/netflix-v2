/**
 * NENGNETPLIX Complete Product Catalog & Authentic Testimonials Dataset
 * Sanitized assets and latest PDF pricelist & rules.
 */

const WHATSAPP_NUMBER = "6285715940601";
const STORE_NAME = "NENGNETPLIX";

const CATEGORIES = [
  { id: "all", name: "Semua", icon: "sparkles" },
  { id: "streaming", name: "Film & Series", icon: "tv" },
  { id: "ai-tools", name: "AI & Tools", icon: "bot" },
  { id: "creative", name: "Editing & Desain", icon: "palette" },
  { id: "music-edu", name: "Musik & Edukasi", icon: "music" },
  { id: "other", name: "Lainnya", icon: "grid" }
];

const PRODUCTS = [
  {
    id: "netflix",
    name: "Netflix Premium",
    category: "streaming",
    iconBg: "bg-[#FCE1E4] text-[#E50914]",
    iconType: "netflix",
    tagline: "4K UHD Ultra HD • Sharing & Private",
    badge: "Terlaris 🔥",
    lowestPrice: 6000,
    rules: [
      "Durasi 1 bulan = 25 - 30 hari terhitung sejak hari pembelian (durasi tetap berjalan meski belum login/digunakan).",
      "Akun store resmi, login biasa (email + password).",
      "Diperbolehkan pindah device dengan jeda 7 hari dari logout di device sebelumnya (tidak berlaku untuk harian).",
      "Batas layar Streaming 1P1U, 1P2U, Semi Private adalah 4 device. Jika 4 device streaming bersamaan maka limit screen.",
      "Batas layar Single Screen adalah 1 device. Jika ada device yang sedang streaming maka device lain limit screen.",
      "TIDAK BOLEH DIGUNAKAN DI APLIKASI RAVE.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "sharing-1p1u",
        name: "Sharing 1P1U (1 Profil 1 User)",
        desc: "Maksimal login 1 device. 1 profil berisi 1 orang, potensi limit screen tetap ada tetapi kecil kemungkinan.",
        options: [
          { duration: "1 Hari", price: 6000 },
          { duration: "3 Hari", price: 12000 },
          { duration: "7 Hari", price: 18000 },
          { duration: "1 Bulan", price: 45000 },
          { duration: "2 Bulan", price: 85000 },
          { duration: "3 Bulan", price: 125000 }
        ]
      },
      {
        id: "sharing-1p2u",
        name: "Sharing 1P2U (1 Profil 2 User)",
        desc: "Maksimal login 1 device. 1 profile berisi 2 orang, potensi limit screen lebih besar.",
        options: [
          { duration: "1 Bulan", price: 30000 },
          { duration: "2 Bulan", price: 55000 },
          { duration: "3 Bulan", price: 85000 }
        ]
      },
      {
        id: "semi-private",
        name: "Semi Private",
        desc: "Maks login 2 device. 2U = 1 profile (tidak bisa nonton barengan), 1U = 2 profile (bisa nonton barengan di 2 device).",
        options: [
          { duration: "1 Bulan (2 User)", price: 55000 },
          { duration: "1 Bulan (1 User - 2 Profile)", price: 90000 }
        ]
      },
      {
        id: "single-screen",
        name: "Single Screen (1 Akun 1 Profil)",
        desc: "Maksimal login 2 device, limit screen 1 device.",
        options: [
          { duration: "1 Bulan", price: 60000 }
        ]
      },
      {
        id: "private",
        name: "Private Full Account (5 Profile)",
        desc: "Maksimal login 5 device. Mendapatkan 1 akun pribadi berisi 5 profile.",
        options: [
          { duration: "1 Bulan", price: 200000 }
        ]
      }
    ]
  },
  {
    id: "disney",
    name: "Disney+ Hotstar",
    category: "streaming",
    iconBg: "bg-[#E8DFF5] text-[#0063e5]",
    iconType: "disney",
    tagline: "Marvel, Pixar, Disney & Star • Full HD / 4K UHD",
    badge: "Popular ⭐",
    lowestPrice: 4000,
    rules: [
      "Menggunakan akun store (nomor + OTP).",
      "Bisa login di iOS / Android / TV / Laptop / PC (selama device support).",
      "Durasi 1 bulan adalah 25 - 30 hari terhitung sejak hari pembelian dan durasi tetap berjalan meski belum login.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "basic-3u",
        name: "Sharing Basic Plan 3U",
        desc: "Resolusi Full HD 1080p, nonton hemat.",
        options: [
          { duration: "1 Hari", price: 4000 },
          { duration: "3 Hari", price: 9000 },
          { duration: "7 Hari", price: 16000 },
          { duration: "1 Bulan", price: 35000 }
        ]
      },
      {
        id: "basic-2u",
        name: "Sharing Basic Plan 2U",
        desc: "Kualitas video Full HD 1080p, audio Dolby 5.1/Atmos/Vision. Login maks 1 dev (limit screen 1 dev).",
        options: [
          { duration: "1 Bulan", price: 45000 }
        ]
      },
      {
        id: "premium-6u",
        name: "Sharing Premium Plan 6U",
        desc: "Support 4K Ultra HD 2160p, Dolby Atmos.",
        options: [
          { duration: "1 Hari", price: 5000 },
          { duration: "3 Hari", price: 12000 },
          { duration: "7 Hari", price: 20000 },
          { duration: "1 Bulan", price: 35000 }
        ]
      },
      {
        id: "premium-3u",
        name: "Sharing Premium Plan 3U",
        desc: "Kualitas 4K Ultra HD 2160p, Dolby 5.1/Atmos/Vision. Login maks 1 dev (limit screen 3 dev).",
        options: [
          { duration: "1 Hari", price: 10000 },
          { duration: "3 Hari", price: 15000 },
          { duration: "7 Hari", price: 25000 },
          { duration: "1 Bulan", price: 60000 }
        ]
      },
      {
        id: "private-basic",
        name: "Private Basic Plan",
        desc: "Akun pribadi sendiri, login maksimal 10 device.",
        options: [
          { duration: "1 Bulan", price: 90000 }
        ]
      },
      {
        id: "private-premium",
        name: "Private Premium Plan",
        desc: "Akun 4K UHD pribadi sendiri, login maksimal 10 device.",
        options: [
          { duration: "1 Bulan", price: 160000 }
        ]
      }
    ]
  },
  {
    id: "prime-video",
    name: "Amazon Prime Video",
    category: "streaming",
    iconBg: "bg-[#DDEDEA] text-[#00A8E1]",
    iconType: "prime",
    tagline: "Seri & Film Eksklusif • Multi-Device",
    badge: "Hemat 💰",
    lowestPrice: 4000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Ada iklan tidak bisa di-skip.",
      "Ada beberapa film yang tidak termasuk membership, harus rent/sewa per film (ketentuan Prime Video).",
      "Bisa login di iOS/Android/TV/Laptop/PC (selama device support).",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "prime-sharing-4u5u",
        name: "Sharing 4U - 5U",
        desc: "Paket sharing ekonomis.",
        options: [
          { duration: "1 Hari", price: 4000 },
          { duration: "3 Hari", price: 8000 },
          { duration: "7 Hari", price: 12000 },
          { duration: "1 Bulan", price: 15000 }
        ]
      },
      {
        id: "prime-sharing-3u",
        name: "Sharing 3U",
        desc: "Sharing slot 3 user.",
        options: [
          { duration: "1 Bulan", price: 20000 }
        ]
      },
      {
        id: "prime-sharing-2u",
        name: "Sharing 2U",
        desc: "Sharing 2 user, login maksimal 1 device (limit screen 3 device).",
        options: [
          { duration: "1 Bulan", price: 25000 }
        ]
      },
      {
        id: "prime-private",
        name: "Private Account",
        desc: "Akun private, login maksimal 3 device.",
        options: [
          { duration: "1 Bulan", price: 35000 }
        ]
      }
    ]
  },
  {
    id: "hbo-max",
    name: "HBO Max",
    category: "streaming",
    iconBg: "bg-[#E8DFF5] text-[#6000FF]",
    iconType: "hbo",
    tagline: "Warner Bros, DC & HBO Originals",
    badge: "Cinema Quality 🍿",
    lowestPrice: 5000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Bisa login di iOS / Android / Laptop / PC.",
      "Login TV wajib beli 2 slot = 2x harga.",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "hbo-sharing-std",
        name: "Sharing Standart (5U)",
        desc: "With ads, Full HD, 30 downloads. Login maks 1 dev (limit screen 2 device).",
        options: [
          { duration: "1 Hari", price: 5000 },
          { duration: "3 Hari", price: 8000 },
          { duration: "7 Hari", price: 15000 },
          { duration: "1 Bulan", price: 25000 }
        ]
      },
      {
        id: "hbo-sharing-8u",
        name: "Sharing Ultimate / Premium 8U",
        desc: "Kualitas Premium 8 User.",
        options: [
          { duration: "1 Hari", price: 7000 },
          { duration: "3 Hari", price: 12000 },
          { duration: "7 Hari", price: 20000 },
          { duration: "1 Bulan", price: 35000 }
        ]
      },
      {
        id: "hbo-sharing-anlim",
        name: "Sharing Ultimate / Premium Anlim",
        desc: "With ads, Up to 4K UHD, 100 downloads. Login maks 1 dev (limit screen 4 device).",
        options: [
          { duration: "1 Hari", price: 8000 },
          { duration: "3 Hari", price: 18000 },
          { duration: "7 Hari", price: 25000 },
          { duration: "1 Bulan", price: 45000 }
        ]
      },
      {
        id: "hbo-private-std",
        name: "Private Standar",
        desc: "Login maksimal 3 device.",
        options: [
          { duration: "1 Bulan", price: 75000 }
        ]
      },
      {
        id: "hbo-private-ult",
        name: "Private Ultimate / Premium",
        desc: "Kualitas 4K UHD tertinggi, login maksimal 3 device.",
        options: [
          { duration: "1 Bulan", price: 125000 }
        ]
      }
    ]
  },
  {
    id: "youtube",
    name: "YouTube Premium",
    category: "music-edu",
    iconBg: "bg-[#FCE1E4] text-[#FF0000]",
    iconType: "youtube",
    tagline: "No Ads + Background Play + YT Music",
    badge: "Must Have 🎧",
    lowestPrice: 12000,
    rules: [
      "Menggunakan akun sendiri / akun store dengan fee 3K (email + password).",
      "Sudah termasuk YouTube Music dan belum termasuk membership channel.",
      "Bisa login di iOS/Android/Laptop/PC (selama device support).",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "yt-famplan",
        name: "Famplan (Invite Email Sendiri)",
        desc: "Sistem invite email tanpa password. Sistem renewal untuk pembelian 2 bulan. Email sama maks 2x dalam 1 tahun.",
        options: [
          { duration: "1 Bulan", price: 12000 },
          { duration: "2 Bulan", price: 20000 }
        ]
      },
      {
        id: "yt-indplan",
        name: "Indplan (Akun Fresh Store)",
        desc: "Akun fresh belum pernah premium sama sekali. Sistem no renewal untuk 3 bulan. Setelah login WAJIB ubah password, nomer HP & recovery email (tidak ada garansi jika lupa password baru).",
        options: [
          { duration: "1 Bulan", price: 20000 },
          { duration: "3 Bulan", price: 60000 }
        ]
      }
    ]
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    category: "music-edu",
    iconBg: "bg-[#DDEDEA] text-[#1DB954]",
    iconType: "spotify",
    tagline: "Musik Tanpa Iklan, Download Offline & High Quality",
    badge: "Music Top 🎵",
    lowestPrice: 15000,
    rules: [
      "Mendengarkan jutaan lagu tanpa jeda iklan.",
      "Download lagu untuk didengarkan offline.",
      "Bisa dipakai di semua device (HP, Tablet, Laptop, Web).",
      "Garansi aktif selama masa langganan."
    ],
    packages: [
      {
        id: "spotify-famplan",
        name: "Famplan (Invite Akun Sendiri)",
        desc: "Invite Family ke akun Spotify milikmu sendiri. Playlist & followers tetap aman.",
        options: [
          { duration: "1 Bulan", price: 15000 },
          { duration: "3 Bulan", price: 35000 }
        ]
      },
      {
        id: "spotify-indplan",
        name: "Individual Plan",
        desc: "Akun Individual fresh.",
        options: [
          { duration: "1 Bulan", price: 25000 }
        ]
      }
    ]
  },
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus (GPT-4o)",
    category: "ai-tools",
    iconBg: "bg-[#DDEDEA] text-[#10A37F]",
    iconType: "openai",
    tagline: "Akses GPT-4o, DALL-E 3 & Custom GPTs",
    badge: "Top AI 🤖",
    lowestPrice: 10000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "Bisa login di iOS / Android / Laptop / PC.",
      "Membeli akun sharing = batas penggunaan limit dibagi bersama pengguna lain sehingga dapat lebih cepat habis.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "gpt-plus-8u",
        name: "Sharing 8U",
        desc: "Maksimal login 1 device. Kuota dibagi 8 user.",
        options: [
          { duration: "1 Hari", price: 10000 },
          { duration: "3 Hari", price: 15000 },
          { duration: "7 Hari", price: 20000 },
          { duration: "1 Bulan", price: 40000 },
          { duration: "3 Bulan", price: 85000 }
        ]
      },
      {
        id: "gpt-plus-5u",
        name: "Sharing 5U",
        desc: "Maksimal login 1 device. Kuota dibagi 5 user.",
        options: [
          { duration: "1 Hari", price: 15000 },
          { duration: "3 Hari", price: 20000 },
          { duration: "7 Hari", price: 30000 },
          { duration: "1 Bulan", price: 55000 }
        ]
      },
      {
        id: "gpt-plus-3u",
        name: "Sharing 3U",
        desc: "Maksimal login 1 device. Kuota lega hanya 3 user.",
        options: [
          { duration: "1 Hari", price: 18000 },
          { duration: "3 Hari", price: 25000 },
          { duration: "7 Hari", price: 35000 },
          { duration: "1 Bulan", price: 65000 }
        ]
      },
      {
        id: "gpt-plus-private",
        name: "Private Account",
        desc: "Maksimal login 5 device. Limit kuota eksklusif milik kamu sendiri.",
        options: [
          { duration: "1 Bulan", price: 170000 }
        ]
      }
    ]
  },
  {
    id: "chatgpt-go",
    name: "ChatGPT Go",
    category: "ai-tools",
    iconBg: "bg-[#FCF4DD] text-[#10A37F]",
    iconType: "openai",
    tagline: "Paket Praktis & Hemat ChatGPT",
    badge: "Hemat AI 💡",
    lowestPrice: 6000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "Bisa login di iOS/Android/Laptop/PC.",
      "Sharing = limit dipakai bersama; Private = limit khusus kamu sendiri (maks 5 device).",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "gpt-go-sharing",
        name: "Sharing (Maks 1 Dev)",
        desc: "Maks login 1 device.",
        options: [
          { duration: "1 Hari", price: 6000 },
          { duration: "3 Hari", price: 10000 },
          { duration: "7 Hari", price: 15000 },
          { duration: "1 Bulan", price: 35000 },
          { duration: "3 Bulan", price: 80000 }
        ]
      },
      {
        id: "gpt-go-private",
        name: "Private (Maks 5 Dev)",
        desc: "Batas penggunaan khusus milik kamu sendiri.",
        options: [
          { duration: "1 Bulan", price: 65000 }
        ]
      }
    ]
  },
  {
    id: "claude-pro",
    name: "Claude Pro (Anthropic)",
    category: "ai-tools",
    iconBg: "bg-[#FCE1E4] text-[#D97706]",
    iconType: "claude",
    tagline: "Claude 3.5 Sonnet & Opus • Coding & Writing",
    badge: "Top Model ⚡",
    lowestPrice: 60000,
    rules: [
      "Menggunakan akun store (email + OTP).",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "Bisa login di iOS/Android/Laptop/PC (selama device support).",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "claude-sharing-5u",
        name: "Sharing 5U",
        desc: "Sharing slot 5 pengguna, login maksimal 1 device.",
        options: [
          { duration: "7 Hari", price: 60000 },
          { duration: "1 Bulan", price: 150000 }
        ]
      },
      {
        id: "claude-sharing-3u",
        name: "Sharing 3U",
        desc: "Sharing slot 3 pengguna (lebih leluasa).",
        options: [
          { duration: "7 Hari", price: 65000 },
          { duration: "1 Bulan", price: 170000 }
        ]
      },
      {
        id: "claude-private",
        name: "Private Account",
        desc: "Akun private login maksimal 3 device.",
        options: [
          { duration: "7 Hari", price: 140000 },
          { duration: "1 Bulan", price: 400000 }
        ]
      }
    ]
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    category: "creative",
    iconBg: "bg-[#E8DFF5] text-[#00C4CC]",
    iconType: "canva",
    tagline: "Semua Template & Elemen Premium Pro",
    badge: "Desain Mudah 🎨",
    lowestPrice: 3000,
    rules: [
      "Menggunakan akun cust/store (invite team via email).",
      "Plan Member: Mendapatkan semua akses fitur Canva Pro, tetapi tdk bisa mengunggah font, color palette, logo dan brand kit lainnya.",
      "Plan Designer: Mendapatkan semua akses fitur Canva Pro + BISA mengunggah font, color palette, logo dan brand kit lainnya.",
      "Durasi di atas 1 bulan menggunakan sistem renewal / pindah tim setiap bulan (tidak bisa diperpanjang di tim yang sama).",
      "Bisa login di iOS/Android/Laptop/PC.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA / RE-INVITE MAX 3X24 JAM."
    ],
    packages: [
      {
        id: "canva-member",
        name: "Member Plan",
        desc: "Semua fitur pro, remove background, jutaan template tanpa custom brand kit upload.",
        options: [
          { duration: "1 Hari", price: 3000 },
          { duration: "3 Hari", price: 5000 },
          { duration: "7 Hari", price: 7000 },
          { duration: "1 Bulan", price: 12000 },
          { duration: "2 Bulan", price: 14000 },
          { duration: "3 Bulan", price: 17000 },
          { duration: "4 Bulan", price: 20000 },
          { duration: "5 Bulan", price: 24000 },
          { duration: "6 Bulan", price: 27000 }
        ]
      },
      {
        id: "canva-designer",
        name: "Designer Plan (Bisa Upload Brand Kit & Font)",
        desc: "Full Canva Pro + Bebas unggah font custom, logo, dan palet warna (+1K harian, +2K bulanan).",
        options: [
          { duration: "1 Hari", price: 4000 },
          { duration: "3 Hari", price: 6000 },
          { duration: "7 Hari", price: 8000 },
          { duration: "1 Bulan", price: 14000 },
          { duration: "2 Bulan", price: 16000 },
          { duration: "3 Bulan", price: 19000 },
          { duration: "4 Bulan", price: 22000 },
          { duration: "5 Bulan", price: 26000 },
          { duration: "6 Bulan", price: 29000 }
        ]
      }
    ]
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro",
    category: "creative",
    iconBg: "bg-[#DDEDEA] text-[#000000]",
    iconType: "capcut",
    tagline: "Filter Pro, Auto Caption & Transisi Halus",
    badge: "Video Viral 🎬",
    lowestPrice: 8000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Pengeditan tetap bisa dilakukan di akun pro walaupun sebelumnya sudah mengedit menggunakan akun free selagi project masih dalam bentuk draft (belum save/upload).",
      "Project tersimpan di masing-masing device bukan akun, tidak akan hilang asalkan tidak clear data/reinstall.",
      "Bisa login di Android / Laptop / PC.",
      "IOS WAJIB TAKE PRIVATE (dikarenakan sering limit login dan pengaturan iOS lebih kompleks).",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "capcut-sharing-3u",
        name: "Sharing 3U (Android Only, Maks 1 Dev)",
        desc: "Khusus Android smartphone, login maks 1 device.",
        options: [
          { duration: "1 Hari", price: 8000 },
          { duration: "3 Hari", price: 12000 },
          { duration: "7 Hari", price: 17000 },
          { duration: "1 Bulan", price: 35000 }
        ]
      },
      {
        id: "capcut-sharing-2u",
        name: "Sharing 2U (No PC/Laptop, Maks 1 Dev)",
        desc: "Khusus Android smartphone, tidak diperbolehkan login di PC/laptop.",
        options: [
          { duration: "1 Hari", price: 9000 },
          { duration: "3 Hari", price: 15000 },
          { duration: "7 Hari", price: 20000 },
          { duration: "1 Bulan", price: 45000 }
        ]
      },
      {
        id: "capcut-private",
        name: "Private (Bisa iOS, Android & PC/Laptop)",
        desc: "Diperbolehkan login di PC/laptop & iOS. Login maksimal 2 device.",
        options: [
          { duration: "1 Hari", price: 10000 },
          { duration: "3 Hari", price: 18000 },
          { duration: "7 Hari", price: 25000 },
          { duration: "1 Bulan", price: 75000 }
        ]
      }
    ]
  },
  {
    id: "vidio",
    name: "Vidio Platinum",
    category: "streaming",
    iconBg: "bg-[#FCE1E4] text-[#E50914]",
    iconType: "vidio",
    tagline: "BRI Liga 1, UCL & Drakor • Bebas Iklan",
    badge: "Sports & Series ⚽",
    lowestPrice: 12000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Nonton bebas iklan dan belum termasuk paket express.",
      "Vidio original series, serial korea, film hollywood dan lokal, TV internasional.",
      "Tambahan Platinum menyediakan tayangan UCL, UEL, NBA, BRI Liga 1, Liga 2, Bein 1&3, WTA, IBL dll.",
      "Bisa login di iOS/Android/TV/Laptop/PC.",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "vidio-sharing-2u",
        name: "Sharing 2U (All Devices)",
        desc: "Login maksimal 1 device (limit screen 1 device).",
        options: [
          { duration: "1 Bulan", price: 35000 }
        ]
      },
      {
        id: "vidio-private",
        name: "Private (All Devices)",
        desc: "Akun private full akses, bisa semua device.",
        options: [
          { duration: "1 Hari", price: 12000 },
          { duration: "3 Hari", price: 18000 },
          { duration: "7 Hari", price: 25000 },
          { duration: "1 Bulan", price: 55000 }
        ]
      }
    ]
  },
  {
    id: "viu",
    name: "Viu Premium",
    category: "streaming",
    iconBg: "bg-[#FCF4DD] text-[#FFB800]",
    iconType: "viu",
    tagline: "Drakor, Drama Asia & Viu Originals 1080p",
    badge: "Surga Drakor 🌸",
    lowestPrice: 2000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Belum termasuk paket Viu Premium Plus.",
      "Durasi 1-6 Bulan Full garansi, Durasi 12 Bulan Garansi 10 Bulan.",
      "Bisa login di iOS/Android/TV/Laptop/PC.",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "viu-private-biasa",
        name: "Private Biasa",
        desc: "Harian maks 1 dev; Bulanan maks login 3 dev (bisa mengalami limit screen bug viu).",
        options: [
          { duration: "1 Hari", price: 2000 },
          { duration: "3 Hari", price: 4000 },
          { duration: "7 Hari", price: 8000 },
          { duration: "1 Bulan", price: 10000 },
          { duration: "2 Bulan", price: 15000 },
          { duration: "3 Bulan", price: 20000 },
          { duration: "6 Bulan", price: 30000 }
        ]
      },
      {
        id: "viu-private-anlim",
        name: "Private Anlim (Maks 2 Dev)",
        desc: "Maksimal login di 2 device, bebas bug limit screen.",
        options: [
          { duration: "1 Bulan", price: 15000 },
          { duration: "2 Bulan", price: 20000 },
          { duration: "3 Bulan", price: 25000 },
          { duration: "6 Bulan", price: 40000 }
        ]
      }
    ]
  },
  {
    id: "wetv",
    name: "WeTV VIP",
    category: "streaming",
    iconBg: "bg-[#DDEDEA] text-[#0089FF]",
    iconType: "wetv",
    tagline: "Drama China & Serial Romantis Populer",
    badge: "Drachin Populer 💫",
    lowestPrice: 5000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Belum termasuk paket Fast Track.",
      "Bisa login di iOS/Android/TV/Laptop/PC.",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "wetv-sharing-6u",
        name: "Sharing 6U",
        desc: "Login maksimal 1 device (limit screen 3 device).",
        options: [
          { duration: "1 Hari", price: 5000 },
          { duration: "3 Hari", price: 7000 },
          { duration: "7 Hari", price: 10000 },
          { duration: "1 Bulan", price: 25000 }
        ]
      },
      {
        id: "wetv-private",
        name: "Private (Maks 3 Dev)",
        desc: "Akun private, login maksimal di 3 device.",
        options: [
          { duration: "1 Bulan", price: 40000 }
        ]
      }
    ]
  },
  {
    id: "iqiyi",
    name: "iQIYI VIP",
    category: "streaming",
    iconBg: "bg-[#DDEDEA] text-[#00C06D]",
    iconType: "iqiyi",
    tagline: "Drama Asia, Anime & Variety Show HD",
    badge: "Asia Entertainment 🎋",
    lowestPrice: 4000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Seluruh tayangan VIP dapat diakses sesuai ketersediaan wilayah.",
      "Bisa login di iOS / Android / TV / Laptop / PC.",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "iqiyi-sharing-std",
        name: "Sharing Standar 5U",
        desc: "Ada iklan tapi bisa diskip, 1080p, download. Login maks 1 dev (limit screen 2 dev).",
        options: [
          { duration: "1 Hari", price: 4000 },
          { duration: "3 Hari", price: 8000 },
          { duration: "7 Hari", price: 10000 },
          { duration: "1 Bulan", price: 15000 },
          { duration: "3 Bulan", price: 30000 },
          { duration: "1 Tahun", price: 40000 }
        ]
      },
      {
        id: "iqiyi-sharing-prem",
        name: "Sharing Premium",
        desc: "Bebas iklan, 1080p + 4K, download. Login maks 1 dev (limit screen 4 dev).",
        options: [
          { duration: "1 Hari", price: 5000 },
          { duration: "3 Hari", price: 10000 },
          { duration: "7 Hari", price: 15000 },
          { duration: "1 Bulan", price: 25000 },
          { duration: "3 Bulan", price: 40000 },
          { duration: "1 Tahun", price: 55000 }
        ]
      },
      {
        id: "iqiyi-private",
        name: "Private Account",
        desc: "Akun pribadi milik sendiri.",
        options: [
          { duration: "1 Bulan (Standar)", price: 40000 },
          { duration: "1 Bulan (Premium)", price: 45000 }
        ]
      }
    ]
  },
  {
    id: "apple-music",
    name: "Apple Music",
    category: "music-edu",
    iconBg: "bg-[#FCE1E4] text-[#FA243C]",
    iconType: "apple-music",
    tagline: "Lossless Audio & Spatial Dolby Atmos",
    badge: "High Fidelity 🎵",
    lowestPrice: 23000,
    rules: [
      "Famplan: Sistem invite Family Sharing ke Apple ID pribadi kamu.",
      "Individual: Akun individual siap pakai (30K).",
      "Kualitas audio Lossless dan Spatial Audio Dolby Atmos tanpa jeda iklan."
    ],
    packages: [
      {
        id: "apple-famplan",
        name: "Famplan (Invite Apple ID)",
        desc: "Di-invite langsung ke Apple ID sendiri, playlist tetap aman.",
        options: [
          { duration: "1 Bulan", price: 23000 },
          { duration: "2 Bulan", price: 30000 },
          { duration: "3 Bulan", price: 38000 },
          { duration: "4 Bulan", price: 43000 }
        ]
      },
      {
        id: "apple-individual",
        name: "Individual Plan",
        desc: "Akun Individual fresh.",
        options: [
          { duration: "1 Bulan", price: 30000 }
        ]
      }
    ]
  },
  {
    id: "duolingo",
    name: "Duolingo Super",
    category: "music-edu",
    iconBg: "bg-[#DDEDEA] text-[#58CC02]",
    iconType: "duolingo",
    tagline: "Unlimited Hearts & Bebas Iklan",
    badge: "Belajar Bahasa 🦉",
    lowestPrice: 7000,
    rules: [
      "Menggunakan akun cust (join via link).",
      "Plan Family Super: Materi pelajaran, Unlimited hearts, Latihan keahlian, Tantangan gratis, Bebas iklan.",
      "Setiap akun Duolingo memiliki LIMIT JOIN ke family group. Jika akun Duolingo mengalami limit join maka harus menggunakan akun Duolingo lain.",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "Bisa login di iOS/Android/Laptop/PC.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "duo-famplan",
        name: "Famplan / Invite Link",
        desc: "Langsung masuk ke akun Duolingo milikmu sendiri lewat link invite.",
        options: [
          { duration: "1 Hari", price: 7000 },
          { duration: "3 Hari", price: 10000 },
          { duration: "7 Hari", price: 15000 },
          { duration: "1 Bulan", price: 20000 },
          { duration: "3 Bulan", price: 40000 },
          { duration: "6 Bulan", price: 70000 }
        ]
      },
      {
        id: "duo-individual",
        name: "Individual Plan",
        desc: "Paket personal mandiri.",
        options: [
          { duration: "14 Hari", price: 18000 },
          { duration: "1 Bulan", price: 30000 },
          { duration: "3 Bulan", price: 45000 },
          { duration: "6 Bulan", price: 60000 }
        ]
      }
    ]
  },
  {
    id: "bstation",
    name: "Bstation (Bilibili)",
    category: "streaming",
    iconBg: "bg-[#E8DFF5] text-[#00AEEC]",
    iconType: "bstation",
    tagline: "Streaming Anime Terlengkap & Resmi HD",
    badge: "Anime Lovers 🍙",
    lowestPrice: 5000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "Bisa login di iOS/Android/Laptop/PC.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "bstation-sharing",
        name: "Sharing Plan",
        desc: "Login maksimal 1 device (limit screen 1 device).",
        options: [
          { duration: "1 Hari", price: 5000 },
          { duration: "3 Hari", price: 8000 },
          { duration: "7 Hari", price: 11000 },
          { duration: "1 Bulan", price: 15000 },
          { duration: "3 Bulan", price: 25000 }
        ]
      },
      {
        id: "bstation-private",
        name: "Private Plan",
        desc: "Akun private untuk kenyamanan penuh.",
        options: [
          { duration: "1 Bulan", price: 40000 }
        ]
      }
    ]
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll Mega Fan",
    category: "streaming",
    iconBg: "bg-[#FCF4DD] text-[#F47521]",
    iconType: "crunchyroll",
    tagline: "Simulcast Anime Jepang Bebas Iklan",
    badge: "Simulcast ⚡",
    lowestPrice: 12000,
    rules: [
      "Akses anime simulcast rilis 1 jam setelah tayang di Jepang.",
      "Bebas iklan, download offline.",
      "Garansi aktif selama durasi."
    ],
    packages: [
      {
        id: "crunchy-sharing",
        name: "Sharing Plan",
        desc: "Sharing slot anime.",
        options: [
          { duration: "7 Hari", price: 12000 },
          { duration: "14 Hari", price: 16000 },
          { duration: "1 Bulan", price: 20000 },
          { duration: "1 Tahun", price: 35000 }
        ]
      },
      {
        id: "crunchy-private",
        name: "Private Plan",
        desc: "Akun private bebas nonton.",
        options: [
          { duration: "7 Hari", price: 18000 },
          { duration: "14 Hari", price: 24000 }
        ]
      }
    ]
  },
  {
    id: "dramabox",
    name: "DramaBox VIP",
    category: "streaming",
    iconBg: "bg-[#FCE1E4] text-[#FF2E93]",
    iconType: "dramabox",
    tagline: "Short Drama & Mini Series Viral",
    badge: "Trending 📱",
    lowestPrice: 15000,
    rules: [
      "Unlock seluruh episode drama pendek viral tanpa koin.",
      "Kualitas video full HD.",
      "Garansi aktif selama paket berjalan."
    ],
    packages: [
      {
        id: "dramabox-sharing",
        name: "Sharing Plan",
        desc: "Buka semua episode locked.",
        options: [
          { duration: "7 Hari", price: 15000 },
          { duration: "1 Bulan", price: 25000 },
          { duration: "3 Bulan", price: 60000 }
        ]
      }
    ]
  },
  {
    id: "alight-motion",
    name: "Alight Motion Pro",
    category: "creative",
    iconBg: "bg-[#DDEDEA] text-[#00D166]",
    iconType: "alight",
    tagline: "Motion Graphics, VFX & Preset XML",
    badge: "Motion VFX ✨",
    lowestPrice: 15000,
    rules: [
      "Menggunakan akun store (email + password).",
      "Bisa login di iOS & Android (selama device support).",
      "Durasi 1 bulan adalah 25 - 30 hari.",
      "Garansi 6 bulan dari tanggal pembelian.",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "alight-sharing",
        name: "Sharing Plan",
        desc: "Hemat untuk editing preset dan animasi.",
        options: [
          { duration: "1 Bulan", price: 15000 },
          { duration: "1 Tahun", price: 30000 }
        ]
      },
      {
        id: "alight-private",
        name: "Private Plan",
        desc: "Akun private leluasa.",
        options: [
          { duration: "1 Bulan", price: 35000 },
          { duration: "1 Tahun", price: 50000 }
        ]
      }
    ]
  },
  {
    id: "ilovepdf",
    name: "iLovePDF Premium",
    category: "ai-tools",
    iconBg: "bg-[#FCE1E4] text-[#E5322D]",
    iconType: "ilovepdf",
    tagline: "Edit, Compress & OCR PDF Unlimited",
    badge: "Office Essential 📄",
    lowestPrice: 15000,
    rules: [
      "Unlimited file processing tanpa antrian.",
      "Akses OCR (Convert scan ke text/Word/Excel) berakurasi tinggi.",
      "Garansi toko penuh."
    ],
    packages: [
      {
        id: "ilovepdf-sharing",
        name: "Sharing Plan",
        desc: "Akses fitur premium lengkap.",
        options: [
          { duration: "1 Bulan", price: 15000 },
          { duration: "1 Tahun", price: 35000 }
        ]
      },
      {
        id: "ilovepdf-private",
        name: "Private Plan",
        desc: "Akun private untuk dokumen penting kantor/kuliah.",
        options: [
          { duration: "1 Bulan", price: 35000 }
        ]
      }
    ]
  },
  {
    id: "dazz-cam",
    name: "Dazz Cam Pro (iOS)",
    category: "creative",
    iconBg: "bg-[#FCF4DD] text-[#333333]",
    iconType: "dazz",
    tagline: "Vintage Retro Camera Filters (iOS)",
    badge: "iOS Exclusive 📸",
    lowestPrice: 30000,
    rules: [
      "Khusus pengguna iPhone / iPad (iOS).",
      "Unlock semua lensa vintage, film 35mm, prisma, dan efek retro.",
      "Lifetime status dengan opsi masa garansi 6 bulan atau 1 tahun."
    ],
    packages: [
      {
        id: "dazz-lifetime",
        name: "Lifetime Plan",
        desc: "Unlock semua kamera selamanya di device kamu.",
        options: [
          { duration: "Lifetime (Garansi 6 Bulan)", price: 30000 },
          { duration: "Lifetime (Garansi 1 Tahun)", price: 45000 }
        ]
      }
    ]
  },
  {
    id: "getcontact",
    name: "GetContact Premium",
    category: "ai-tools",
    iconBg: "bg-[#E8DFF5] text-[#2575FC]",
    iconType: "getcontact",
    tagline: "Cek Tag Nomor & Anti Spam Call",
    badge: "Cek Nomor 🔍",
    lowestPrice: 15000,
    rules: [
      "Menggunakan akun cust (email + OTP).",
      "Bisa login di iOS/Android/Laptop/PC (selama device support).",
      "GARANSI JIKA BACKFREE/DISABLE SAJA."
    ],
    packages: [
      {
        id: "getcontact-plan",
        name: "Premium Subscription",
        desc: "Akses premium GetContact 1 bulan.",
        options: [
          { duration: "1 Bulan", price: 15000 }
        ]
      }
    ]
  },
  {
    id: "coin-line",
    name: "Coin LINE Official",
    category: "other",
    iconBg: "bg-[#DDEDEA] text-[#00B900]",
    iconType: "line",
    tagline: "Topup Coin Resmi Stiker & Tema LINE",
    badge: "Sticker & Theme 🐻",
    lowestPrice: 2000,
    rules: [
      "Coin LINE legal dan resmi.",
      "Digunakan untuk membeli stiker, tema, dan emotikon di LINE Store.",
      "Proses cepat via transfer / gift."
    ],
    packages: [
      {
        id: "line-coins",
        name: "Paket Coin LINE",
        desc: "Pilih nominal koin yang kamu inginkan.",
        options: [
          { duration: "10 Coins", price: 2000 },
          { duration: "30 Coins", price: 6000 },
          { duration: "50 Coins", price: 10000 },
          { duration: "100 Coins", price: 20000 },
          { duration: "150 Coins", price: 30000 },
          { duration: "250 Coins", price: 50000 },
          { duration: "500 Coins", price: 100000 },
          { duration: "1000 Coins", price: 200000 }
        ]
      }
    ]
  },
  {
    id: "convert-saldo",
    name: "Convert Pulsa / E-Wallet",
    category: "other",
    iconBg: "bg-[#FFF0EB] text-[#E76F51]",
    iconType: "convert",
    tagline: "Tukar Saldo DANA, ShopeePay, GoPay & Pulsa",
    badge: "Convert Cepat 💱",
    lowestPrice: 10000,
    rules: [
      "Layanan convert saldo e-wallet dan pulsa terpercaya.",
      "Proses instan 1 - 10 menit setelah bukti transfer dikirim.",
      "Rate bersahabat dan transparan."
    ],
    packages: [
      {
        id: "convert-ewallet",
        name: "Convert E-Wallet / Pulsa",
        desc: "Tukar saldo DANA ke GoPay, ShopeePay ke DANA/BCA, atau Convert Pulsa.",
        options: [
          { duration: "Nominal Sesuai Kebutuhan", price: 10000 }
        ]
      }
    ]
  }
];

const STORE_TERMS = [
  {
    icon: "credit-card",
    title: "1. Bukti Pembayaran Di Awal",
    desc: "Orderan akan diproses setelah customer sudah mengirimkan bukti pembayaran (untuk menghindari hit and run)."
  },
  {
    icon: "clock",
    title: "2. Estimasi Proses & Re-chat",
    desc: "Proses order diperkirakan 1 - 15 menit, MAKSIMAL 30 MENIT (No rush order / no rude buyer). Re-chat dalam 5 menit jika admin belum membalas sama sekali."
  },
  {
    icon: "camera",
    title: "3. Wajib Kirim Bukti Login (6 Jam)",
    desc: "WAJIB kirim bukti login maksimal 6 jam setelah akun diberikan. Lebih dari 6 jam garansi dinyatakan HANGUS (no proof = no garansi)."
  },
  {
    icon: "shield-check",
    title: "4. Estimasi Garansi 3x24 Jam",
    desc: "Proses garansi maksimal 3x24 jam. Jika terjadi kendala backfree massal estimasi 7x24 jam (boleh rechat apabila proses garansi melebihi estimasi)."
  },
  {
    icon: "alert-triangle",
    title: "5. Ketentuan & Risiko Produk",
    desc: "Perlu dipahami produk ini adalah akun digital alternatif (blackmarket), so don't expect too much — aplikasi tidak 100% selalu stabil, buy with your own risk."
  }
];

const FAQS = [
  {
    q: "Berapa lama pesanan saya diproses?",
    a: "Proses order diperkirakan 1 - 15 menit, maksimal 30 menit setelah customer mengirimkan bukti transfer pembayaran."
  },
  {
    q: "Bagaimana ketentuan garansi akun?",
    a: "Wajib kirim bukti (proof) login maksimal 6 jam setelah akun diberikan. Garansi toko berlaku 3x24 jam (jika backfree massal estimasi 7x24 jam) untuk kendala backfree/disable."
  },
  {
    q: "Metode pembayaran apa saja yang diterima?",
    a: "Kami menerima pembayaran instan melalui QRIS (support semua e-wallet & mobile banking) dan Transfer Bank BCA."
  },
  {
    q: "Apakah saya bisa memesan paket harian untuk tugas mendadak?",
    a: "Tentu saja! Tersedia paket durasi 1 hari, 3 hari, hingga 7 hari untuk berbagai aplikasi populer seperti Netflix, Canva, ChatGPT, CapCut, Disney+, dan Viu."
  }
];

const TESTIMONIAL_CATEGORIES = [
  { id: "all", name: "Semua (130)" },
  { id: "netflix", name: "Netflix (60)" },
  { id: "canva", name: "Canva (21)" },
  { id: "capcut", name: "CapCut (8)" },
  { id: "spotify", name: "Spotify (8)" },
  { id: "convert", name: "Convert (7)" },
  { id: "disney", name: "Disney+ (6)" },
  { id: "viu", name: "Viu (5)" },
  { id: "vidio", name: "Vidio (3)" },
  { id: "other", name: "Lainnya (12)" }
];

// Complete 130 Authentic Testimonial & Transaction Photos (Stored in assets/testimonials/)
const TESTIMONIAL_PHOTOS = [
  { src: "assets/testimonials/other_01.jpg", category: "other", app: "Apple Music", title: "Apple Music Bukti #1" },
  { src: "assets/testimonials/canva_01.jpg", category: "canva", app: "Canva", title: "Canva Bukti #1" },
  { src: "assets/testimonials/canva_02.jpg", category: "canva", app: "Canva", title: "Canva Bukti #2" },
  { src: "assets/testimonials/canva_03.jpg", category: "canva", app: "Canva", title: "Canva Bukti #3" },
  { src: "assets/testimonials/canva_04.jpg", category: "canva", app: "Canva", title: "Canva Bukti #4" },
  { src: "assets/testimonials/canva_05.jpg", category: "canva", app: "Canva", title: "Canva Bukti #5" },
  { src: "assets/testimonials/canva_06.jpg", category: "canva", app: "Canva", title: "Canva Bukti #6" },
  { src: "assets/testimonials/canva_07.jpg", category: "canva", app: "Canva", title: "Canva Bukti #7" },
  { src: "assets/testimonials/canva_08.png", category: "canva", app: "Canva", title: "Canva Bukti #8" },
  { src: "assets/testimonials/canva_09.png", category: "canva", app: "Canva", title: "Canva Bukti #9" },
  { src: "assets/testimonials/canva_10.png", category: "canva", app: "Canva", title: "Canva Bukti #10" },
  { src: "assets/testimonials/canva_11.png", category: "canva", app: "Canva", title: "Canva Bukti #11" },
  { src: "assets/testimonials/canva_12.png", category: "canva", app: "Canva", title: "Canva Bukti #12" },
  { src: "assets/testimonials/canva_13.png", category: "canva", app: "Canva", title: "Canva Bukti #13" },
  { src: "assets/testimonials/canva_14.png", category: "canva", app: "Canva", title: "Canva Bukti #14" },
  { src: "assets/testimonials/canva_15.jpg", category: "canva", app: "Canva", title: "Canva Bukti #15" },
  { src: "assets/testimonials/canva_16.png", category: "canva", app: "Canva", title: "Canva Bukti #16" },
  { src: "assets/testimonials/canva_17.png", category: "canva", app: "Canva", title: "Canva Bukti #17" },
  { src: "assets/testimonials/canva_18.jpg", category: "canva", app: "Canva", title: "Canva Bukti #18" },
  { src: "assets/testimonials/canva_19.jpg", category: "canva", app: "Canva", title: "Canva Bukti #19" },
  { src: "assets/testimonials/canva_20.jpg", category: "canva", app: "Canva", title: "Canva Bukti #20" },
  { src: "assets/testimonials/canva_21.jpg", category: "canva", app: "Canva", title: "Canva Bukti #21" },
  { src: "assets/testimonials/capcut_01.png", category: "capcut", app: "CapCut", title: "CapCut Bukti #1" },
  { src: "assets/testimonials/capcut_02.png", category: "capcut", app: "CapCut", title: "CapCut Bukti #2" },
  { src: "assets/testimonials/capcut_03.png", category: "capcut", app: "CapCut", title: "CapCut Bukti #3" },
  { src: "assets/testimonials/capcut_04.png", category: "capcut", app: "CapCut", title: "CapCut Bukti #4" },
  { src: "assets/testimonials/capcut_05.png", category: "capcut", app: "CapCut", title: "CapCut Bukti #5" },
  { src: "assets/testimonials/capcut_06.png", category: "capcut", app: "CapCut", title: "CapCut Bukti #6" },
  { src: "assets/testimonials/capcut_07.png", category: "capcut", app: "CapCut", title: "CapCut Bukti #7" },
  { src: "assets/testimonials/capcut_08.png", category: "capcut", app: "CapCut", title: "CapCut Bukti #8" },
  { src: "assets/testimonials/disney_01.png", category: "disney", app: "Disney+", title: "Disney+ Bukti #1" },
  { src: "assets/testimonials/disney_02.jpg", category: "disney", app: "Disney+", title: "Disney+ Bukti #2" },
  { src: "assets/testimonials/disney_03.jpg", category: "disney", app: "Disney+", title: "Disney+ Bukti #3" },
  { src: "assets/testimonials/disney_04.jpg", category: "disney", app: "Disney+", title: "Disney+ Bukti #4" },
  { src: "assets/testimonials/disney_05.jpg", category: "disney", app: "Disney+", title: "Disney+ Bukti #5" },
  { src: "assets/testimonials/disney_06.png", category: "disney", app: "Disney+", title: "Disney+ Bukti #6" },
  { src: "assets/testimonials/other_02.jpg", category: "other", app: "Loklok", title: "Loklok Bukti #2" },
  { src: "assets/testimonials/netflix_01.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #1" },
  { src: "assets/testimonials/netflix_02.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #2" },
  { src: "assets/testimonials/netflix_03.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #3" },
  { src: "assets/testimonials/netflix_04.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #4" },
  { src: "assets/testimonials/netflix_05.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #5" },
  { src: "assets/testimonials/netflix_06.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #6" },
  { src: "assets/testimonials/netflix_07.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #7" },
  { src: "assets/testimonials/netflix_08.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #8" },
  { src: "assets/testimonials/netflix_09.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #9" },
  { src: "assets/testimonials/netflix_10.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #10" },
  { src: "assets/testimonials/netflix_11.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #11" },
  { src: "assets/testimonials/netflix_12.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #12" },
  { src: "assets/testimonials/netflix_13.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #13" },
  { src: "assets/testimonials/netflix_14.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #14" },
  { src: "assets/testimonials/netflix_15.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #15" },
  { src: "assets/testimonials/netflix_16.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #16" },
  { src: "assets/testimonials/netflix_17.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #17" },
  { src: "assets/testimonials/netflix_18.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #18" },
  { src: "assets/testimonials/netflix_19.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #19" },
  { src: "assets/testimonials/netflix_20.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #20" },
  { src: "assets/testimonials/netflix_21.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #21" },
  { src: "assets/testimonials/netflix_22.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #22" },
  { src: "assets/testimonials/netflix_23.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #23" },
  { src: "assets/testimonials/netflix_24.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #24" },
  { src: "assets/testimonials/netflix_25.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #25" },
  { src: "assets/testimonials/netflix_26.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #26" },
  { src: "assets/testimonials/netflix_27.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #27" },
  { src: "assets/testimonials/netflix_28.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #28" },
  { src: "assets/testimonials/netflix_29.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #29" },
  { src: "assets/testimonials/netflix_30.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #30" },
  { src: "assets/testimonials/netflix_31.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #31" },
  { src: "assets/testimonials/netflix_32.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #32" },
  { src: "assets/testimonials/netflix_33.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #33" },
  { src: "assets/testimonials/netflix_34.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #34" },
  { src: "assets/testimonials/netflix_35.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #35" },
  { src: "assets/testimonials/netflix_36.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #36" },
  { src: "assets/testimonials/netflix_37.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #37" },
  { src: "assets/testimonials/netflix_38.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #38" },
  { src: "assets/testimonials/netflix_39.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #39" },
  { src: "assets/testimonials/netflix_40.jpg", category: "netflix", app: "Netflix", title: "Netflix Bukti #40" },
  { src: "assets/testimonials/netflix_41.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #41" },
  { src: "assets/testimonials/netflix_42.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #42" },
  { src: "assets/testimonials/netflix_43.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #43" },
  { src: "assets/testimonials/netflix_44.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #44" },
  { src: "assets/testimonials/netflix_45.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #45" },
  { src: "assets/testimonials/netflix_46.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #46" },
  { src: "assets/testimonials/netflix_47.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #47" },
  { src: "assets/testimonials/netflix_48.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #48" },
  { src: "assets/testimonials/netflix_49.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #49" },
  { src: "assets/testimonials/netflix_50.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #50" },
  { src: "assets/testimonials/netflix_51.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #51" },
  { src: "assets/testimonials/netflix_52.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #52" },
  { src: "assets/testimonials/netflix_53.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #53" },
  { src: "assets/testimonials/netflix_54.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #54" },
  { src: "assets/testimonials/netflix_55.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #55" },
  { src: "assets/testimonials/netflix_56.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #56" },
  { src: "assets/testimonials/netflix_57.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #57" },
  { src: "assets/testimonials/netflix_58.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #58" },
  { src: "assets/testimonials/netflix_59.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #59" },
  { src: "assets/testimonials/netflix_60.png", category: "netflix", app: "Netflix", title: "Netflix Bukti #60" },
  { src: "assets/testimonials/other_03.jpg", category: "other", app: "Prime Video", title: "Prime Video Bukti #3" },
  { src: "assets/testimonials/other_04.jpg", category: "other", app: "Prime Video", title: "Prime Video Bukti #4" },
  { src: "assets/testimonials/other_05.jpg", category: "other", app: "Scribd", title: "Scribd Bukti #5" },
  { src: "assets/testimonials/spotify_01.jpg", category: "spotify", app: "Spotify", title: "Spotify Bukti #1" },
  { src: "assets/testimonials/spotify_02.jpg", category: "spotify", app: "Spotify", title: "Spotify Bukti #2" },
  { src: "assets/testimonials/spotify_03.jpg", category: "spotify", app: "Spotify", title: "Spotify Bukti #3" },
  { src: "assets/testimonials/spotify_04.jpg", category: "spotify", app: "Spotify", title: "Spotify Bukti #4" },
  { src: "assets/testimonials/spotify_05.jpg", category: "spotify", app: "Spotify", title: "Spotify Bukti #5" },
  { src: "assets/testimonials/spotify_06.jpg", category: "spotify", app: "Spotify", title: "Spotify Bukti #6" },
  { src: "assets/testimonials/spotify_07.jpg", category: "spotify", app: "Spotify", title: "Spotify Bukti #7" },
  { src: "assets/testimonials/spotify_08.jpg", category: "spotify", app: "Spotify", title: "Spotify Bukti #8" },
  { src: "assets/testimonials/vidio_01.jpg", category: "vidio", app: "Vidio", title: "Vidio Bukti #1" },
  { src: "assets/testimonials/vidio_02.png", category: "vidio", app: "Vidio", title: "Vidio Bukti #2" },
  { src: "assets/testimonials/vidio_03.png", category: "vidio", app: "Vidio", title: "Vidio Bukti #3" },
  { src: "assets/testimonials/viu_01.jpg", category: "viu", app: "Viu", title: "Viu Bukti #1" },
  { src: "assets/testimonials/viu_02.jpg", category: "viu", app: "Viu", title: "Viu Bukti #2" },
  { src: "assets/testimonials/viu_03.png", category: "viu", app: "Viu", title: "Viu Bukti #3" },
  { src: "assets/testimonials/viu_04.png", category: "viu", app: "Viu", title: "Viu Bukti #4" },
  { src: "assets/testimonials/viu_05.png", category: "viu", app: "Viu", title: "Viu Bukti #5" },
  { src: "assets/testimonials/other_06.jpg", category: "other", app: "WeTV", title: "WeTV Bukti #6" },
  { src: "assets/testimonials/other_07.jpg", category: "other", app: "WeTV", title: "WeTV Bukti #7" },
  { src: "assets/testimonials/other_08.jpg", category: "other", app: "YouTube", title: "YouTube Bukti #8" },
  { src: "assets/testimonials/other_09.jpg", category: "other", app: "YouTube", title: "YouTube Bukti #9" },
  { src: "assets/testimonials/other_10.jpg", category: "other", app: "Coin LINE", title: "Coin LINE Bukti #10" },
  { src: "assets/testimonials/other_11.jpg", category: "other", app: "Coin LINE", title: "Coin LINE Bukti #11" },
  { src: "assets/testimonials/convert_01.png", category: "convert", app: "Convert Saldo", title: "Convert Bukti #1" },
  { src: "assets/testimonials/convert_02.jpg", category: "convert", app: "Convert Saldo", title: "Convert Bukti #2" },
  { src: "assets/testimonials/convert_03.jpg", category: "convert", app: "Convert Saldo", title: "Convert Bukti #3" },
  { src: "assets/testimonials/convert_04.jpg", category: "convert", app: "Convert Saldo", title: "Convert Bukti #4" },
  { src: "assets/testimonials/convert_05.jpg", category: "convert", app: "Convert Saldo", title: "Convert Bukti #5" },
  { src: "assets/testimonials/convert_06.jpg", category: "convert", app: "Convert Saldo", title: "Convert Bukti #6" },
  { src: "assets/testimonials/convert_07.jpg", category: "convert", app: "Convert Saldo", title: "Convert Bukti #7" }
];

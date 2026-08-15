const DB_VERSION = "v10.4_wahyu_experiences_line_clamp_ellipsis";
const STORAGE_KEY = "PORTFOLIO_DATA_WAHYU_V10_CLAMP";

// Pagination State
let currentSkillPage = 1;
const SKILLS_PER_PAGE = 3;

let currentProjectPage = 1;
const PROJECTS_PER_PAGE = 3;
let activeProjectCategory = "All";

let currentGalleryPage = 1;
const GALLERY_PER_PAGE = 6;
let activeGalleryCategory = "All";

let currentExperiencePage = 1;
const EXPERIENCES_PER_PAGE = 4;

let currentEducationPage = 1;
const EDUCATION_PER_PAGE = 3;

let currentCertificationPage = 1;
const CERTIFICATIONS_PER_PAGE = 4;

// Full Dynamic Dataset Schema for Wahyu Hidayat
const DEFAULT_PORTFOLIO_DATA = {
    updatedAt: Date.now(),
    version: DB_VERSION,
    profile: {
        name: "Wahyu Hidayat",
        brandName: "Whyuhdyat.",
        title: "Informatics Student @ Telkom University | Fullstack Web & IoT Specialist",
        heroTitleLine1: "INNOVATE",
        heroTitleLine2: "DEVELOP & SUCCEED",
        heroTitleLine3: "FAST",
        heroBio: "Mahasiswa Informatika Telkom University yang berfokus pada pengembangan solusi web modern, integrasi IoT, dan analisis data presisi untuk bisnis & industri digital.",
        tagline: "Menghadirkan Solusi Web Terintegrasi, IoT, dan Transformasi Digital",
        statMetricVal: "92%",
        statMetricLbl: "Efisiensi & Kepuasan Solusi",
        heroTag1: "STRATEGI WEB",
        heroTag2: "FULL STACK",
        heroTag3: "IOT & DATA",
        heroBgPhoto: "./assets/foto1.png",
        avatar: "./Image/foto1.png",

        // Overview Section Text & Photos (Specified Projects & Video)
        overviewBadge: "PORTAL & SOLUSI DIGITAL",
        overviewTitle: "MENGEMBANGKAN SISTEM WEB MODERN & IOT DENGAN PRESISI DAN INOVASI TINGGI",
        overviewDesc: "Dari perancangan portal digital terintegrasi di Injourney Airport (PT Angkasa Pura Indonesia), platform syiar multi-role SKI, asisten wisata AI Pesona HSS, hingga sistem Smart Parking Computer Vision ParkVision 2.0 dan Marketplace TelyuBiz.",
        overviewPhoto1: "./Image/Injorney.png",
        overviewPhoto2: "./Image/Batik.png",
        overviewPhoto3: "./Image/hss.mp4",

        // Services Section Text & Photos
        servicesHeaderTitle: "SEMUA YANG ANDA BUTUHKAN UNTUK BERKEMBANG",
        servicesHeaderDesc: "Menyediakan layanan komprehensif mulai dari perancangan UI/UX, rekayasa web frontend & backend, integrasi perangkat keras IoT, hingga analisis big data dan infrastruktur jaringan.",
        service1Title: "Web Design & UI/UX",
        service1Desc: "Menciptakan antarmuka intuitif, visual modern, dan user experience berstandar industri.",
        service1Image: "./Image/portofoliowahyu.png",
        service2Title: "Fullstack Web Development",
        service2Desc: "Membangun sistem web scalable dengan SQL/NoSQL, RESTful API, dan framework modern.",
        service2Image: "./Image/Injorney.png",
        service3Title: "IoT & Hardware Automation",
        service3Desc: "Menghubungkan mikrokontroler ESP32, sensor telemetri, dan dashboard cloud real-time.",
        service3Image: "./Image/iot1.png",
        service4Title: "Cloud & Big Data Analytics",
        service4Desc: "Implementasi infrastruktur cloud AWS/IBM serta visualisasi data analitik terstruktur.",
        service4Image: "./Image/sertif1.png",

        // Impact Statements Text & Photos
        impactTitle: "MENGUBAH TANTANGAN KOMPLEKS MENJADI SOLUSI DIGITAL TEPAT GUNA",
        impactCard1Desc: "Integrasi menyeluruh dari antarmuka visual hingga arsitektur backend dan sensor hardware.",
        impactCard1Image: "./Image/foto2.jpeg",
        impactCard2Title: "Jelajahi portofolio proyek web, mobile, IoT, dan prototipe kompetisi terkini",
        impactCard3Btn: "JELAJAHI PROYEK",
        impactCard3Image: "./Image/websitebarber.png",

        // About Section Text & Photos
        aboutSubtitle: "About The Developer",
        aboutTitle: "Web Developer Terobsesi dengan Integrasi IoT, Web & Presisi Data.",
        about: "Mahasiswa S1 Teknik Informatika Telkom University dengan hasrat mendalam pada integrasi web modern, Internet of Things (IoT), dan analisis data. Berpengalaman magang sebagai Fullstack Developer di Injourney Airport (PT Angkasa Pura Indonesia Regional IV) serta meraih Juara 2 Capstone Project 2026.",
        aboutPhoto: "./Image/about.png",

        // Stats Numbers
        yearsExp: "04+",
        projectsDone: "14+",
        happyClients: "10+",

        // Contact & Links
        cvUrl: "./Image/CV_Wahyu%20Hidayat.pdf",
        cvInteractiveUrl: "cv.html",
        email: "wahyuhidayat.wyh@gmail.com",
        phone: "083843653251",
        whatsapp: "6283843653251",
        location: "Purwokerto, Jawa Tengah, Indonesia",
        linkedin: "http://www.linkedin.com/in/wahyu-hidayat-2267103b4",
        github: "https://github.com/wahyuhidayatwyh-boop",
        instagram: "https://instagram.com/whyuhdyat___"
    },
    projects: [
        {
            id: 1,
            title: "Injourney Airport - Single Entry Point Portal",
            category: "Web Application",
            tags: ["Next.js", "Fullstack", "Enterprise Portal", "PT Angkasa Pura Indonesia"],
            image: "./Image/Injorney.png",
            description: "Portal digital terintegrasi berbasis web sebagai single entry point pada Divisi Airport Commercial Development PT Angkasa Pura Indonesia Regional IV Yogyakarta.",
            fullDescription: "Perancangan dan pengembangan portal digital terintegrasi berbasis web sebagai Single Entry Point pada Divisi Airport Commercial Development PT Angkasa Pura Indonesia (Kantor Regional IV Yogyakarta).\n\nPortal ini menggabungkan manajemen konten, data komersial bandara, visualisasi analitik, dan sistem pelaporan dalam satu antarmuka yang efisien, terpusat, dan responsif.",
            demoUrl: "https://injourney-one.vercel.app/",
            repoUrl: "",
            features: [
                "Single Entry Point untuk seluruh data dan sistem komersial bandara",
                "Interactive dashboard & dynamic reporting system",
                "Autentikasi role-based aman untuk staf & manajemen",
                "Desain responsif dan teroptimasi untuk operasional harian"
            ]
        },
        {
            id: 2,
            title: "SKI Telkom Purwokerto Web Platform",
            category: "Web Application",
            tags: ["PHP", "Multi-Role", "Katalog Syiar", "Organization"],
            image: "./Image/ski.mp4",
            description: "Website organisasi terintegrasi dengan dukungan 3 role (Admin, Admin Katalog, User) untuk manajemen konten dan syiar digital.",
            fullDescription: "Website resmi Sentra Kerohanian Islam (SKI) Telkom University Purwokerto yang dirancang untuk mendigitalkan alur kerja syiar, manajemen katalog, dan publikasi kegiatan dakwah kampus.\n\nSistem mendukung 3 tingkatan hak akses (Admin Utama, Admin Katalog, dan User umum) dengan antarmuka yang bersih dan interaktif.",
            demoUrl: "https://www.skitelkompurwokerto.site",
            repoUrl: "https://github.com/wahyuhidayatwyh-boop/ski-id.git",
            features: [
                "Manajemen Multi-Role: Super Admin, Admin Katalog, User",
                "Katalog syiar digital & arsip kegiatan terstruktur",
                "Panel manajemen konten yang mudah digunakan",
                "Tampilan responsif di smartphone, tablet, dan desktop"
            ]
        },
        {
            id: 3,
            title: "Pesona HSS - Pariwisata Hulu Sungai Selatan",
            category: "Web Application",
            tags: ["AI Chatbot", "Dynamic CMS", "Tourism", "Fast Delivery"],
            image: "./Image/hss.mp4",
            description: "Portal pariwisata interaktif Kabupaten Hulu Sungai Selatan dengan asisten AI Chatbot dan Dynamic CMS terintegrasi.",
            fullDescription: "Portal pariwisata interaktif Kabupaten Hulu Sungai Selatan (Kalsel) yang dibangun dengan fitur modern. Dilengkapi dengan asisten AI Chatbot pintar untuk memandu wisatawan menjelajahi destinasi alam Pegunungan Meratus, budaya Dayak Loksado, serta kuliner khas Kandangan.\n\nDilengkapi CMS mandiri untuk kemudahan pembaruan data destinasi secara instan.",
            demoUrl: "https://pesona-hss.vercel.app/",
            repoUrl: "",
            features: [
                "Integrasi AI Chatbot pemandu wisata 24/7",
                "Dynamic CMS untuk pengelolaan destinasi & artikel",
                "Katalog komprehensif wisata alam Meratus & kuliner lokal",
                "Waktu loading cepat & desain visual memukau"
            ]
        },
        {
            id: 4,
            title: "ParkVision 2.0 - Smart Parking Computer Vision",
            category: "Prototype & AI",
            tags: ["Computer Vision", "YOLO", "Digital Twin", "Smart Campus"],
            image: "./Image/parkvision.png",
            description: "Sistem Smart Parking berbasis Computer Vision (YOLO) dan Digital Twin untuk Smart Campus Telkom University.",
            fullDescription: "Solusi inovasi cerdas ParkVision 2.0 mengintegrasikan deteksi objek AI (YOLO) dengan Digital Twin untuk pemantauan slot parkir kampus secara real-time.\n\nDilengkapi fitur Smart Slot Booking, navigasi slot kosong, serta model inovatif Self-Sustaining Revenue Loop untuk pemeliharaan fasilitas kampus secara transparan dan mandiri.",
            demoUrl: "https://parkvision-seven.vercel.app/",
            repoUrl: "https://drive.google.com/file/d/1jneu3eHgL-eNID4hP933p3WORaEibj5M/view?usp=sharing",
            features: [
                "Deteksi slot parkir real-time dengan model Computer Vision YOLO",
                "Simulasi dan visualisasi Digital Twin slot parkir",
                "Aplikasi mobile booking slot untuk civitas akademika",
                "Ekosistem pendanaan mandiri (Self-Sustaining Revenue Loop)"
            ]
        },
        {
            id: 5,
            title: "Mycelite - Ekosistem Bisnis Cerdas",
            category: "Prototype & AI",
            tags: ["BD.il FEST 2026", "ITB STIKOM Bali", "Business Innovation"],
            image: "./Image/bali.png",
            description: "Karya inovasi digital kompetisi BD.il FEST 2026 ITB STIKOM Bali bertema 'Explore, Innovate, Compete' untuk ekosistem bisnis cerdas berkelanjutan.",
            fullDescription: "Mycelite dirancang sebagai platform inovasi bisnis digital cerdas yang memberdayakan wirausaha muda dan UMKM dengan integrasi analitik data dan konektivitas modern untuk kompetisi tingkat nasional BD.il FEST 2026 di Institut Teknologi dan Bisnis STIKOM Bali.",
            demoUrl: "https://mycelite.vercel.app/",
            repoUrl: "",
            features: [
                "Platform ekosistem bisnis digital terintegrasi",
                "Antarmuka futuristik dengan visualisasi data interaktif",
                "Konsep bisnis berkelanjutan berbasis teknologi modern"
            ]
        },
        {
            id: 6,
            title: "BarberGo - Ekosistem Digital Barbershop",
            category: "Web Application",
            tags: ["Fullstack", "ABP Project", "Web Dashboard", "Mobile App"],
            image: "./Image/websitebarber.png",
            description: "Aplikasi mobile dan web dashboard terintegrasi untuk modernisasi pemesanan antrean barbershop dan analitik UMKM.",
            fullDescription: "BarberGo adalah ekosistem digital lengkap yang mencakup Web Dashboard untuk manajemen kasir/pemilik barbershop serta Mobile App untuk pelanggan.\n\nMemfasilitasi reservasi antrean tanpa tunggu, pilihan kapster favorit, pembayaran digital, dan laporan keuangan komprehensif.",
            demoUrl: "https://barbergoid.vercel.app/admin/checkin",
            repoUrl: "https://drive.google.com/file/d/1qbu7I_Vyeqb6Q_6IQHXTsQiUmRhjffhh/view?usp=sharing",
            features: [
                "Dual Interface: Web Dashboard Admin & Mobile App Pelanggan",
                "Sistem booking slot waktu & pemilihan kapster real-time",
                "Laporan keuangan & analitik pendapatan bisnis",
                "Integrasi sistem pembayaran digital instan"
            ]
        },
        {
            id: 7,
            title: "TelyuBiz - Marketplace Inovasi Mahasiswa",
            category: "Web Application",
            tags: ["Marketplace", "Frontend Lead", "Capstone 2nd Winner", "Telkom University"],
            image: "./Image/telyubiz.png",
            description: "Platform marketplace produk inovatif mahasiswa Telkom University dan peraih Juara 2 Capstone Project 2026.",
            fullDescription: "TelyuBiz adalah platform marketplace digital yang dibangun untuk memfasilitasi komersialisasi produk kreatif dan inovasi karya mahasiswa Telkom University.\n\nSebagai Frontend Developer, saya merancang arsitektur antarmuka yang intuitif, cepat, responsif, dan mendukung transaksi katalog terstruktur yang berhasil meraih Juara 2 Capstone Project Computing 2026.",
            demoUrl: "https://telyu.biz.id",
            repoUrl: "https://youtu.be/86RfOus2YEM",
            features: [
                "Etalase katalog produk inovasi mahasiswa terintegrasi",
                "Sistem promosi dan profiling produk wirausaha kampus",
                "Desain responsif berstandar industri dengan pengalaman belanja mulus",
                "Juara 2 Capstone Project Computing Project 2026"
            ]
        },
        {
            id: 8,
            title: "MyPortofolio.Store - E-Commerce & Personal Brand",
            category: "E-Commerce",
            tags: ["E-Commerce", "Conversion Ready", "TailwindCSS", "Branding"],
            image: "./Image/portofoliowahyu.png",
            description: "Platform web yang menggabungkan personal branding profesional dengan alur transaksi layanan digital yang conversion-ready.",
            fullDescription: "Website e-commerce & personal showcase yang dirancang untuk memaksimalkan konversi calon klien ke pemesanan layanan pembuatan web dan solusi teknologi dengan alur checkout instan dan katalog layanan transparan.",
            demoUrl: "https://www.myportofolio.store/",
            repoUrl: "https://github.com/wahyuhidayatwyh-boop/ecomerce.mp.git",
            features: [
                "Katalog paket layanan web & IoT transparan",
                "Alur pemesanan langsung terhubung ke WhatsApp & checkout",
                "Optimasi kecepatan super ringan & skor SEO tinggi"
            ]
        },
        {
            id: 9,
            title: "Integrasi IoT Blynk ESP32 & Otomasi",
            category: "IoT & Hardware",
            tags: ["ESP32", "Blynk IoT", "Sensors", "Automation"],
            image: "./Image/iot1.png",
            description: "Sistem telemetri sensor dan kontrol relay jarak jauh berbasis mikrokontroler ESP32 dan platform cloud Blynk.",
            fullDescription: "Penerapan solusi Internet of Things (IoT) menggunakan board ESP32 yang terhubung ke cloud server Blynk untuk pemantauan parameter lingkungan (suhu, kelembapan, arus listrik) secara real-time serta aktuasi perangkat industri dari mana saja.",
            demoUrl: "",
            repoUrl: "",
            features: [
                "Monitoring telemetri sensor real-time dengan latensi rendah",
                "Kontrol aktuator relai cerdas berbasis kondisi sensor",
                "Pemberitahuan notifikasi peringatan otomatis",
                "Dashboard mobile & web Blynk interaktif"
            ]
        },
        {
            id: 10,
            title: "Simulator Zero Downtime Aplikasi & Jaringan",
            category: "IoT & Hardware",
            tags: ["Networking", "High Availability", "Failover", "Simulator"],
            image: "./Image/iot2.png",
            description: "Arsitektur simulasi failover otomatis dan load balancing untuk menjamin keandalan sistem tanpa waktu henti.",
            fullDescription: "Rancangan simulasi infrastruktur jaringan dan server dengan mekanisme redundancy dan failover otomatis untuk menjaga ketersediaan layanan web dan IoT tetap 99.99% aktif.",
            demoUrl: "",
            repoUrl: "",
            features: [
                "Mekanisme auto-failover dan heartbeat monitoring",
                "Simulasi load balancing multi-server",
                "Pencegahan single point of failure (SPOF)"
            ]
        },
        {
            id: 11,
            title: "Mitra Cukurmen Frontend Application",
            category: "Web Application",
            tags: ["Frontend", "TailwindCSS", "UI/UX", "POS"],
            image: "./Image/dev1.png",
            description: "Antarmuka frontend modern untuk platform kemitraan layanan pangkas rambut.",
            fullDescription: "Aplikasi antarmuka web khusus mitra Cukurmen untuk pengelolaan jadwal kerja, riwayat transaksi harian, dan analitik performa pelayanan.",
            demoUrl: "",
            repoUrl: "",
            features: [
                "Antarmuka kasir dan antrean berbasis web",
                "Visualisasi rekap omzet harian dan bulanan",
                "Tampilan mobile-first yang responsif"
            ]
        },
        {
            id: 12,
            title: "Pelatihan IoT Web & Hardware",
            category: "IoT & Hardware",
            tags: ["Workshop", "IoT Web", "ESP32", "Training"],
            image: "./Image/iot3.jpeg",
            description: "Pelatihan dan workshop integrasi perangkat keras IoT dengan antarmuka web interaktif.",
            fullDescription: "Penyelenggaraan dan partisipasi aktif dalam pelatihan integrasi teknologi Internet of Things untuk mahasiswa dan praktisi, menghubungkan mikrokontroler dengan protokol WebSocket dan MQTT ke dashboard web.",
            demoUrl: "",
            repoUrl: "",
            features: [
                "Pemrograman firmware ESP32 dan sensor",
                "Integrasi protokol komunikasi MQTT & HTTP REST",
                "Visualisasi grafik sensor pada web browser"
            ]
        }
    ],
    skills: [
        {
            id: 1,
            name: "Web & Software (Frontend, React, UI/UX, Vibe Coding)",
            level: 92,
            category: "Frontend",
            icon: "fa-code",
            fullDescription: "Spesialisasi mendalam dalam membangun antarmuka web modern, responsif, dan dinamis menggunakan HTML5, Vanilla CSS, TailwindCSS, Bootstrap, JavaScript ES6+, dan React. Menguasai pembuatan desain sistem interaktif, micro-animations, dan optimalisasi Core Web Vitals."
        },
        {
            id: 2,
            name: "Backend Architecture & Database (Node.js, PHP, SQL, NoSQL)",
            level: 88,
            category: "Backend",
            icon: "fa-server",
            fullDescription: "Perancangan RESTful API yang scalable dan aman menggunakan Node.js dan PHP. Pengelolaan database relasional (MySQL/PostgreSQL) dan NoSQL (MongoDB/DBaaS), autentikasi role-based, dan query optimization."
        },
        {
            id: 3,
            name: "Advanced Tech (IoT, ESP32, Data Analysis, Computer Vision)",
            level: 90,
            category: "IoT & AI",
            icon: "fa-microchip",
            fullDescription: "Integrasi perangkat keras mikrokontroler ESP32/Arduino dengan cloud platform (Blynk, MQTT, Firebase), analitik data sensor, serta integrasi model Computer Vision (YOLO) untuk smart campus dan automasi."
        },
        {
            id: 4,
            name: "Infrastructure (Network Engineering, Cloud, Cyber Security)",
            level: 85,
            category: "Infrastructure",
            icon: "fa-network-wired",
            fullDescription: "Perancangan dan pengelolaan infrastruktur jaringan (Fiber Optic, Subnetting, Routing, VPN), implementasi cloud AWS dan IBM Cloud, serta penerapan prinsip-prinsip dasar keamanan siber."
        },
        {
            id: 5,
            name: "Leadership & Management (Ketua Umum SKI, Public Speaking)",
            level: 90,
            category: "Leadership",
            icon: "fa-people-group",
            fullDescription: "Kepemimpinan organisasi, manajemen tim lintas divisi, komunikasi publik, dan koordinasi proyek strategis skala universitas dan organisasi kemahasiswaan."
        },
        {
            id: 6,
            name: "Cognitive Skills & Creative Problem Solving",
            level: 92,
            category: "Cognitive",
            icon: "fa-lightbulb",
            fullDescription: "Kemampuan analisis logika yang cepat, pemecahan masalah algoritma, perancangan prototipe kompetisi, dan eksekusi ide inovatif secara tangkas."
        }
    ],
    experiences: [
        {
            id: 1,
            role: "Frontend & Backend Developer — Magang BUMN",
            company: "PT Angkasa Pura Indonesia (Injourney Airport), Kantor Regional IV",
            period: "2026",
            description: "Merancang dan membangun portal web Single Entry Point untuk Divisi Airport Commercial Development yang mengintegrasikan seluruh data layanan komersial bandara lintas unit. Mengembangkan backend REST API dan database menggunakan PostgreSQL melalui Supabase untuk mendukung dashboard operasional real-time. Membangun antarmuka dashboard di sisi frontend dengan React, serta Sistem Manajemen Konten (CMS) responsif untuk pembaruan informasi bandara secara dinamis.",
            skills: ["React", "FastAPI", "PostgreSQL", "Supabase", "Vercel", "Live: injourney-one.vercel.app"]
        },
        {
            id: 2,
            role: "Asisten Praktikum Jaringan Komputer",
            company: "Telkom University Purwokerto",
            period: "2026 – Sekarang",
            description: "Membimbing mahasiswa pada sesi praktikum jaringan, menjelaskan konsep protokol HTTP dan dasar jaringan komputer.",
            skills: ["Jaringan Komputer", "Protokol HTTP", "Asisten Laboratorium", "Mentoring Mahasiswa"]
        },
        {
            id: 3,
            role: "Teknisi Jaringan (Magang)",
            company: "PT. Telkom Akses",
            period: "Jan 2021 – Mar 2021",
            description: "Instalasi jaringan kabel Fiber Optic pada tiang ODP dan pengecekan kabel pada ODC (Optical Distribution Cabinet).",
            skills: ["Fiber Optic", "Tiang ODP", "ODC Cabinet", "Network Infrastructure"]
        }
    ],
    education: [
        {
            id: 1,
            degree: "S1 Teknik Informatika",
            institution: "Telkom University",
            year: "2023 - Sekarang",
            description: "Fokus pada Rekayasa Web, Internet of Things (IoT), Analisis Data, dan Rekayasa Perangkat Lunak."
        },
        {
            id: 2,
            degree: "Teknik Komputer & Jaringan (TKJ)",
            institution: "SMK Telkom Banjarbaru",
            year: "2020 - 2023",
            description: "Kompetensi keahlian Administrasi Infrastruktur Jaringan, Fiber Optik, Server Linux, dan Cloud Computing."
        },
        {
            id: 3,
            degree: "Pelatihan Keahlian IoT, Cloud & Big Data",
            institution: "AWS Academy & IBM SkillsBuild",
            year: "2023 - 2026",
            description: "Sertifikasi resmi dalam AWS Cloud Foundations, Big Data 101, NoSQL DBaaS, dan Keamanan Siber."
        }
    ],
    certifications: [
        {
            id: 1,
            title: "Big Data 101",
            issuer: "IBM / Cognitive Class",
            year: "2024",
            image: "./Image/sertif1.png",
            description: "Sertifikasi konsep dan arsitektur pengolahan big data, ekosistem Hadoop, dan pemrosesan analitik skala besar."
        },
        {
            id: 2,
            title: "NoSQL and DBaaS 101",
            issuer: "IBM / Cognitive Class",
            year: "2024",
            image: "./Image/sertif2.png",
            description: "Sertifikasi pengelolaan database NoSQL dokumen dan arsitektur Database-as-a-Service berbasis cloud."
        },
        {
            id: 3,
            title: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            year: "2024",
            image: "./Image/sertif3.png",
            description: "Sertifikasi proteksi data, keamanan jaringan komputer, deteksi ancaman siber, dan best practices keamanan digital."
        },
        {
            id: 4,
            title: "Junior Network Administrator",
            issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
            year: "2023",
            image: "./Image/sertif4.png",
            description: "Sertifikat kompetensi resmi nasional dalam konfigurasi routing, switching, subnetting, dan administrasi jaringan LAN/WAN."
        },
        {
            id: 5,
            title: "AWS Academy Graduate - Cloud Foundations",
            issuer: "Amazon Web Services (AWS)",
            year: "2024",
            image: "./Image/sertif5.png",
            description: "Sertifikasi pemahaman menyeluruh tentang infrastruktur cloud AWS, keamanan IAM, komputasi EC2, S3 Storage, dan arsitektur serverless."
        }
    ],
    gallery: [
        // Organisasi
        { id: 1, title: "Staff Divisi Syiar SKI", category: "Organisasi", meta: "Divisi", image: "./Image/organisasi3.png", bentoClass: "bento-1col", caption: "Terlibat dalam perencanaan agenda syiar dan pelaksanaan program kegiatan secara kolaboratif." },
        { id: 2, title: "HIPMI PT Harmoni Eksternal", category: "Organisasi", meta: "Kepanitiaan", image: "./Image/organisasi1.png", bentoClass: "bento-2col", caption: "Menjalin kerja sama eksternal dan membangun relasi strategis untuk mendukung program organisasi." },
        { id: 3, title: "Ketua Umum SKI", category: "Organisasi", meta: "Ketua Umum", image: "./Image/organisasi5.png", bentoClass: "bento-2col", caption: "Mengelola arah organisasi, strategi program tahunan, serta pembinaan tim pengurus secara berkelanjutan." },
        { id: 4, title: "Wakil Ketua Umum Telcomnicavoice", category: "Organisasi", meta: "Leadership", image: "./Image/organisasi2.png", bentoClass: "bento-1col", caption: "Koordinasi tim lintas divisi, pengambilan keputusan program, dan penguatan budaya organisasi." },
        { id: 5, title: "Ketua Pelaksana Pre-Competition", category: "Organisasi", meta: "Event", image: "./Image/organisasi4.png.jpeg", bentoClass: "bento-1col", caption: "Memimpin pelaksanaan acara dari perencanaan timeline, teknis lomba, hingga evaluasi akhir kegiatan." },

        // Prestasi
        { id: 6, title: "Juara 1 Start Up Ide Competition", category: "Prestasi", meta: "Juara 1 Nasional", image: "./Image/Juara 1 Start Up Ide Competition.jpg", bentoClass: "bento-2col", caption: "Juara 1 Nasional kompetisi ide startup inovatif berorientasi solusi digital tepat guna dan bernilai bisnis tinggi." },
        { id: 7, title: "Inkubasi Bisnis BTP", category: "Prestasi", meta: "Inkubasi", image: "./Image/lomba2.jpeg", bentoClass: "bento-1col", caption: "Pengembangan ide produk dan validasi model bisnis melalui pendampingan inkubasi bersama mentor." },
        { id: 8, title: "Essay Inovasi Teknologi", category: "Prestasi", meta: "Penulisan", image: "./Image/lomba3.png", bentoClass: "bento-1col", caption: "Penyusunan gagasan inovatif terkait pemanfaatan teknologi untuk efisiensi proses dan peningkatan layanan." },
        { id: 9, title: "Inovatech 2025 (Gold Award & Juara Lomba 3)", category: "Prestasi", meta: "Gold Award", image: "./Image/foto2.jpeg", bentoClass: "bento-3col", caption: "Penghargaan Gold Award dan Juara 3 Lomba Inovasi Teknologi dengan fokus dampak praktis industri digital." },
        { id: 10, title: "Juara 2 Capstone TelyuBiz", category: "Prestasi", meta: "Capstone", image: "./Image/cap3.jpeg", bentoClass: "bento-1col", caption: "Juara 2 Capstone Project pengembangan platform marketplace inovatif mahasiswa Telkom University." },

        // Developer
        { id: 11, title: "Frontend Mitra Cukurmen", category: "Developer", meta: "Frontend", image: "./Image/dev1.png", bentoClass: "bento-2col", caption: "Perancangan antarmuka layanan berbasis web untuk alur pemesanan yang sederhana, cepat, dan responsif." },
        { id: 12, title: "Aplikasi Mobile MBG", category: "Developer", meta: "Fullstack", image: "./Image/dev2.png", bentoClass: "bento-2col", caption: "Pengembangan fitur front-end dan back-end untuk mendukung proses bisnis, autentikasi, dan pengelolaan data." },
        { id: 13, title: "Frontend Portfolio", category: "Developer", meta: "UI Web", image: "./Image/dev3.png", bentoClass: "bento-1col", caption: "Implementasi website portfolio personal dengan fokus visual modern, performa ringan, dan kompatibilitas mobile." },
        { id: 14, title: "Integrasi Blynk ESP32", category: "IoT", meta: "IoT System", image: "./Image/iot1.png", bentoClass: "bento-1col", caption: "Implementasi monitoring dan kontrol perangkat dengan ESP32 menggunakan dashboard Blynk secara real-time." },

        // IoT
        { id: 15, title: "Simulator Zero Downtime", category: "IoT", meta: "Riset IoT", image: "./Image/iot2.png", bentoClass: "bento-1col", caption: "Perancangan simulasi untuk menjaga kontinuitas layanan aplikasi saat terjadi gangguan pada komponen utama." },
        { id: 16, title: "Pelatihan IoT Web", category: "IoT", meta: "Pelatihan", image: "./Image/iot3.jpeg", bentoClass: "bento-1col", caption: "Kegiatan pembelajaran implementasi sensor, data, dan visualisasi web sebagai workflow IoT end-to-end." },
        { id: 17, title: "Pesona HSS Portal", category: "Developer", meta: "Fullstack", image: "./Image/hss.mp4", bentoClass: "bento-3col", caption: "Pembangunan portal pariwisata interaktif terintegrasi chatbot AI pintar dan CMS dalam waktu satu hari." }
    ]
};

// Data Store Loader with auto version validation
function getPortfolioData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            // If stored data matches current version and contains gallery array
            if (parsed.version === DB_VERSION && parsed.profile && parsed.profile.name === "Wahyu Hidayat" && Array.isArray(parsed.gallery) && parsed.gallery.length > 0) {
                return parsed;
            }
        }
    } catch (e) {
        console.error("Error loading portfolio data", e);
    }
    // Save fresh Wahyu Hidayat data
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PORTFOLIO_DATA));
    } catch (e) { }
    return DEFAULT_PORTFOLIO_DATA;
}

let appData = getPortfolioData();

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    renderProfile();
    renderStats();
    renderOverviewCards();
    renderServicesSection();
    renderImpactSection();
    initPrestasiSlider();
    renderProjects();
    renderSkills();
    renderExperiences();
    renderEducation();
    renderCertifications();
    renderGallery();
    renderContactInfo();
    initContactForm();
    initQuoteFetcher();
});

// Navigation & Mobile Toggle & Floating Bottom Scrollspy
function initNavigation() {
    const toggleBtn = document.getElementById("mobile-nav-toggle");
    const dropdown = document.getElementById("mobile-nav-dropdown");

    if (toggleBtn && dropdown) {
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.classList.toggle("hidden");
        });

        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
                dropdown.classList.add("hidden");
            }
        });
    }

    const sections = document.querySelectorAll("section[id]");
    const navAnchors = document.querySelectorAll(".nav-link, .nav-bottom-item, .mobile-dropdown-item");

    navAnchors.forEach(anchor => {
        anchor.addEventListener("click", () => {
            const href = anchor.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            navAnchors.forEach(a => {
                if (a.getAttribute("href") === href) {
                    a.classList.add("active");
                } else {
                    a.classList.remove("active");
                }
            });
        });
    });

    window.addEventListener("scroll", () => {
        let currentId = "home";
        const scrollPos = window.scrollY + 220;

        sections.forEach(sec => {
            if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
                currentId = sec.getAttribute("id");
            }
        });

        navAnchors.forEach(anchor => {
            const href = anchor.getAttribute("href");
            if (href === `#${currentId}`) {
                anchor.classList.add("active");
            } else {
                anchor.classList.remove("active");
            }
        });
    }, { passive: true });
}

// 1. Profile Render (Hero Section)
function renderProfile() {
    const p = appData.profile || {};

    setTextContent("brand-name", p.brandName || p.name || "Wahyu Hidayat");
    setTextContent("hero-bio", p.heroBio || "");
    setTextContent("hero-role", p.title || "Full Stack Developer & IoT Specialist");

    setTextContent("hero-title-1", p.heroTitleLine1 || "INNOVATE");
    setTextContent("hero-title-2", p.heroTitleLine2 || "DEVELOP & SUCCEED");
    setTextContent("hero-title-3", p.heroTitleLine3 || "FAST");

    setTextContent("stat-metric-val", p.statMetricVal || "92%");
    setTextContent("stat-metric-lbl", p.statMetricLbl || "Efisiensi & Kepuasan Solusi");

    setTextContent("hero-tag-1", p.heroTag1 || "STRATEGI WEB");
    setTextContent("hero-tag-2", p.heroTag2 || "FULL STACK");
    setTextContent("hero-tag-3", p.heroTag3 || "IOT & DATA");

    const heroImg = document.getElementById("hero-main-photo");
    if (heroImg && p.heroBgPhoto) {
        heroImg.src = p.heroBgPhoto;
    }

    // About section
    setTextContent("about-subtitle", p.aboutSubtitle || "TENTANG SAYA");
    const aboutTitleEl = document.getElementById("about-title");
    if (aboutTitleEl) {
        aboutTitleEl.innerHTML = p.aboutTitleHtml || `FULLSTACK DEVELOPER DENGAN <span class="text-[#ff3b00] font-light">SOLUSI DIGITAL & CLOUD</span>`;
    }
    setTextContent("about-desc", p.about || "Mahasiswa S1 Teknik Informatika Telkom University Purwokerto (IPK 3.75/4.0) dengan pengalaman nyata sebagai Fullstack Developer membangun aplikasi web & mobile end-to-end (React, Next.js, FastAPI, PostgreSQL/Supabase, AWS). Berpengalaman langsung mengembangkan portal digital enterprise BUMN di PT Angkasa Pura Indonesia (Injourney Airport), produk AI Chatbot, hingga Computer Vision. Terbukti andal memimpin tim teknis (CTO Startup, Ketua Umum organisasi) dan konsisten menjuarai kompetisi teknologi tingkat nasional.");

    const aboutImg = document.getElementById("about-photo");
    if (aboutImg && p.aboutPhoto) {
        aboutImg.src = p.aboutPhoto;
    }

    // Interactive CV Buttons
    const btnCvPdf = document.getElementById("btn-cv-pdf");
    if (btnCvPdf && p.cvUrl) {
        btnCvPdf.href = p.cvUrl;
    }
}

// 2. Stats Bar
function renderStats() {
    const p = appData.profile || {};
    setTextContent("stat-years", p.yearsExp || "04+");
    setTextContent("stat-projects", p.projectsDone || "14+");
    setTextContent("stat-clients", p.happyClients || "10+");
}

// 3. Overview Cards & Photos
function renderOverviewCards() {
    const p = appData.profile || {};
    const skills = appData.skills || [];

    const titleEl = document.getElementById("overview-title-text");
    if (titleEl) {
        titleEl.innerHTML = `MENGEMBANGKAN SISTEM WEB MODERN <span class="red-3d-capsule"></span> & IOT DENGAN <span class="text-stroke-gray font-extralight">PRESISI DAN INOVASI</span> TINGGI`;
    }
    setTextContent("overview-desc-text", p.overviewDesc || "");

    setImageSrc("overview-photo-1", p.overviewPhoto1 || "./Image/Injorney.png");
    setImageSrc("overview-photo-2", p.overviewPhoto2 || "./Image/Batik.png");

    const card3Container = document.getElementById("overview-card-3-container");
    const media3 = p.overviewPhoto3 || "./Image/hss.mp4";
    if (card3Container) {
        if (media3.toLowerCase().endsWith(".mp4") || media3.toLowerCase().endsWith(".webm")) {
            card3Container.innerHTML = `<video id="overview-video-3" src="${media3}" autoplay muted loop playsinline class="w-full h-full object-cover" style="object-position: top center;"></video>`;
        } else {
            card3Container.innerHTML = `<img id="overview-photo-3" src="${media3}" alt="Proyek Web 3" class="w-full h-full object-cover" style="object-position: top center;" onerror="this.src='./Image/websitebarber.png'">`;
        }
    }

    const listEl = document.getElementById("overview-skills-list");
    if (listEl) {
        const topSkills = skills.slice(0, 7);
        listEl.innerHTML = topSkills.map(s => `
            <li class="flex items-center justify-between text-xs font-bold text-slate-800 border-b border-slate-100 pb-1.5">
                <span class="flex items-center gap-2"><i class="fa-solid fa-asterisk text-[9px] text-[#ff3b00]"></i> ${escapeHtml(s.name)}</span>
                <span class="text-[10px] text-slate-400 font-extrabold">${s.level}%</span>
            </li>
        `).join("");
    }
}

// 4. Services Section Text & Photos
function renderServicesSection() {
    const p = appData.profile || {};

    setTextContent("services-header-title", p.servicesHeaderTitle || "SEMUA YANG ANDA BUTUHKAN UNTUK BERKEMBANG");
    setTextContent("services-header-desc", p.servicesHeaderDesc || "");

    setTextContent("service-1-title", p.service1Title || "Web Design & UI/UX");
    setTextContent("service-1-desc", p.service1Desc || "");
    setImageSrc("service-1-img", p.service1Image || "./Image/portofoliowahyu.png");

    setTextContent("service-2-title", p.service2Title || "Fullstack Web Development");
    setTextContent("service-2-desc", p.service2Desc || "");
    setImageSrc("service-2-img", p.service2Image || "./Image/Injorney.png");

    setTextContent("service-3-title", p.service3Title || "IoT & Hardware Automation");
    setTextContent("service-3-desc", p.service3Desc || "");
    setImageSrc("service-3-img", p.service3Image || "./Image/iot1.png");

    setTextContent("service-4-title", p.service4Title || "Cloud & Big Data Analytics");
    setTextContent("service-4-desc", p.service4Desc || "");
    setImageSrc("service-4-img", p.service4Image || "./Image/sertif1.png");
}

// 5. Impact Section Text & Photos
function renderImpactSection() {
    const p = appData.profile || {};
    setTextContent("impact-title-text", p.impactTitle || "MENGUBAH TANTANGAN KOMPLEKS MENJADI SOLUSI DIGITAL TEPAT GUNA");
}

// 5.1 Prestasi Terbaru Smooth Portrait Slider (Dynamic Unlimited Slides)
let currentPrestasiIndex = 0;
let prestasiAutoTimer = null;

function getPrestasiSlideCount() {
    const track = document.getElementById("prestasi-slider-track");
    return track ? track.children.length : 1;
}

window.slidePrestasi = function (direction) {
    const total = getPrestasiSlideCount();
    currentPrestasiIndex = (currentPrestasiIndex + direction + total) % total;
    updatePrestasiSlider();
    resetPrestasiAutoTimer();
};

window.goToPrestasiSlide = function (index) {
    const total = getPrestasiSlideCount();
    if (index >= 0 && index < total) {
        currentPrestasiIndex = index;
        updatePrestasiSlider();
        resetPrestasiAutoTimer();
    }
};

function updatePrestasiSlider() {
    const track = document.getElementById("prestasi-slider-track");
    const dotsContainer = document.getElementById("prestasi-slider-dots");
    const total = getPrestasiSlideCount();

    if (track) {
        track.style.transform = `translateX(-${currentPrestasiIndex * 100}%)`;
    }

    if (dotsContainer) {
        dotsContainer.innerHTML = Array.from({ length: total }, (_, idx) => {
            const isActive = idx === currentPrestasiIndex;
            return `<button type="button" onclick="goToPrestasiSlide(${idx})" class="prestasi-dot ${isActive ? 'w-6 h-2 rounded-full bg-[#ff3b00] shadow-md' : 'w-2 h-2 rounded-full bg-white/30 hover:bg-white/60'} transition-all duration-300"></button>`;
        }).join("");
    }
}

function resetPrestasiAutoTimer() {
    if (prestasiAutoTimer) clearInterval(prestasiAutoTimer);
    prestasiAutoTimer = setInterval(() => {
        const total = getPrestasiSlideCount();
        currentPrestasiIndex = (currentPrestasiIndex + 1) % total;
        updatePrestasiSlider();
    }, 4500);
}

function initPrestasiSlider() {
    const viewport = document.getElementById("prestasi-slider-viewport");
    if (!viewport) return;

    updatePrestasiSlider();
    resetPrestasiAutoTimer();

    let startX = 0;
    let isDragging = false;

    viewport.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    viewport.addEventListener("touchend", (e) => {
        const diffX = e.changedTouches[0].clientX - startX;
        if (Math.abs(diffX) > 40) {
            window.slidePrestasi(diffX > 0 ? -1 : 1);
        }
    }, { passive: true });

    viewport.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    window.addEventListener("mouseup", (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diffX = e.clientX - startX;
        if (Math.abs(diffX) > 40) {
            window.slidePrestasi(diffX > 0 ? -1 : 1);
        }
    });
}

// 6. Selected Projects Section with 3D Spotlight Coverflow Carousel (Transparent Non-Active Cards)
let currentProjectSlide = 0;
let filteredProjectsCache = [];
let isProjectDragging = false;
let projectDragStartX = 0;

function renderProjects() {
    const track = document.getElementById("projects-carousel-track");
    const dotsContainer = document.getElementById("projects-carousel-dots");
    if (!track) return;

    const allProjects = appData.projects || [];
    let filtered = allProjects;

    if (activeProjectCategory !== "All" && activeProjectCategory !== "Semua") {
        filtered = allProjects.filter(p => {
            if (activeProjectCategory === "Web Application") return p.category === "Web Application" || p.category === "E-Commerce";
            if (activeProjectCategory === "IoT & Hardware") return p.category === "IoT & Hardware" || p.category === "IoT";
            if (activeProjectCategory === "Prototype & AI") return p.category === "Prototype & AI" || p.category === "Prestasi";
            return p.category === activeProjectCategory;
        });
    }

    filteredProjectsCache = filtered;
    const total = filtered.length;

    if (total === 0) {
        track.innerHTML = `<div class="text-center py-12 text-slate-400 text-sm font-semibold">Tidak ada proyek dalam kategori ini.</div>`;
        if (dotsContainer) dotsContainer.innerHTML = "";
        return;
    }

    if (currentProjectSlide >= total) currentProjectSlide = 0;

    track.innerHTML = filtered.map((proj, idx) => {
        const isVideo = proj.image && (proj.image.toLowerCase().endsWith('.mp4') || proj.image.toLowerCase().endsWith('.webm'));
        const mediaHtml = isVideo
            ? `<video src="${escapeHtml(proj.image)}" autoplay muted loop playsinline class="project-bg-img" style="object-position: top center;"></video>`
            : `<img src="${escapeHtml(proj.image || './Image/foto1.png')}" alt="${escapeHtml(proj.title)}" class="project-bg-img" style="object-position: top center;" onerror="this.src='./Image/foto1.png'">`;

        return `
            <div class="project-carousel-slide" data-index="${idx}" onclick="goToProjectSlide(${idx})">
                <!-- 100% Clear Project Media (Image or Autoplay Video) -->
                ${mediaHtml}
                
                <!-- Top Category Badge -->
                <div class="absolute top-3 left-3 sm:top-5 sm:left-5 z-20">
                    <span class="project-tag-pill text-[8px] sm:text-[10px] px-2.5 py-1 sm:px-4 sm:py-1.5">${escapeHtml(proj.category || 'PROYEK')}</span>
                </div>

                <!-- Sleek Frosted Bottom Bar -->
                <div class="project-bottom-bar p-3 sm:p-5">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div class="space-y-0.5 sm:space-y-1">
                            <h3 class="font-agency-thin text-xs sm:text-lg text-white font-light uppercase leading-snug tracking-[-0.02em] group-hover:text-[#ff3b00] transition-colors line-clamp-1">
                                ${escapeHtml(proj.title)}
                            </h3>
                            <p class="text-[8px] sm:text-[11px] text-slate-300 line-clamp-1 max-w-xl font-normal">
                                ${escapeHtml(proj.description || '')}
                            </p>
                        </div>
                        <div class="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                            <a href="detail.html?type=project&id=${proj.id}" class="text-[8px] sm:text-[10px] font-bold text-white hover:text-[#ff3b00] inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/20 transition-all shrink-0">
                                Lihat Detail <i class="fa-solid fa-arrow-right text-[7px] sm:text-[8px]"></i>
                            </a>
                            ${proj.demoUrl ? `<a href="${escapeHtml(proj.demoUrl)}" target="_blank" class="text-[9px] sm:text-[11px] font-bold text-[#ff3b00] hover:underline inline-flex items-center gap-1">Live Demo <i class="fa-solid fa-arrow-up-right-from-square text-[8px]"></i></a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    updateProjectSlides();
    initProjectDragEvents();
}

function updateProjectSlides() {
    const track = document.getElementById("projects-carousel-track");
    const dotsContainer = document.getElementById("projects-carousel-dots");
    if (!track) return;

    const slides = Array.from(track.querySelectorAll(".project-carousel-slide"));
    const total = slides.length;
    if (total === 0) return;

    if (currentProjectSlide < 0) currentProjectSlide = total - 1;
    if (currentProjectSlide >= total) currentProjectSlide = 0;

    slides.forEach((slide, idx) => {
        slide.classList.remove("active", "prev", "next", "hidden-left", "hidden-right");

        const prevIdx = (currentProjectSlide - 1 + total) % total;
        const nextIdx = (currentProjectSlide + 1) % total;

        if (idx === currentProjectSlide) {
            slide.classList.add("active");
        } else if (idx === prevIdx) {
            slide.classList.add("prev");
        } else if (idx === nextIdx) {
            slide.classList.add("next");
        } else {
            let diff = idx - currentProjectSlide;
            if (diff < -1 || (diff > 1 && diff > total / 2)) {
                slide.classList.add("hidden-left");
            } else {
                slide.classList.add("hidden-right");
            }
        }
    });

    if (dotsContainer) {
        dotsContainer.innerHTML = slides.map((_, i) => `
            <button type="button" onclick="goToProjectSlide(${i})" class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentProjectSlide ? 'bg-[#ff3b00] w-8 shadow-md' : 'bg-slate-300 hover:bg-slate-400'}" title="Proyek ${i + 1}"></button>
        `).join("");
    }
}

function initProjectDragEvents() {
    const container = document.getElementById("projects-carousel-container");
    if (!container || container.dataset.eventsBound) return;
    container.dataset.eventsBound = "true";

    container.addEventListener("mousedown", (e) => {
        isProjectDragging = true;
        projectDragStartX = e.clientX;
    });

    window.addEventListener("mouseup", (e) => {
        if (!isProjectDragging) return;
        isProjectDragging = false;
        const diffX = e.clientX - projectDragStartX;
        if (diffX > 45) {
            prevProjectSlide();
        } else if (diffX < -45) {
            nextProjectSlide();
        }
    });

    container.addEventListener("touchstart", (e) => {
        projectDragStartX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener("touchend", (e) => {
        const diffX = e.changedTouches[0].clientX - projectDragStartX;
        if (diffX > 40) {
            prevProjectSlide();
        } else if (diffX < -40) {
            nextProjectSlide();
        }
    }, { passive: true });
}

window.nextProjectSlide = function () {
    currentProjectSlide++;
    updateProjectSlides();
};

window.prevProjectSlide = function () {
    currentProjectSlide--;
    updateProjectSlides();
};

window.goToProjectSlide = function (idx) {
    currentProjectSlide = idx;
    updateProjectSlides();
};

window.filterProjects = function (cat) {
    activeProjectCategory = cat;
    currentProjectSlide = 0;

    document.querySelectorAll(".project-filter-btn").forEach(btn => {
        if (btn.getAttribute("data-cat") === cat) {
            btn.className = "project-filter-btn px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-extrabold bg-[#120204] text-[#ff3b00] border border-[#ff3b00]/40 shadow-sm transition-all";
        } else {
            btn.className = "project-filter-btn px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all";
        }
    });
    renderProjects();
};

// 7. Skills Grid (3 Columns, Middle Card Larger & Highlighted)
function renderSkills() {
    const container = document.getElementById("skills-container");
    const pagContainer = document.getElementById("skills-pagination");
    if (!container) return;

    const skills = appData.skills || [];
    const totalPages = Math.ceil(skills.length / SKILLS_PER_PAGE) || 1;
    if (currentSkillPage > totalPages) currentSkillPage = totalPages;

    const startIndex = (currentSkillPage - 1) * SKILLS_PER_PAGE;
    const paginated = skills.slice(startIndex, startIndex + SKILLS_PER_PAGE);

    if (paginated.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 text-sm font-semibold">Belum ada data keahlian.</div>`;
        return;
    }

    container.innerHTML = paginated.map((s, idx) => {
        const itemNumber = String(startIndex + idx + 1).padStart(2, '0');
        const isMiddle = idx % 3 === 1;

        const cardStyle = isMiddle
            ? "bg-white text-slate-900 border-2 border-[#ff3b00] shadow-2xl scale-[1.02] sm:scale-105 z-10 p-3.5 sm:p-8 rounded-[20px] sm:rounded-[32px] min-h-[200px] sm:min-h-[340px]"
            : "bg-[#141416] text-white border border-[#ff3b00]/30 shadow-xl p-3 sm:p-7 rounded-[18px] sm:rounded-[28px] min-h-[175px] sm:min-h-[280px] self-center";

        const iconBg = isMiddle
            ? "bg-[#120204] text-[#ff3b00] border border-[#ff3b00]/30"
            : "bg-white/10 text-white border border-white/20";

        const categoryColor = "text-[#ff3b00]";
        const titleColor = isMiddle ? "text-slate-900" : "text-white";
        const barTrackBg = isMiddle ? "bg-slate-100" : "bg-white/10";

        return `
            <div class="group relative ${cardStyle} hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                <span class="absolute top-2 right-3 sm:top-4 sm:right-6 font-agency-thin text-3xl sm:text-6xl ${isMiddle ? 'text-slate-200' : 'text-white/10'} group-hover:text-[#ff3b00]/20 transition-colors pointer-events-none select-none font-light">
                    ${itemNumber}
                </span>

                <div class="relative z-10 space-y-2 sm:space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${iconBg} flex items-center justify-center text-xs sm:text-lg shadow-md">
                            <i class="fa-solid ${s.icon || 'fa-code'}"></i>
                        </div>
                        <span class="text-[8px] sm:text-[10px] font-extrabold ${categoryColor} bg-rose-50/20 border border-[#ff3b00]/30 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider">
                            ${escapeHtml(s.category || 'Tech')}
                        </span>
                    </div>

                    <div>
                        <span class="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block mb-0.5 sm:mb-1">
                            KEAHLIAN
                        </span>
                        <h4 class="font-agency-thin ${titleColor} font-light text-xs sm:text-xl uppercase leading-snug tracking-[-0.02em] group-hover:text-[#ff3b00] transition-colors line-clamp-1">
                            ${escapeHtml(s.name)}
                        </h4>
                    </div>
                </div>

                <div class="relative z-10 pt-2 sm:pt-4 space-y-1 sm:space-y-1.5 border-t ${isMiddle ? 'border-slate-100' : 'border-white/10'}">
                    <div class="flex items-center justify-between text-[9px] sm:text-xs font-bold">
                        <span class="text-[8px] sm:text-[10px] uppercase tracking-wider ${isMiddle ? 'text-slate-500' : 'text-slate-400'}">Tingkat</span>
                        <span class="text-[9px] sm:text-xs font-extrabold text-[#ff3b00]">${s.level}%</span>
                    </div>
                    <div class="w-full ${barTrackBg} rounded-full h-1.5 sm:h-2.5 overflow-hidden p-0.5">
                        <div class="skill-bar-inner h-full rounded-full" style="width: ${s.level}%"></div>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    if (pagContainer) {
        renderPagination(pagContainer, totalPages, currentSkillPage, (page) => {
            currentSkillPage = page;
            renderSkills();
        });
    }
}

// 8. Experiences Timeline (Same Uniform Size, Line-Clamped with '...', Alternating Dark/Light Theme)
function renderExperiences() {
    const container = document.getElementById("experience-timeline");
    const pagContainer = document.getElementById("experience-pagination");
    if (!container) return;

    const exps = appData.experiences || [];
    const totalPages = Math.ceil(exps.length / EXPERIENCES_PER_PAGE) || 1;
    if (currentExperiencePage > totalPages) currentExperiencePage = totalPages;

    const startIndex = (currentExperiencePage - 1) * EXPERIENCES_PER_PAGE;
    const paginated = exps.slice(startIndex, startIndex + EXPERIENCES_PER_PAGE);

    if (paginated.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-slate-400 text-sm font-semibold">Belum ada data pengalaman karir.</div>`;
        return;
    }

    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            ${paginated.map((exp, idx) => {
        const itemNumber = String(startIndex + idx + 1).padStart(2, '0');
        const isEven = idx % 2 === 1;

        // Clean alternating theme with uniform height
        const cardStyle = isEven
            ? "bg-white text-slate-900 border-2 border-[#ff3b00] shadow-2xl rounded-[32px] p-6 sm:p-8"
            : "bg-[#141416] text-white border border-[#ff3b00]/30 shadow-xl rounded-[32px] p-6 sm:p-8";

        const watermarkColor = isEven ? "text-slate-200 group-hover:text-[#ff3b00]/20" : "text-white/10 group-hover:text-[#ff3b00]/20";
        const roleColor = isEven ? "text-slate-900 group-hover:text-[#ff3b00]" : "text-white group-hover:text-[#ff3b00]";
        const descColor = isEven ? "text-slate-600" : "text-slate-300";
        const companyColor = isEven ? "text-slate-600 font-bold" : "text-slate-400 font-bold";
        const periodBadge = isEven ? "bg-[#120204] text-[#ff3b00] border border-[#ff3b00]/40" : "bg-[#ff3b00] text-white shadow-md";
        const pillBg = isEven ? "bg-slate-100 text-slate-700 border-slate-200" : "bg-white/10 text-slate-200 border-white/15";

        return `
                    <div class="group relative ${cardStyle} h-full flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 overflow-hidden min-h-[300px] sm:min-h-[320px]">
                        <span class="absolute top-4 right-6 font-agency-thin text-6xl sm:text-7xl ${watermarkColor} transition-colors pointer-events-none select-none font-light">
                            ${itemNumber}
                        </span>

                        <div class="relative z-10 space-y-3.5">
                            <div class="flex flex-wrap items-center justify-between gap-3 pr-12">
                                <span class="${periodBadge} text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
                                    ${escapeHtml(exp.period)}
                                </span>
                                <span class="text-xs ${companyColor} flex items-center gap-1.5 line-clamp-1 max-w-[200px] sm:max-w-xs" title="${escapeHtml(exp.company)}">
                                    <i class="fa-solid fa-asterisk text-[#ff3b00] text-[10px]"></i> ${escapeHtml(exp.company)}
                                </span>
                            </div>

                            <h3 class="font-agency-thin text-xl sm:text-2xl ${roleColor} font-light uppercase leading-snug tracking-[-0.03em] transition-colors line-clamp-2 min-h-[48px] sm:min-h-[56px]">
                                ${escapeHtml(exp.role)}
                            </h3>

                            <!-- Description clamped with ... to guarantee equal card sizes -->
                            <p class="text-xs sm:text-sm ${descColor} leading-relaxed font-normal line-clamp-3 min-h-[58px]" title="${escapeHtml(exp.description || '')}">
                                ${escapeHtml(exp.description || '')}
                            </p>
                        </div>

                        ${exp.skills && exp.skills.length > 0 ? `
                            <div class="relative z-10 flex flex-wrap gap-1.5 pt-3.5 mt-4 border-t ${isEven ? 'border-slate-200' : 'border-white/15'}">
                                ${exp.skills.slice(0, 4).map(sk => `
                                    <span class="${pillBg} border text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                                        <i class="fa-solid fa-bolt text-[#ff3b00] text-[8px]"></i> ${escapeHtml(sk)}
                                    </span>
                                `).join('')}
                                ${exp.skills.length > 4 ? `
                                    <span class="${pillBg} border text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-full">
                                        +${exp.skills.length - 4}
                                    </span>
                                ` : ''}
                            </div>
                        ` : ''}
                    </div>
                `;
    }).join("")}
        </div>
    `;

    if (pagContainer) {
        renderPagination(pagContainer, totalPages, currentExperiencePage, (page) => {
            currentExperiencePage = page;
            renderExperiences();
        });
    }
}

// 9. Education Cards
function renderEducation() {
    const container = document.getElementById("education-cards-grid");
    const pagContainer = document.getElementById("education-pagination");
    if (!container) return;

    const edu = appData.education || [];
    const totalPages = Math.ceil(edu.length / EDUCATION_PER_PAGE) || 1;
    if (currentEducationPage > totalPages) currentEducationPage = totalPages;

    const startIndex = (currentEducationPage - 1) * EDUCATION_PER_PAGE;
    const paginated = edu.slice(startIndex, startIndex + EDUCATION_PER_PAGE);

    container.innerHTML = paginated.map(item => `
        <div class="card-light flex flex-col justify-between space-y-2 sm:space-y-4 p-3 sm:p-6 rounded-2xl sm:rounded-3xl">
            <div class="space-y-1.5 sm:space-y-2">
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xs sm:text-base font-bold">
                    <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <span class="text-[8px] sm:text-[10px] font-extrabold text-[#ff3b00] uppercase tracking-wider block">${escapeHtml(item.year)}</span>
                <h4 class="font-agency-thin text-slate-900 text-xs sm:text-base leading-snug font-light line-clamp-1">${escapeHtml(item.degree)}</h4>
                <p class="text-[10px] sm:text-xs font-bold text-slate-500 line-clamp-1">${escapeHtml(item.institution)}</p>
                <p class="text-[9px] sm:text-xs text-slate-600 leading-relaxed pt-0.5 sm:pt-1 line-clamp-2">${escapeHtml(item.description || '')}</p>
            </div>
        </div>
    `).join("");

    if (pagContainer) {
        renderPagination(pagContainer, totalPages, currentEducationPage, (page) => {
            currentEducationPage = page;
            renderEducation();
        });
    }
}

// 10. Certification Cards (2 Columns on Mobile, 4 Columns on Desktop)
function renderCertifications() {
    const container = document.getElementById("certifications-photos-grid");
    const pagContainer = document.getElementById("certifications-pagination");
    if (!container) return;

    const certs = appData.certifications || [];
    const totalPages = Math.ceil(certs.length / CERTIFICATIONS_PER_PAGE) || 1;
    if (currentCertificationPage > totalPages) currentCertificationPage = totalPages;

    const startIndex = (currentCertificationPage - 1) * CERTIFICATIONS_PER_PAGE;
    const paginated = certs.slice(startIndex, startIndex + CERTIFICATIONS_PER_PAGE);

    container.innerHTML = paginated.map(c => `
        <div class="card-light group overflow-hidden p-0 flex flex-col justify-between rounded-xl sm:rounded-3xl border border-slate-200/80 shadow-md hover:-translate-y-1.5 hover:shadow-xl hover:border-[#ff3b00]/40 transition-all duration-300 bg-white">
            <div class="aspect-[16/10] w-full overflow-hidden relative bg-slate-900 flex items-center justify-center">
                <img src="${escapeHtml(c.image || './Image/sertif1.png')}" alt="${escapeHtml(c.title)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style="object-position: center center;" onerror="this.src='./Image/sertif1.png'">
                <span class="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 bg-[#120204]/90 backdrop-blur-sm text-[#ff3b00] border border-[#ff3b00]/40 text-[8px] sm:text-[9px] font-extrabold px-2 py-0.5 sm:px-2.5 rounded-full shadow-md z-10">${escapeHtml(c.year)}</span>
            </div>
            <div class="p-3 sm:p-5 flex flex-col justify-between flex-1 space-y-2 sm:space-y-3">
                <div class="space-y-0.5 sm:space-y-1">
                    <span class="text-[8px] sm:text-[10px] font-extrabold text-[#ff3b00] uppercase tracking-wider block">${escapeHtml(c.issuer)}</span>
                    <h4 class="font-outfit text-slate-900 text-xs sm:text-base font-bold leading-snug line-clamp-2 min-h-[30px] sm:min-h-[42px]">${escapeHtml(c.title)}</h4>
                </div>
                <div class="pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a href="detail.html?type=cert&id=${c.id}" class="text-[9px] sm:text-xs font-extrabold text-[#ff3b00] hover:underline inline-flex items-center gap-1">Detail <i class="fa-solid fa-arrow-right text-[7px] sm:text-[8px]"></i></a>
                    <span class="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase">Verified</span>
                </div>
            </div>
        </div>
    `).join("");

    if (pagContainer) {
        renderPagination(pagContainer, totalPages, currentCertificationPage, (page) => {
            currentCertificationPage = page;
            renderCertifications();
        });
    }
}

// 11. My Digital Footprints & Activity Gallery
function renderGallery() {
    const container = document.getElementById("gallery-grid");
    const pagContainer = document.getElementById("gallery-pagination");
    if (!container) return;

    const allGallery = (appData && Array.isArray(appData.gallery) && appData.gallery.length > 0)
        ? appData.gallery
        : (DEFAULT_PORTFOLIO_DATA.gallery || []);
    let filtered = allGallery;

    if (activeGalleryCategory !== "All" && activeGalleryCategory !== "Semua") {
        filtered = allGallery.filter(g => g.category === activeGalleryCategory);
    }

    const totalPages = Math.ceil(filtered.length / GALLERY_PER_PAGE) || 1;
    if (currentGalleryPage > totalPages) currentGalleryPage = totalPages;

    const startIndex = (currentGalleryPage - 1) * GALLERY_PER_PAGE;
    const paginated = filtered.slice(startIndex, startIndex + GALLERY_PER_PAGE);

    if (paginated.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 text-sm font-semibold">Tidak ada dokumentasi dalam kategori ini.</div>`;
    } else {
        container.innerHTML = paginated.map(g => {
            const isVideo = g.image && (g.image.toLowerCase().endsWith('.mp4') || g.image.toLowerCase().endsWith('.webm'));
            const mediaHtml = isVideo
                ? `<video src="${escapeHtml(g.image)}" autoplay muted loop playsinline></video>`
                : `<img src="${escapeHtml(g.image || './assets/foto.png')}" alt="${escapeHtml(g.title)}" onerror="this.src='./assets/foto.png'">`;

            return `
                <div class="gallery-card group" onclick="openGalleryModal(${g.id})">
                    ${mediaHtml}
                    <!-- Top category/meta badge -->
                    <span class="absolute top-3 left-3 bg-[#120204]/90 backdrop-blur-sm text-[#ff3b00] border border-[#ff3b00]/40 text-[8px] sm:text-[9px] font-extrabold px-2.5 py-1 rounded-full shadow-md z-10">${escapeHtml(g.meta || g.category)}</span>
                    
                    <!-- Text inside photo at bottom -->
                    <div class="gallery-card-overlay">
                        <span class="text-[#ff3b00] text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider">${escapeHtml(g.category)}</span>
                        <h4 class="font-outfit text-sm sm:text-base text-white font-bold uppercase leading-snug line-clamp-1 group-hover:text-[#ff3b00] transition-colors">${escapeHtml(g.title)}</h4>
                    </div>
                </div>
            `;
        }).join("");
    }

    if (pagContainer) {
        renderPagination(pagContainer, totalPages, currentGalleryPage, (page) => {
            currentGalleryPage = page;
            renderGallery();
        });
    }
}

window.filterGallery = function (cat) {
    activeGalleryCategory = cat;
    currentGalleryPage = 1;

    document.querySelectorAll(".gallery-filter-btn").forEach(btn => {
        if (btn.getAttribute("data-gcat") === cat) {
            btn.className = "gallery-filter-btn px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-extrabold bg-[#120204] text-[#ff3b00] border border-[#ff3b00]/60 shadow-md transition-all";
        } else {
            btn.className = "gallery-filter-btn px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all";
        }
    });
    renderGallery();
};

window.openGalleryModal = function (id) {
    const all = (appData && Array.isArray(appData.gallery) && appData.gallery.length > 0) ? appData.gallery : DEFAULT_PORTFOLIO_DATA.gallery;
    const item = all.find(g => g.id === id);
    if (!item) return;

    const modal = document.getElementById("gallery-floating-modal");
    const mediaContainer = document.getElementById("modal-media-container");
    const catBadge = document.getElementById("modal-cat-badge");
    const metaBadge = document.getElementById("modal-meta-badge");
    const title = document.getElementById("modal-title");
    const desc = document.getElementById("modal-desc");

    if (modal && mediaContainer) {
        const isVideo = item.image && (item.image.toLowerCase().endsWith('.mp4') || item.image.toLowerCase().endsWith('.webm'));
        if (isVideo) {
            mediaContainer.innerHTML = `<video src="${escapeHtml(item.image)}" autoplay muted loop controls playsinline class="w-full h-full object-contain bg-black"></video>`;
        } else {
            mediaContainer.innerHTML = `<img src="${escapeHtml(item.image || './assets/foto.png')}" alt="${escapeHtml(item.title)}" class="w-full h-full object-contain bg-black" onerror="this.src='./assets/foto.png'">`;
        }

        if (catBadge) catBadge.textContent = item.category || 'DOKUMENTASI';
        if (metaBadge) metaBadge.textContent = item.meta || item.category;
        if (title) title.textContent = item.title || '';
        if (desc) desc.textContent = item.caption || '';

        modal.classList.add("active");
    }
};

window.closeGalleryModal = function (e) {
    if (e && e.target && e.target.id !== "gallery-floating-modal" && !e.target.closest("button")) {
        return;
    }
    const modal = document.getElementById("gallery-floating-modal");
    if (modal) {
        modal.classList.remove("active");
        const mediaContainer = document.getElementById("modal-media-container");
        if (mediaContainer) mediaContainer.innerHTML = "";
    }
};

// 11. Contact Info & Social Links
function renderContactInfo() {
    const p = appData.profile || {};

    const emailText = document.getElementById("contact-email-text");
    const emailLink = document.getElementById("contact-email-link");
    if (emailText && emailLink) {
        emailText.textContent = p.email || "wahyuhidayat.wyh@gmail.com";
        emailLink.href = `mailto:${p.email || 'wahyuhidayat.wyh@gmail.com'}`;
    }

    const waText = document.getElementById("contact-wa-text");
    const waLink = document.getElementById("contact-wa-link");
    if (waText && waLink) {
        const phoneClean = (p.whatsapp || p.phone || "6283843653251").replace(/[^0-9]/g, '');
        waText.textContent = `Chat WhatsApp (${p.phone || '083843653251'})`;
        waLink.href = `https://wa.me/${phoneClean}?text=Halo%20${encodeURIComponent(p.name || 'Wahyu')},%20saya%20tertarik%20berdiskusi%20proyek.`;
    }

    setHref("social-github", p.github || "#");
    setHref("social-linkedin", p.linkedin || "#");
    setHref("social-instagram", p.instagram || "#");
    setHref("footer-github", p.github || "#");
    setHref("footer-linkedin", p.linkedin || "#");
    setHref("footer-instagram", p.instagram || "#");
}

function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("contact-name").value;
        const email = document.getElementById("contact-email").value;
        const message = document.getElementById("contact-message").value;
        const p = appData.profile || {};

        const phoneClean = (p.whatsapp || p.phone || "6283843653251").replace(/[^0-9]/g, '');
        const waUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent(`Halo ${p.name || 'Wahyu'},\n\nNama: ${name}\nEmail: ${email}\n\nPesan: ${message}`)}`;

        window.open(waUrl, "_blank");
        alert("Pesan Anda telah disiapkan! Mengalihkan ke WhatsApp...");
        form.reset();
    });
}

// 12. AJAX Motivational Quote Fetcher
function initQuoteFetcher() {
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");
    const refreshBtn = document.getElementById("refreshQuote");

    if (!quoteText) return;

    async function loadQuote() {
        quoteText.textContent = "Memuat quote motivasi...";
        if (quoteAuthor) quoteAuthor.textContent = "";

        const sources = [
            async () => {
                const res = await fetch("https://dummyjson.com/quotes/random");
                if (!res.ok) throw new Error(`DummyJSON error: ${res.status}`);
                const data = await res.json();
                return { text: data.quote, author: data.author };
            },
            async () => {
                const res = await fetch("https://api.quotable.io/random");
                if (!res.ok) throw new Error(`Quotable error: ${res.status}`);
                const data = await res.json();
                return { text: data.content, author: data.author };
            }
        ];

        for (const getQuote of sources) {
            try {
                const result = await getQuote();
                quoteText.textContent = `"${result.text || 'Stay positive. Work hard. Make it happen.'}"`;
                if (quoteAuthor) quoteAuthor.textContent = result.author ? `- ${result.author}` : "- Anonymous";
                return;
            } catch (err) {
                console.warn("Quote fetch fallback:", err);
            }
        }

        quoteText.textContent = '"Innovate. Develop. Succeed. Fast."';
        if (quoteAuthor) quoteAuthor.textContent = "- Wahyu Hidayat";
    }

    if (refreshBtn) {
        refreshBtn.addEventListener("click", loadQuote);
    }
    loadQuote();
}

function setTextContent(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}
function setImageSrc(id, src) {
    const el = document.getElementById(id);
    if (el) el.src = src;
}
function setHref(id, url) {
    const el = document.getElementById(id);
    if (el) el.href = url;
}
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

const paginationCallbacks = {};

function renderPagination(container, totalPages, currentPage, onPageClick) {
    if (!container) return;
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    paginationCallbacks[container.id] = onPageClick;

    let html = `
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <div class="flex items-center gap-1.5 sm:gap-2">
                <button type="button" 
                    class="pagination-btn nav-btn ${currentPage === 1 ? 'disabled opacity-40 pointer-events-none' : ''}" 
                    ${currentPage === 1 ? 'disabled' : ''} 
                    onclick="window.triggerPageClick('${container.id}', ${currentPage - 1})">
                    <i class="fa-solid fa-chevron-left text-[10px]"></i>
                </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        const isActive = i === currentPage;
        html += `
            <button type="button" 
                class="pagination-btn ${isActive ? 'active bg-[#120204] text-[#ff3b00] border-2 border-[#ff3b00]' : 'bg-white text-slate-700 hover:bg-slate-100'}" 
                onclick="window.triggerPageClick('${container.id}', ${i})">
                ${i}
            </button>
        `;
    }

    html += `
                <button type="button" 
                    class="pagination-btn nav-btn ${currentPage === totalPages ? 'disabled opacity-40 pointer-events-none' : ''}" 
                    ${currentPage === totalPages ? 'disabled' : ''} 
                    onclick="window.triggerPageClick('${container.id}', ${currentPage + 1})">
                    <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
            </div>

            <span class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                Halaman ${currentPage} dari ${totalPages}
            </span>
        </div>
    `;

    container.innerHTML = html;
}

window.triggerPageClick = function (contId, page) {
    if (typeof paginationCallbacks[contId] === 'function') {
        paginationCallbacks[contId](page);
    }
};

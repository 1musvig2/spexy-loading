/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║           SPEXY LOADING SCREEN - CONFIG               ║
 * ║        Tüm ayarları buradan yapabilirsiniz.           ║
 * ╚═══════════════════════════════════════════════════════╝
 *
 *  spexy-loading v1.0.0
 *  Author: Spexy Development
 */

const SpexyCFG = {

    // ─────────────────────────────────────────
    //  SUNUCU BİLGİLERİ / SERVER INFO
    // ─────────────────────────────────────────
    server: {
        name: "SPEXY ROLEPLAY",           // Sunucu adı
        logo: "assets/img/logo.png",      // Logo dosya yolu (html/assets/img/ klasörüne koy)
        cfxId: "xxxxxx",                  // cfx.re sunucu ID'niz (oyuncu sayısı için)
        maxPlayers: 64,                   // Maksimum oyuncu sayısı
    },

    // ─────────────────────────────────────────
    //  DİL / LANGUAGE
    // ─────────────────────────────────────────
    language: "tr", // "tr" veya "en"

    translations: {
        tr: {
            loading: "Yükleniyor",
            connecting: "Bağlanılıyor...",
            playersOnline: "Oyuncu Çevrimiçi",
            rulesTitle: "Sunucu Kuralları",
            loadingTip: "İpucu",
            discord: "Discord'a Katıl",
            version: "Sürüm",
        },
        en: {
            loading: "Loading",
            connecting: "Connecting...",
            playersOnline: "Players Online",
            rulesTitle: "Server Rules",
            loadingTip: "Tip",
            discord: "Join Discord",
            version: "Version",
        }
    },

    // ─────────────────────────────────────────
    //  RENK TEMEKİ / COLOR THEME
    // ─────────────────────────────────────────
    colors: {
        background: "#0a0a0a",        // Ana arka plan rengi
        surface: "#111111",           // Kart/panel arka planı
        surfaceHover: "#1a1a1a",      // Hover durumu
        border: "#222222",            // Kenarlık rengi
        borderAccent: "#333333",      // Vurgulu kenarlık
        text: "#ffffff",              // Ana yazı rengi
        textMuted: "#888888",         // Soluk yazı rengi
        textDim: "#444444",           // Çok soluk yazı rengi
        accent: "#ffffff",            // Vurgu rengi (loading bar, icon vb.)
        accentDim: "rgba(255,255,255,0.08)", // Soluk vurgu
        loadingBar: "#ffffff",        // Loading bar dolgu rengi
        loadingBarBg: "#1e1e1e",      // Loading bar arka planı
        overlay: "rgba(0,0,0,0.65)",  // Arka plan üstü overlay
    },

    // ─────────────────────────────────────────
    //  ARKA PLAN / BACKGROUND
    // ─────────────────────────────────────────
    background: {
        /**
         * type seçenekleri:
         *  "color"   → Düz renk (colors.background kullanılır)
         *  "image"   → Tek resim
         *  "slideshow" → Slayt gösterisi (birden fazla resim)
         *  "video"   → Video döngüsü
         *  "particles" → Animasyonlu parçacıklar
         */
        type: "slideshow",

        // image / slideshow için:
        images: [
            "assets/img/image.png",
            "assets/img/image2.png",
            "assets/img/image3.png",
            "assets/img/image4.png",
        ],
        slideshowInterval: 5000,      // ms cinsinden slayt geçiş süresi
        imageFit: "cover",            // "cover" veya "contain"

        // video için:
        video: "assets/img/bg.mp4",
        videoLoop: true,
        videoMuted: true,

        // particles için:
        particleColor: "#ffffff",
        particleCount: 60,
        particleOpacity: 0.15,
    },

    // ─────────────────────────────────────────
    //  MÜZİK / MUSIC
    // ─────────────────────────────────────────
    music: {
        enabled: true,
        autoPlay: true,               // Otomatik başlasın mı?
        volume: 0.3,                  // 0.0 - 1.0
        loop: true,
        showControls: true,           // Müzik kontrol butonu gösterilsin mi?
        tracks: [
            "assets/music/track1.mp3",
            // "assets/music/track2.mp3",
        ],
    },

    // ─────────────────────────────────────────
    //  SOSYAL MEDYA / SOCIAL MEDIA
    // ─────────────────────────────────────────
    socials: {
        discord: {
            enabled: true,
            label: "discord.gg/spexy",     // Gösterilecek yazı
            url: "https://discord.gg/spexy",
            icon: "discord",
        },
        youtube: {
            enabled: false,                // true = göster, false = gizle
            url: "https://youtube.com/@kanal",
        },
        github: {
            enabled: false,                // true = göster, false = gizle
            url: "https://github.com/kullanici",
        },
    },

    // ─────────────────────────────────────────
    //  SUNUCU KURALLARI / SERVER RULES
    // ─────────────────────────────────────────
    rules: {
        tr: [
            "Saygılı bir oyun ortamı için tüm oyunculara saygı gösterin.",
            "RDM (Random Deathmatch) ve VDM (Vehicle Deathmatch) kesinlikle yasaktır.",
            "Roleplay dışı konuşmalar için OOC kanalını kullanın.",
            "Hile, exploit veya bug kullanımı banlama ile sonuçlanır.",
            "Yönetici kararlarına saygı gösterin ve itirazlarınızı Discord'dan iletin.",
            "Karakter değerini gözetin, her durumda RP yapın.",
        ],
        en: [
            "Respect all players for a healthy roleplay environment.",
            "RDM (Random Deathmatch) and VDM (Vehicle Deathmatch) are strictly forbidden.",
            "Use OOC channel for out-of-character conversations.",
            "Cheating, exploiting or bug abuse will result in a permanent ban.",
            "Respect admin decisions and appeal via Discord.",
            "Value your character life, always stay in roleplay.",
        ],
    },

    // ─────────────────────────────────────────
    //  İPUÇLARI / LOADING TIPS
    // ─────────────────────────────────────────
    tips: {
        tr: [
            "Karakterinizin hikayesini önceden planlayın.",
            "Diğer oyuncularla etkileşim kurmaktan çekinmeyin.",
            "Sunucu Discord'umuzu takip edin, güncellemelerden haberdar olun.",
            "Hata bildirimi için Discord'daki ticket sistemini kullanın.",
        ],
        en: [
            "Plan your character's backstory before playing.",
            "Don't hesitate to interact with other players.",
            "Follow our Discord for the latest updates.",
            "Use the ticket system on Discord to report bugs.",
        ],
    },

    // ─────────────────────────────────────────
    //  FONT
    // ─────────────────────────────────────────
    fonts: {
        display: "'Syne', sans-serif",       // Başlıklar için
        body: "'DM Sans', sans-serif",       // Genel yazı
        mono: "'JetBrains Mono', monospace", // Sayılar / kod
    },

    // ─────────────────────────────────────────
    //  GELİŞMİŞ / ADVANCED
    // ─────────────────────────────────────────
    advanced: {
        tipInterval: 8000,            // İpucu değişim süresi (ms)
        playerCountRefresh: 30000,    // Oyuncu sayısı yenileme süresi (ms)
        animationSpeed: "normal",     // "slow" | "normal" | "fast"
        showVersion: true,            // Sürüm numarası gösterilsin mi?
        version: "1.0.0",
    },
};

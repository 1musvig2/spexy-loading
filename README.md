# 🎮 spexy-loading

**Modern & Minimalist FiveM Loading Screen**  
QBCore & QBox uyumlu | v1.0.0 | Spexy Development

---

## 📁 Kurulum

1. `spexy-loading` klasörünü sunucunuzun `resources` dizinine kopyalayın.
2. `server.cfg` dosyasına şunu ekleyin:

```cfg
ensure spexy-loading
```

> ⚠️ `spexy-loading`, `spawnmanager` ve diğer core resource'lardan **önce** yüklenmelidir.

---

## ⚙️ Konfigürasyon

Tüm ayarlar `html/js/config.js` dosyasından yapılır.

### Sunucu Bilgileri
```js
server: {
    name: "SUNUCU ADINIZ",
    logo: "assets/img/logo.png",   // 256x256 PNG önerilir
    cfxId: "abc123",               // cfx.re ID (oyuncu sayısı için)
    maxPlayers: 64,
}
```

### Arka Plan Tipi
```js
background: {
    type: "particles",  // "color" | "image" | "slideshow" | "video" | "particles"
    images: ["assets/img/bg1.jpg"],        // image / slideshow için
    video: "assets/img/bg.mp4",           // video için
    particleCount: 60,                     // particles için
}
```

### Renkler
```js
colors: {
    background: "#0a0a0a",
    accent: "#ffffff",
    loadingBar: "#ffffff",
    // ...
}
```

### Müzik
```js
music: {
    enabled: true,
    autoPlay: true,
    volume: 0.3,
    tracks: ["assets/music/track1.mp3"],
}
```

### Dil
```js
language: "tr",  // "tr" veya "en"
```

---

## 📂 Dosya Yapısı

```
spexy-loading/
├── fxmanifest.lua
├── README.md
└── html/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── config.js      ← TÜM AYARLAR BURADAN
    │   └── app.js
    └── assets/
        ├── img/
        │   ├── logo.png   ← Sunucu logonuz (256x256 PNG)
        │   ├── bg1.jpg    ← Arka plan görselleri
        │   └── ...
        └── music/
            └── track1.mp3 ← Müzik dosyası
```

---

## 🎨 Özellikler

| Özellik | Açıklama |
|---|---|
| Discord Profili | Sol üstte FiveM Discord verisi otomatik |
| Oyuncu Sayısı | FiveM API üzerinden otomatik çekilir |
| Loading Bar | Animasyonlu, ortada, yüzde göstergeli |
| Sunucu Kuralları | Config'den TR/EN ayarlanabilir |
| İpuçları | Döngüsel, config'den ayarlanabilir |
| Müzik | Autoplay, ses kontrolü, loop |
| Arka Plan | 5 farklı tip (renk/resim/slayt/video/parçacık) |
| Renkler | Tüm renkler config'den |
| Dil | TR / EN |
| QBCore & QBox | Tam uyumlu |

---

## 🔗 Sosyal Medya

- **Discord:** discord.gg/spexy

---

## 📝 Lisans

Bu proje Spexy Development tarafından geliştirilmiştir.  
Ticari kullanım için izin gereklidir.

---

*spexy-loading v1.0.0 — Spexy Development*

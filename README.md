# spexy-loading

FiveM roleplay sunucuları için sıfırdan tasarlanmış, sade ve minimalist bir loading screen. Sabır ve dikkatle elle yazılmıştır — hiçbir şablon veya üretec kullanılmamıştır.

Hem QBCore hem de QBox framework'leri ile uyumludur.

![Önizleme](preview.png)

---

## 🔴 Canlı Demo

> GitHub Pages üzerinden tarayıcıda önizleyebilirsiniz:

**[▶ Demo'yu Aç](https://1musvig2.github.io/spexy-loading)**

> `KULLANICI_ADIN` kısmını kendi GitHub kullanıcı adınızla değiştirin.  
> GitHub Pages'i aktif etmek için: **Repo → Settings → Pages → Branch: main → / (root) → Save**

---

## Özellikler

- Discord profili ve sunucu kuralları için açılır kapanır sol panel
- FiveM API'sinden çekilen, her zaman görünür online oyuncu sayısı
- Logo ve yükleme çubuğu ile tam ortalı sunucu kimlik alanı
- Animasyonlu parçacık arka planı (config'den değiştirilebilir)
- Arka plan tipleri: düz renk, resim, slayt gösterisi, video, parçacıklar
- Otomatik oynatma ve ses kontrolü ile müzik desteği
- İpucu döngüsü
- Discord sosyal linki
- Tam TR / EN dil desteği
- Tüm renkler, fontlar, kurallar, linkler ve ayarlar tek bir dosyadan yönetilebilir
- FiveM NUI ortamı için mouse cursor düzeltmesi
- QBCore ve QBox uyumlu manifest

---

## Kurulum

1. `spexy-loading` klasörünü indirin ve çıkartın.
2. Sunucunuzun `resources` dizinine yerleştirin.
3. `server.cfg` dosyanıza şu satırı ekleyin:

```
ensure spexy-loading
```

`spexy-loading`'in `spawnmanager` ve diğer temel resource'lardan önce başlatıldığına emin olun.

---

## Yapılandırma

Tüm ayarlar tek bir dosyadan kontrol edilir:

```
html/js/config.js
```

### Sunucu Bilgileri

```js
server: {
    name: "SUNUCU ADINIZ",
    logo: "assets/img/logo.png",
    cfxId: "cfx_id_niz",
    maxPlayers: 64,
}
```

### Arka Plan

```js
background: {
    type: "particles", // "color" | "image" | "slideshow" | "video" | "particles"
    images: ["assets/img/bg1.jpg"],
    video: "assets/img/bg.mp4",
    particleCount: 60,
}
```

### Renkler

```js
colors: {
    background: "#0a0a0a",
    text: "#ffffff",
    loadingBar: "#ffffff",
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
language: "tr", // "tr" veya "en"
```

---

## Dosya Yapısı

```
spexy-loading/
├── fxmanifest.lua
├── preview.png
├── README.md
└── html/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── config.js
    │   └── app.js
    └── assets/
        ├── img/
        │   ├── logo.png
        │   └── bg1.jpg
        └── music/
            └── track1.mp3
```

---

## Dosya Önerileri

| Dosya | Önerilen Format | Notlar |
|---|---|---|
| Logo | PNG, 256x256 | Şeffaf arka plan tercih edilir |
| Arka plan görseli | JPG/WEBP | Minimum 1920x1080 |
| Müzik | MP3 veya OGG | Hızlı yükleme için 8MB altı tutun |

---

## Notlar

- Canlı oyuncu sayısı için `cfxId` alanı gereklidir. ID'nizi [https://servers.fivem.net](https://servers.fivem.net) adresinden bulabilirsiniz.
- Müzik otomatik oynatma, ilk kullanıcı etkileşiminden önce tarayıcı tarafından engellenebilir. Resource bunu otomatik olarak yönetir.
- Sol panel, sol üst köşedeki hamburger düğmesi kullanılarak açılıp kapatılabilir.

---

## Lisans

Bu proje Spexy Development tarafından geliştirilmiş ve sürdürülen bir çalışmadır.  
Kendi sunucunuz için kullanabilir ve değiştirebilirsiniz. İzin alınmadan yeniden dağıtım veya satışı yasaktır.

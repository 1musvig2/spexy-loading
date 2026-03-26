/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║         SPEXY LOADING SCREEN - APP.JS v1.1.0          ║
 * ║   Collapsible Panel | Centered Loading | Cursor Fix   ║
 * ╚═══════════════════════════════════════════════════════╝
 */

"use strict";

const $ = (sel) => document.querySelector(sel);

// ─── TRANSLATION HELPER ───────────────────────────────────
function t(key) {
    const lang = SpexyCFG.language || "tr";
    return SpexyCFG.translations[lang]?.[key] || SpexyCFG.translations["tr"]?.[key] || key;
}

// ─── CURSOR FIX ───────────────────────────────────────────
// FiveM NUI bazen cursor'u gizler. Bu fix tüm cursor event'lerini yakalar.
function initCursorFix() {
    // NUI cursor mesajını dinle
    window.addEventListener("message", (e) => {
        if (e.data.type === "showCursor" || e.data.eventName === "loadingScreenSetCursor") {
            document.body.style.cursor = "default";
        }
    });

    // Mouse hareket edince cursor'un görünür olmasını garantile
    document.addEventListener("mousemove", () => {
        if (document.body.style.cursor === "none") {
            document.body.style.cursor = "default";
        }
    }, { passive: true });

    // FiveM'in cursor özelliğini aktif etmek için
    if (typeof invokeNative !== "undefined") {
        try { invokeNative("showCursor", "true"); } catch(e) {}
    }
}

// ─── APPLY COLORS ─────────────────────────────────────────
function applyColors() {
    const root = document.documentElement;
    const c = SpexyCFG.colors;
    root.style.setProperty("--bg", c.background);
    root.style.setProperty("--surface", c.surface);
    root.style.setProperty("--surface-hover", c.surfaceHover);
    root.style.setProperty("--border", c.border);
    root.style.setProperty("--border-accent", c.borderAccent);
    root.style.setProperty("--text", c.text);
    root.style.setProperty("--text-muted", c.textMuted);
    root.style.setProperty("--text-dim", c.textDim);
    root.style.setProperty("--accent", c.accent);
    root.style.setProperty("--accent-dim", c.accentDim);
    root.style.setProperty("--bar", c.loadingBar);
    root.style.setProperty("--bar-bg", c.loadingBarBg);
    root.style.setProperty("--overlay", c.overlay);
    root.style.setProperty("--font-display", SpexyCFG.fonts.display);
    root.style.setProperty("--font-body", SpexyCFG.fonts.body);
    root.style.setProperty("--font-mono", SpexyCFG.fonts.mono);
}

// ─── PANEL TOGGLE ─────────────────────────────────────────
function initPanelToggle() {
    const toggleBtn = $("#spexy-panel-toggle");
    const backdrop  = $("#spexy-backdrop");

    function openPanel() {
        document.body.classList.add("panel-open");
    }

    function closePanel() {
        document.body.classList.remove("panel-open");
    }

    function togglePanel() {
        document.body.classList.toggle("panel-open");
    }

    if (toggleBtn) toggleBtn.addEventListener("click", togglePanel);
    if (backdrop)  backdrop.addEventListener("click", closePanel);

    // ESC tuşuyla kapat
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closePanel();
    });
}

// ─── BACKGROUND ───────────────────────────────────────────
function initBackground() {
    const bg = SpexyCFG.background;
    const container = $("#spexy-bg");

    if (bg.type === "color") {
        container.style.background = SpexyCFG.colors.background;

    } else if (bg.type === "image" && bg.images?.length) {
        const img = document.createElement("img");
        img.src = bg.images[0];
        img.style.cssText = `width:100%;height:100%;object-fit:${bg.imageFit || "cover"};position:absolute;inset:0;`;
        container.appendChild(img);

    } else if (bg.type === "slideshow" && bg.images?.length) {
        let idx = 0;
        const slides = bg.images.map((src, i) => {
            const img = document.createElement("img");
            img.src = src;
            img.className = "spexy-slide" + (i === 0 ? " active" : "");
            container.appendChild(img);
            return img;
        });
        setInterval(() => {
            slides[idx].classList.remove("active");
            idx = (idx + 1) % slides.length;
            slides[idx].classList.add("active");
        }, bg.slideshowInterval || 6000);

    } else if (bg.type === "video" && bg.video) {
        const video = document.createElement("video");
        video.src = bg.video;
        video.autoplay = true;
        video.loop = bg.videoLoop !== false;
        video.muted = bg.videoMuted !== false;
        video.playsInline = true;
        video.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;";
        container.appendChild(video);

    } else {
        // default: particles
        initParticles(container);
    }
}

function initParticles(container) {
    const canvas = document.createElement("canvas");
    canvas.id = "spexy-particles";
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;z-index:0;";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let W, H, particles = [];

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function hexToRgb(hex) {
        const h = hex.replace("#", "");
        return {
            r: parseInt(h.slice(0,2), 16),
            g: parseInt(h.slice(2,4), 16),
            b: parseInt(h.slice(4,6), 16),
        };
    }

    function createParticle() {
        return {
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.4 + 0.3,
            vx: (Math.random() - 0.5) * 0.35,
            vy: -Math.random() * 0.45 - 0.08,
            opacity: Math.random() * (SpexyCFG.background.particleOpacity || 0.15),
        };
    }

    resize();
    const count = SpexyCFG.background.particleCount || 60;
    particles = Array.from({ length: count }, createParticle);

    const hexColor = SpexyCFG.background.particleColor || "#ffffff";
    const rgb = hexToRgb(hexColor);

    function draw() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${p.opacity})`;
            ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
            if (p.x < -5 || p.x > W + 5) p.x = Math.random() * W;
        });
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    draw();
}

// ─── MUSIC ────────────────────────────────────────────────
let audio = null;
let musicPlaying = false;

function initMusic() {
    const cfg = SpexyCFG.music;
    if (!cfg.enabled || !cfg.tracks?.length) return;

    audio = new Audio();
    audio.loop = cfg.loop !== false;
    audio.volume = cfg.volume ?? 0.3;
    audio.src = cfg.tracks[0];

    const tryPlay = () => {
        audio.play().then(() => { musicPlaying = true; updateMusicBtn(); }).catch(() => {});
    };

    if (cfg.autoPlay) {
        tryPlay();
        document.addEventListener("click", tryPlay, { once: true });
    }

    if (cfg.showControls) {
        const btn = $("#spexy-music-btn");
        if (btn) {
            btn.style.display = "flex";
            btn.addEventListener("click", toggleMusic);
        }
    }
}

function toggleMusic() {
    if (!audio) return;
    if (musicPlaying) {
        audio.pause();
        musicPlaying = false;
    } else {
        audio.play().catch(() => {});
        musicPlaying = true;
    }
    updateMusicBtn();
}

function updateMusicBtn() {
    const btn = $("#spexy-music-btn");
    if (!btn) return;
    const icon = btn.querySelector(".music-icon");
    if (icon) icon.textContent = musicPlaying ? "♪" : "♩";
    btn.classList.toggle("muted", !musicPlaying);
}

// ─── DISCORD PROFILE ──────────────────────────────────────
function initDiscordProfile() {
    const setProfile = (data) => {
        const avatar = $("#spexy-discord-avatar");
        const name   = $("#spexy-discord-name");
        const tag    = $("#spexy-discord-tag");
        if (avatar && data.avatar) avatar.src = data.avatar;
        if (name && data.username) name.textContent = data.username;
        if (tag) tag.textContent = "#" + (data.discriminator || "0000");
    };

    window.addEventListener("message", (e) => {
        const d = e.data;
        if (d.discord) setProfile(d.discord);
        if (d.data?.discord) setProfile(d.data.discord);
    });

    // Dev/preview fallback
    if (window.location.protocol === "file:" || window.location.hostname === "localhost") {
        setTimeout(() => setProfile({
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            username: "SpexPlayer",
            discriminator: "1234"
        }), 600);
    }
}

// ─── PLAYER COUNT ─────────────────────────────────────────
async function fetchPlayerCount() {
    const cfxId = SpexyCFG.server.cfxId;
    const countEl = $("#spexy-player-count");
    const maxEl   = $("#spexy-player-max");

    if (!cfxId || cfxId === "xxxxxx") {
        if (countEl) countEl.textContent = "—";
        if (maxEl) maxEl.textContent = "/" + SpexyCFG.server.maxPlayers;
        return;
    }
    try {
        const res  = await fetch(`https://servers-frontend.fivem.net/api/servers/single/${cfxId}`);
        const data = await res.json();
        const count = data?.Data?.clients ?? 0;
        const max   = data?.Data?.sv_maxclients ?? SpexyCFG.server.maxPlayers;
        if (countEl) countEl.textContent = count;
        if (maxEl) maxEl.textContent = "/" + max;
    } catch {
        if (countEl) countEl.textContent = "—";
    }
}

// ─── LOADING BAR ──────────────────────────────────────────
let currentProgress = 0;
let targetProgress  = 0;
let animFrame;

function setProgress(val) {
    targetProgress = Math.min(100, Math.max(0, val));
    animateProgress();
}

function animateProgress() {
    cancelAnimationFrame(animFrame);
    function step() {
        const diff = targetProgress - currentProgress;
        if (Math.abs(diff) < 0.1) {
            currentProgress = targetProgress;
        } else {
            currentProgress += diff * 0.08;
            animFrame = requestAnimationFrame(step);
        }
        const bar = $("#spexy-bar-fill");
        const pct = $("#spexy-bar-percent");
        if (bar) bar.style.width = currentProgress.toFixed(2) + "%";
        if (pct) pct.textContent = Math.round(currentProgress) + "%";
    }
    step();
}

// FiveM loading progress
window.addEventListener("message", (e) => {
    if (e.data.eventName === "loadProgress") {
        setProgress(e.data.loadFraction * 100);
    }
    if (e.data.type === "loadingScreenShutdown" || e.data.eventName === "loadingScreenShutdown") {
        fadeOut();
    }
});

// ─── RULES ────────────────────────────────────────────────
function initRules() {
    const lang  = SpexyCFG.language || "tr";
    const rules = SpexyCFG.rules[lang] || SpexyCFG.rules["tr"] || [];
    const container = $("#spexy-rules-list");
    const title     = $("#spexy-rules-title");

    if (title) title.textContent = t("rulesTitle");
    if (!container) return;

    container.innerHTML = rules.map((r, i) =>
        `<li class="spexy-rule-item" style="animation-delay:${0.05 + i * 0.07}s">
            <span class="rule-num">0${i + 1}</span>
            <span class="rule-text">${r}</span>
        </li>`
    ).join("");
}

// ─── TIPS ─────────────────────────────────────────────────
function initTips() {
    const lang = SpexyCFG.language || "tr";
    const tips = SpexyCFG.tips[lang] || SpexyCFG.tips["tr"] || [];
    if (!tips.length) return;

    let idx = 0;
    const el    = $("#spexy-tip-text");
    const label = $("#spexy-tip-label");
    if (label) label.textContent = t("loadingTip");

    function showTip() {
        if (!el) return;
        el.classList.remove("visible");
        setTimeout(() => {
            el.textContent = tips[idx];
            el.classList.add("visible");
            idx = (idx + 1) % tips.length;
        }, 400);
    }

    showTip();
    setInterval(showTip, SpexyCFG.advanced.tipInterval || 8000);
}

// ─── SOCIALS ──────────────────────────────────────────────
function initSocials() {
    const discord = SpexyCFG.socials?.discord;
    const btn = $("#spexy-discord-btn");
    if (!btn) return;
    if (discord?.enabled) {
        btn.href = discord.url || "#";
        const labelEl = btn.querySelector(".social-label");
        if (labelEl) labelEl.textContent = discord.label || "discord.gg/spexy";
        btn.style.display = "flex";
    }
}

// ─── TRANSLATIONS ─────────────────────────────────────────
function applyTranslations() {
    const connEl = $("#spexy-connecting");
    if (connEl) connEl.textContent = t("connecting");

    const playersLabel = $("#spexy-players-label");
    if (playersLabel) playersLabel.textContent = t("playersOnline");

    const barLabel = $("#spexy-loading-label");
    if (barLabel) barLabel.textContent = t("loading");

    if (SpexyCFG.advanced.showVersion) {
        const verEl = $("#spexy-version");
        if (verEl) verEl.textContent = `v${SpexyCFG.advanced.version || "1.1.0"}`;
    }
}

// ─── LOGO ─────────────────────────────────────────────────
function initLogo() {
    const logoEl = $("#spexy-logo");
    const nameEl = $("#spexy-server-name");
    if (logoEl && SpexyCFG.server.logo) logoEl.src = SpexyCFG.server.logo;
    if (nameEl) nameEl.textContent = SpexyCFG.server.name || "SPEXY ROLEPLAY";
}

// ─── FADE OUT ─────────────────────────────────────────────
function fadeOut() {
    document.body.classList.add("spexy-fade-out");
    setTimeout(() => {
        if (typeof invokeNative !== "undefined") {
            try { invokeNative("shutdown", "loadingscreen"); } catch(e) {}
        }
    }, 800);
}

// ─── DEV SIM ──────────────────────────────────────────────
function devSimulation() {
    let p = 0;
    const sim = setInterval(() => {
        p += Math.random() * 2.5;
        setProgress(p);
        if (p >= 100) clearInterval(sim);
    }, 120);
}

// ─── INIT ─────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    applyColors();
    initCursorFix();
    initBackground();
    initLogo();
    applyTranslations();
    initPanelToggle();
    initDiscordProfile();
    initMusic();
    initRules();
    initTips();
    initSocials();
    fetchPlayerCount();

    setInterval(fetchPlayerCount, SpexyCFG.advanced.playerCountRefresh || 30000);

    // Dev/preview mode
    if (window.location.protocol === "file:" || window.location.hostname === "localhost") {
        devSimulation();
    }

    // Entrance animation
    setTimeout(() => document.body.classList.add("spexy-ready"), 80);
});

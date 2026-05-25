"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Gamepad2, Dumbbell, Compass, Waves, Music4, Trophy } from "lucide-react";

// ─── Platform icons ───────────────────────────────────────────────────────────

const IcoWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="nl-ico">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const IcoTelegram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="nl-ico">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);
const IcoYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="nl-ico">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const IcoInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="nl-ico">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
const IcoSteam = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="nl-ico">
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.497 1.009 2.453-.4.957-1.497 1.41-2.454 1.012zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.663 0-3.015 1.353-3.015 3.015 0 1.663 1.353 3.015 3.015 3.015 1.663 0 3.015-1.352 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
  </svg>
);

// ─── Dock data ────────────────────────────────────────────────────────────────

const DOCK = [
  {
    id: "whatsapp",   href: "https://wa.me/79162218983",
    label: "WhatsApp",  Ico: IcoWhatsApp,
    iconColor: "#25D366",
    glow:   "rgba(37,211,102,0.60)",
    border: "rgba(37,211,102,0.45)",
    bg:     "rgba(37,211,102,0.10)",
    shine:  "rgba(37,211,102,0.18)",
  },
  {
    id: "telegram",   href: "https://t.me/YOUR_USERNAME",
    label: "Telegram",  Ico: IcoTelegram,
    iconColor: "#2AABEE",
    glow:   "rgba(42,171,238,0.60)",
    border: "rgba(42,171,238,0.40)",
    bg:     "rgba(42,171,238,0.09)",
    shine:  "rgba(42,171,238,0.16)",
  },
  {
    id: "youtube",    href: "https://youtube.com/@NeoLeoTV",
    label: "YouTube",   Ico: IcoYouTube,
    iconColor: "#FF3333",
    glow:   "rgba(255,51,51,0.58)",
    border: "rgba(255,51,51,0.38)",
    bg:     "rgba(255,51,51,0.08)",
    shine:  "rgba(255,51,51,0.15)",
  },
  {
    id: "instagram",  href: "https://instagram.com/YOUR_HANDLE",
    label: "Instagram", Ico: IcoInstagram,
    iconColor: "#E1306C",
    glow:   "rgba(225,48,108,0.58)",
    border: "rgba(225,48,108,0.38)",
    bg:     "rgba(225,48,108,0.08)",
    shine:  "rgba(225,48,108,0.15)",
  },
  {
    id: "steam",      href: "https://steamcommunity.com/id/NeoLeoTV",
    label: "Steam",     Ico: IcoSteam,
    iconColor: "#A8C6D8",
    glow:   "rgba(100,160,200,0.50)",
    border: "rgba(100,160,200,0.32)",
    bg:     "rgba(100,160,200,0.07)",
    shine:  "rgba(100,160,200,0.14)",
  },
  {
    id: "email",      href: "mailto:NeoLeo.me@gmail.com",
    label: "E-mail",    Ico: null,
    iconColor: "#00E5FF",
    glow:   "rgba(0,229,255,0.58)",
    border: "rgba(0,229,255,0.38)",
    bg:     "rgba(0,229,255,0.08)",
    shine:  "rgba(0,229,255,0.16)",
  },
] as const;

// ─── Atmosphere ───────────────────────────────────────────────────────────────

function Atmosphere() {
  return (
    <div className="nl-atm">

      {/* ══ DEPTH FOG LAYERS ════════════════════════════════════════════════ */}
      {/* Very soft ambient fog — adds cinematic depth separation */}
      <div className="nl-fog-a"/>
      <div className="nl-fog-b"/>
      <div className="nl-fog-c"/>

      {/* ══ TOP ATMOSPHERE ══════════════════════════════════════════════════ */}

      {/* Spotlight shaft from top-right */}
      <div className="nl-beam-outer"/>
      <div className="nl-beam-mid"/>
      <div className="nl-beam-core"/>

      {/* Top-right light source bloom */}
      <div className="nl-orb-tr"/>

      {/* Energy ribbons — animated slow drift upward */}
      <motion.div className="nl-ribbon-wrap"
        animate={{ y:[0,-6,0], opacity:[1,.85,1] }}
        transition={{ duration:9, repeat:Infinity, ease:"easeInOut" }}
      >
        <svg className="nl-ribbons" viewBox="0 0 430 320" preserveAspectRatio="xMidYMin meet">
          <defs>
            <linearGradient id="ra" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#00EEFF" stopOpacity="0"   />
              <stop offset="15%"  stopColor="#00EEFF" stopOpacity=".55" />
              <stop offset="45%"  stopColor="#00DDFF" stopOpacity=".90" />
              <stop offset="70%"  stopColor="#00CCFF" stopOpacity=".60" />
              <stop offset="100%" stopColor="#00AAFF" stopOpacity=".15" />
            </linearGradient>
            <linearGradient id="rb" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#00DDFF" stopOpacity="0"   />
              <stop offset="20%"  stopColor="#00DDFF" stopOpacity=".42" />
              <stop offset="55%"  stopColor="#00CCFF" stopOpacity=".68" />
              <stop offset="80%"  stopColor="#009EEE" stopOpacity=".35" />
              <stop offset="100%" stopColor="#0088DD" stopOpacity=".08" />
            </linearGradient>
            <linearGradient id="rc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#00CCFF" stopOpacity="0"   />
              <stop offset="25%"  stopColor="#00CCFF" stopOpacity=".28" />
              <stop offset="60%"  stopColor="#0099EE" stopOpacity=".42" />
              <stop offset="100%" stopColor="#0077CC" stopOpacity=".06" />
            </linearGradient>
            <linearGradient id="rd" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#00BBFF" stopOpacity="0"   />
              <stop offset="30%"  stopColor="#00BBFF" stopOpacity=".18" />
              <stop offset="65%"  stopColor="#0088EE" stopOpacity=".28" />
              <stop offset="100%" stopColor="#0055BB" stopOpacity=".05" />
            </linearGradient>
            <radialGradient id="pt" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#00EEFF" stopOpacity="1"  />
              <stop offset="100%" stopColor="#00EEFF" stopOpacity="0"  />
            </radialGradient>
            <filter id="rblur">  <feGaussianBlur stdDeviation="2.5"/> </filter>
            <filter id="rblur2"> <feGaussianBlur stdDeviation="4"/>   </filter>
          </defs>

          {/* Ribbon A — brightest */}
          <path d="M -10 185 C 60 160,130 90,210 68 S 360 52,440 28"
            stroke="url(#ra)" strokeWidth="14" fill="none" filter="url(#rblur)" opacity=".9"/>
          <path d="M -10 185 C 60 160,130 90,210 68 S 360 52,440 28"
            stroke="url(#ra)" strokeWidth="4"  fill="none" opacity=".65"/>

          {/* Ribbon B */}
          <path d="M -10 210 C 50 188,120 118,200 94 S 355 75,440 50"
            stroke="url(#rb)" strokeWidth="10" fill="none" filter="url(#rblur)" opacity=".85"/>
          <path d="M -10 210 C 50 188,120 118,200 94 S 355 75,440 50"
            stroke="url(#rb)" strokeWidth="3"  fill="none" opacity=".45"/>

          {/* Ribbon C */}
          <path d="M -10 240 C 45 220,115 155,195 128 S 350 108,440 78"
            stroke="url(#rc)" strokeWidth="8"  fill="none" filter="url(#rblur2)" opacity=".70"/>

          {/* Ribbon D — wide diffuse base */}
          <path d="M -10 268 C 40 252,110 196,188 168 S 345 148,440 112"
            stroke="url(#rd)" strokeWidth="16" fill="none" filter="url(#rblur2)" opacity=".55"/>

          {/* Particles along ribbons — CSS-animated stagger via className */}
          <circle cx="52"  cy="174" r="1.5" fill="url(#pt)" className="nl-pt nl-pt-a"/>
          <circle cx="98"  cy="148" r="1.0" fill="url(#pt)" className="nl-pt nl-pt-b"/>
          <circle cx="142" cy="118" r="2.0" fill="url(#pt)" className="nl-pt nl-pt-c"/>
          <circle cx="188" cy="96"  r="1.2" fill="url(#pt)" className="nl-pt nl-pt-d"/>
          <circle cx="236" cy="80"  r="1.8" fill="url(#pt)" className="nl-pt nl-pt-e"/>
          <circle cx="284" cy="68"  r="1.0" fill="url(#pt)" className="nl-pt nl-pt-f"/>
          <circle cx="332" cy="58"  r="1.5" fill="url(#pt)" className="nl-pt nl-pt-a"/>
          <circle cx="388" cy="44"  r="1.2" fill="url(#pt)" className="nl-pt nl-pt-b"/>
          <circle cx="72"  cy="196" r="1.0" fill="url(#pt)" className="nl-pt nl-pt-c"/>
          <circle cx="160" cy="142" r="1.5" fill="url(#pt)" className="nl-pt nl-pt-d"/>
          <circle cx="254" cy="102" r="1.0" fill="url(#pt)" className="nl-pt nl-pt-e"/>
          <circle cx="358" cy="82"  r="1.3" fill="url(#pt)" className="nl-pt nl-pt-f"/>
          <circle cx="30"  cy="140" r="1.2" fill="url(#pt)" className="nl-pt nl-pt-b"/>
          <circle cx="200" cy="48"  r="1.4" fill="url(#pt)" className="nl-pt nl-pt-d"/>
          <circle cx="310" cy="32"  r="1.0" fill="url(#pt)" className="nl-pt nl-pt-a"/>
          <circle cx="400" cy="16"  r="1.6" fill="url(#pt)" className="nl-pt nl-pt-e"/>
        </svg>
      </motion.div>

      {/* ══ AMBIENT ORBS ════════════════════════════════════════════════════ */}
      <div className="nl-orb-bl"/>
      <div className="nl-orb-center"/>

      {/* ══ BOTTOM HUD SYSTEM ═══════════════════════════════════════════════ */}
      <div className="nl-rise-left"/>
      <div className="nl-rise-right"/>

      {/* HUD perspective rings */}
      <svg className="nl-hud" viewBox="0 0 430 180" preserveAspectRatio="xMidYMax meet">
        <defs>
          <linearGradient id="hr1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#00EEFF" stopOpacity=".12"/>
            <stop offset="28%"  stopColor="#00EEFF" stopOpacity=".55"/>
            <stop offset="50%"  stopColor="#00FFFF" stopOpacity=".80"/>
            <stop offset="72%"  stopColor="#00EEFF" stopOpacity=".55"/>
            <stop offset="100%" stopColor="#00EEFF" stopOpacity=".12"/>
          </linearGradient>
          <linearGradient id="hr2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#00DDFF" stopOpacity=".06"/>
            <stop offset="50%"  stopColor="#00DDFF" stopOpacity=".38"/>
            <stop offset="100%" stopColor="#00DDFF" stopOpacity=".06"/>
          </linearGradient>
          <linearGradient id="hr3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#00CCFF" stopOpacity=".04"/>
            <stop offset="50%"  stopColor="#00CCFF" stopOpacity=".22"/>
            <stop offset="100%" stopColor="#00CCFF" stopOpacity=".04"/>
          </linearGradient>
          <linearGradient id="hr4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#00BBFF" stopOpacity=".02"/>
            <stop offset="50%"  stopColor="#00BBFF" stopOpacity=".12"/>
            <stop offset="100%" stopColor="#00BBFF" stopOpacity=".02"/>
          </linearGradient>
          <radialGradient id="hbloom" cx="50%" cy="100%" r="60%">
            <stop offset="0%"   stopColor="#00EEFF" stopOpacity=".18"/>
            <stop offset="40%"  stopColor="#00AAFF" stopOpacity=".06"/>
            <stop offset="100%" stopColor="#0044AA" stopOpacity="0"  />
          </radialGradient>
          {/* Scan sweep gradient — bright moving spot */}
          <linearGradient id="hscan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#00FFFF" stopOpacity="0"  />
            <stop offset="48%"  stopColor="#00FFFF" stopOpacity="0"  />
            <stop offset="50%"  stopColor="#00FFFF" stopOpacity=".70"/>
            <stop offset="52%"  stopColor="#00FFFF" stopOpacity="0"  />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0"  />
          </linearGradient>
          <filter id="hglow">
            <feGaussianBlur stdDeviation="1.8" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Bloom */}
        <ellipse cx="215" cy="180" rx="200" ry="80" fill="url(#hbloom)"/>

        {/* Ring 4 */}
        <ellipse cx="215" cy="178" rx="200" ry="42" fill="none"
          stroke="url(#hr4)" strokeWidth="1.2"/>
        {/* Ring 3 */}
        <ellipse cx="215" cy="178" rx="158" ry="32" fill="none"
          stroke="url(#hr3)" strokeWidth="1.2"/>
        {/* Ring 2 */}
        <ellipse cx="215" cy="178" rx="118" ry="24" fill="none"
          stroke="url(#hr2)" strokeWidth="1.4"/>
        {/* Ring 1 — innermost, glowing */}
        <ellipse cx="215" cy="178" rx="80"  ry="16" fill="none"
          stroke="url(#hr1)" strokeWidth="2" filter="url(#hglow)"/>

        {/* Scan sweep overlay — animates via CSS translateX */}
        <ellipse cx="215" cy="178" rx="158" ry="32" fill="none"
          stroke="url(#hscan)" strokeWidth="3"
          className="nl-hud-scan"/>

        {/* Centre tick + dot */}
        <line x1="215" y1="162" x2="215" y2="178"
          stroke="#00EEFF" strokeWidth="1" opacity=".40"/>
        <circle cx="215" cy="163" r="2" fill="#00EEFF" opacity=".35"/>

        {/* Spokes */}
        {[-60,-30,0,30,60].map((deg,i) => {
          const a = (deg - 90) * Math.PI / 180;
          const sx = 215 + 80 * Math.cos(a);
          const sy = 178 + 16 * Math.sin(a);
          const ex = 215 + 90 * Math.cos(a);
          const ey = 178 + 18 * Math.sin(a);
          return <line key={i} x1={sx} y1={sy} x2={ex} y2={ey}
            stroke="#00EEFF" strokeWidth="0.8" opacity=".28"/>;
        })}
      </svg>
    </div>
  );
}

// ─── Stars ────────────────────────────────────────────────────────────────────

function Stars() {
  const pts = [
    {x:"6%",  y:"5%",  s:2.0,o:.72,d:"0s"   },{x:"18%", y:"2%",  s:1.3,o:.50,d:".4s"  },
    {x:"37%", y:"3%",  s:2.4,o:.82,d:".9s"  },{x:"61%", y:"1.5%",s:1.5,o:.58,d:".2s"  },
    {x:"77%", y:"6%",  s:2.0,o:.68,d:"1.1s" },{x:"90%", y:"13%", s:1.3,o:.48,d:".6s"  },
    {x:"95%", y:"29%", s:1.7,o:.52,d:"1.4s" },{x:"97%", y:"50%", s:1.1,o:.38,d:".8s"  },
    {x:"3%",  y:"21%", s:1.5,o:.46,d:".3s"  },{x:"2%",  y:"44%", s:1.1,o:.36,d:"1.0s" },
    {x:"4%",  y:"67%", s:1.7,o:.52,d:".5s"  },{x:"10%", y:"84%", s:1.3,o:.42,d:"1.3s" },
    {x:"34%", y:"92%", s:2.1,o:.56,d:".7s"  },{x:"57%", y:"94%", s:1.5,o:.42,d:"1.6s" },
    {x:"74%", y:"89%", s:1.7,o:.52,d:".15s" },{x:"88%", y:"79%", s:1.3,o:.40,d:"1.2s" },
    {x:"50%", y:"14%", s:1.6,o:.46,d:".55s" },{x:"70%", y:"60%", s:1.3,o:.36,d:".85s" },
    {x:"25%", y:"50%", s:1.1,o:.30,d:"1.7s" },{x:"82%", y:"44%", s:1.5,o:.40,d:".35s" },
  ];
  return (
    <div style={{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden"}}>
      {pts.map((p,i)=>(
        <span key={i} style={{
          position:"absolute", left:p.x, top:p.y,
          width:p.s, height:p.s, borderRadius:"50%",
          background:"#00E5FF", opacity:p.o,
          animation:`nlStar 3.5s ${p.d} ease-in-out infinite`,
        }}/>
      ))}
    </div>
  );
}

// ─── Dock button ──────────────────────────────────────────────────────────────

type DockEntry = typeof DOCK[number];

function DockBtn({ d, idx }: { d: DockEntry; idx: number }) {
  return (
    <motion.a
      href={d.href}
      target="_blank" rel="noopener noreferrer"
      aria-label={d.label}
      initial={{ opacity:0, y:18, scale:.80 }}
      animate={{ opacity:1, y:0,  scale:1   }}
      transition={{ delay: .82 + idx*.065, duration:.50, ease:[.16,1,.3,1] }}
      whileTap={{ scale:.86 }}
      className="nl-btn"
      style={{
        "--btn-size": "clamp(52px, 12.5vw, 66px)",
        "--btn-r":    "clamp(13px, 3.2vw, 17px)",
      } as React.CSSProperties}
    >
      <span className="nl-btn-face" style={{
        "--btn-bg":     d.bg,
        "--btn-border": d.border,
        "--btn-glow":   d.glow,
        "--btn-shine":  d.shine,
        "--btn-ico":    d.iconColor,
      } as React.CSSProperties}>
        <span className="nl-btn-specular"/>
        <span className="nl-btn-icon" style={{ color: d.iconColor }}>
          {d.Ico ? <d.Ico /> : <Mail className="nl-ico"/>}
        </span>
        <span className="nl-btn-tapglow"/>
      </span>
    </motion.a>
  );
}

// ─── World cards data ─────────────────────────────────────────────────────────

const WORLD_CARDS = [
  { Ico: Gamepad2, label: "Gaming & VR",              sub: "Next-level play"    },
  { Ico: Dumbbell, label: "Boxing & Athletics",        sub: "Train. Fight. Win." },
  { Ico: Compass,  label: "Exploration & Creativity",  sub: "Beyond the map"    },
  { Ico: Waves,    label: "Swimming & Diving",         sub: "Fluid & fearless"   },
  { Ico: Music4,   label: "Break Dance & Acrobatics",  sub: "Move with power"    },
  { Ico: Trophy,   label: "Tennis & Horse Riding",     sub: "Speed & precision"  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HeroPage() {
  const { scrollY } = useScroll();
  const emblScale  = useTransform(scrollY, [0, 320], [1, 0.74]);
  const titleScale = useTransform(scrollY, [0, 320], [1, 0.82]);
  const titleY     = useTransform(scrollY, [0, 320], [0, -95]);
  const dockY      = useTransform(scrollY, [0, 320], [0, -135]);
  const sloganOp   = useTransform(scrollY, [0, 160], [1, 0]);
  const sceneY     = useTransform(scrollY, [0, 320], ["0svh", "-25svh"]);

  return (
    <main className="nl-root">
      <Atmosphere/>
      <Stars/>

      {/* ══ HERO SCENE ══════════════════════════════════════════════════════ */}
      <div className="nl-hero-scroll-space">
      <div className="nl-hero-sticky-wrap">
      <motion.div className="nl-scene" style={{ y: sceneY }}>

        {/* ── Emblem — transparent PNG, glow behind ── */}
        <motion.div className="nl-emblem-wrap"
          initial={{ opacity:0, scale:.55 }}
          animate={{ opacity:1, scale:1  }}
          transition={{ duration:.88, ease:[.16,1,.3,1] }}
          style={{ scale: emblScale }}
        >
          {/* Glow layers sit BEHIND the image — z-index lower */}
          {/* Outer aura — slow wide breathe */}
          <motion.div className="nl-emblem-aura"
            animate={{ opacity:[.28,.48,.28], scale:[1,1.12,1] }}
            transition={{ duration:5.5, repeat:Infinity, ease:"easeInOut" }}
          />
          {/* Inner halo — faster tighter pulse */}
          <motion.div className="nl-emblem-halo"
            animate={{ opacity:[.50,.82,.50], scale:[1,1.05,1] }}
            transition={{ duration:3.4, repeat:Infinity, ease:"easeInOut", delay:.8 }}
          />
          {/* Rim shimmer — ultra-subtle ring that rotates */}
          <motion.div className="nl-emblem-rim"
            animate={{ rotate:[0,360] }}
            transition={{ duration:18, repeat:Infinity, ease:"linear" }}
          />

          {/* Image — floats + almost-imperceptible slow rock */}
          <motion.div className="nl-emblem-float"
            animate={{
              y:      [0, -8, -2, -9, 0],
              rotate: [0, 0.4, -0.3, 0.5, 0],
            }}
            transition={{ duration:7, repeat:Infinity, ease:"easeInOut" }}
          >
            <Image
              src="/emblem-transparent.png"
              alt="NeoLeo emblem"
              width={240}
              height={240}
              className="nl-emblem-img"
              priority
            />
          </motion.div>
        </motion.div>

        {/* ── Title ── */}
        <motion.h1 className="nl-title"
          initial={{ opacity:0, y:18 }}
          animate={{ opacity:1, y:0  }}
          transition={{ delay:.46, duration:.65, ease:"easeOut" }}
          style={{ scale: titleScale, y: titleY }}
        >
          NeoLeo
        </motion.h1>

        {/* ── Slogan ── */}
        <motion.p className="nl-slogan"
          initial={{ opacity:0, y:12 }}
          animate={{ opacity:1, y:0  }}
          transition={{ delay:.64, duration:.55, ease:"easeOut" }}
          style={{ opacity: sloganOp }}
        >
          Gamer · Creator · Explorer
        </motion.p>

        {/* ── Icon dock ── */}
        <motion.div className="nl-dock"
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0  }}
          transition={{ delay:.78, duration:.58, ease:[.16,1,.3,1] }}
          style={{ y: dockY }}
        >
          {DOCK.map((d,i) => <DockBtn key={d.id} d={d} idx={i}/>)}
        </motion.div>

        {/* ── Domain watermark ── */}
        <motion.p className="nl-domain"
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1.8, duration:.9 }}
        >
          neoleo.me
        </motion.p>
      </motion.div>
      </div>
      </div>

      {/* ══ NELEO WORLD SECTION */}
      <section className="nl-world">
        {/* Ambient glow behind grid */}
        <div className="nl-world-glow"/>
        <div className="nl-world-inner">
          <p className="nl-world-eyebrow">Identity Core</p>
          <h2 className="nl-world-title">NeoLeo World</h2>
          <div className="nl-world-grid">
            {WORLD_CARDS.map((card) => (
              <div key={card.label} className="nl-card">
                <span className="nl-card-ico-wrap">
                  <card.Ico size={26} strokeWidth={1.5}/>
                </span>
                <span className="nl-card-label">{card.label}</span>
                <span className="nl-card-sub">{card.sub}</span>
              </div>
            ))}
          </div>
          {/* Bottom HUD rings */}
          <svg className="nl-world-hud" viewBox="0 0 430 120" preserveAspectRatio="xMidYMax meet">
            <defs>
              <linearGradient id="whr1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#00EEFF" stopOpacity=".04"/>
                <stop offset="50%"  stopColor="#00EEFF" stopOpacity=".28"/>
                <stop offset="100%" stopColor="#00EEFF" stopOpacity=".04"/>
              </linearGradient>
              <linearGradient id="whr2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#00DDFF" stopOpacity=".02"/>
                <stop offset="50%"  stopColor="#00DDFF" stopOpacity=".14"/>
                <stop offset="100%" stopColor="#00DDFF" stopOpacity=".02"/>
              </linearGradient>
            </defs>
            <ellipse cx="215" cy="118" rx="180" ry="28" fill="none" stroke="url(#whr1)" strokeWidth="1.4"/>
            <ellipse cx="215" cy="118" rx="130" ry="20" fill="none" stroke="url(#whr2)" strokeWidth="1.0"/>
            <ellipse cx="215" cy="118" rx="80"  ry="12" fill="none" stroke="url(#whr1)" strokeWidth="0.8" opacity=".5"/>
          </svg>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700;900&display=swap');

        /* ══ KEYFRAMES ══════════════════════════════════════════════════════ */

        @keyframes nlStar {
          0%,100% { opacity: inherit; transform: scale(1);   }
          50%      { opacity: .10;    transform: scale(.60); }
        }

        /* Ribbon particles — 6 staggered phases, opacity+scale only */
        @keyframes nlPt {
          0%,100% { opacity: .72; transform: scale(1);    }
          50%      { opacity: .12; transform: scale(.55); }
        }
        .nl-pt   { animation: nlPt 3s ease-in-out infinite; }
        .nl-pt-a { animation-delay: 0s;    animation-duration: 3.2s; }
        .nl-pt-b { animation-delay: .55s;  animation-duration: 2.8s; }
        .nl-pt-c { animation-delay: 1.1s;  animation-duration: 3.6s; }
        .nl-pt-d { animation-delay: 1.65s; animation-duration: 3.0s; }
        .nl-pt-e { animation-delay: 2.2s;  animation-duration: 2.6s; }
        .nl-pt-f { animation-delay: 2.75s; animation-duration: 3.4s; }

        /* HUD scan sweep — stroke-dashoffset only (GPU composited) */
        @keyframes nlScan {
          0%   { stroke-dashoffset: 1000; opacity: 0;   }
          8%   { opacity: .65; }
          92%  { opacity: .55; }
          100% { stroke-dashoffset: 0;    opacity: 0;   }
        }
        .nl-hud-scan {
          stroke-dasharray: 60 940;
          animation: nlScan 6s cubic-bezier(.4,0,.6,1) infinite;
        }

        /* Button shimmer — translateX only (GPU) */
        @keyframes nlShimmer {
          0%   { transform: translateX(-130%); opacity: 0;  }
          12%  { opacity: 1; }
          88%  { opacity: .7; }
          100% { transform: translateX(230%);  opacity: 0;  }
        }
        .nl-btn:nth-child(1) .nl-btn-specular { animation-delay: 0s;   }
        .nl-btn:nth-child(2) .nl-btn-specular { animation-delay: .85s; }
        .nl-btn:nth-child(3) .nl-btn-specular { animation-delay: 1.7s; }
        .nl-btn:nth-child(4) .nl-btn-specular { animation-delay: 2.55s;}
        .nl-btn:nth-child(5) .nl-btn-specular { animation-delay: 3.4s; }
        .nl-btn:nth-child(6) .nl-btn-specular { animation-delay: 4.25s;}

        /* Fog pulse — opacity+scale only */
        @keyframes nlFog {
          0%,100% { opacity: .55; transform: scale(1);    }
          50%      { opacity: .85; transform: scale(1.08); }
        }

        /* ══ ROOT ══════════════════════════════════════════════════════════ */
        .nl-root {
          position: relative;
          min-height: 100svh;
          width: 100%;
          overflow-x: hidden;
          background:
            radial-gradient(ellipse 140% 60% at 50% -10%,
              #062030 0%, #020e1c 35%, #010810 65%, #010810 100%);
          font-family: 'Rajdhani', 'Segoe UI', sans-serif;
          user-select: none;
        }

        /* ══ ATMOSPHERE ════════════════════════════════════════════════════ */
        .nl-atm {
          position: absolute; inset: 0;
          pointer-events: none; overflow: hidden; z-index: 1;
        }

        /* Depth fog */
        .nl-fog-a {
          position: absolute; top: 30%; left: -10%;
          width: 120%; height: 40%;
          background: radial-gradient(ellipse 80% 100% at 50% 50%,
            rgba(0,60,120,.08) 0%, transparent 70%);
          filter: blur(40px);
          animation: nlFog 12s ease-in-out infinite;
        }
        .nl-fog-b {
          position: absolute; top: 55%; left: 20%;
          width: 80%; height: 30%;
          background: radial-gradient(ellipse,
            rgba(0,100,160,.06) 0%, transparent 70%);
          filter: blur(35px);
          animation: nlFog 16s ease-in-out infinite 3s;
        }
        .nl-fog-c {
          position: absolute; bottom: 15%; left: -5%;
          width: 110%; height: 25%;
          background: radial-gradient(ellipse,
            rgba(0,40,100,.07) 0%, transparent 70%);
          filter: blur(45px);
          animation: nlFog 20s ease-in-out infinite 7s;
        }

        /* Beams */
        .nl-beam-outer {
          position: absolute; top: -8%; right: -12%;
          width: 420px; height: 560px;
          background: linear-gradient(218deg,
            rgba(0,210,255,.13) 0%, rgba(0,150,220,.05) 38%, transparent 68%);
          transform: rotate(-8deg); transform-origin: top right;
          filter: blur(28px);
        }
        .nl-beam-mid {
          position: absolute; top: -6%; right: -4%;
          width: 220px; height: 440px;
          background: linear-gradient(222deg,
            rgba(0,230,255,.20) 0%, rgba(0,180,255,.07) 40%, transparent 68%);
          transform: rotate(-14deg); transform-origin: top right;
          filter: blur(14px);
        }
        .nl-beam-core {
          position: absolute; top: 0; right: 6%;
          width: 56px; height: 280px;
          background: linear-gradient(180deg,
            rgba(0,245,255,.32) 0%, rgba(0,210,255,.10) 55%, transparent 100%);
          transform: rotate(-20deg); transform-origin: top center;
          filter: blur(5px);
        }
        .nl-orb-tr {
          position: absolute; top: -12%; right: -18%;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle,
            rgba(0,200,255,.20) 0%, rgba(0,130,220,.08) 45%, transparent 72%);
          filter: blur(50px);
        }

        /* Ribbon wrapper — Framer Motion handles y drift */
        .nl-ribbon-wrap {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; pointer-events: none;
        }
        .nl-ribbons {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 42%;
        }

        /* Orbs */
        .nl-orb-bl {
          position: absolute; bottom: 8%; left: -22%;
          width: 460px; height: 460px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,50,190,.13) 0%, transparent 70%);
          filter: blur(62px);
        }
        .nl-orb-center {
          position: absolute; top: 12%; left: 50%;
          transform: translateX(-50%);
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,220,255,.06) 0%, transparent 58%);
          filter: blur(52px);
        }

        /* Corner rises */
        .nl-rise-left {
          position: absolute; bottom: -4%; left: -8%;
          width: 300px; height: 260px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(0,180,220,.10) 0%, transparent 70%);
          filter: blur(38px);
        }
        .nl-rise-right {
          position: absolute; bottom: -4%; right: -8%;
          width: 280px; height: 240px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(0,100,200,.09) 0%, transparent 70%);
          filter: blur(32px);
        }

        /* HUD SVG */
        .nl-hud {
          position: absolute; bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 100%; max-width: 500px; height: 180px;
          overflow: visible;
        }

        /* ══ SCENE ═════════════════════════════════════════════════════════ */
        .nl-hero-scroll-space {
          position: relative;
          height: 56svh;
        }
        .nl-hero-sticky-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          height: 100svh;
          width: 100%;
          pointer-events: none;
        }
        .nl-scene {
          position: absolute; inset: 0; max-width: 430px;
          margin: 0 auto; padding: 0 24px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 0;
          pointer-events: auto;
        }

        /* ══ EMBLEM ════════════════════════════════════════════════════════ */
        .nl-emblem-wrap {
          position: relative; display: flex;
          align-items: center; justify-content: center;
          margin-bottom: clamp(14px, 4vw, 22px);
          width: clamp(283px, 71vw, 322px);
          height: clamp(283px, 71vw, 322px);
        }
        .nl-emblem-aura {
          position: absolute; inset: -50%; z-index: 0; border-radius: 50%;
          background: radial-gradient(circle,
            rgba(0,200,255,.14) 0%, rgba(0,100,220,.05) 45%, transparent 70%);
          filter: blur(40px); pointer-events: none;
        }
        .nl-emblem-halo {
          position: absolute; inset: -28%; z-index: 0; border-radius: 50%;
          background: radial-gradient(circle,
            rgba(0,220,255,.28) 0%, rgba(0,150,255,.10) 40%, transparent 68%);
          filter: blur(22px); pointer-events: none;
        }
        /* Rim — rotating conic arc, Framer Motion spins it */
        .nl-emblem-rim {
          position: absolute; inset: -4%; z-index: 0; border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(0,230,255,.18) 40deg,
            transparent 80deg,
            transparent 360deg
          );
          pointer-events: none;
        }
        .nl-emblem-float {
          position: relative; z-index: 1; width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
        }
        .nl-emblem-img {
          width: 100% !important; height: 100% !important;
          object-fit: contain; display: block;
        }
        .nl-emblem-float > span {
          width: 100% !important; height: 100% !important;
        }

        /* ══ TITLE ═════════════════════════════════════════════════════════ */
        .nl-title {
          margin: 0 0 clamp(8px, 2.2vw, 12px);
          font-size: clamp(3.0rem, 15.5vw, 3.6rem);
          font-weight: 900; letter-spacing: .17em;
          text-transform: uppercase; line-height: 1;
          background: linear-gradient(135deg,
            #9FFFFF 0%, #00E5FF 28%, #28B8FF 62%, #0077EE 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 22px rgba(0,229,255,.65));
        }

        /* ══ SLOGAN ════════════════════════════════════════════════════════ */
        .nl-slogan {
          margin: 0 0 clamp(22px, 5.5vw, 32px);
          font-size: clamp(.82rem, 4vw, .96rem);
          font-weight: 600; letter-spacing: .18em;
          text-transform: uppercase; color: rgba(150,215,255,.70);
        }

        /* ══ DOCK ══════════════════════════════════════════════════════════ */
        .nl-dock {
          display: flex; flex-direction: row;
          justify-content: center; align-items: center;
          gap: clamp(9px, 2.2vw, 13px);
          margin-bottom: clamp(20px, 5vw, 30px);
        }

        /* ══ BUTTONS ═══════════════════════════════════════════════════════ */
        .nl-btn {
          display: flex; align-items: center; justify-content: center;
          width: var(--btn-size); height: var(--btn-size);
          border-radius: var(--btn-r);
          text-decoration: none; cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .nl-btn-face {
          position: relative; display: flex;
          align-items: center; justify-content: center;
          width: 100%; height: 100%; border-radius: var(--btn-r);
          background: var(--btn-bg);
          border: 1px solid var(--btn-border);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 0 0 0 var(--btn-glow), 0 4px 18px rgba(0,0,0,.50);
          transition: box-shadow .22s ease, transform .15s ease;
          overflow: hidden;
        }
        .nl-btn:active .nl-btn-face {
          box-shadow: 0 0 20px 5px var(--btn-glow), 0 4px 18px rgba(0,0,0,.50),
            inset 0 0 14px 1px var(--btn-shine);
          transform: scale(.91);
        }
        .nl-btn:active .nl-btn-tapglow { opacity: 1 !important; }

        /* Animated shimmer streak — translateX GPU only */
        .nl-btn-specular {
          position: absolute; top: 0; left: 0; right: 0; height: 100%;
          background: linear-gradient(105deg,
            transparent 30%, rgba(255,255,255,.18) 50%, transparent 70%);
          border-radius: inherit; pointer-events: none;
          animation: nlShimmer 5s ease-in-out infinite;
        }
        .nl-btn-icon {
          display: flex; align-items: center; justify-content: center;
          filter: drop-shadow(0 0 5px var(--btn-glow));
          pointer-events: none; position: relative; z-index: 1;
        }
        .nl-ico { width: clamp(22px,5.2vw,26px); height: clamp(22px,5.2vw,26px); }
        .nl-btn-tapglow {
          position: absolute; inset: 0; border-radius: inherit;
          background: radial-gradient(circle at 50% 60%,
            var(--btn-glow) 0%, transparent 70%);
          opacity: 0; transition: opacity .14s ease; pointer-events: none;
        }

        /* ══ DOMAIN ════════════════════════════════════════════════════════ */
        .nl-domain {
          margin: 0; font-size: .66rem; letter-spacing: .36em;
          text-transform: uppercase; color: rgba(0,229,255,.20); transform: translateY(-16px);
        }

        /* ══ WORLD SECTION ═════════════════════════════════════════════════ */
        .nl-world {
          position: relative; z-index: 10;
          width: 100%; padding: 42svh 20px 80px;
          display: flex; justify-content: center;
        }
        .nl-world-glow {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle,
            rgba(0,200,255,.10) 0%, rgba(0,80,180,.05) 50%, transparent 72%);
          filter: blur(48px); pointer-events: none;
        }
        .nl-world-inner {
          position: relative; width: 100%; max-width: 430px;
          display: flex; flex-direction: column;
          align-items: center; gap: 0;
        }
        .nl-world-eyebrow {
          margin: 0 0 8px;
          font-size: .72rem; font-weight: 600;
          letter-spacing: .30em; text-transform: uppercase;
          color: rgba(0,229,255,.45);
        }
        .nl-world-title {
          margin: 0 0 32px;
          font-size: clamp(1.9rem, 8vw, 2.4rem);
          font-weight: 900; letter-spacing: .12em;
          text-transform: uppercase; line-height: 1;
          background: linear-gradient(135deg, #9FFFFF 0%, #00E5FF 40%, #28B8FF 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 18px rgba(0,229,255,.40));
        }
        .nl-world-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }
        .nl-card {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; text-align: center;
          gap: 5px; padding: 14px 8px 12px;
          aspect-ratio: 1 / 1.05;
          background: linear-gradient(145deg,
            rgba(0,160,220,.09) 0%, rgba(0,40,100,.18) 100%);
          border: 1px solid rgba(0,200,255,.20);
          border-radius: 18px;
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          box-shadow:
            inset 0 1px 0 rgba(0,230,255,.10),
            0 6px 20px rgba(0,0,0,.45);
        }
        .nl-card-ico-wrap {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 10px; margin-bottom: 2px;
          background: rgba(0,180,255,.10);
          border: 1px solid rgba(0,200,255,.18);
          color: #00E5FF;
          filter: drop-shadow(0 0 5px rgba(0,220,255,.40));
        }
        .nl-card-label {
          font-size: clamp(.62rem, 2.8vw, .74rem);
          font-weight: 700; letter-spacing: .04em;
          text-transform: uppercase;
          color: rgba(160,230,255,.92);
          line-height: 1.2;
        }
        .nl-card-sub {
          font-size: .58rem; font-weight: 500;
          letter-spacing: .10em; text-transform: uppercase;
          color: rgba(0,200,255,.40);
        }
        .nl-world-hud {
          width: 100%; max-width: 430px;
          height: 60px; margin-top: 36px;
          overflow: visible; opacity: .7;
        }

        /* ══ RESETS ════════════════════════════════════════════════════════ */
        *, *::before, *::after {
          box-sizing: border-box; -webkit-tap-highlight-color: transparent;
        }
        html { scroll-behavior: smooth; }
        body { margin: 0; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
      `}</style>
    </main>
  );
}
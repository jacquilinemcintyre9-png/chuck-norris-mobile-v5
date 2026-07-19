import { useState, useEffect, useRef } from 'react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const PERSONAS = [
  {
    name: 'Chuck Norris',
    title: 'Legendary Warrior',
    photo: 'https://images.unsplash.com/photo-1534205643743-6737932c79ee?w=400&h=400&fit=crop&auto=format',
    color: '#ff6f00',
    glow: 'rgba(255,111,0,0.6)',
    quotes: [
      'Chuck Norris counted to infinity — twice.',
      'Death once had a near-Chuck-Norris experience.',
      'Chuck Norris can slam a revolving door.',
      'Fear of spiders is called arachnophobia. Fear of Chuck Norris is called common sense.',
      'Chuck Norris doesn\'t do push-ups. He pushes the Earth down.',
      'Chuck Norris can divide by zero.',
      'When Chuck Norris enters a room, he doesn\'t turn the lights on. He turns the dark off.',
    ],
  },
  {
    name: 'Bruce Lee',
    title: 'The Dragon',
    photo: 'https://images.unsplash.com/photo-1600119692901-94e8b7d2eacd?w=400&h=400&fit=crop&auto=format',
    color: '#ffc107',
    glow: 'rgba(255,193,7,0.6)',
    quotes: [
      'Be water, my friend.',
      'Absorb what is useful, discard what is useless, add what is essentially your own.',
      'The key to immortality is first living a life worth remembering.',
      'Do not pray for an easy life — pray for the strength to endure a difficult one.',
      'Mistakes are always forgivable, if one has the courage to admit them.',
      'A goal is not always meant to be reached; it often serves simply as something to aim at.',
    ],
  },
  {
    name: 'Arnold S.',
    title: 'The Terminator',
    photo: 'https://images.unsplash.com/photo-1668890538504-877e118c5750?w=400&h=400&fit=crop&auto=format',
    color: '#ef5350',
    glow: 'rgba(239,83,80,0.6)',
    quotes: [
      'I\'ll be back.',
      'You are going to fail. And that\'s perfectly OK.',
      'The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it.',
      'Strength does not come from winning. Your struggles develop your strengths.',
      'Don\'t listen to the naysayers.',
      'You can have results or excuses. Not both.',
    ],
  },
]

const CATEGORIES = ['Legends', 'Warriors', 'Motivation', 'Comedy', 'Philosophy', 'Action']

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconHome({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke={active ? '#ff9800' : 'rgba(255,255,255,0.35)'}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      style={{ filter: active ? 'drop-shadow(0 0 6px rgba(255,152,0,0.8))' : 'none', transition: 'all 0.3s' }}>
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  )
}

function IconGrid({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke={active ? '#ff9800' : 'rgba(255,255,255,0.35)'}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      style={{ filter: active ? 'drop-shadow(0 0 6px rgba(255,152,0,0.8))' : 'none', transition: 'all 0.3s' }}>
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  )
}

function IconHeart({ active, filled }: { active: boolean; filled?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24"
      fill={filled ? '#ff9800' : 'none'}
      stroke={active ? '#ff9800' : 'rgba(255,255,255,0.35)'}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      style={{ filter: active ? 'drop-shadow(0 0 6px rgba(255,152,0,0.8))' : 'none', transition: 'all 0.3s' }}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

function IconDownload({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke={active ? '#ff9800' : 'rgba(255,255,255,0.35)'}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      style={{ filter: active ? 'drop-shadow(0 0 6px rgba(255,152,0,0.8))' : 'none', transition: 'all 0.3s' }}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function IconShare() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  )
}

function IconCopy() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  )
}

function IconRefresh() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  )
}

// ─── Animated Quote Text ──────────────────────────────────────────────────────

function QuoteText({ text, accentColor }: { text: string; accentColor: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [text])

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity 0.45s ease, transform 0.45s ease',
    }}>
      {/* Opening quote mark */}
      <span style={{
        fontFamily: 'Georgia, serif',
        fontSize: 48,
        lineHeight: 0.5,
        verticalAlign: 'bottom',
        color: accentColor,
        filter: `drop-shadow(0 0 8px ${accentColor})`,
        marginRight: 4,
        display: 'inline-block',
        marginBottom: -8,
      }}>"</span>
      <span style={{
        color: 'rgba(255,255,255,0.88)',
        fontSize: 15,
        fontFamily: 'Oswald, sans-serif',
        fontWeight: 300,
        letterSpacing: 0.6,
        lineHeight: 1.75,
      }}>
        {text}
      </span>
      <span style={{
        fontFamily: 'Georgia, serif',
        fontSize: 48,
        lineHeight: 0,
        verticalAlign: 'top',
        color: accentColor,
        filter: `drop-shadow(0 0 8px ${accentColor})`,
        marginLeft: 4,
        display: 'inline-block',
        marginTop: -8,
      }}>"</span>
    </div>
  )
}

// ─── Spinning Ring ────────────────────────────────────────────────────────────

function SpinningRing({ color, size, speed, reverse }: { color: string; size: number; speed: number; reverse?: boolean }) {
  const ref = useRef<SVGCircleElement>(null)
  const angle = useRef(0)
  const frame = useRef(0)

  useEffect(() => {
    const tick = () => {
      angle.current += (reverse ? -1 : 1) * speed
      if (ref.current) {
        ref.current.style.transform = `rotate(${angle.current}deg)`
        ref.current.style.transformOrigin = `${size / 2}px ${size / 2}px`
      }
      frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [speed, reverse, size])

  const r = size / 2 - 4
  const circ = 2 * Math.PI * r
  const dash = circ * 0.35

  return (
    <svg width={size} height={size} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
      <circle
        ref={ref}
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
      />
    </svg>
  )
}

// ─── Persona Selector ─────────────────────────────────────────────────────────

function PersonaChip({ persona, active, onClick }: { persona: typeof PERSONAS[0]; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '6px 14px',
        borderRadius: 20,
        border: active ? `1px solid ${persona.color}66` : '1px solid rgba(255,255,255,0.08)',
        background: active
          ? `linear-gradient(135deg, ${persona.color}22, ${persona.color}08)`
          : 'rgba(255,255,255,0.03)',
        color: active ? persona.color : 'rgba(255,255,255,0.35)',
        fontSize: 10,
        fontFamily: 'Orbitron, sans-serif',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        cursor: 'pointer',
        boxShadow: active ? `0 0 12px ${persona.color}33` : 'none',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {persona.name.split(' ')[0]}
    </button>
  )
}

// ─── Category Chip ────────────────────────────────────────────────────────────

function CategoryChip({ label, active, color, onClick }: { label: string; active: boolean; color: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '7px 16px',
        borderRadius: 20,
        border: active ? `1px solid ${color}55` : '1px solid rgba(255,255,255,0.07)',
        background: active
          ? `linear-gradient(135deg, ${color}18, ${color}06)`
          : 'rgba(255,255,255,0.03)',
        color: active ? color : 'rgba(255,255,255,0.3)',
        fontSize: 10,
        fontFamily: 'Orbitron, sans-serif',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        cursor: 'pointer',
        boxShadow: active ? `0 0 14px ${color}22` : 'none',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {label}
    </button>
  )
}

// ─── Action Button (icon) ─────────────────────────────────────────────────────

function ActionBtn({ icon, onClick, label }: { icon: React.ReactNode; onClick?: () => void; label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={label}
      style={{
        width: 42, height: 42,
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.08)',
        background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        flexShrink: 0,
      }}
    >
      {icon}
    </button>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [personaIdx, setPersonaIdx] = useState(0)
  const [quoteIdx, setQuoteIdx] = useState(0)
  const [liked, setLiked] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Legends')
  const [btnPressed, setBtnPressed] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [counter, setCounter] = useState(0)

  const persona = PERSONAS[personaIdx]

  const nextQuote = () => {
    setBtnPressed(true)
    setLiked(false)
    setCounter(c => c + 1)
    setTimeout(() => {
      setQuoteIdx(i => (i + 1) % persona.quotes.length)
      setBtnPressed(false)
    }, 200)
  }

  // reset quote when persona changes
  useEffect(() => {
    setQuoteIdx(0)
    setLiked(false)
    setImgLoaded(false)
  }, [personaIdx])

  const tabs = [
    { label: 'Home', icon: (a: boolean) => <IconHome active={a}/> },
    { label: 'Categories', icon: (a: boolean) => <IconGrid active={a}/> },
    { label: 'Favorites', icon: (a: boolean) => <IconHeart active={a}/> },
    { label: 'Download', icon: (a: boolean) => <IconDownload active={a}/> },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: `radial-gradient(ellipse at 50% 0%, #1a0800 0%, #0a0e1a 40%, #000 100%)`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '32px 16px 100px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Oswald, sans-serif',
    }}>

      {/* ── Ambient background lights ── */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {/* Main top glow — color-keyed to active persona */}
        <div style={{
          position: 'absolute',
          width: 500, height: 500, borderRadius: '50%',
          background: `radial-gradient(circle, ${persona.glow.replace('0.6', '0.12')} 0%, transparent 70%)`,
          top: -120, left: '50%', transform: 'translateX(-50%)',
          transition: 'background 0.8s ease',
        }} />
        {/* Side sweep */}
        <div style={{
          position: 'absolute',
          width: 2, height: '60%',
          background: `linear-gradient(180deg, transparent, ${persona.color}55, transparent)`,
          top: '10%', right: 40,
          transition: 'background 0.8s ease',
        }} />
        <div style={{
          position: 'absolute',
          width: 2, height: '40%',
          background: 'linear-gradient(180deg, transparent, rgba(100,120,255,0.3), transparent)',
          top: '30%', left: 40,
        }} />
        {/* Noise overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* ── Phone content ── */}
      <div style={{ width: '100%', maxWidth: 390, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>

        {/* ── Top bar ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2px' }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'Orbitron, sans-serif', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 2 }}>
              Daily Quote
            </div>
            <div style={{ color: '#fff', fontSize: 18, fontFamily: 'Orbitron, sans-serif', fontWeight: 700, letterSpacing: 2 }}>
              NEXUS<span style={{ color: persona.color, filter: `drop-shadow(0 0 6px ${persona.color})`, transition: 'all 0.5s' }}>QUOTE</span>
            </div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 10, padding: '6px 14px',
            color: 'rgba(255,255,255,0.4)',
            fontSize: 9, fontFamily: 'Orbitron, sans-serif', letterSpacing: 2,
          }}>
            #{String(counter + 1).padStart(4, '0')}
          </div>
        </div>

        {/* ── Persona selector ── */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
          {PERSONAS.map((p, i) => (
            <PersonaChip key={p.name} persona={p} active={personaIdx === i} onClick={() => setPersonaIdx(i)}/>
          ))}
        </div>

        {/* ── Main glass card ── */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          border: `1px solid rgba(255,255,255,0.09)`,
          borderRadius: 28,
          padding: '28px 22px 24px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.07)`,
        }}>
          {/* Top highlight line */}
          <div style={{
            position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
            background: `linear-gradient(90deg, transparent, ${persona.color}88, transparent)`,
            transition: 'background 0.6s ease',
          }} />
          {/* Corner glow */}
          <div style={{
            position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%',
            background: `radial-gradient(circle, ${persona.glow.replace('0.6', '0.1')} 0%, transparent 70%)`,
            transition: 'background 0.6s ease',
          }} />

          {/* ── Portrait with rings ── */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div style={{ position: 'relative', width: 130, height: 130 }}>
              {/* Outer spinning ring */}
              <SpinningRing color={persona.color} size={130} speed={0.3}/>
              {/* Inner counter-spinning ring */}
              <SpinningRing color={persona.glow.replace('0.6', '0.4')} size={110} speed={0.5} reverse/>

              {/* Static glow ring */}
              <div style={{
                position: 'absolute',
                inset: 10,
                borderRadius: '50%',
                boxShadow: `0 0 0 2px ${persona.color}66, 0 0 20px 4px ${persona.glow.replace('0.6', '0.35')}`,
                transition: 'box-shadow 0.6s ease',
              }} />

              {/* Photo */}
              <div style={{
                position: 'absolute',
                inset: 12,
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#111',
              }}>
                <img
                  src={persona.photo}
                  alt={persona.name}
                  onLoad={() => setImgLoaded(true)}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    opacity: imgLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}
                />
                {/* Overlay gradient on photo */}
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: `linear-gradient(160deg, transparent 40%, ${persona.color}33 100%)`,
                }} />
              </div>
            </div>
          </div>

          {/* Name + title */}
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <div style={{
              color: '#fff', fontSize: 16, fontFamily: 'Orbitron, sans-serif',
              fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase',
              textShadow: `0 0 16px ${persona.color}55`,
              transition: 'text-shadow 0.5s ease',
            }}>
              {persona.name}
            </div>
            <div style={{
              color: persona.color, fontSize: 9, fontFamily: 'Oswald, sans-serif',
              letterSpacing: 3, textTransform: 'uppercase', marginTop: 3,
              filter: `drop-shadow(0 0 5px ${persona.color})`,
              transition: 'filter 0.5s ease, color 0.5s ease',
            }}>
              {persona.title}
            </div>
          </div>

          {/* Quote divider */}
          <div style={{
            height: 1, marginBottom: 18,
            background: `linear-gradient(90deg, transparent, ${persona.color}44, transparent)`,
            transition: 'background 0.5s ease',
          }} />

          {/* ── Quote text ── */}
          <div style={{ minHeight: 120, marginBottom: 20 }}>
            <QuoteText text={persona.quotes[quoteIdx]} accentColor={persona.color}/>
          </div>

          {/* ── Action row ── */}
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20 }}>
            <ActionBtn icon={<IconCopy/>} label="Copy"/>
            <ActionBtn icon={<IconShare/>} label="Share"/>
            <button
              onClick={() => setLiked(l => !l)}
              style={{
                width: 42, height: 42, borderRadius: 12,
                border: liked ? `1px solid ${persona.color}66` : '1px solid rgba(255,255,255,0.08)',
                background: liked ? `${persona.color}18` : 'rgba(255,255,255,0.04)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: liked ? `0 0 14px ${persona.color}33` : 'none',
                flexShrink: 0,
              }}
            >
              <IconHeart active={liked} filled={liked}/>
            </button>
            {/* Quote counter dots */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 5, alignItems: 'center' }}>
              {persona.quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setQuoteIdx(i); setLiked(false) }}
                  style={{
                    width: i === quoteIdx ? 18 : 6,
                    height: 6, borderRadius: 3,
                    background: i === quoteIdx ? persona.color : 'rgba(255,255,255,0.15)',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'all 0.3s ease',
                    boxShadow: i === quoteIdx ? `0 0 8px ${persona.color}` : 'none',
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── NEW QUOTE button ── */}
          <button
            onClick={nextQuote}
            onMouseDown={() => setBtnPressed(true)}
            onMouseUp={() => setBtnPressed(false)}
            onMouseLeave={() => setBtnPressed(false)}
            style={{
              width: '100%',
              padding: '16px 0',
              borderRadius: 16,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#060810',
              background: `linear-gradient(135deg, ${persona.color} 0%, #ff9800 50%, #ffc107 100%)`,
              boxShadow: btnPressed
                ? `0 2px 10px ${persona.color}40`
                : `0 0 24px 4px ${persona.color}50, 0 0 60px 12px ${persona.color}18, inset 0 1px 0 rgba(255,255,255,0.3)`,
              transform: btnPressed ? 'scale(0.98)' : 'scale(1)',
              transition: 'all 0.2s ease-in-out, background 0.5s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <span style={{ display: 'flex', animation: btnPressed ? 'none' : 'spin-btn 2s linear infinite' }}>
              <IconRefresh/>
            </span>
            New Quote
          </button>
        </div>

        {/* ── Stats row ── */}
        <div style={{ display: 'flex', gap: 10 }}>
          {[
            { label: 'Total', value: String(counter + 1) },
            { label: 'Saved', value: liked ? '1' : '0' },
            { label: 'Streak', value: '7d' },
          ].map(s => (
            <div key={s.label} style={{
              flex: 1,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 14, padding: '12px 0',
              textAlign: 'center',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
            }}>
              <div style={{ color: '#fff', fontSize: 18, fontFamily: 'Orbitron, sans-serif', fontWeight: 700, letterSpacing: 1 }}>
                {s.value}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, fontFamily: 'Oswald, sans-serif', letterSpacing: 2, textTransform: 'uppercase', marginTop: 2 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Categories section ── */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 20, padding: '16px 14px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
        }}>
          <div style={{
            color: '#fff', fontSize: 11, fontFamily: 'Orbitron, sans-serif',
            letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 12,
          }}>
            Categories
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {CATEGORIES.map(c => (
              <CategoryChip
                key={c} label={c} color={persona.color}
                active={activeCategory === c}
                onClick={() => setActiveCategory(c)}
              />
            ))}
          </div>
        </div>

        {/* spacer */}
        <div style={{ height: 16 }} />
      </div>

      {/* ── Bottom Nav ── */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
        zIndex: 100,
      }}>
        <div style={{
          width: '100%', maxWidth: 390,
          background: 'rgba(4,6,14,0.88)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.7)',
          display: 'flex',
          padding: '8px 0 12px',
        }}>
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              style={{
                flex: 1,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                border: 'none', background: 'transparent', cursor: 'pointer',
                padding: '6px 0',
                position: 'relative',
              }}
            >
              {/* Active top indicator */}
              {activeTab === i && (
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                  width: 28, height: 2, borderRadius: 1,
                  background: `linear-gradient(90deg, transparent, ${persona.color}, transparent)`,
                  boxShadow: `0 0 10px 2px ${persona.color}88`,
                  transition: 'background 0.5s, box-shadow 0.5s',
                }} />
              )}
              {tab.icon(activeTab === i)}
              <span style={{
                fontSize: 9,
                fontFamily: 'Orbitron, sans-serif',
                letterSpacing: 0.8,
                textTransform: 'uppercase',
                color: activeTab === i ? persona.color : 'rgba(255,255,255,0.25)',
                transition: 'color 0.3s ease',
              }}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin-btn {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

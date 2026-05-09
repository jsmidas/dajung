/* shared.jsx — small reusable bits */
const { useState, useEffect, useRef } = React;

function Icon({ name, size = 24, weight = 400, fill = 0 }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontSize: size,
        fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}, "GRAD" 0, "opsz" ${size}`,
      }}
    >{name}</span>
  );
}

function Eyebrow({ children, num }) {
  return (
    <div className="eyebrow" style={{display:'inline-flex',alignItems:'center',gap:10}}>
      {num && <span style={{opacity:0.5}}>{num}</span>}
      <span>{children}</span>
    </div>
  );
}

function FoodImage({ kind = 'banchan', caption, label, style, children }) {
  return (
    <div className={`food-img food-img--${kind}`} style={style}>
      {label && (
        <div style={{
          position:'absolute', top:16, left:16,
          padding:'6px 10px', borderRadius:999,
          background:'rgba(255,255,255,0.92)', color:'#1B1610',
          fontFamily:'var(--font-mono)', fontSize:11,
          letterSpacing:'0.1em', textTransform:'uppercase', fontWeight:500
        }}>{label}</div>
      )}
      {caption && <div className="food-img__caption">{caption}</div>}
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, lead, align = 'left', action }) {
  return (
    <div style={{
      display:'flex',
      flexDirection: align === 'center' ? 'column' : 'row',
      alignItems: align === 'center' ? 'center' : 'flex-end',
      justifyContent:'space-between',
      gap: 24, marginBottom: 56,
      textAlign: align === 'center' ? 'center' : 'left',
    }}>
      <div style={{maxWidth: align === 'center' ? '720px' : '720px'}}>
        {eyebrow && <div style={{marginBottom:14}}><Eyebrow>{eyebrow}</Eyebrow></div>}
        <h2 className="h2" style={{margin:0}}>{title}</h2>
        {lead && <p className="lead" style={{marginTop:18, marginBottom:0}}>{lead}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

/* Counter that animates on viewport entry */
function StatNumber({ value, suffix = '', label }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1200;
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref}>
      <div className="serif" style={{fontSize:'clamp(44px,5vw,64px)',lineHeight:1,fontWeight:500,color:'var(--brand-primary)'}}>
        {v}{suffix}
      </div>
      <div style={{marginTop:10,color:'var(--fg-muted)',fontSize:14}}>{label}</div>
    </div>
  );
}

/* Tag pill */
function Pill({ children, tone }) {
  return <span className={`tag ${tone === 'primary' ? 'tag--primary' : ''}`}>{children}</span>;
}

/* Floating chat widget — KakaoTalk channel placeholder.
   Replace KAKAO_CHANNEL_URL with the real channel URL once issued. */
const KAKAO_CHANNEL_URL = ''; // e.g. 'https://pf.kakao.com/_xxxxx/chat'

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const handleStart = () => {
    if (KAKAO_CHANNEL_URL) {
      window.open(KAKAO_CHANNEL_URL, '_blank', 'noopener');
    } else {
      alert('카카오톡 채널 연결 준비 중입니다.\n전화 상담: 055-583-2480');
    }
    setOpen(false);
  };
  return (
    <>
      <button
        type="button"
        aria-label="카카오톡 상담"
        onClick={() => setOpen(o => !o)}
        style={{
          position:'fixed', right:24, bottom:24, zIndex:60,
          width:60, height:60, borderRadius:'50%',
          background:'#FEE500', color:'#3C1E1E',
          border:'none', cursor:'pointer',
          boxShadow:'0 8px 24px rgba(20,17,13,0.18), 0 2px 6px rgba(20,17,13,0.12)',
          display:'grid', placeItems:'center',
          transition:'transform 200ms',
        }}
        onMouseOver={e => e.currentTarget.style.transform='scale(1.06)'}
        onMouseOut={e => e.currentTarget.style.transform='scale(1)'}
      >
        <Icon name={open ? 'close' : 'chat_bubble'} size={26} fill={1}/>
      </button>
      {open && (
        <div style={{
          position:'fixed', right:24, bottom:96, zIndex:60,
          width:300, padding:20, borderRadius:16,
          background:'var(--bg-card)', color:'var(--fg)',
          border:'1px solid var(--border)',
          boxShadow:'0 12px 28px rgba(20,17,13,0.18)',
        }}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
            <span style={{
              width:36, height:36, borderRadius:10,
              background:'#FEE500', color:'#3C1E1E',
              display:'grid', placeItems:'center',
              fontFamily:'var(--font-serif-kr)', fontWeight:700, fontSize:17,
            }}>다</span>
            <div>
              <div className="kr-serif" style={{fontSize:15, fontWeight:600, lineHeight:1.2}}>다정캐터링 상담</div>
              <div style={{fontSize:11, color:'var(--fg-soft)', marginTop:2}}>평일 09:00 — 18:00</div>
            </div>
          </div>
          <p style={{margin:'0 0 16px', fontSize:13.5, lineHeight:1.6, color:'var(--fg-muted)'}}>
            급식 견적, 정기 도시락 구독 문의를 카카오톡으로 편하게 보내주세요.
          </p>
          <button
            type="button"
            onClick={handleStart}
            style={{
              width:'100%', padding:'12px 14px', borderRadius:10,
              background:'#FEE500', color:'#3C1E1E', border:'none',
              fontWeight:600, fontSize:14, cursor:'pointer',
              display:'inline-flex', alignItems:'center', justifyContent:'center', gap:8,
            }}
          >
            <Icon name="forum" size={18} fill={1}/>
            카카오톡으로 상담 시작
          </button>
          <a href="tel:055-583-2480" style={{
            display:'flex', alignItems:'center', justifyContent:'center', gap:8,
            marginTop:8, padding:'12px 14px', borderRadius:10,
            border:'1px solid var(--border)', color:'var(--fg)',
            fontSize:14, fontWeight:500,
          }}>
            <Icon name="call" size={18}/>
            055-583-2480 전화 상담
          </a>
        </div>
      )}
    </>
  );
}

Object.assign(window, { Icon, Eyebrow, FoodImage, SectionHeader, StatNumber, Pill, ChatWidget });

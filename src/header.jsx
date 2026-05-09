/* header.jsx — top navigation with mobile drawer */

const NAV = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '회사소개', children: [
    { id: 'about', label: '인사말' },
    { id: 'about/strength', label: '다정 강점' },
    { id: 'about/cert', label: '인증현황' },
    { id: 'about/map', label: '오시는길' },
  ]},
  { id: 'services', label: '서비스', children: [
    { id: 'services/mobile', label: '이동급식' },
    { id: 'services/lunchbox', label: '단체도시락' },
    { id: 'services/event', label: '행사 케이터링' },
    { id: 'services/subscription', label: '정기 배송' },
  ]},
  { id: 'menu', label: '주간 식단' },
  { id: 'board', label: '고객센터', children: [
    { id: 'board', label: '공지사항' },
    { id: 'board/qna', label: '온라인상담' },
  ]},
  { id: 'contact', label: '상담문의' },
];

function Logo({ onClick }) {
  return (
    <a onClick={onClick} style={{display:'flex',alignItems:'center',gap:12,cursor:'pointer'}}>
      <span aria-hidden style={{
        width: 38, height: 38, borderRadius: 10,
        background: 'var(--brand-primary)', color: 'var(--brand-on-primary)',
        display:'grid', placeItems:'center',
        fontFamily:'var(--font-serif-kr)', fontWeight: 700, fontSize: 20,
        letterSpacing: '-0.04em',
      }}>다</span>
      <span style={{display:'flex',flexDirection:'column',lineHeight:1}}>
        <span className="kr-serif" style={{fontSize:18, fontWeight: 600}}>다정캐터링</span>
        <span style={{fontSize:10, fontFamily:'var(--font-mono)', letterSpacing:'0.15em', color:'var(--fg-soft)', marginTop:3}}>DAJEONG · SINCE 2005</span>
      </span>
    </a>
  );
}

function Header({ route, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const top = route.split('/')[0] || 'home';

  return (
    <>
      <header style={{
        position:'sticky', top:0, zIndex:30,
        background: scrolled ? 'color-mix(in oklch, var(--bg) 88%, transparent)' : 'var(--bg)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 200ms, border-color 200ms',
      }}>
        <div className="container" style={{
          height: 76, display:'flex', alignItems:'center', justifyContent:'space-between', gap: 24,
        }}>
          <Logo onClick={() => navigate('home')} />

          <nav style={{display:'flex',alignItems:'center',gap:6}} className="desktop-nav">
            {NAV.map(item => (
              <div key={item.id}
                style={{position:'relative'}}
                onMouseEnter={() => item.children && setOpenMenu(item.id)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button onClick={() => navigate(item.id)} style={{
                  background:'transparent', border:'none',
                  padding:'10px 14px', borderRadius:10,
                  color: top === item.id.split('/')[0] ? 'var(--brand-primary)' : 'var(--fg)',
                  fontWeight: top === item.id.split('/')[0] ? 600 : 500,
                  fontSize:14, letterSpacing:'-0.01em',
                }}>{item.label}</button>
                {item.children && openMenu === item.id && (
                  <div style={{
                    position:'absolute', top:'100%', left:0, minWidth: 180,
                    background:'var(--bg-card)', border:'1px solid var(--border)',
                    borderRadius:12, padding:8, boxShadow:'var(--elev-3)',
                    marginTop:4,
                  }}>
                    {item.children.map(c => (
                      <button key={c.id} onClick={() => { navigate(c.id); setOpenMenu(null); }} style={{
                        display:'block', width:'100%', textAlign:'left',
                        background:'transparent', border:'none',
                        padding:'10px 12px', borderRadius:8,
                        color: route === c.id ? 'var(--brand-primary)' : 'var(--fg)',
                        fontSize: 13.5,
                      }}
                      onMouseOver={e => e.currentTarget.style.background = 'var(--bg-alt)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                      >{c.label}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div style={{display:'flex',alignItems:'center',gap:8}} className="desktop-cta">
            <a href="tel:055-583-2480" className="btn btn-ghost" style={{padding:'10px 14px',fontSize:13}}>
              <Icon name="call" size={18}/>
              055-583-2480
            </a>
            <button className="btn btn-primary" onClick={() => navigate('contact')} style={{padding:'10px 16px',fontSize:13}}>
              급식 문의
            </button>
          </div>

          <button onClick={() => setDrawer(true)} className="mobile-menu-btn" aria-label="메뉴 열기" style={{
            background:'transparent', border:'1px solid var(--border)',
            borderRadius:10, padding:8, display:'none',
          }}>
            <Icon name="menu" size={22}/>
          </button>
        </div>
      </header>

      {drawer && (
        <div style={{
          position:'fixed', inset:0, zIndex:50,
          background:'rgba(20,17,13,0.5)',
          display:'flex', justifyContent:'flex-end',
        }} onClick={() => setDrawer(false)}>
          <div onClick={e => e.stopPropagation()} style={{
            width: 320, maxWidth:'90vw', height:'100%',
            background:'var(--bg)', padding:24, overflowY:'auto',
          }}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
              <Logo />
              <button onClick={() => setDrawer(false)} style={{background:'transparent',border:'none'}}>
                <Icon name="close" size={24}/>
              </button>
            </div>
            {NAV.map(item => (
              <div key={item.id} style={{marginBottom:8}}>
                <button onClick={() => { navigate(item.id); setDrawer(false); }} style={{
                  width:'100%', textAlign:'left', background:'transparent', border:'none',
                  padding:'12px 0', fontSize:16, fontWeight:600,
                  color: top === item.id.split('/')[0] ? 'var(--brand-primary)' : 'var(--fg)',
                  borderBottom: '1px solid var(--border)',
                }}>{item.label}</button>
                {item.children && (
                  <div style={{paddingLeft:12, paddingTop:6, display:'flex',flexDirection:'column',gap:4}}>
                    {item.children.map(c => (
                      <button key={c.id} onClick={() => { navigate(c.id); setDrawer(false); }} style={{
                        background:'transparent',border:'none',textAlign:'left',
                        padding:'8px 0', fontSize:13.5, color:'var(--fg-muted)',
                      }}>{c.label}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="tel:055-583-2480" className="btn btn-primary" style={{width:'100%',justifyContent:'center',marginTop:24}}>
              <Icon name="call" size={18}/>
              055-583-2480 전화 상담
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}

Object.assign(window, { Header });

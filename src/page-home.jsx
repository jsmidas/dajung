/* page-home.jsx */

const HERO_SLIDES = [
  { kind:'banchan',  eyebrow:'01 / 운반급식',     title:'정성을 담아\n갓 지은 한 끼.', sub:'조리시설이 없어도 가능한 운반급식 — 함안에서 영남권 전역으로 매일 배송합니다.' },
  { kind:'bibimbap', eyebrow:'02 / 단체도시락',   title:'당일 조리한\n정갈한 도시락.', sub:'관공서·기업 행사·세미나까지. 50인분부터 1,000인분 이상까지 유연하게 대응합니다.' },
  { kind:'soup',     eyebrow:'03 / 행사 케이터링', title:'특별한 자리에\n걸맞은 한 상.', sub:'결혼식·세미나·파티. 영양사 식단으로 격에 맞춘 출장 케이터링.' },
  { kind:'green',    eyebrow:'04 / 정기 도시락',  title:'매일 식탁에\n다정한 한 끼를.',  sub:'곧 런칭하는 정기 도시락 구독. 주 3회·5회·매일, 영양사 식단으로 균형 잡힌 한 끼를 정기 배송합니다.' },
];

function HeroCarousel({ navigate }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(v => (v + 1) % HERO_SLIDES.length), 5400);
    return () => clearInterval(t);
  }, [paused]);
  const slide = HERO_SLIDES[i];
  return (
    <section style={{padding:'48px 0 0'}} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:64,alignItems:'center'}} className="hero-grid">
          <div>
            <div style={{marginBottom:24}}><Eyebrow>{slide.eyebrow}</Eyebrow></div>
            <h1 className="h1" style={{margin:0, whiteSpace:'pre-line'}}>{slide.title}</h1>
            <p className="lead" style={{marginTop:24}}>{slide.sub}</p>
            <div style={{display:'flex',gap:12,marginTop:36,flexWrap:'wrap'}}>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                급식 상담 신청 <Icon name="arrow_forward" size={18}/>
              </button>
              <button className="btn btn-ghost" onClick={() => navigate('about')}>
                다정캐터링 소개
              </button>
            </div>
            <div style={{marginTop:48, display:'flex', alignItems:'center', gap:16}}>
              {HERO_SLIDES.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`슬라이드 ${idx+1}`} style={{
                  background:'transparent', border:'none', cursor:'pointer', padding:0,
                  display:'flex', alignItems:'center', gap:10,
                }}>
                  <span style={{
                    width: idx === i ? 32 : 12, height:3, borderRadius:2,
                    background: idx === i ? 'var(--brand-primary)' : 'var(--border)',
                    transition:'all 300ms',
                  }}/>
                </button>
              ))}
              <span style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--fg-soft)'}}>
                {String(i+1).padStart(2,'0')} / {String(HERO_SLIDES.length).padStart(2,'0')}
              </span>
            </div>
          </div>

          <div style={{position:'relative',aspectRatio:'5/6'}}>
            {HERO_SLIDES.map((s, idx) => (
              <FoodImage key={idx} kind={s.kind} caption={s.eyebrow} style={{
                position:'absolute', inset:0,
                opacity: idx === i ? 1 : 0,
                transition:'opacity 600ms',
              }}/>
            ))}
            <div style={{
              position:'absolute', bottom:24, right:24,
              padding:'16px 20px', borderRadius:12,
              background:'rgba(255,255,255,0.96)', color:'#1B1610',
              boxShadow:'var(--elev-3)', backdropFilter:'blur(6px)',
              maxWidth:240,
            }}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'0.12em',color:'var(--brand-primary)',marginBottom:6}}>
                TODAY'S MENU
              </div>
              <div style={{fontSize:15, fontWeight:600, lineHeight:1.4}}>흑미밥 · 미역국 · 제육볶음 · 시금치나물 · 깍두기</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width:960px){.hero-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

function HeroFullbleed({ navigate }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % HERO_SLIDES.length), 5400);
    return () => clearInterval(t);
  }, []);
  return (
    <section style={{position:'relative', height:'min(90vh, 720px)', overflow:'hidden'}}>
      {HERO_SLIDES.map((s, idx) => (
        <FoodImage key={idx} kind={s.kind} style={{
          position:'absolute', inset:0, borderRadius:0,
          opacity: idx === i ? 1 : 0, transition:'opacity 800ms',
        }}/>
      ))}
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, transparent 40%, rgba(20,17,13,0.6) 100%)'}}/>
      <div className="container" style={{position:'relative', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingBottom:72, color:'#FBF7F1'}}>
        <div style={{maxWidth:680}}>
          <div style={{marginBottom:18,color:'#FBF7F1',opacity:0.85}}><Eyebrow>{HERO_SLIDES[i].eyebrow}</Eyebrow></div>
          <h1 className="h1" style={{margin:0, whiteSpace:'pre-line', color:'#FBF7F1'}}>{HERO_SLIDES[i].title}</h1>
          <p className="lead" style={{color:'#E9DFCC', marginTop:20, maxWidth:540}}>{HERO_SLIDES[i].sub}</p>
          <div style={{display:'flex',gap:12,marginTop:32}}>
            <button className="btn btn-primary" onClick={() => navigate('contact')}>급식 상담 신청 <Icon name="arrow_forward" size={18}/></button>
            <button className="btn btn-on-image" onClick={() => navigate('about')}>다정캐터링 소개</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSplit({ navigate }) {
  return (
    <section style={{padding:'56px 0'}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:16, height:'min(80vh, 640px)'}} className="hero-split">
          <div style={{background:'var(--bg-alt)', borderRadius:20, padding:40, display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Eyebrow>SINCE 2005 · 함안</Eyebrow>
            <div>
              <h1 className="serif" style={{fontSize:'clamp(36px,4vw,52px)',lineHeight:1.05,margin:0,fontWeight:500,letterSpacing:'-0.02em'}}>
                20년 노하우와<br/>함께하는<br/>급식문화.
              </h1>
              <p className="lead" style={{marginTop:20}}>운반급식부터 단체도시락, 행사 출장 케이터링까지. 정성을 담은 한 끼를 다정하게 차려드립니다.</p>
              <div style={{marginTop:28,display:'flex',gap:10}}>
                <button className="btn btn-primary" onClick={() => navigate('contact')}>상담 신청</button>
                <button className="btn btn-ghost" onClick={() => navigate('services/mobile')}>서비스 보기</button>
              </div>
            </div>
          </div>
          <FoodImage kind="banchan" caption="DAILY · BANCHAN" style={{height:'100%'}}/>
          <div style={{display:'grid',gridTemplateRows:'1fr 1fr', gap:16}}>
            <FoodImage kind="bibimbap" caption="LUNCHBOX"/>
            <FoodImage kind="soup" caption="EVENT CATERING"/>
          </div>
        </div>
      </div>
      <style>{`@media (max-width:960px){.hero-split{grid-template-columns:1fr !important; height:auto !important;}}`}</style>
    </section>
  );
}

const SERVICES = [
  { id:'services/mobile',       num:'01', kr:'이동급식',       en:'Mobile Catering',     desc:'조리시설이 없는 현장에도 따뜻한 한 끼를 운반합니다. 영남권 전역 당일 배송.', kind:'rice' },
  { id:'services/lunchbox',     num:'02', kr:'단체도시락',     en:'Group Lunchbox',       desc:'관공서·기업 행사·세미나. 50인분부터 1,000인분 이상까지 당일 조리.', kind:'bibimbap' },
  { id:'services/event',        num:'03', kr:'행사 케이터링',  en:'Event Catering',       desc:'결혼식·세미나·파티. 영양사 식단으로 격에 맞춘 출장 한 상.', kind:'soup' },
  { id:'services/subscription', num:'04', kr:'정기 배송',      en:'Subscription Box',     desc:'주 3회·5회·매일. 영양 균형을 맞춘 정기 도시락 구독.', kind:'green', isNew:true },
];

function ServicesGrid({ navigate, cardStyle = 'image' }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="OUR SERVICES"
          title={<>다정의 <span style={{color:'var(--brand-primary)'}}>네 가지 한 끼</span> 약속.</>}
          lead="현장의 규모와 자리의 격에 맞춰, 가장 따뜻한 방식으로 한 끼를 전달합니다."
          action={<button className="btn btn-ghost" onClick={() => navigate('services/mobile')}>전체 서비스 →</button>}
        />
        <div className={cardStyle === 'text' ? 'grid-2' : 'grid-4'}>
          {SERVICES.map(s => <ServiceCard key={s.id} s={s} navigate={navigate} variant={cardStyle}/>)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, navigate, variant = 'image' }) {
  if (variant === 'text') {
    return (
      <button onClick={() => navigate(s.id)} style={{
        background:'var(--bg-card)', border:'1px solid var(--border)',
        borderRadius:20, padding:'40px 36px', textAlign:'left', cursor:'pointer',
        display:'flex',flexDirection:'column',gap:18, transition:'all 200ms',
      }}
      onMouseOver={e => { e.currentTarget.style.borderColor='var(--brand-primary)'; e.currentTarget.style.transform='translateY(-2px)'; }}
      onMouseOut={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)'; }}
      >
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
          <div className="eyebrow" style={{color:'var(--fg-soft)'}}>— {s.num}</div>
          <Icon name="north_east" size={20}/>
        </div>
        <div>
          <div className="kr-serif" style={{fontSize:32,lineHeight:1.15,fontWeight:600}}>{s.kr}</div>
          <div className="eyebrow" style={{marginTop:6, color:'var(--brand-primary)'}}>{s.en}</div>
        </div>
        <p style={{margin:0, color:'var(--fg-muted)', fontSize:15, lineHeight:1.6}}>{s.desc}</p>
      </button>
    );
  }
  if (variant === 'illustration') {
    const icon = { 'services/mobile':'local_shipping','services/lunchbox':'lunch_dining','services/event':'restaurant','services/subscription':'event_repeat' }[s.id];
    return (
      <button onClick={() => navigate(s.id)} style={{
        background:'var(--bg-card)', border:'1px solid var(--border)',
        borderRadius:20, padding:28, textAlign:'left', cursor:'pointer',
        display:'flex',flexDirection:'column',gap:20, transition:'all 200ms',
      }}
      onMouseOver={e => e.currentTarget.style.boxShadow='var(--elev-3)'}
      onMouseOut={e => e.currentTarget.style.boxShadow='none'}
      >
        <div style={{
          aspectRatio:'5/4', borderRadius:14,
          background:'color-mix(in oklch, var(--brand-primary) 8%, var(--bg-alt))',
          display:'grid', placeItems:'center', color:'var(--brand-primary)',
        }}>
          <Icon name={icon} size={64} weight={400}/>
        </div>
        <div>
          <div className="eyebrow" style={{marginBottom:8}}>{s.num} · {s.en}</div>
          <div className="kr-serif" style={{fontSize:22,fontWeight:600,marginBottom:8}}>{s.kr}</div>
          <p style={{margin:0,color:'var(--fg-muted)',fontSize:14,lineHeight:1.6}}>{s.desc}</p>
        </div>
      </button>
    );
  }
  // default: image
  return (
    <button onClick={() => navigate(s.id)} style={{
      background:'transparent', border:'none', padding:0,
      textAlign:'left', cursor:'pointer',
      display:'flex',flexDirection:'column',gap:16,
    }}>
      <FoodImage kind={s.kind} label={s.num} style={{aspectRatio:'4/5'}}>
        {s.isNew && (
          <div style={{
            position:'absolute', top:16, right:16,
            padding:'5px 10px', borderRadius:999,
            background:'var(--brand-primary)', color:'var(--brand-on-primary)',
            fontFamily:'var(--font-mono)', fontSize:10, fontWeight:600,
            letterSpacing:'0.14em', textTransform:'uppercase',
            boxShadow:'var(--elev-2)',
          }}>NEW · 런칭 준비중</div>
        )}
      </FoodImage>
      <div>
        <div className="eyebrow" style={{marginBottom:6}}>{s.en}</div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className="kr-serif" style={{fontSize:22,fontWeight:600}}>{s.kr}</div>
          <Icon name="arrow_forward" size={18}/>
        </div>
        <p style={{margin:'10px 0 0', color:'var(--fg-muted)', fontSize:14, lineHeight:1.6}}>{s.desc}</p>
      </div>
    </button>
  );
}

function BrandMeaning({ navigate }) {
  return (
    <section style={{position:'relative', padding:'120px 0', overflow:'hidden'}}>
      <FoodImage kind="cedar" style={{
        position:'absolute', inset:0, borderRadius:0,
        opacity:0.92,
      }}/>
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(110deg, rgba(20,17,13,0.72) 0%, rgba(20,17,13,0.45) 55%, rgba(20,17,13,0.15) 100%)',
      }}/>
      <div className="container" style={{position:'relative'}}>
        <div style={{maxWidth:680, color:'#FBF7F1'}}>
          <div className="eyebrow" style={{color:'#F5C8BD', marginBottom:18}}>DAJEONG · 다정</div>
          <h2 className="serif" style={{
            margin:0,
            fontSize:'clamp(36px, 5vw, 56px)',
            lineHeight:1.15, fontWeight:500, letterSpacing:'-0.02em',
            color:'#FBF7F1',
          }}>
            다정이란,<br/>‘정이 많고 따뜻하다’<br/>는 뜻입니다.
          </h2>
          <p style={{
            marginTop:28, fontSize:18, lineHeight:1.75,
            color:'#E9DFCC', maxWidth:560,
          }}>
            한 끼에 마음을 담아 가까이 다가가겠다는 약속.<br/>
            20년간 함안의 부엌을 지켜온 다정캐터링은,<br/>
            오늘도 누군가의 식탁을 다정하게 차립니다.
          </p>
          <button className="btn btn-on-image" onClick={() => navigate('about')} style={{marginTop:36}}>
            다정캐터링 소개 <Icon name="arrow_forward" size={18}/>
          </button>
        </div>
      </div>
    </section>
  );
}

function StoryStrip({ navigate }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64, alignItems:'center'}} className="grid-2">
          <FoodImage kind="cedar" style={{aspectRatio:'4/5'}} caption="HAMAN · SINCE 2005"/>
          <div>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2 className="h2" style={{marginTop:14}}>경남 함안의 작은 주방에서<br/>시작했습니다.</h2>
            <p className="lead" style={{marginTop:20}}>
              2005년, 다정캐터링은 함안의 작은 주방에서 운반급식을 시작했습니다. 20년이 흐른 지금까지 변하지 않은 한 가지는 — 그 끼니가 누군가의 하루를 따뜻하게 만든다는 사실입니다.
            </p>
            <div style={{
              display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24,
              marginTop:40, paddingTop:32, borderTop:'1px solid var(--border)',
            }}>
              <StatNumber value={20} suffix="년" label="운반급식 노하우"/>
              <StatNumber value={1200} suffix="식" label="일 평균 배송"/>
              <StatNumber value={43} label="고정 거래처"/>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate('about')} style={{marginTop:36}}>
              회사 소개 자세히 보기 <Icon name="arrow_forward" size={18}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FourTiles({ navigate }) {
  const tiles = [
    { id:'about/strength', num:'01', label:'다정 강점',  en:'Special',       icon:'verified' },
    { id:'about/cert',     num:'02', label:'인증현황',  en:'Certification', icon:'workspace_premium' },
    { id:'contact',        num:'03', label:'온라인 상담', en:'Q & A',         icon:'forum' },
    { id:'about/map',      num:'04', label:'오시는길',  en:'Location',      icon:'location_on' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="grid-4">
          {tiles.map(t => (
            <button key={t.id} onClick={() => navigate(t.id)} style={{
              background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:16,
              padding:32, textAlign:'left', cursor:'pointer',
              display:'flex',flexDirection:'column',gap:18,
              transition:'all 200ms', minHeight: 200,
            }}
            onMouseOver={e => { e.currentTarget.style.background='var(--brand-primary)'; e.currentTarget.querySelectorAll('*').forEach(n=>n.style.color='var(--brand-on-primary)'); }}
            onMouseOut={e => { e.currentTarget.style.background='var(--bg-card)'; e.currentTarget.querySelectorAll('*').forEach(n=>n.style.color=''); }}
            >
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                <div className="eyebrow">{t.num}</div>
                <Icon name={t.icon} size={28}/>
              </div>
              <div style={{marginTop:'auto'}}>
                <div className="kr-serif" style={{fontSize:22,fontWeight:600}}>{t.label}</div>
                <div style={{marginTop:6, fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.12em', color:'var(--fg-soft)'}}>{t.en.toUpperCase()}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoticeCTA({ navigate, notices }) {
  return (
    <section className="section">
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:32}} className="grid-2">
          <div className="card" style={{padding:36}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
              <div>
                <Eyebrow>NOTICE</Eyebrow>
                <h3 className="h3" style={{margin:'10px 0 0'}}>공지사항</h3>
              </div>
              <button className="btn btn-ghost" onClick={() => navigate('board')} style={{padding:'8px 14px',fontSize:13}}>전체 보기 →</button>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
              {notices.slice(0,4).map((n, i) => (
                <button key={n.id} onClick={() => navigate('board')} style={{
                  display:'flex', justifyContent:'space-between', alignItems:'center',
                  padding:'18px 0', textAlign:'left',
                  background:'transparent', border:'none', cursor:'pointer',
                  borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
                  gap:24,
                }}>
                  <div style={{display:'flex',alignItems:'center',gap:14, minWidth:0}}>
                    {n.tag && <Pill tone="primary">{n.tag}</Pill>}
                    <span style={{fontSize:15,fontWeight:500,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{n.title}</span>
                  </div>
                  <span className="mono" style={{fontSize:12,color:'var(--fg-soft)',whiteSpace:'nowrap'}}>{n.date}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{
            background:'var(--brand-primary)', color:'var(--brand-on-primary)',
            borderRadius:16, padding:36,
            display:'flex',flexDirection:'column',justifyContent:'space-between',
            backgroundImage:'radial-gradient(circle at 90% 10%, rgba(255,255,255,0.15) 0, transparent 40%)',
          }}>
            <div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'0.18em',opacity:0.7}}>CALL US</div>
              <h3 className="h3" style={{margin:'12px 0 0', color:'inherit'}}>급식 상담<br/>지금 바로.</h3>
              <p style={{marginTop:14,fontSize:14,lineHeight:1.6,opacity:0.9}}>이동급식 / 단체도시락 / 행사 케이터링 — 연중무휴 상담 가능합니다.</p>
            </div>
            <div style={{marginTop:28}}>
              <a href="tel:055-583-2480" style={{
                display:'block', fontFamily:'var(--font-display)',
                fontSize:'clamp(32px,4vw,40px)', fontWeight:500,
                letterSpacing:'-0.01em', color:'inherit',
              }}>055-583-2480</a>
              <div style={{fontSize:13, opacity:0.8, marginTop:6}}>09:00 — 18:00 · 연중무휴</div>
              <button onClick={() => navigate('contact')} className="btn btn-on-image" style={{marginTop:20}}>
                온라인으로 신청 <Icon name="arrow_forward" size={18}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuPreview({ navigate }) {
  const today = new Date();
  const days = ['월','화','수','목','금'];
  const start = new Date(today); start.setDate(today.getDate() - ((today.getDay()+6)%7));
  const samples = [
    { main:'제육볶음', side1:'시금치나물', side2:'두부조림', soup:'미역국', kind:'rice' },
    { main:'갈치조림', side1:'잡채', side2:'무생채', soup:'된장찌개', kind:'banchan' },
    { main:'닭갈비',   side1:'콩나물무침', side2:'계란말이', soup:'어묵국', kind:'soup' },
    { main:'불고기',   side1:'미역줄기볶음', side2:'감자조림', soup:'김치찌개', kind:'cedar' },
    { main:'코다리찜', side1:'브로콜리', side2:'멸치볶음', soup:'북엇국', kind:'green' },
  ];
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader
          eyebrow="THIS WEEK'S MENU"
          title="이번 주 다정 식단."
          lead="영양사가 매주 새로 짜는 균형 잡힌 식단. 모든 메뉴는 당일 조리, 당일 배송 원칙입니다."
          action={<button className="btn btn-ghost" onClick={() => navigate('menu')}>식단표 전체 보기 →</button>}
        />
        <div className="grid-5" style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16}}>
          {days.map((d, i) => {
            const date = new Date(start); date.setDate(start.getDate() + i);
            const m = samples[i];
            return (
              <div key={d} className="card" style={{padding:20, display:'flex',flexDirection:'column',gap:14}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
                  <span className="kr-serif" style={{fontSize:20,fontWeight:600}}>{d}</span>
                  <span className="mono" style={{fontSize:11,color:'var(--fg-soft)'}}>{date.getMonth()+1}.{String(date.getDate()).padStart(2,'0')}</span>
                </div>
                <FoodImage kind={m.kind} style={{aspectRatio:'1/1'}}/>
                <div style={{fontSize:13.5, lineHeight:1.7}}>
                  <div style={{fontWeight:600, marginBottom:4}}>{m.main}</div>
                  <div style={{color:'var(--fg-muted)'}}>{m.soup}</div>
                  <div style={{color:'var(--fg-muted)'}}>{m.side1} · {m.side2}</div>
                </div>
              </div>
            );
          })}
        </div>
        <style>{`@media (max-width:960px){.grid-5{grid-template-columns:repeat(2, 1fr) !important;}}`}</style>
      </div>
    </section>
  );
}

function LaunchBanner({ navigate }) {
  return (
    <div style={{
      background:'var(--ink-900)', color:'#FBF7F1',
      borderBottom:'1px solid #3A3025',
    }}>
      <div className="container" style={{
        display:'flex', alignItems:'center', justifyContent:'center', gap:14,
        padding:'10px 32px', flexWrap:'wrap', textAlign:'center',
      }}>
        <span style={{
          padding:'3px 9px', borderRadius:999,
          background:'var(--brand-primary)', color:'var(--brand-on-primary)',
          fontFamily:'var(--font-mono)', fontSize:10, fontWeight:600,
          letterSpacing:'0.16em',
        }}>NEW</span>
        <span style={{fontSize:13.5, lineHeight:1.5}}>
          정기 도시락 구독 서비스, 곧 런칭합니다 — 사전 알림 신청 받습니다.
        </span>
        <button
          type="button"
          onClick={() => navigate('contact')}
          style={{
            background:'transparent', border:'none', cursor:'pointer',
            color:'#FBF7F1', fontSize:13, fontWeight:600,
            display:'inline-flex', alignItems:'center', gap:4,
            textDecoration:'underline', textUnderlineOffset:3,
          }}
        >
          알림 신청 <Icon name="arrow_forward" size={14}/>
        </button>
      </div>
    </div>
  );
}

function HomePage({ navigate, tweaks, notices }) {
  const Hero = tweaks.heroLayout === 'fullbleed' ? HeroFullbleed
             : tweaks.heroLayout === 'split'     ? HeroSplit
             : HeroCarousel;
  return (
    <div className="page-fade" data-screen-label="01 Home">
      <LaunchBanner navigate={navigate}/>
      <Hero navigate={navigate}/>
      <ServicesGrid navigate={navigate} cardStyle={tweaks.serviceCardStyle}/>
      <BrandMeaning navigate={navigate}/>
      <StoryStrip navigate={navigate}/>
      <FourTiles navigate={navigate}/>
      <MenuPreview navigate={navigate}/>
      <NoticeCTA navigate={navigate} notices={notices}/>
    </div>
  );
}

Object.assign(window, { HomePage, SERVICES });

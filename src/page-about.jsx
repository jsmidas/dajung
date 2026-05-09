/* page-about.jsx — 회사소개 + 강점 + 인증 + 오시는길 */

const ABOUT_TIMELINE = [
  { y:'2005', t:'함안 본사 설립',   d:'경남 함안에서 운반급식 사업 시작' },
  { y:'2010', t:'HACCP 인증',      d:'식품의약품안전처 HACCP 인증 획득' },
  { y:'2014', t:'위탁급식 진출',    d:'창원·마산권 산업체 위탁급식 시작' },
  { y:'2019', t:'중앙주방 신축',    d:'함안 가야읍 중앙주방 462평 준공' },
  { y:'2022', t:'정기배송 런칭',    d:'1인 가구·시니어 정기 도시락 시작' },
  { y:'2025', t:'행사 케이터링 확대', d:'결혼식·기업 행사 출장 케이터링 영역 진출' },
];

const STRENGTHS = [
  { n:'01', t:'20년 운반급식 노하우',     d:'함안 본사 주방에서 일 1,200식 평균 배송. 보온 차량 8대 보유.', icon:'history' },
  { n:'02', t:'전문 영양사 4인',          d:'정규 영양사 4인이 매주 식단을 설계, 영양 균형을 직접 검수.', icon:'school' },
  { n:'03', t:'HACCP 위생관리',           d:'식약처 HACCP 인증, 자체 5단계 위생 프로세스 운영.', icon:'verified' },
  { n:'04', t:'당일 조리 원칙',           d:'새벽 4시 시작 — 모든 메뉴는 당일 조리, 당일 배송이 원칙.', icon:'restaurant' },
  { n:'05', t:'유연한 규모',              d:'30인 도시락부터 1,000인 행사 케이터링까지 한 자리에서 대응.', icon:'groups' },
  { n:'06', t:'다정한 응대',              d:'전화 한 통이면 끝나는 상담. 견적 회신 평균 2시간 이내.', icon:'support_agent' },
];

const CERTS = [
  { name:'HACCP 인증',         org:'식품의약품안전처', year:'2010', kind:'paper' },
  { name:'위생등급제 우수',    org:'식품의약품안전처', year:'2018', kind:'paper' },
  { name:'중소기업 확인서',    org:'중소벤처기업부',   year:'2020', kind:'cedar' },
  { name:'함안군 우수기업',    org:'함안군청',         year:'2022', kind:'paper' },
  { name:'식품제조가공업',     org:'경상남도',         year:'2005', kind:'paper' },
  { name:'단체급식 우수기업',  org:'경남식약청',       year:'2023', kind:'cedar' },
];

const TESTIMONIALS = [
  { name:'김지영', role:'함안 ○○병원 영양팀장', txt:'위생관리가 깐깐하기로 소문난 다정. 4년 거래하면서 단 한 번도 사고가 없었습니다. 응대가 다정하다는 게 빈말이 아니에요.' },
  { name:'박성호', role:'창원 ○○산업 총무', txt:'직원 200명 점심 운반급식. 매주 다른 식단인데도 메뉴 만족도 조사가 늘 4.5점 이상이에요.' },
  { name:'이수민', role:'마산 결혼식 신부', txt:'예식 케이터링이라 긴장했는데, 시식부터 당일 세팅까지 매끄러웠어요. 어른들 입맛까지 맞춘 한식 한 상이 인상적이었습니다.' },
];

function Greeting({ navigate }) {
  return (
    <section style={{padding:'80px 0'}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:64,alignItems:'flex-start'}} className="grid-2">
          <div>
            <Eyebrow>GREETING · 인사말</Eyebrow>
            <h1 className="h1" style={{marginTop:18}}>다정한 한 끼가<br/>일상을 바꿉니다.</h1>
          </div>
          <div>
            <p style={{fontSize:17, lineHeight:1.85, color:'var(--fg)', margin:0}}>
              안녕하세요, 다정캐터링입니다.
            </p>
            <p style={{fontSize:15.5, lineHeight:1.85, color:'var(--fg-muted)', marginTop:24}}>
              2005년, 경남 함안의 작은 주방에서 운반급식을 시작했습니다. 처음 30인분의 도시락을 운반하던 그 마음으로, 20년이 흐른 지금도 매일 새벽 4시에 주방의 불을 켭니다.
            </p>
            <p style={{fontSize:15.5, lineHeight:1.85, color:'var(--fg-muted)', marginTop:18}}>
              누군가의 점심, 누군가의 행사, 누군가의 평범한 저녁. 그 한 끼가 받는 사람의 하루를 좌우한다는 사실을 잊지 않습니다. 그래서 다정은 — 식자재 한 가지, 양념 한 숟갈, 차량 온도 1도까지 — 사소해 보이는 것에 가장 신경을 씁니다.
            </p>
            <p style={{fontSize:15.5, lineHeight:1.85, color:'var(--fg-muted)', marginTop:18}}>
              이제 다정은 운반급식을 넘어 단체도시락, 행사 출장 케이터링, 정기 배송까지 한 끼의 영역을 넓혀가고 있습니다. 자리는 달라져도, 마음은 그대로입니다.
            </p>
            <div style={{marginTop:36, display:'flex', alignItems:'center', gap:20}}>
              <div style={{
                width:64, height:64, borderRadius:'50%',
                background:'var(--bg-alt)', display:'grid', placeItems:'center',
                fontFamily:'var(--font-serif-kr)', fontWeight:700, fontSize:24,
                color:'var(--brand-primary)',
              }}>다</div>
              <div>
                <div className="kr-serif" style={{fontSize:18,fontWeight:600}}>대표이사 [성명 입력 예정]</div>
                <div style={{fontSize:13,color:'var(--fg-soft)',marginTop:2}}>주식회사 다정캐터링</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader eyebrow="HISTORY" title="다정의 20년."/>
        <div style={{position:'relative', display:'flex', flexDirection:'column', gap:0}}>
          {ABOUT_TIMELINE.map((e, i) => (
            <div key={e.y} style={{
              display:'grid', gridTemplateColumns:'120px 24px 1fr',
              gap:32, alignItems:'flex-start',
              padding:'28px 0', borderBottom: i < ABOUT_TIMELINE.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div className="serif" style={{fontSize:32, fontWeight:500, color:'var(--brand-primary)'}}>{e.y}</div>
              <div style={{
                width:14, height:14, borderRadius:'50%',
                border:'2px solid var(--brand-primary)',
                marginTop:12, background:'var(--bg)',
              }}/>
              <div>
                <div className="kr-serif" style={{fontSize:22,fontWeight:600}}>{e.t}</div>
                <p style={{margin:'8px 0 0',color:'var(--fg-muted)',fontSize:14.5,lineHeight:1.7}}>{e.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StrengthSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="OUR STRENGTHS" title="다정 강점 6가지." lead="20년 운반급식 노하우, 전문 영양사 직영 식단, HACCP 위생관리. 다정이 다정한 이유."/>
        <div className="grid-3" style={{gap:20}}>
          {STRENGTHS.map(s => (
            <div key={s.n} className="card" style={{display:'flex',flexDirection:'column',gap:16,minHeight:260}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className="eyebrow">{s.n}</div>
                <Icon name={s.icon} size={28}/>
              </div>
              <div style={{marginTop:'auto'}}>
                <div className="kr-serif" style={{fontSize:20,fontWeight:600,marginBottom:8}}>{s.t}</div>
                <p style={{margin:0,color:'var(--fg-muted)',fontSize:14,lineHeight:1.6}}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader eyebrow="TESTIMONIALS" title="고객의 한 마디."/>
        <div className="grid-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card" style={{display:'flex',flexDirection:'column',gap:18,minHeight:260}}>
              <Icon name="format_quote" size={36} fill={1}/>
              <p style={{margin:0,fontSize:15,lineHeight:1.7}}>"{t.txt}"</p>
              <div style={{marginTop:'auto', paddingTop:18, borderTop:'1px solid var(--border)'}}>
                <div className="kr-serif" style={{fontSize:16,fontWeight:600}}>{t.name}</div>
                <div style={{fontSize:12,color:'var(--fg-soft)',marginTop:2}}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="CERTIFICATION" title="인증 및 등록 현황." lead="식품의약품안전처 HACCP 인증을 비롯해, 단체급식 분야에서 인증받은 자격을 보유하고 있습니다."/>
        <div className="grid-3" style={{gap:20}}>
          {CERTS.map((c, i) => (
            <div key={i} className="card" style={{padding:0, overflow:'hidden'}}>
              <FoodImage kind={c.kind} style={{aspectRatio:'4/3', borderRadius:0}}>
                <div style={{
                  position:'absolute', top:16, right:16,
                  width:48, height:48, borderRadius:'50%',
                  background:'rgba(255,255,255,0.92)',
                  display:'grid', placeItems:'center', color:'#1B1610',
                }}>
                  <Icon name="workspace_premium" size={24}/>
                </div>
              </FoodImage>
              <div style={{padding:24}}>
                <div className="mono" style={{fontSize:11,letterSpacing:'0.12em',color:'var(--brand-primary)'}}>{c.year}</div>
                <div className="kr-serif" style={{fontSize:18,fontWeight:600,marginTop:8}}>{c.name}</div>
                <div style={{fontSize:13,color:'var(--fg-muted)',marginTop:6}}>{c.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="LOCATION" title="오시는 길."/>
        <div className="grid-2" style={{gap:32}}>
          <div style={{
            position:'relative', aspectRatio:'4/3', borderRadius:16, overflow:'hidden',
            background:'linear-gradient(135deg, #E9DFCC, #D7C8A9)',
          }}>
            {/* schematic map */}
            <svg viewBox="0 0 400 300" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0 L 0 0 0 20" fill="none" stroke="#B8A47F" strokeWidth="0.5" opacity="0.5"/>
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#grid)"/>
              <path d="M0 180 Q 100 160, 200 175 T 400 170" fill="none" stroke="#74A765" strokeWidth="6" opacity="0.5"/>
              <path d="M50 0 Q 80 100, 120 200 T 180 300" fill="none" stroke="#8FA0B0" strokeWidth="3" opacity="0.4"/>
              <path d="M0 80 L 400 100" fill="none" stroke="#5A3A1F" strokeWidth="2" opacity="0.3" strokeDasharray="6 4"/>
              <text x="20" y="60" fontSize="11" fill="#5C4F3F" fontFamily="JetBrains Mono">함안대로</text>
              <text x="280" y="200" fontSize="11" fill="#5C4F3F" fontFamily="JetBrains Mono">남강</text>
              <circle cx="220" cy="160" r="8" fill="#8E2A1F"/>
              <circle cx="220" cy="160" r="20" fill="#8E2A1F" opacity="0.2"/>
              <text x="240" y="158" fontSize="14" fill="#1B1610" fontFamily="Noto Serif KR" fontWeight="600">다정캐터링</text>
              <text x="240" y="174" fontSize="10" fill="#5C4F3F" fontFamily="JetBrains Mono">35.275°N · 128.412°E</text>
            </svg>
          </div>
          <div>
            <div className="kr-serif" style={{fontSize:24,fontWeight:600}}>주식회사 다정캐터링</div>
            <div style={{marginTop:24,display:'flex',flexDirection:'column',gap:18}}>
              <InfoLine icon="location_on" label="주소">
                경상남도 함안군<br/>
                <span style={{color:'var(--fg-soft)'}}>[상세 주소 입력 예정]</span>
              </InfoLine>
              <InfoLine icon="call" label="대표 전화">
                <a href="tel:055-583-2480" style={{color:'var(--brand-primary)',fontWeight:600}}>055-583-2480</a> (연중무휴)
              </InfoLine>
              <InfoLine icon="fax" label="팩스">055-583-2481</InfoLine>
              <InfoLine icon="mail" label="이메일"><span style={{color:'var(--fg-soft)'}}>[이메일 입력 예정]</span></InfoLine>
              <InfoLine icon="schedule" label="운영시간">월 — 금 04:00 — 19:00 / 토 04:00 — 14:00</InfoLine>
              <InfoLine icon="directions_car" label="주차">본관 옆 방문객 주차장 8대 (무료)</InfoLine>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoLine({ icon, label, children }) {
  return (
    <div style={{display:'flex',gap:16,alignItems:'flex-start'}}>
      <div style={{
        width:40,height:40, borderRadius:10,
        background:'var(--bg-alt)', color:'var(--brand-primary)',
        display:'grid', placeItems:'center', flexShrink:0,
      }}>
        <Icon name={icon} size={22}/>
      </div>
      <div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'0.12em',color:'var(--fg-soft)',textTransform:'uppercase'}}>{label}</div>
        <div style={{fontSize:15,marginTop:4,lineHeight:1.6}}>{children}</div>
      </div>
    </div>
  );
}

function AboutPage({ navigate, sub }) {
  if (sub === 'strength') return <div className="page-fade" data-screen-label="About · Strengths"><StrengthSection/><Testimonials/></div>;
  if (sub === 'cert')     return <div className="page-fade" data-screen-label="About · Certs"><CertsSection/></div>;
  if (sub === 'map')      return <div className="page-fade" data-screen-label="About · Map"><MapSection/></div>;
  return (
    <div className="page-fade" data-screen-label="About">
      <Greeting navigate={navigate}/>
      <Timeline/>
      <StrengthSection/>
      <Testimonials/>
      <CertsSection/>
      <MapSection/>
    </div>
  );
}

Object.assign(window, { AboutPage });

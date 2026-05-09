/* page-services.jsx — 4 service detail pages */

const SERVICE_DETAILS = {
  'mobile': {
    num:'01', kr:'이동급식', en:'Mobile Catering',
    tagline:'조리시설이 없어도 가능한, 정성 어린 운반급식.',
    desc:'2005년부터 이어온 다정의 본업. 함안 본사 주방에서 당일 조리한 한 끼를, 위생 보온차량으로 영남권 전역에 운반합니다.',
    kind:'rice',
    bullets: [
      { icon:'restaurant', t:'당일 조리 원칙', d:'새벽 4시부터 시작하는 본사 주방에서 당일 조리, 당일 배송' },
      { icon:'thermostat', t:'위생 보온 차량', d:'65℃ 이상 보온, 식약처 기준 위생관리 차량으로 직접 운반' },
      { icon:'groups', t:'30 ~ 800인 규모', d:'산업체 식당부터 공사현장 도시락까지 유연하게 대응' },
      { icon:'event_repeat', t:'주 1회 식단 변경', d:'영양사가 직접 설계한 매주 새로운 5일 식단' },
    ],
    pricing: [
      { range:'30 — 99인',   per:'5,800원~' },
      { range:'100 — 299인', per:'5,200원~' },
      { range:'300인 이상',  per:'4,800원~' },
    ],
  },
  'lunchbox': {
    num:'02', kr:'단체도시락', en:'Group Lunchbox',
    tagline:'당일 조리한, 정갈하고 다양한 단체도시락.',
    desc:'관공서·기업 행사·세미나·교육 현장. 50인분부터 1,000인분 이상까지, 자리에 맞춘 메뉴 구성으로 준비합니다.',
    kind:'bibimbap',
    bullets: [
      { icon:'lunch_dining', t:'5단계 메뉴 등급', d:'8,000원 / 10,000원 / 12,000원 / 15,000원 / 프리미엄' },
      { icon:'schedule', t:'전일 예약 원칙', d:'전일 17:00까지 예약, 당일 조리 후 정시 배송' },
      { icon:'recycling', t:'친환경 용기', d:'생분해 재질 도시락 용기 사용 (옵션 선택 가능)' },
      { icon:'set_meal', t:'한식·일식·양식', d:'행사 성격에 따라 한식/일식 도시락 / 샌드위치 박스 등 구성' },
    ],
    pricing: [
      { range:'8,000원 식단',  per:'한식 기본 / 4찬 1국 1주식' },
      { range:'12,000원 식단', per:'한식 정찬 / 6찬 1국 후식 포함' },
      { range:'프리미엄',      per:'한정식 박스 / 8찬 1국 후식·음료 포함' },
    ],
  },
  'event': {
    num:'03', kr:'행사 케이터링', en:'Event Catering',
    tagline:'특별한 자리에 격을 더하는, 출장 한 상.',
    desc:'결혼식·세미나·기업 송년회·VIP 미팅. 영양사 식단으로 격에 맞춘 출장 케이터링. 현장 세팅과 서빙 인력까지 포함합니다.',
    kind:'soup',
    bullets: [
      { icon:'restaurant_menu', t:'코스 구성', d:'전채·메인·후식까지 풀코스 또는 뷔페 스타일 선택' },
      { icon:'engineering', t:'현장 인력 포함', d:'서빙·정리 인력 2 ~ 8인까지 행사 규모에 맞춰 동행' },
      { icon:'inventory_2', t:'테이블웨어 일체', d:'테이블 클로스·접시·커틀러리·꽃 데코 모두 포함' },
      { icon:'verified', t:'사전 시식', d:'30인 이상 행사는 본사 주방에서 사전 시식 가능' },
    ],
    pricing: [
      { range:'스탠딩 뷔페',  per:'1인 35,000원 ~' },
      { range:'착석 풀코스',  per:'1인 50,000원 ~' },
      { range:'프리미엄 한정식', per:'1인 80,000원 ~' },
    ],
  },
  'subscription': {
    num:'04', kr:'정기 배송', en:'Subscription Box',
    tagline:'주 3회·5회·매일. 일상에 균형을 더하는 도시락 구독.',
    desc:'영양사가 설계한 균형 식단을 정기 배송. 1인 가구·시니어·산모·재택 근무자까지, 일상의 한 끼를 가볍게 해드립니다.',
    kind:'green',
    bullets: [
      { icon:'event_repeat', t:'유연한 빈도', d:'주 3회 / 주 5회 / 매일 — 본인 일정에 맞게 선택' },
      { icon:'eco', t:'균형 식단', d:'한 끼 600 ~ 800kcal, 단백질 30g 이상 / 채소 200g 이상' },
      { icon:'pause_circle', t:'언제든 일시정지', d:'여행·출장 시 1주 단위로 배송 일시정지' },
      { icon:'local_shipping', t:'함안권 직접 배송', d:'함안·창원·마산·진주권 새벽 7시 이전 배송 완료' },
    ],
    pricing: [
      { range:'주 3회 (월/수/금)',  per:'1주 23,400원 (한 끼 7,800원)' },
      { range:'주 5회 (평일 매일)',  per:'1주 38,000원 (한 끼 7,600원)' },
      { range:'매일 배송',           per:'1주 51,800원 (한 끼 7,400원)' },
    ],
  },
};

function ServiceHero({ s, navigate }) {
  return (
    <section style={{padding:'80px 0 64px'}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center'}} className="grid-2">
          <div>
            <Eyebrow>SERVICE {s.num} · {s.en.toUpperCase()}</Eyebrow>
            <h1 className="h1" style={{margin:'18px 0 0'}}>{s.kr}</h1>
            <p className="lead" style={{marginTop:24}}>{s.tagline}</p>
            <p style={{marginTop:18, fontSize:15, lineHeight:1.7, color:'var(--fg-muted)', maxWidth:'56ch'}}>{s.desc}</p>
            <div style={{display:'flex',gap:12,marginTop:32}}>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>이 서비스 상담 신청 <Icon name="arrow_forward" size={18}/></button>
              <a href="tel:055-583-2480" className="btn btn-ghost"><Icon name="call" size={18}/> 055-583-2480</a>
            </div>
          </div>
          <FoodImage kind={s.kind} label={s.num} style={{aspectRatio:'5/6'}}/>
        </div>
      </div>
    </section>
  );
}

function ServiceFeatures({ s }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="WHAT WE OFFER" title={`${s.kr}, 이렇게 다릅니다.`}/>
        <div className="grid-2" style={{gap:24}}>
          {s.bullets.map((b, i) => (
            <div key={i} className="card" style={{display:'flex',gap:24,alignItems:'flex-start'}}>
              <div style={{
                width:56, height:56, flexShrink:0, borderRadius:14,
                background:'color-mix(in oklch, var(--brand-primary) 12%, var(--bg-alt))',
                color:'var(--brand-primary)', display:'grid', placeItems:'center',
              }}>
                <Icon name={b.icon} size={28}/>
              </div>
              <div>
                <div className="kr-serif" style={{fontSize:20,fontWeight:600,marginBottom:6}}>{b.t}</div>
                <p style={{margin:0,color:'var(--fg-muted)',fontSize:14.5,lineHeight:1.6}}>{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePricing({ s, navigate }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader eyebrow="PRICING" title="구성 및 가격." lead="아래 가격은 표준 견적입니다. 인원·메뉴·일정에 따라 맞춤 견적을 별도로 제공해드립니다."/>
        <div className="grid-3">
          {s.pricing.map((p, i) => (
            <div key={i} className="card" style={{padding:32}}>
              <div className="mono" style={{fontSize:11,letterSpacing:'0.18em',color:'var(--brand-primary)'}}>OPTION 0{i+1}</div>
              <div className="kr-serif" style={{fontSize:24,fontWeight:600,marginTop:12}}>{p.range}</div>
              <div className="serif" style={{fontSize:'clamp(28px,3vw,36px)',fontWeight:500,marginTop:14,color:'var(--fg)'}}>{p.per}</div>
              <hr className="hr-thin" style={{margin:'24px 0'}}/>
              <button className="btn btn-ghost" onClick={() => navigate('contact')} style={{width:'100%',justifyContent:'center'}}>
                견적 문의하기 →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HygieneStrip() {
  const steps = [
    { n:'01', t:'식자재 검수', d:'아침 5시, 산지 직송 식자재 1차 검수' },
    { n:'02', t:'세척·소독',  d:'염소수 100ppm 3단 세척 후 자외선 살균' },
    { n:'03', t:'당일 조리',  d:'위생복·위생모·마스크·장갑 4단 착용' },
    { n:'04', t:'온도 관리',  d:'완성 직후 65℃ 이상 보온, 차량 온도 모니터링' },
    { n:'05', t:'정시 배송',  d:'GPS로 실시간 추적, 행사 30분 전 도착 원칙' },
  ];
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="HYGIENE PROCESS" title="다섯 단계의 위생관리." lead="HACCP 기준에 따라 식자재 입고부터 배송까지 다섯 단계로 관리합니다."/>
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',top:36,left:'5%',right:'5%',height:1,background:'var(--border)',zIndex:0}}/>
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16,position:'relative',zIndex:1}} className="grid-5">
            {steps.map(s => (
              <div key={s.n} style={{textAlign:'center'}}>
                <div style={{
                  width:72,height:72, margin:'0 auto', borderRadius:'50%',
                  background:'var(--brand-primary)', color:'var(--brand-on-primary)',
                  display:'grid', placeItems:'center',
                  fontFamily:'var(--font-display)', fontSize:24, fontWeight:500,
                }}>{s.n}</div>
                <div className="kr-serif" style={{fontSize:18,fontWeight:600,marginTop:18}}>{s.t}</div>
                <p style={{margin:'8px 0 0', fontSize:13, color:'var(--fg-muted)', lineHeight:1.6}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width:960px){.grid-5{grid-template-columns:repeat(2,1fr) !important;}}`}</style>
      </div>
    </section>
  );
}

function ServicePage({ navigate, sub }) {
  const s = SERVICE_DETAILS[sub] || SERVICE_DETAILS.mobile;
  return (
    <div className="page-fade" data-screen-label={`Service · ${s.kr}`}>
      <ServiceHero s={s} navigate={navigate}/>
      <ServiceFeatures s={s}/>
      <ServicePricing s={s} navigate={navigate}/>
      <HygieneStrip/>
    </div>
  );
}

Object.assign(window, { ServicePage });

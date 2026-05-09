/* page-menu.jsx — 주간 식단표 */

const MENU_DATA = {
  W1: [
    { day:'월', date:'5/11', main:'제육볶음',   side1:'시금치나물', side2:'두부조림',   soup:'미역국',     dessert:'사과',     kcal:720, kind:'banchan' },
    { day:'화', date:'5/12', main:'갈치조림',   side1:'잡채',       side2:'무생채',     soup:'된장찌개',   dessert:'요거트',   kcal:680, kind:'cedar' },
    { day:'수', date:'5/13', main:'닭갈비',     side1:'콩나물무침', side2:'계란말이',   soup:'어묵국',     dessert:'바나나',   kcal:740, kind:'soup' },
    { day:'목', date:'5/14', main:'불고기',     side1:'미역줄기',   side2:'감자조림',   soup:'김치찌개',   dessert:'식혜',     kcal:780, kind:'rice' },
    { day:'금', date:'5/15', main:'코다리찜',   side1:'브로콜리',   side2:'멸치볶음',   soup:'북엇국',     dessert:'배',       kcal:660, kind:'green' },
  ],
  W2: [
    { day:'월', date:'5/18', main:'돈까스',     side1:'양배추샐러드', side2:'단무지',   soup:'우동국물',   dessert:'요거트',   kcal:760, kind:'paper' },
    { day:'화', date:'5/19', main:'고등어구이', side1:'호박전',     side2:'오이무침',   soup:'시금치된장국', dessert:'딸기',   kcal:700, kind:'green' },
    { day:'수', date:'5/20', main:'마파두부',   side1:'숙주나물',   side2:'무말랭이',   soup:'계란탕',     dessert:'우유',     kcal:680, kind:'cedar' },
    { day:'목', date:'5/21', main:'순살치킨',   side1:'콘샐러드',   side2:'배추겉절이', soup:'미소시루',   dessert:'사과',     kcal:760, kind:'banchan' },
    { day:'금', date:'5/22', main:'김치찜',     side1:'두부부침',   side2:'도라지',     soup:'육개장',     dessert:'수정과',   kcal:710, kind:'soup' },
  ],
};

function MenuPage({ navigate }) {
  const [week, setWeek] = useState('W1');
  const [view, setView] = useState('grid'); // grid | table
  const data = MENU_DATA[week];

  return (
    <div className="page-fade" data-screen-label="Menu">
      <section style={{padding:'80px 0 32px'}}>
        <div className="container">
          <Eyebrow>WEEKLY MENU · 주간 식단표</Eyebrow>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,marginTop:14,flexWrap:'wrap'}}>
            <h1 className="h1" style={{margin:0}}>이번 주 다정 식단.</h1>
            <p className="lead" style={{maxWidth:480,margin:0}}>
              영양사가 매주 새로 짜는 균형 잡힌 식단. 한 끼 평균 700kcal, 단백질 30g 이상으로 설계되어 있습니다.
            </p>
          </div>

          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:48,gap:16,flexWrap:'wrap'}}>
            <div style={{display:'flex',gap:8}}>
              {Object.keys(MENU_DATA).map(w => (
                <button key={w} onClick={() => setWeek(w)} style={{
                  padding:'10px 18px', borderRadius:999,
                  border:'1px solid var(--border)',
                  background: week === w ? 'var(--brand-primary)' : 'transparent',
                  color: week === w ? 'var(--brand-on-primary)' : 'var(--fg)',
                  fontSize:13, fontWeight:500, cursor:'pointer',
                  fontFamily:'var(--font-mono)', letterSpacing:'0.08em',
                }}>{w === 'W1' ? '5월 둘째 주' : '5월 셋째 주'}</button>
              ))}
            </div>
            <div style={{display:'flex',gap:4,padding:4,borderRadius:999,background:'var(--bg-alt)'}}>
              {[['grid','grid_view'],['table','view_list']].map(([v, ic]) => (
                <button key={v} onClick={() => setView(v)} style={{
                  padding:'8px 12px', borderRadius:999, border:'none',
                  background: view === v ? 'var(--bg-card)' : 'transparent',
                  display:'flex',alignItems:'center',gap:6,
                  fontSize:13, fontWeight:500, cursor:'pointer',
                  color: view === v ? 'var(--fg)' : 'var(--fg-muted)',
                  boxShadow: view === v ? 'var(--elev-1)' : 'none',
                }}>
                  <Icon name={ic} size={18}/> {v === 'grid' ? '카드' : '표'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{paddingBottom:96}}>
        <div className="container">
          {view === 'grid' ? (
            <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:18}} className="menu-grid">
              {data.map(m => (
                <div key={m.day} className="card" style={{padding:0,overflow:'hidden',display:'flex',flexDirection:'column'}}>
                  <FoodImage kind={m.kind} style={{aspectRatio:'1/1', borderRadius:0}}>
                    <div style={{position:'absolute',top:14,left:14,padding:'6px 12px',background:'rgba(255,255,255,0.92)',borderRadius:999,fontSize:13,fontWeight:600}}>
                      {m.day} · {m.date}
                    </div>
                  </FoodImage>
                  <div style={{padding:20,display:'flex',flexDirection:'column',gap:12,flex:1}}>
                    <div className="kr-serif" style={{fontSize:20,fontWeight:600}}>{m.main}</div>
                    <div style={{fontSize:13.5,color:'var(--fg-muted)',lineHeight:1.7}}>
                      <div>· {m.soup}</div>
                      <div>· {m.side1}</div>
                      <div>· {m.side2}</div>
                      <div>· {m.dessert}</div>
                    </div>
                    <div style={{marginTop:'auto',paddingTop:14,borderTop:'1px solid var(--border)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <span className="mono" style={{fontSize:11,color:'var(--fg-soft)',letterSpacing:'0.08em'}}>KCAL</span>
                      <span style={{fontSize:14,fontWeight:600,color:'var(--brand-primary)'}}>{m.kcal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card" style={{padding:0,overflow:'hidden'}}>
              <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
                <thead>
                  <tr style={{background:'var(--bg-alt)',textAlign:'left'}}>
                    <th style={{padding:'16px 20px',fontWeight:500,fontSize:12,letterSpacing:'0.08em',color:'var(--fg-soft)'}}>일자</th>
                    <th style={{padding:'16px 20px',fontWeight:500,fontSize:12,letterSpacing:'0.08em',color:'var(--fg-soft)'}}>주식 / 메인</th>
                    <th style={{padding:'16px 20px',fontWeight:500,fontSize:12,letterSpacing:'0.08em',color:'var(--fg-soft)'}}>국</th>
                    <th style={{padding:'16px 20px',fontWeight:500,fontSize:12,letterSpacing:'0.08em',color:'var(--fg-soft)'}}>찬</th>
                    <th style={{padding:'16px 20px',fontWeight:500,fontSize:12,letterSpacing:'0.08em',color:'var(--fg-soft)',textAlign:'right'}}>kcal</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((m, i) => (
                    <tr key={m.day} style={{borderTop:'1px solid var(--border)'}}>
                      <td style={{padding:'18px 20px'}}>
                        <span className="kr-serif" style={{fontSize:18,fontWeight:600}}>{m.day}</span>
                        <span style={{marginLeft:8,fontSize:12,color:'var(--fg-soft)',fontFamily:'var(--font-mono)'}}>{m.date}</span>
                      </td>
                      <td style={{padding:'18px 20px',fontWeight:500}}>{m.main}</td>
                      <td style={{padding:'18px 20px',color:'var(--fg-muted)'}}>{m.soup}</td>
                      <td style={{padding:'18px 20px',color:'var(--fg-muted)'}}>{m.side1} · {m.side2} · {m.dessert}</td>
                      <td style={{padding:'18px 20px',textAlign:'right',fontFamily:'var(--font-mono)',color:'var(--brand-primary)',fontWeight:600}}>{m.kcal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div style={{marginTop:48, padding:32, borderRadius:16, background:'var(--bg-alt)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:24, flexWrap:'wrap'}}>
            <div>
              <div className="kr-serif" style={{fontSize:20,fontWeight:600}}>식단표 PDF로 받기</div>
              <p style={{margin:'8px 0 0',color:'var(--fg-muted)',fontSize:14}}>이번 달 전체 식단표를 PDF로 다운받으실 수 있습니다.</p>
            </div>
            <div style={{display:'flex',gap:10}}>
              <button className="btn btn-ghost"><Icon name="download" size={18}/> PDF 다운로드</button>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>맞춤 식단 문의</button>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media (max-width:960px){.menu-grid{grid-template-columns:repeat(2,1fr) !important;}}`}</style>
    </div>
  );
}

Object.assign(window, { MenuPage });

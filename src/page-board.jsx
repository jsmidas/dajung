/* page-board.jsx — 공지사항 + 온라인상담 게시판 */

const NOTICES = [
  { id:1, tag:'공지', title:'다정캐터링 홈페이지 리뉴얼 오픈 안내', date:'2026-05-09', content:'안녕하세요, 다정캐터링입니다. 새단장한 홈페이지를 오픈하였습니다. 서비스 안내, 주간 식단표, 온라인 상담 등 보다 편리하게 이용하실 수 있습니다.' },
  { id:2, tag:'안내', title:'5월 둘째 주 식단표 업데이트', date:'2026-05-07', content:'5월 둘째 주(5/11~5/15) 식단표가 업데이트되었습니다. 식단 페이지에서 확인하실 수 있습니다.' },
  { id:3, tag:'채용', title:'주방 보조 직원 모집 (함안 본사)', date:'2026-05-02', content:'함안 본사 중앙주방에서 함께 일할 주방 보조 직원을 모집합니다. 자세한 내용은 본문을 참조해 주세요.' },
  { id:4, tag:'공지', title:'5월 1일 근로자의 날 정상 운영 안내', date:'2026-04-25', content:'5월 1일 근로자의 날에도 운반급식 및 도시락 배송은 정상 운영됩니다.' },
  { id:5, tag:'안내', title:'행사 케이터링 신메뉴 5종 추가', date:'2026-04-18', content:'결혼식·세미나용 한식 코스 신메뉴 5종이 추가되었습니다. 시식 예약은 본사로 문의 바랍니다.' },
  { id:6, tag:'공지', title:'HACCP 정기 심사 통과', date:'2026-04-10', content:'식품의약품안전처 HACCP 정기 심사를 통과하였습니다. 변함없는 위생관리로 보답드리겠습니다.' },
  { id:7, tag:'채용', title:'영양사 정규직 1명 모집', date:'2026-04-02', content:'식단 설계와 위생관리를 함께할 정규직 영양사를 모집합니다.' },
];

const QNA = [
  { q:'견적은 어떻게 받을 수 있나요?', a:'전화(055-583-2480) 또는 온라인 상담 신청을 통해 무료 견적을 받으실 수 있습니다. 인원·일정·메뉴 선호도를 알려주시면 평균 2시간 이내 회신드립니다.' },
  { q:'최소 주문 인원은 몇 명부터인가요?', a:'운반급식은 30인부터, 단체도시락은 50인부터, 행사 케이터링은 30인부터 가능합니다. 정기 배송은 1인 가구도 신청 가능합니다.' },
  { q:'배송 가능한 지역은 어디까지인가요?', a:'함안 본사 기준 차량 1시간 거리 — 창원·마산·진주·김해·통영·거제·양산권까지 당일 배송 가능합니다. 그 외 지역은 별도 협의로 진행합니다.' },
  { q:'알레르기가 있는 사람은 어떻게 하나요?', a:'주문 시 알레르기 식자재(견과·갑각·우유·계란 등)를 미리 알려주시면 별도 식단으로 분리 조리합니다.' },
  { q:'결제는 어떻게 진행되나요?', a:'정기 거래처는 월말 정산 세금계산서 발행, 단발성 행사는 행사 전 50% 선결제·행사 후 잔금 결제로 진행합니다.' },
  { q:'행사 당일 메뉴 변경이 가능한가요?', a:'당일 변경은 어렵지만, 행사 3일 전까지는 메뉴 조정이 가능합니다. 식자재 발주 일정 관계로 양해 부탁드립니다.' },
];

function BoardPage({ navigate, sub }) {
  if (sub === 'qna') return <QnaPage navigate={navigate}/>;
  return <NoticePage navigate={navigate}/>;
}

function NoticePage({ navigate }) {
  const [filter, setFilter] = useState('전체');
  const [open, setOpen] = useState(null);
  const tags = ['전체','공지','안내','채용'];
  const list = filter === '전체' ? NOTICES : NOTICES.filter(n => n.tag === filter);

  return (
    <div className="page-fade" data-screen-label="Notice">
      <section style={{padding:'80px 0 40px'}}>
        <div className="container">
          <Eyebrow>NOTICE · 공지사항</Eyebrow>
          <h1 className="h1" style={{margin:'18px 0 0'}}>다정의 새 소식.</h1>
        </div>
      </section>
      <section style={{paddingBottom:96}}>
        <div className="container">
          <div style={{display:'flex',gap:8,marginBottom:24,flexWrap:'wrap'}}>
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)} style={{
                padding:'8px 16px', borderRadius:999, fontSize:13, fontWeight:500, cursor:'pointer',
                border:'1px solid ' + (filter === t ? 'var(--brand-primary)' : 'var(--border)'),
                background: filter === t ? 'var(--brand-primary)' : 'transparent',
                color: filter === t ? 'var(--brand-on-primary)' : 'var(--fg)',
              }}>{t}</button>
            ))}
          </div>
          <div className="card" style={{padding:0,overflow:'hidden'}}>
            {list.map((n, i) => (
              <div key={n.id} style={{borderTop: i === 0 ? 'none' : '1px solid var(--border)'}}>
                <button onClick={() => setOpen(open === n.id ? null : n.id)} style={{
                  width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center',
                  background:'transparent', border:'none', padding:'22px 28px', cursor:'pointer',
                  textAlign:'left', gap:24,
                }}>
                  <div style={{display:'flex',alignItems:'center',gap:16,minWidth:0,flex:1}}>
                    <Pill tone="primary">{n.tag}</Pill>
                    <span style={{fontSize:15.5,fontWeight:500,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{n.title}</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:18}}>
                    <span className="mono" style={{fontSize:12,color:'var(--fg-soft)',whiteSpace:'nowrap'}}>{n.date}</span>
                    <Icon name={open === n.id ? 'expand_less' : 'expand_more'} size={22}/>
                  </div>
                </button>
                {open === n.id && (
                  <div style={{padding:'0 28px 28px',color:'var(--fg-muted)',fontSize:14.5,lineHeight:1.7}}>
                    <div style={{padding:'20px 24px', background:'var(--bg-alt)', borderRadius:12}}>{n.content}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function QnaPage({ navigate }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="page-fade" data-screen-label="QnA">
      <section style={{padding:'80px 0 40px'}}>
        <div className="container">
          <Eyebrow>FAQ · 자주 묻는 질문</Eyebrow>
          <h1 className="h1" style={{margin:'18px 0 0'}}>궁금하신 점이 있으신가요?</h1>
          <p className="lead" style={{marginTop:18}}>가장 자주 받는 질문들입니다. 추가로 궁금한 사항은 온라인 상담 또는 전화로 문의해 주세요.</p>
        </div>
      </section>
      <section style={{paddingBottom:48}}>
        <div className="container" style={{maxWidth: 880}}>
          <div className="card" style={{padding:0,overflow:'hidden'}}>
            {QNA.map((item, i) => (
              <div key={i} style={{borderTop: i === 0 ? 'none' : '1px solid var(--border)'}}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{
                  width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center',
                  background:'transparent', border:'none', padding:'22px 28px', cursor:'pointer',
                  textAlign:'left', gap:24,
                }}>
                  <div style={{display:'flex',alignItems:'flex-start',gap:18}}>
                    <span className="serif" style={{fontSize:20,fontWeight:600,color:'var(--brand-primary)',marginTop:-2}}>Q.</span>
                    <span style={{fontSize:16,fontWeight:500}}>{item.q}</span>
                  </div>
                  <Icon name={open === i ? 'remove' : 'add'} size={22}/>
                </button>
                {open === i && (
                  <div style={{padding:'0 28px 28px 64px', display:'flex', alignItems:'flex-start', gap:18}}>
                    <span className="serif" style={{fontSize:20,fontWeight:600,color:'var(--fg-soft)',marginTop:-2}}>A.</span>
                    <p style={{margin:0, color:'var(--fg-muted)', fontSize:15, lineHeight:1.75}}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{marginTop:32,padding:32,borderRadius:16,background:'var(--bg-alt)',textAlign:'center'}}>
            <div className="kr-serif" style={{fontSize:20,fontWeight:600}}>원하는 답을 찾지 못하셨나요?</div>
            <p style={{margin:'10px 0 24px',color:'var(--fg-muted)',fontSize:14}}>전화 또는 온라인 상담으로 직접 문의해 주세요.</p>
            <div style={{display:'inline-flex',gap:10}}>
              <a href="tel:055-583-2480" className="btn btn-ghost"><Icon name="call" size={18}/> 055-583-2480</a>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>온라인 상담 신청</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { BoardPage, NOTICES });

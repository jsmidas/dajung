/* page-contact.jsx — 상담 신청 폼 */

function ContactPage({ navigate }) {
  const [form, setForm] = useState({
    service:'mobile', name:'', company:'', phone:'', email:'',
    headcount:'', date:'', budget:'', notes:'', agree:false,
  });
  const [err, setErr] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => { setForm(f => ({...f, [k]: v})); setErr(e => ({...e, [k]: null})); };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = '담당자 성함을 입력해주세요.';
    if (!form.phone.trim()) e.phone = '연락처를 입력해주세요.';
    else if (!/^[0-9-+\s()]{8,}$/.test(form.phone)) e.phone = '올바른 전화번호 형식이 아닙니다.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = '이메일 형식이 올바르지 않습니다.';
    if (!form.agree) e.agree = '개인정보 수집 및 이용에 동의해주세요.';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErr(e); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page-fade" data-screen-label="Contact · Submitted" style={{padding:'120px 0'}}>
        <div className="container" style={{maxWidth:640, textAlign:'center'}}>
          <div style={{
            width:88, height:88, borderRadius:'50%',
            background:'var(--brand-primary)', color:'var(--brand-on-primary)',
            margin:'0 auto', display:'grid', placeItems:'center',
          }}>
            <Icon name="check" size={48}/>
          </div>
          <h1 className="h2" style={{marginTop:32}}>상담 신청이 접수되었습니다.</h1>
          <p className="lead" style={{margin:'18px auto 0'}}>다정캐터링 담당자가 평균 2시간 이내 연락드릴 예정입니다. 급한 건은 055-583-2480으로 전화 부탁드립니다.</p>
          <div style={{marginTop:36,display:'inline-flex',gap:10}}>
            <button className="btn btn-ghost" onClick={() => navigate('home')}>홈으로</button>
            <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({service:'mobile', name:'', company:'', phone:'', email:'', headcount:'', date:'', budget:'', notes:'', agree:false}); }}>새로 신청</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-fade" data-screen-label="Contact">
      <section style={{padding:'80px 0 40px'}}>
        <div className="container">
          <Eyebrow>CONTACT · 상담 문의</Eyebrow>
          <h1 className="h1" style={{margin:'18px 0 0'}}>상담을 신청해주세요.</h1>
          <p className="lead" style={{marginTop:20,maxWidth:'62ch'}}>
            아래 양식을 작성해주시면 다정 담당자가 평균 2시간 이내 회신드립니다. 급한 건은 055-583-2480으로 전화해 주세요.
          </p>
        </div>
      </section>

      <section style={{paddingBottom:120}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1.6fr 1fr',gap:48}} className="grid-2">
            <form onSubmit={submit} className="card" style={{padding:'40px 36px',display:'flex',flexDirection:'column',gap:28}}>
              <Field label="문의 서비스">
                <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:8}}>
                  {[['mobile','이동급식'],['lunchbox','단체도시락'],['event','행사 케이터링'],['subscription','정기 배송']].map(([v,l]) => (
                    <button key={v} type="button" onClick={() => set('service', v)} style={{
                      padding:'14px 16px', borderRadius:12, cursor:'pointer',
                      border:'1px solid ' + (form.service === v ? 'var(--brand-primary)' : 'var(--border)'),
                      background: form.service === v ? 'color-mix(in oklch, var(--brand-primary) 8%, transparent)' : 'transparent',
                      color: form.service === v ? 'var(--brand-primary)' : 'var(--fg)',
                      fontWeight: form.service === v ? 600 : 500,
                      fontSize:14, textAlign:'left',
                    }}>{l}</button>
                  ))}
                </div>
              </Field>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
                <Field label="담당자 성함" required err={err.name}>
                  <Input v={form.name} onChange={v => set('name', v)} placeholder="홍길동"/>
                </Field>
                <Field label="회사 / 단체명">
                  <Input v={form.company} onChange={v => set('company', v)} placeholder="(선택) 다정주식회사"/>
                </Field>
              </div>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
                <Field label="연락처" required err={err.phone}>
                  <Input v={form.phone} onChange={v => set('phone', v)} placeholder="010-0000-0000"/>
                </Field>
                <Field label="이메일" err={err.email}>
                  <Input v={form.email} onChange={v => set('email', v)} placeholder="(선택) you@example.com"/>
                </Field>
              </div>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}}>
                <Field label="예상 인원">
                  <Input v={form.headcount} onChange={v => set('headcount', v)} placeholder="50인"/>
                </Field>
                <Field label="희망 일자">
                  <Input v={form.date} onChange={v => set('date', v)} placeholder="2026-06-15"/>
                </Field>
                <Field label="예산 (1인)">
                  <Input v={form.budget} onChange={v => set('budget', v)} placeholder="8,000원"/>
                </Field>
              </div>

              <Field label="요청 사항">
                <textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={5} placeholder="알레르기·메뉴 선호도·배송 지역 등 자유롭게 적어주세요." style={{
                  width:'100%', padding:'14px 16px', borderRadius:12,
                  border:'1px solid var(--border)', background:'var(--bg)',
                  color:'var(--fg)', fontFamily:'inherit', fontSize:14.5, lineHeight:1.6,
                  resize:'vertical', minHeight:120,
                }}/>
              </Field>

              <label style={{display:'flex',alignItems:'flex-start',gap:12,cursor:'pointer'}}>
                <input type="checkbox" checked={form.agree} onChange={e => set('agree', e.target.checked)} style={{marginTop:3,width:18,height:18,accentColor:'var(--brand-primary)'}}/>
                <div>
                  <span style={{fontSize:14}}>개인정보 수집 및 이용에 동의합니다. <span style={{color:'var(--brand-primary)'}}>(필수)</span></span>
                  <div style={{fontSize:12,color:'var(--fg-soft)',marginTop:4,lineHeight:1.6}}>
                    수집 항목: 성함·연락처·이메일 / 이용 목적: 상담 회신 / 보유 기간: 상담 종료 후 30일
                  </div>
                  {err.agree && <div style={{color:'var(--md-sys-color-error)',fontSize:12,marginTop:6}}>{err.agree}</div>}
                </div>
              </label>

              <button type="submit" className="btn btn-primary" style={{justifyContent:'center',padding:'16px',fontSize:15}}>
                상담 신청 보내기 <Icon name="arrow_forward" size={18}/>
              </button>
            </form>

            <aside style={{display:'flex',flexDirection:'column',gap:24}}>
              <div className="card" style={{padding:32,background:'var(--brand-primary)',color:'var(--brand-on-primary)',border:'none'}}>
                <div className="mono" style={{fontSize:11,letterSpacing:'0.18em',opacity:0.7}}>CALL US DIRECTLY</div>
                <a href="tel:055-583-2480" style={{display:'block',fontFamily:'var(--font-display)',fontSize:36,fontWeight:500,marginTop:14,color:'inherit'}}>055-583-2480</a>
                <div style={{marginTop:8,fontSize:13,opacity:0.85}}>09:00 — 18:00 / 연중무휴</div>
              </div>
              <div className="card" style={{padding:28}}>
                <div className="kr-serif" style={{fontSize:18,fontWeight:600}}>회신은 평균 2시간 이내</div>
                <p style={{margin:'10px 0 0',fontSize:14,color:'var(--fg-muted)',lineHeight:1.7}}>
                  업무 시간 내 접수된 상담은 평균 2시간 이내 회신드립니다. 18시 이후·주말 접수는 다음 영업일 오전에 회신됩니다.
                </p>
              </div>
              <div className="card" style={{padding:28}}>
                <div className="kr-serif" style={{fontSize:18,fontWeight:600}}>방문 상담 환영합니다</div>
                <p style={{margin:'10px 0 0',fontSize:14,color:'var(--fg-muted)',lineHeight:1.7}}>
                  함안 본사로 직접 방문 상담 가능합니다. 30인 이상 행사는 사전 시식까지 가능합니다.
                </p>
                <button className="btn btn-ghost" onClick={() => navigate('about/map')} style={{marginTop:18,padding:'10px 16px',fontSize:13}}>
                  오시는 길 →
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, required, err, children }) {
  return (
    <div>
      <label style={{display:'block',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'0.12em',color:'var(--fg-soft)',marginBottom:10,textTransform:'uppercase'}}>
        {label} {required && <span style={{color:'var(--brand-primary)'}}>*</span>}
      </label>
      {children}
      {err && <div style={{color:'#B3261E',fontSize:12,marginTop:6}}>{err}</div>}
    </div>
  );
}

function Input({ v, onChange, placeholder }) {
  return (
    <input value={v} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{
      width:'100%', padding:'14px 16px', borderRadius:12,
      border:'1px solid var(--border)', background:'var(--bg)',
      color:'var(--fg)', fontFamily:'inherit', fontSize:14.5,
      transition:'border-color 150ms',
    }}
    onFocus={e => e.target.style.borderColor = 'var(--brand-primary)'}
    onBlur={e => e.target.style.borderColor = 'var(--border)'}
    />
  );
}

Object.assign(window, { ContactPage });

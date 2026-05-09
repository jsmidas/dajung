/* footer.jsx */

function Footer({ navigate }) {
  return (
    <footer style={{
      background:'var(--ink-900)',
      color:'#E9DFCC',
      padding:'72px 0 36px',
      marginTop: 80,
    }}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56}} className="footer-grid">
          <div>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:18}}>
              <span style={{
                width:42,height:42,borderRadius:10,
                background:'#FBF7F1',color:'#1B1610',
                display:'grid',placeItems:'center',
                fontFamily:'var(--font-serif-kr)', fontWeight:700, fontSize:22,
              }}>다</span>
              <span className="kr-serif" style={{fontSize:20, color:'#FBF7F1'}}>다정캐터링</span>
            </div>
            <p style={{fontSize:14, lineHeight:1.7, color:'#B7AB95', maxWidth:340, margin:0}}>
              경남 함안에서 시작한 운반급식 전문회사.<br/>
              정성 어린 한 끼로 다정한 일상을 차립니다.
            </p>
            <div style={{marginTop:24, display:'flex', flexDirection:'column', gap:8, fontSize:13, color:'#B7AB95'}}>
              <div>주식회사 다정캐터링 · 대표 [실제 정보 입력 예정]</div>
              <div>경상남도 함안군 [실제 주소 입력 예정]</div>
              <div>사업자등록번호 [실제 번호 입력 예정]</div>
            </div>
          </div>

          <div>
            <div className="footer-h">서비스</div>
            <FooterLink onClick={() => navigate('services/mobile')}>이동급식</FooterLink>
            <FooterLink onClick={() => navigate('services/lunchbox')}>단체도시락</FooterLink>
            <FooterLink onClick={() => navigate('services/event')}>행사 케이터링</FooterLink>
            <FooterLink onClick={() => navigate('services/subscription')}>정기 배송</FooterLink>
            <FooterLink onClick={() => navigate('menu')}>주간 식단표</FooterLink>
          </div>

          <div>
            <div className="footer-h">회사</div>
            <FooterLink onClick={() => navigate('about')}>인사말</FooterLink>
            <FooterLink onClick={() => navigate('about/strength')}>다정 강점</FooterLink>
            <FooterLink onClick={() => navigate('about/cert')}>인증 현황</FooterLink>
            <FooterLink onClick={() => navigate('about/map')}>오시는 길</FooterLink>
            <FooterLink onClick={() => navigate('board')}>공지사항</FooterLink>
          </div>

          <div>
            <div className="footer-h">상담 문의</div>
            <div style={{
              fontFamily:'var(--font-display)', fontSize:28, fontWeight:500,
              color:'#FBF7F1', letterSpacing:'-0.01em', marginBottom:6,
            }}>055-583-2480</div>
            <div style={{fontSize:13, color:'#B7AB95', marginBottom:18}}>연중무휴 / 09:00 — 18:00</div>
            <div style={{fontSize:13, color:'#B7AB95', lineHeight:1.8}}>
              <div>FAX. 055-583-2481</div>
              <div>EMAIL. [이메일 입력 예정]</div>
            </div>
            <button className="btn btn-primary" onClick={() => navigate('contact')} style={{marginTop:20}}>
              온라인 상담 신청
              <Icon name="arrow_forward" size={18}/>
            </button>
          </div>
        </div>

        <div style={{
          paddingTop:28, borderTop:'1px solid #3A3025',
          display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:16,
          fontSize:12, color:'#8A7C68',
        }}>
          <div>© 2026 주식회사 다정캐터링. All rights reserved.</div>
          <div style={{display:'flex',gap:20}}>
            <a style={{cursor:'pointer'}}>개인정보처리방침</a>
            <a style={{cursor:'pointer'}}>서비스이용약관</a>
            <a style={{cursor:'pointer'}}>이메일무단수집거부</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-h {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #FBF7F1;
          opacity: 0.7;
          margin-bottom: 18px;
        }
        @media (max-width: 960px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

function FooterLink({ onClick, children }) {
  return (
    <button onClick={onClick} style={{
      display:'block', background:'transparent', border:'none',
      padding:'7px 0', textAlign:'left', cursor:'pointer',
      color:'#E9DFCC', fontSize:14,
    }}
    onMouseOver={e => e.currentTarget.style.color = '#FBF7F1'}
    onMouseOut={e => e.currentTarget.style.color = '#E9DFCC'}
    >{children}</button>
  );
}

Object.assign(window, { Footer });

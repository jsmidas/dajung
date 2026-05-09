/* app.jsx — root: routing, tweaks, mounting */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "themeMode": "red",
  "heroLayout": "carousel",
  "serviceCardStyle": "image",
  "headlineFont": "serif"
}/*EDITMODE-END*/;

function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useState(() => (window.location.hash || '#home').slice(1) || 'home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme-mode', tw.themeMode);
    document.documentElement.setAttribute('data-headline', tw.headlineFont);
  }, [tw.themeMode, tw.headlineFont]);

  useEffect(() => {
    const onHash = () => setRoute((window.location.hash || '#home').slice(1) || 'home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (r) => {
    window.location.hash = r;
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const [top, sub] = route.split('/');

  let page;
  if (top === 'home' || !top)        page = <HomePage navigate={navigate} tweaks={tw} notices={NOTICES}/>;
  else if (top === 'about')          page = <AboutPage navigate={navigate} sub={sub}/>;
  else if (top === 'services')       page = <ServicePage navigate={navigate} sub={sub}/>;
  else if (top === 'menu')           page = <MenuPage navigate={navigate}/>;
  else if (top === 'board')          page = <BoardPage navigate={navigate} sub={sub}/>;
  else if (top === 'contact')        page = <ContactPage navigate={navigate}/>;
  else                               page = <HomePage navigate={navigate} tweaks={tw} notices={NOTICES}/>;

  return (
    <>
      <Header route={route} navigate={navigate}/>
      <main key={route}>{page}</main>
      <Footer navigate={navigate}/>

      <a href="tel:055-583-2480" className="cta-bar">
        <Icon name="call" size={18}/>
        055-583-2480 급식 상담
      </a>

      <ChatWidget/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="메인 컬러"/>
        <TweakRadio label="Theme" value={tw.themeMode}
          options={[
            {value:'red',   label:'레드'},
            {value:'brown', label:'갈색'},
            {value:'dark',  label:'다크'},
          ]}
          onChange={(v) => setTweak('themeMode', v)}/>

        <TweakSection label="히어로 레이아웃"/>
        <TweakRadio label="Hero" value={tw.heroLayout}
          options={[
            {value:'carousel',  label:'캐러셀'},
            {value:'fullbleed', label:'풀블리드'},
            {value:'split',     label:'분할'},
          ]}
          onChange={(v) => setTweak('heroLayout', v)}/>

        <TweakSection label="서비스 카드"/>
        <TweakRadio label="Card" value={tw.serviceCardStyle}
          options={[
            {value:'image',        label:'이미지'},
            {value:'illustration', label:'일러스트'},
            {value:'text',         label:'텍스트'},
          ]}
          onChange={(v) => setTweak('serviceCardStyle', v)}/>

        <TweakSection label="헤드라인 폰트"/>
        <TweakRadio label="Font" value={tw.headlineFont}
          options={[
            {value:'serif', label:'세리프'},
            {value:'sans',  label:'산세리프'},
          ]}
          onChange={(v) => setTweak('headlineFont', v)}/>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

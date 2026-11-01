import { useMemo, useState } from "react";
import { ArrowRight, Check, ChevronDown, Copy, KeyRound, LockKeyhole, Mail, Menu, ShieldCheck, Sparkles, Ticket, UserRound, X } from "lucide-react";

const images = ["/offerta/21457.jpg", "/offerta/21456.jpg", "/offerta/21455.jpg", "/offerta/21389.jpg", "/offerta/21388.jpg"];

type AuthMode = "login" | "signup" | "forgot";
type OrderStatus = "idle" | "waiting" | "reported" | "review" | "approved";

function makeNumbers() {
  const result = new Set<number>();
  while (result.size < 50) result.add(Math.floor(Math.random() * 1_000_000) + 1);
  return Array.from(result).sort((a, b) => a - b);
}

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("signup");
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState<OrderStatus>("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pixCopied, setPixCopied] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [notice, setNotice] = useState("");

  const statusLabel = useMemo(() => ({
    waiting: "Aguardando pagamento",
    reported: "Pagamento informado",
    review: "Em análise",
    approved: "Acesso aprovado",
    idle: "",
  }[orderStatus]), [orderStatus]);

  function startCheckout() {
    setOrderStatus("waiting");
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  }

  function reportPayment() {
    if (!email.trim()) {
      setNotice("Informe seu e-mail para registrar o pagamento.");
      return;
    }
    setNumbers(makeNumbers());
    setOrderStatus("reported");
    setNotice("Pagamento informado. Seus 50 números foram reservados para os sorteios e o pedido aguarda análise.");
  }

  function submitAuth(event: React.FormEvent) {
    event.preventDefault();
    if (authMode === "forgot") {
      setNotice("Se houver uma conta com este e-mail, enviaremos as instruções de recuperação.");
      setAuthOpen(false);
      return;
    }
    setNotice(authMode === "signup" ? "Cadastro iniciado. Agora você já pode continuar para o checkout." : "Login realizado. Você pode acompanhar o pedido nesta página.");
    setAuthOpen(false);
  }

  return (
    <main className="site-shell">
      <nav className="topbar">
        <a className="wordmark" href="#top" aria-label="PixConteúdo início"><span className="wordmark-mark">P</span>ixConteúdo</a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#beneficios" onClick={() => setMenuOpen(false)}>O que você recebe</a>
          <button className="nav-login" onClick={() => { setAuthMode("login"); setAuthOpen(true); }}>Entrar <ArrowRight size={15} /></button>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> acesso reservado <span className="eyebrow-line" /></div>
          <h1>Assine e tenha<br /><em>acesso exclusivo.</em></h1>
          <p className="hero-lead">Os assinantes terão acesso aos meus conteúdos e participarão de promoções especiais durante um ano.</p>
          <div className="hero-actions"><button className="button button-lime" onClick={startCheckout}>Quero assinar por R$ 49,90 <ArrowRight size={18} /></button></div>
          <div className="trust-row"><span><ShieldCheck size={17} /> acesso por 1 ano</span><span><LockKeyhole size={16} /> pagamento via Pix</span></div>
        </div>
        <div className="hero-collage" aria-label="Imagens da coleção">
          <div className="collage-main"><img src={images[0]} alt="Prévia do conteúdo" /><span className="collage-stamp">feito<br />para você</span></div>
          <div className="collage-side"><img src={images[1]} alt="Detalhe da coleção" /><img src={images[2]} alt="Outra prévia da coleção" /><img src={images[3]} alt="Mais uma prévia da coleção" /></div>
          <div className="collage-caption">conteúdos + sorteios promocionais <strong>2026</strong></div>
        </div>
      </section>

      <section id="beneficios" className="benefits section-pad">
        <div className="section-kicker">sua assinatura inclui</div>
        <div className="benefit-intro"><h2>Conteúdo exclusivo.<br /><span>Promoções toda semana.</span></h2><p>Assinatura válida por um ano, com acesso aos meus conteúdos e participação nos sorteios promocionais.</p></div>
        <div className="benefit-list"><article><span>01</span><div><h3>Acesso por um ano</h3><p>Você terá acesso aos meus conteúdos durante 12 meses.</p></div></article><article><span>02</span><div><h3>Sorteio toda semana</h3><p>Um assinante será escolhido por semana para passar uma noite comigo.</p></div></article><article><span>03</span><div><h3>Tudo pago por mim</h3><p>A promoção inclui a noite e as despesas combinadas, pagas por mim.</p></div></article></div>
      </section>

      <section id="checkout" className="checkout-wrap section-pad">
        <div className="checkout-panel">
          <div className="checkout-heading"><div><div className="section-kicker">checkout</div><h2>Garanta seu lugar.</h2></div><div className="price-tag"><small>assinatura anual</small><strong>R$ 49,90</strong></div></div>
          {notice && <div className="notice"><Check size={17} /> {notice}</div>}
          <div className="checkout-grid">
            <div className="checkout-info"><div className="product-line"><div className="product-thumb"><img src={images[4]} alt="" /></div><div><strong>Assinatura anual</strong><span>Meus conteúdos + sorteios promocionais semanais</span></div></div><div className="checkout-steps"><div className="step active"><b>1</b><span>Crie sua conta ou entre</span></div><div className="step"><b>2</b><span>Faça o Pix de R$ 49,90</span></div><div className="step"><b>3</b><span>Informe que pagou</span></div></div><button className="button button-outline" onClick={() => { setAuthMode("signup"); setAuthOpen(true); }}><UserRound size={17} /> {email ? "Conta conectada" : "Criar minha conta"}</button></div>
            <div className="pix-card"><div className="pix-card-top"><span><Sparkles size={16} /> pagamento via Pix</span><span className="pix-status-dot">{statusLabel || "seguro"}</span></div><div className="qr-placeholder"><div className="qr-grid">{Array.from({ length: 49 }).map((_, index) => <i key={index} className={(index * 17 + 3) % 5 < 2 ? "on" : ""} />)}</div><span>QR Code Pix</span></div><div className="pix-code"><div><small>código copia e cola</small><code>pix-conteudo-pagamento-49-90</code></div><button aria-label="Copiar código" onClick={() => { setPixCopied(true); setTimeout(() => setPixCopied(false), 1800); }}>{pixCopied ? <Check size={17} /> : <Copy size={17} />}</button></div><input className="field" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Seu melhor e-mail" type="email" /><button className="button button-lime full" onClick={reportPayment}>{orderStatus === "reported" ? "Pagamento informado" : "Já paguei"} <ArrowRight size={17} /></button><p className="microcopy"><LockKeyhole size={13} /> Seus dados ficam protegidos e o acesso só é liberado após aprovação.</p></div>
          </div>
          {numbers.length > 0 && <div className="numbers-box"><div><div className="section-kicker">reserva registrada</div><h3>Seus 50 números estão vinculados ao pedido.</h3></div><div className="numbers-grid">{numbers.map((number) => <span key={number}>{String(number).padStart(6, "0")}</span>)}</div></div>}
        </div>
      </section>

      <section id="como-funciona" className="how section-pad"><div className="section-kicker">promoção anual</div><h2>Uma noite por semana<br /><em>com um assinante.</em></h2><div className="how-line"><div><strong>01</strong><p>Assine por R$ 49,90 e tenha acesso aos conteúdos por um ano.</p></div><div><strong>02</strong><p>Participe dos sorteios promocionais toda semana.</p></div><div><strong>03</strong><p>Um assinante será escolhido para passar uma noite comigo.</p></div><div><strong>04</strong><p>A noite e as despesas serão pagas por mim.</p></div></div></section>

      <footer><a className="wordmark" href="#top"><span className="wordmark-mark">P</span>ixConteúdo</a><span>acesso com clareza, do seu jeito.</span><span>© 2026 PixConteúdo</span></footer>

      {authOpen && <div className="modal-backdrop" onClick={() => setAuthOpen(false)}><div className="auth-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setAuthOpen(false)} aria-label="Fechar"><X /></button><div className="auth-icon">{authMode === "forgot" ? <KeyRound /> : <UserRound />}</div><div className="section-kicker">sua conta</div><h2>{authMode === "signup" ? "Crie seu acesso." : authMode === "login" ? "Que bom ter você de volta." : "Recupere sua senha."}</h2><p>{authMode === "forgot" ? "Digite seu e-mail e enviaremos as instruções de recuperação." : "Seu cadastro guarda o pedido, o status e seus números em um só lugar."}</p><form onSubmit={submitAuth}>{authMode === "signup" && <input className="field" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Seu nome" /> }<input className="field" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Seu e-mail" type="email" />{authMode !== "forgot" && <input className="field" required placeholder="Sua senha" type="password" minLength={6} /> }<button className="button button-lime full" type="submit">{authMode === "signup" ? "Criar conta" : authMode === "login" ? "Entrar" : "Enviar instruções"} <ArrowRight size={17} /></button></form><div className="auth-switch">{authMode !== "signup" && <button onClick={() => setAuthMode("signup")}>Criar uma conta</button>}{authMode !== "login" && <button onClick={() => setAuthMode("login")}>Já tenho uma conta</button>}{authMode !== "forgot" && <button onClick={() => setAuthMode("forgot")}>Esqueci minha senha</button>}</div></div></div>}
    </main>
  );
}

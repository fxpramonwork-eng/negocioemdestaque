import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Gift,
  Layers,
  Minus,
  Palette,
  Plus,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import templateData from "@/assets/template-data.jpg.asset.json";
import templateProduto from "@/assets/template-produto.jpg.asset.json";
import templateDicaLivro from "@/assets/template-dica-livro.jpg.asset.json";
import templateLive from "@/assets/template-live.jpg.asset.json";
import bonusLegendas from "@/assets/bonus-legendas-prontas.jpeg.asset.json";
import bonusCalendario from "@/assets/bonus-calendario-conteudo.jpeg.asset.json";
import depoimentoJuliana from "@/assets/depoimento-juliana.jpg";
import depoimentoCamila from "@/assets/depoimento-camila.jpg";
import depoimentoRafael from "@/assets/depoimento-rafael.jpg";
import heroAvatar from "@/assets/hero-mockup.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Negócio em Destaque — Material digital para o seu negócio" },
      {
        name: "description",
        content:
          "Artes profissionais, legendas prontas e 30 dias de ideias para manter seu Instagram ativo e colocar seu negócio em destaque.",
      },
      { property: "og:title", content: "Negócio em Destaque" },
      {
        property: "og:description",
        content:
          "Material prático e editável para organizar sua presença digital e comunicar seu negócio com mais profissionalismo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const CTA_LINK = "https://pay.cakto.com.br/7q28sjr_1104493";

function UrgencyBanner() {
  const [tempo, setTempo] = useState({ horas: "00", minutos: "00", segundos: "00" });

  useEffect(() => {
    const atualizar = () => {
      const agora = new Date();
      const fim = new Date(agora);
      fim.setHours(23, 59, 59, 999);
      const restante = Math.max(0, fim.getTime() - agora.getTime());
      setTempo({
        horas: String(Math.floor(restante / 3_600_000)).padStart(2, "0"),
        minutos: String(Math.floor((restante % 3_600_000) / 60_000)).padStart(2, "0"),
        segundos: String(Math.floor((restante % 60_000) / 1_000)).padStart(2, "0"),
      });
    };
    atualizar();
    const intervalo = window.setInterval(atualizar, 1_000);
    return () => window.clearInterval(intervalo);
  }, []);

  return (
    <aside className="urgency" aria-label="Desconto exclusivo de hoje">
      <div className="urgency-inner">
        <div className="urgency-message">
          <Clock aria-hidden="true" />
          <strong>Desconto exclusivo apenas hoje</strong>
        </div>
        <div className="countdown" aria-live="polite">
          {[
            [tempo.horas, "h"],
            [tempo.minutos, "min"],
            [tempo.segundos, "s"],
          ].map(([valor, unidade], index) => (
            <span className="countdown-group" key={unidade}>
              {index > 0 ? <i>:</i> : null}
              <b>{valor}<small>{unidade}</small></b>
            </span>
          ))}
        </div>
      </div>
      <p>Oferta limitada <span>•</span> Pagamento único <span>•</span> Acesso imediato</p>
    </aside>
  );
}

function CtaButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Button asChild size="lg" className={`sales-cta ${className}`}>
      <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

function SectionTitle({ eyebrow, children, center = false }: { eyebrow: string; children: ReactNode; center?: boolean }) {
  return (
    <header className={`section-title ${center ? "section-title-center" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{children}</h2>
    </header>
  );
}

const entregaveis = [
  { icon: Layers, title: "Guia Negócio em Destaque", text: "Passo a passo para posicionar seu negócio, organizar sua oferta e comunicar valor com clareza." },
  { icon: Palette, title: "Templates editáveis", text: "Artes prontas para posts, stories e capas. Troque texto, cor e imagem e publique no mesmo dia." },
  { icon: TrendingUp, title: "Planilhas de planejamento", text: "Organize vendas, despesas e o calendário de conteúdo sem criar controles do zero." },
  { icon: Check, title: "Checklists de execução", text: "Listas práticas para revisar perfil, oferta e publicações antes de cada campanha." },
  { icon: Download, title: "Acesso digital imediato", text: "Arquivos digitais para baixar e usar no computador ou celular quando quiser." },
  { icon: Sparkles, title: "Atualizações do material", text: "Quando o kit receber novos arquivos, você acessa a versão atualizada sem pagar novamente." },
];

const beneficios = [
  ["01", "Economize horas", "Parta de algo pronto e adapte ao seu negócio."],
  ["02", "Visual profissional", "Transmita mais cuidado, confiança e credibilidade."],
  ["03", "Publique com constância", "Tenha material à mão para não deixar o perfil parado."],
  ["04", "Organize a rotina", "Centralize informações, ideias e tarefas importantes."],
  ["05", "Edite com facilidade", "Personalize tudo mesmo sem experiência em design."],
  ["06", "Aplique de verdade", "Use no dia a dia em vez de apenas ler e guardar."],
];

const bonus = [
  { nome: "Banco de Legendas Prontas", desc: "30 legendas editáveis para divulgar, atrair clientes e vender.", imagem: bonusLegendas.url },
  { nome: "Calendário de Conteúdo — 30 Dias", desc: "O mapa para você nunca mais ficar sem saber o que postar. São 30 dias de ideias prontas para manter seu Instagram ativo, profissional e interessante — sem passar horas pensando no que publicar.", imagem: bonusCalendario.url },
];

const provas = [
  { img: templateData.url, titulo: "Datas especiais", legenda: "Personalize datas, imagens e o perfil do seu negócio." },
  { img: templateProduto.url, titulo: "Produtos e promoções", legenda: "Destaque produtos, descontos e chamadas comerciais." },
  { img: templateDicaLivro.url, titulo: "Dicas e conteúdo", legenda: "Compartilhe recomendações e crie conexão com o público." },
  { img: templateLive.url, titulo: "Divulgação de lives", legenda: "Anuncie tema, data, horário e participantes." },
];

const depoimentos = [
  { nome: "Rafael Oliveira", contexto: "Empreendedor", texto: "Os modelos deixaram meu perfil mais organizado e facilitaram bastante minha rotina de postagens.", foto: depoimentoRafael },
  { nome: "Juliana Martins", contexto: "Confeiteira", texto: "Consegui adaptar as artes para o meu negócio sem perder horas criando tudo do zero.", foto: depoimentoJuliana },
  { nome: "Camila Souza", contexto: "Loja online", texto: "O calendário trouxe constância e as legendas são simples de adaptar para cada publicação.", foto: depoimentoCamila },
];

const faq = [
  ["Para quem é esse material?", "Para quem tem ou está começando um negócio e quer organizar a comunicação, o visual e a rotina de conteúdo sem depender de alguém para montar tudo do zero."],
  ["Preciso saber usar ferramentas de design?", "Não. Os templates foram feitos para edição simples: você troca textos, cores e imagens seguindo as orientações do material."],
  ["Como vou receber o material?", "O acesso é digital. Assim que a compra for confirmada, você recebe as instruções no seu e-mail e pode baixar os arquivos."],
  ["Posso editar os materiais?", "Sim. Templates, planilhas e checklists são editáveis para você adaptar ao nome, às cores e à realidade do seu negócio."],
  ["Como funciona a garantia?", "Você tem 7 dias de garantia incondicional. Dentro desse prazo, pode solicitar o reembolso se entender que o material não é para você."],
];

function LandingPage() {
  const [aberta, setAberta] = useState<number | null>(0);
  const [provaAtiva, setProvaAtiva] = useState(0);
  const prova = provas[provaAtiva];
  const navegar = (direcao: number) => setProvaAtiva((atual) => (atual + direcao + provas.length) % provas.length);

  return (
    <main>
      <UrgencyBanner />

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-person" aria-hidden="true">
          <img src={heroAvatar.url} alt="" width={1365} height={768} />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="brand-lockup"><TrendingUp /><span>Negócio em <b>Destaque</b></span></div>
            <p className="hero-kicker">Estratégias, ferramentas e resultados reais</p>
            <h1>Faça o seu negócio parecer tão <em>profissional</em> quanto ele merece.</h1>
            <p className="hero-description">Artes, legendas e um plano de conteúdo prontos para você divulgar melhor, economizar tempo e manter seu Instagram ativo.</p>
            <CtaButton>Quero colocar meu negócio em destaque</CtaButton>
            <div className="hero-assurance"><Check /> Acesso imediato <span /> <ShieldCheck /> Garantia de 7 dias</div>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="section-shell statement-grid">
          <p className="giant-number">01</p>
          <div>
            <p className="overline">Chega de improvisar</p>
            <h2>Seu negócio pode ser pequeno.<br /><span>Sua imagem não precisa ser.</span></h2>
          </div>
          <p className="statement-copy">Você não precisa passar horas pensando no que postar ou criando tudo do zero. Com uma direção clara e materiais prontos, fica muito mais simples aparecer com constância e profissionalismo.</p>
        </div>
      </section>

      <section className="deliverables section-pad">
        <div className="section-shell">
          <SectionTitle eyebrow="Tudo dentro de um único acesso">O que você recebe</SectionTitle>
          <div className="deliverables-grid">
            {entregaveis.map((item, index) => (
              <article className="deliverable" key={item.title}>
                <div className="deliverable-top"><span>0{index + 1}</span><item.icon /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="center-cta"><CtaButton>Quero receber o material completo</CtaButton></div>
        </div>
      </section>

      <section className="benefits section-pad">
        <div className="section-shell benefits-layout">
          <div className="benefits-heading">
            <SectionTitle eyebrow="Menos esforço. Mais presença.">Feito para transformar a sua rotina</SectionTitle>
            <p>Uma estrutura simples para você deixar de improvisar e começar a comunicar seu valor com clareza.</p>
          </div>
          <div className="benefits-list">
            {beneficios.map(([numero, titulo, texto]) => (
              <article key={numero}><span>{numero}</span><div><h3>{titulo}</h3><p>{texto}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="inside section-pad">
        <div className="section-shell">
          <SectionTitle eyebrow="Você vê antes de comprar" center>Conheça o material por dentro</SectionTitle>
          {prova ? (
            <div className="inside-stage">
              <span className="inside-word" aria-hidden="true">CONTEÚDO</span>
              <figure key={prova.titulo}>
                <img src={prova.img} alt={prova.titulo} width={1024} height={1024} />
                <figcaption><b>{prova.titulo}</b><span>{prova.legenda}</span></figcaption>
              </figure>
              <div className="carousel-nav">
                <Button variant="outline" size="icon" onClick={() => navegar(-1)} aria-label="Ver material anterior"><ChevronLeft /></Button>
                <span aria-live="polite">0{provaAtiva + 1} / 0{provas.length}</span>
                <Button variant="outline" size="icon" onClick={() => navegar(1)} aria-label="Ver próximo material"><ChevronRight /></Button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bonuses section-pad">
        <div className="section-shell">
          <div className="bonus-intro"><Gift /><div><span>Bônus especial</span><h2>Mais dois materiais para acelerar seus resultados.</h2></div></div>
          <div className="bonus-grid">
            {bonus.map((item, index) => (
              <article className="bonus-card" key={item.nome}>
                <div className="bonus-cover"><span>Bônus 0{index + 1}</span><img src={item.imagem} alt={`Capa do bônus ${item.nome}`} loading="lazy" width={1024} height={1536} /></div>
                <div className="bonus-copy"><small>Incluso sem custo extra</small><h3>{item.nome}</h3><p>{item.desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials section-pad">
        <div className="section-shell">
          <SectionTitle eyebrow="Experiências ilustrativas" center>Quem organiza, sente a diferença</SectionTitle>
          <div className="testimonial-grid">
            {depoimentos.map((item) => (
              <article key={item.nome}>
                <div className="stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} />)}</div>
                <blockquote>“{item.texto}”</blockquote>
                <div className="person"><img src={item.foto} alt={`Foto ilustrativa de ${item.nome}`} loading="lazy" /><div><b>{item.nome}</b><span>{item.contexto}</span></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="offer section-pad">
        <div className="offer-glow" aria-hidden="true" />
        <div className="section-shell offer-layout">
          <div className="offer-copy">
            <span className="overline">A oferta</span>
            <h2>Tenha tudo o que precisa para manter seu Instagram ativo.</h2>
            <p>Artes profissionais + legendas prontas + 30 dias de ideias de conteúdo.</p>
            <ul>
              <li><Check /><span><b>Negócio em Destaque</b> — artes profissionais editáveis no Canva.</span></li>
              <li><Check /><span><b>Banco de Legendas que Vendem</b> — 30 modelos prontos.</span></li>
              <li><Check /><span><b>Calendário de Conteúdo</b> — 30 dias de ideias.</span></li>
            </ul>
          </div>
          <div className="price-box">
            <span className="price-label">Oferta especial</span>
            <p className="old-price">De R$ 49,90</p>
            <p className="price-prefix">Hoje por apenas</p>
            <p className="price">R$ <strong>29</strong><sup>,90</sup></p>
            <p className="payment">Pagamento único • Acesso imediato</p>
            <CtaButton>Quero acessar agora</CtaButton>
            <small><ShieldCheck /> Compra segura e garantia de 7 dias</small>
          </div>
        </div>
      </section>

      <section className="guarantee section-pad">
        <div className="section-shell guarantee-layout">
          <div className="guarantee-seal"><Sparkles /><ShieldCheck /><strong>7</strong><span>dias de garantia</span></div>
          <div><span className="overline">Risco zero</span><h2>Entre, conheça e decida com calma.</h2><p>Seu acesso é protegido por uma garantia incondicional de 7 dias. Se concluir que o material não é para você, basta solicitar o reembolso dentro do prazo.</p></div>
        </div>
      </section>

      <section className="faq section-pad">
        <div className="section-shell faq-layout">
          <SectionTitle eyebrow="Perguntas frequentes">Antes de começar</SectionTitle>
          <div className="faq-list">
            {faq.map(([pergunta, resposta], index) => {
              const abertaAgora = aberta === index;
              return (
                <article key={pergunta}>
                  <Button variant="ghost" onClick={() => setAberta(abertaAgora ? null : index)} aria-expanded={abertaAgora}>
                    <span>{pergunta}</span>{abertaAgora ? <Minus /> : <Plus />}
                  </Button>
                  {abertaAgora ? <p>{resposta}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="section-shell"><p>Seu próximo post pode começar pronto.</p><h2>Coloque o seu negócio em destaque.</h2><CtaButton>Quero aproveitar a oferta de hoje</CtaButton></div>
      </section>

      <footer>
        <div className="section-shell footer-inner"><div className="brand-lockup"><TrendingUp /><span>Negócio em <b>Destaque</b></span></div><p>© 2026 Negócio em Destaque. Todos os direitos reservados.</p></div>
      </footer>

      <Button asChild size="icon" className="floating-buy">
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Comprar Negócio em Destaque"><ShoppingBag /></a>
      </Button>
    </main>
  );
}
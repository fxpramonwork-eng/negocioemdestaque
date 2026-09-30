import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Clock,
  Sparkles,
  Layers,
  Rocket,
  ShieldCheck,
  Check,
  Gift,
  Plus,
  Minus,
  Star,
  Download,
  Palette,
  TrendingUp,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import templateData from "@/assets/template-data.jpg.asset.json";
import templateProduto from "@/assets/template-produto.jpg.asset.json";
import templateDicaLivro from "@/assets/template-dica-livro.jpg.asset.json";
import templateLive from "@/assets/template-live.jpg.asset.json";
import bonusLegendas from "@/assets/bonus-legendas-prontas.jpeg.asset.json";
import bonusCalendario from "@/assets/bonus-calendario-conteudo.jpeg.asset.json";
import depoimentoJuliana from "@/assets/depoimento-juliana.jpg";
import depoimentoCamila from "@/assets/depoimento-camila.jpg";
import depoimentoRafael from "@/assets/depoimento-rafael.jpg";
import heroAvatar from "@/assets/hero-avatar-infinito.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Negócio em Destaque — Estratégias, Ferramentas e Resultados Reais" },
      {
        name: "description",
        content:
          "Kit completo com estratégias, templates, planilhas e checklists para colocar o seu negócio em destaque e organizar sua presença digital com aparência profissional.",
      },
      {
        property: "og:title",
        content: "Negócio em Destaque — Estratégias, Ferramentas e Resultados Reais",
      },
      {
        property: "og:description",
        content:
          "Material prático e editável para profissionalizar seu negócio: templates, planilhas, checklists e aulas diretas ao ponto.",
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
      const fimDoDia = new Date(agora);
      fimDoDia.setHours(23, 59, 59, 999);
      const restante = Math.max(0, fimDoDia.getTime() - agora.getTime());

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
    <aside aria-label="Desconto exclusivo de hoje" className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 py-4 text-center sm:flex-row sm:gap-6">
        <div className="flex items-center gap-2">
          <Clock className="text-gold size-5 shrink-0" />
          <p className="text-sm font-extrabold uppercase sm:text-base">
            Desconto exclusivo <span className="text-gold">apenas hoje</span>
          </p>
        </div>
        <div className="flex items-center gap-1.5 font-display" aria-live="polite">
          {[
            [tempo.horas, "h"],
            [tempo.minutos, "min"],
            [tempo.segundos, "s"],
          ].map(([valor, unidade], index) => (
            <div key={unidade} className="flex items-center gap-1.5">
              {index > 0 ? <span className="text-gold text-lg">:</span> : null}
              <span className="min-w-12 rounded-md border border-border bg-background px-2 py-1 text-xl text-gold">
                {valor}
                <span className="ml-0.5 font-sans text-[0.55rem] text-muted-foreground uppercase">
                  {unidade}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="border-t border-border bg-primary px-4 py-2 text-center text-xs font-extrabold tracking-wide text-primary-foreground uppercase sm:text-sm">
        Oferta limitada • Pagamento único • Acesso imediato
      </p>
    </aside>
  );
}

function CtaButton({
  children,
  className = "",
  href = CTA_LINK,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-float bg-gold-gradient shadow-gold inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-center text-base font-extrabold tracking-wide text-primary-foreground uppercase transition-transform duration-200 hover:scale-[1.03] active:scale-[0.99] sm:w-auto sm:px-10 sm:py-5 sm:text-lg ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
          {kicker}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

const entregaveis = [
  {
    icon: Layers,
    title: "Guia principal Negócio em Destaque",
    text: "Um material direto ao ponto com o passo a passo para posicionar seu negócio, organizar sua oferta e comunicar valor com clareza.",
  },
  {
    icon: Palette,
    title: "Pacote de templates editáveis",
    text: "Artes prontas para posts, stories e capas de destaques. Você troca texto, cor e imagem e publica no mesmo dia.",
  },
  {
    icon: TrendingUp,
    title: "Planilhas de controle e planejamento",
    text: "Planilhas simples para acompanhar vendas, despesas e calendário de conteúdo sem precisar montar nada do zero.",
  },
  {
    icon: Check,
    title: "Checklists de execução",
    text: "Listas práticas para revisar seu perfil, sua oferta e sua rotina de publicação antes de cada campanha.",
  },
  {
    icon: Download,
    title: "Acesso digital imediato",
    text: "Tudo entregue em arquivos digitais para baixar e usar no computador ou no celular, quando quiser.",
  },
  {
    icon: Sparkles,
    title: "Atualizações do material",
    text: "Sempre que o kit receber novos arquivos, você acessa a versão atualizada sem pagar de novo.",
  },
];

const beneficios = [
  {
    icon: Clock,
    title: "Economize horas de trabalho",
    text: "Em vez de começar cada post e cada planilha do zero, você parte de algo pronto e só ajusta ao seu negócio.",
  },
  {
    icon: Star,
    title: "Aparência mais profissional",
    text: "Um visual consistente e bem acabado faz o seu negócio transmitir mais cuidado e mais credibilidade.",
  },
  {
    icon: Rocket,
    title: "Mais constância nas redes",
    text: "Com material pronto na mão, ficar semanas sem publicar deixa de ser a regra.",
  },
  {
    icon: Layers,
    title: "Organização de verdade",
    text: "Planilhas e checklists colocam ordem nas informações que hoje estão espalhadas em anotações e prints.",
  },
  {
    icon: Palette,
    title: "Simples de personalizar",
    text: "Os arquivos foram pensados para edição fácil, sem exigir experiência avançada em design.",
  },
  {
    icon: Check,
    title: "Uso prático no dia a dia",
    text: "Material feito para aplicar, não apenas para ler e guardar em uma pasta esquecida.",
  },
];

const itensOferta = [
  {
    etiqueta: "Produto principal",
    nome: "Negócio em Destaque",
    descricao:
      "Artes profissionais editáveis no Canva para divulgar seu negócio no Instagram.",
  },
  {
    etiqueta: "Bônus",
    nome: "Banco de Legendas que Vendem",
    descricao: "30 modelos de legendas prontas para adaptar ao seu negócio.",
  },
  {
    etiqueta: "Bônus",
    nome: "Calendário de Conteúdo — 30 Dias",
    descricao: "Um mapa de conteúdo para saber o que postar todos os dias.",
  },
];

const bonus = [
  {
    nome: "Banco de Legendas Prontas",
    desc: "30 legendas editáveis para divulgar, atrair clientes e vender.",
    imagem: bonusLegendas.url,
  },
  {
    nome: "Calendário de Conteúdo — 30 Dias",
    desc: "O mapa para você nunca mais ficar sem saber o que postar. 30 dias de ideias prontas para manter seu Instagram ativo, profissional e interessante — sem passar horas pensando no que publicar.",
    imagem: bonusCalendario.url,
  },
];

const provas = [
  {
    img: templateData.url,
    titulo: "Post para datas especiais",
    legenda: "Arte editável para personalizar datas, imagens e o perfil do seu negócio.",
  },
  {
    img: templateProduto.url,
    titulo: "Post de produto e promoção",
    legenda: "Modelo pronto para destacar produtos, descontos e chamadas comerciais.",
  },
  {
    img: templateDicaLivro.url,
    titulo: "Post de dica e conteúdo",
    legenda: "Estrutura visual para compartilhar recomendações e gerar conexão.",
  },
  {
    img: templateLive.url,
    titulo: "Post para divulgar lives",
    legenda: "Layout editável para anunciar tema, data, horário e participantes.",
  },
];

const depoimentos = [
  {
    nome: "Rafael Oliveira",
    contexto: "Empreendedor",
    texto: "Os modelos deixaram meu perfil mais organizado e facilitaram bastante minha rotina de postagens.",
    foto: depoimentoRafael,
  },
  {
    nome: "Juliana Martins",
    contexto: "Confeiteira",
    texto: "Gostei da praticidade. Consegui adaptar as artes para o meu negócio sem perder horas criando tudo do zero.",
    foto: depoimentoJuliana,
  },
  {
    nome: "Camila Souza",
    contexto: "Loja online",
    texto: "O calendário me ajudou a ter mais constância e as legendas são simples de adaptar para cada publicação.",
    foto: depoimentoCamila,
  },
];

const faq = [
  {
    q: "Para quem é esse material?",
    a: "Para quem tem ou está começando um negócio e quer organizar a comunicação, o visual e a rotina de conteúdo sem depender de alguém para montar tudo do zero.",
  },
  {
    q: "Preciso saber usar ferramentas de design?",
    a: "Não. Os templates foram feitos para edição simples: você troca textos, cores e imagens em editores gratuitos e conhecidos, seguindo as orientações do material.",
  },
  {
    q: "Como vou receber o material?",
    a: "O acesso é digital. Assim que a compra é confirmada, você recebe as instruções de acesso no seu e-mail e pode baixar os arquivos na hora.",
  },
  {
    q: "Posso editar os materiais?",
    a: "Sim. Templates, planilhas e checklists são editáveis para você adaptar ao nome, às cores e à realidade do seu negócio.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 7 dias de garantia incondicional. Se dentro desse prazo entender que o material não é para você, basta solicitar o reembolso e o valor é devolvido.",
  },
];

function LandingPage() {
  const [aberta, setAberta] = useState<number | null>(0);
  const [provaAtiva, setProvaAtiva] = useState(0);
  const prova = provas[provaAtiva];

  const navegarProva = (direcao: number) => {
    setProvaAtiva((atual) => (atual + direcao + provas.length) % provas.length);
  };

  return (
    <main className="bg-dark-glow min-h-screen">
      <UrgencyBanner />

      {/* 1 — HERO */}
      <section className="hero-campaign relative isolate overflow-hidden">
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-spark hero-spark-1" />
          <span className="hero-spark hero-spark-2" />
          <span className="hero-spark hero-spark-3" />
          <span className="hero-spark hero-spark-4" />
        </div>

        <div className="hero-portrait" aria-hidden="true">
          <img
            src={heroAvatar}
            alt=""
            width={1024}
            height={1536}
            className="hero-portrait-image"
          />
        </div>
        <div className="hero-image-fade" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-6xl flex-col px-5 pt-12 pb-0 sm:pt-16 lg:justify-center lg:py-16">
          <div className="hero-copy text-center lg:max-w-[56%] lg:text-left">
            <span className="text-gold inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
              <Sparkles className="size-3.5" /> Material digital
            </span>
            <h1 className="mt-6 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl xl:text-7xl">
              Coloque o seu <span className="text-gold-gradient">negócio em destaque</span> sem começar tudo do zero
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Estratégias, templates, planilhas e checklists prontos para você organizar sua
              presença digital e transmitir a imagem profissional que o seu trabalho merece.
            </p>
            <div className="mt-8 flex w-full flex-col items-center gap-4 lg:items-start">
              <CtaButton>Quero conhecer</CtaButton>
              <p className="text-xs tracking-wide text-muted-foreground uppercase">
                Acesso imediato • Garantia de 7 dias
              </p>
            </div>
          </div>

          <div className="hero-mobile-spacer" aria-hidden="true" />
        </div>
      </section>

      <div className="hairline-gold mx-auto max-w-5xl" />

      {/* 2 — O QUE VOCÊ VAI RECEBER */}
      <section className="section-pad px-5">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="O que você vai receber"
            title="Tudo o que vem dentro do kit"
            subtitle="Nada de promessa vaga: veja exatamente quais arquivos entram no seu acesso e como usar cada um deles."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entregaveis.map((item) => (
              <article key={item.title} className="card-premium p-7">
                <span className="bg-gold-gradient flex size-11 items-center justify-center rounded-xl">
                  <item.icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-lg leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — POR QUE ESCOLHER */}
      <section className="section-pad px-5" style={{ backgroundColor: "var(--surface)" }}>
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="Por que escolher este material"
            title="O que muda na sua rotina"
            subtitle="O foco não é acumular arquivos, é reduzir esforço e deixar o seu negócio mais organizado e mais bem apresentado."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <article
                key={b.title}
                className="rounded-2xl border border-border p-7"
                style={{ backgroundColor: "var(--surface-2)" }}
              >
                <b.icon className="text-gold size-6" />
                <h3 className="mt-5 text-base leading-snug sm:text-lg">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <CtaButton>Quero ter acesso</CtaButton>
          </div>
        </div>
      </section>

      {/* 4 — BÔNUS */}
      <section className="section-pad relative px-5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="bg-gold-gradient inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-extrabold tracking-[0.2em] text-primary-foreground uppercase">
              <Gift className="size-4" /> Bônus especial
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl">
              Além do material principal, você também recebe
            </h2>
            <p className="mt-5 text-sm text-muted-foreground sm:text-base">
              Dois recursos extras para facilitar sua rotina de conteúdo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {bonus.map((b, i) => (
              <article
                key={b.nome}
                className="card-premium material-card overflow-hidden"
              >
                <img
                  src={b.imagem}
                  alt={`Capa do bônus ${b.nome}`}
                  loading="lazy"
                  width={1024}
                  height={1536}
                  className="material-image aspect-[2/3] w-full object-cover"
                />
                <div className="flex gap-5 p-7">
                  <span className="text-gold font-display text-4xl leading-none">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base leading-snug sm:text-lg">{b.nome}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — OFERTA */}
      <section id="oferta" className="section-pad px-5" style={{ backgroundColor: "var(--surface)" }}>
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            kicker="A oferta"
            title="Tenha tudo o que precisa para manter seu Instagram ativo"
            subtitle="Artes profissionais + legendas prontas + 30 dias de ideias de conteúdo."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {itensOferta.map((item) => (
              <article key={item.nome} className="card-premium flex flex-col p-7">
                <span className="text-gold self-start rounded-full border border-border px-3 py-1 text-[0.65rem] font-bold tracking-[0.2em] uppercase">
                  {item.etiqueta}
                </span>
                <h3 className="mt-5 text-lg leading-snug sm:text-xl">{item.nome}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.descricao}
                </p>
              </article>
            ))}
          </div>

          <div className="card-premium shadow-gold mt-12 p-8 text-center sm:p-12">
            <span className="bg-gold-gradient inline-flex items-center rounded-full px-5 py-2 text-xs font-extrabold tracking-[0.2em] text-primary-foreground uppercase">
              Oferta especial
            </span>

            <p className="text-destructive mt-8 text-2xl font-bold line-through decoration-2 sm:text-3xl">
              R$ 49,90
            </p>

            <p className="mt-4 text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase sm:text-sm">
              Por apenas
            </p>
            <p className="text-gold-gradient font-display mt-2 text-7xl sm:text-8xl">R$ 29,90</p>

            <p className="mt-5 text-sm font-semibold tracking-wide text-muted-foreground sm:text-base">
              Pagamento único • Acesso imediato
            </p>

            <div className="mt-9">
              <CtaButton className="w-full sm:w-auto">
                Quero acessar agora
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — PROVA VISUAL */}
      <section className="section-pad px-5">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="Prova visual"
            title="Veja o material por dentro"
            subtitle="Quatro exemplos do que você encontra no acesso, para você saber exatamente o formato e o acabamento do que vai receber."
          />
          {prova ? (
            <div className="mx-auto mt-14 max-w-xl">
              <figure key={prova.titulo} className="material-card card-premium animate-fade-in overflow-hidden">
                <img
                  src={prova.img}
                  alt={prova.titulo}
                  loading="lazy"
                  className="material-image aspect-square w-full object-cover"
                />
                <figcaption className="p-6">
                  <h3 className="text-base sm:text-lg">{prova.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {prova.legenda}
                  </p>
                </figcaption>
              </figure>
              <div className="mt-6 flex items-center justify-center gap-5">
                <button
                  type="button"
                  onClick={() => navegarProva(-1)}
                  aria-label="Ver material anterior"
                  className="flex size-12 items-center justify-center rounded-full border border-border bg-surface text-gold transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <span className="min-w-14 text-center text-sm font-bold text-muted-foreground" aria-live="polite">
                  {provaAtiva + 1} / {provas.length}
                </span>
                <button
                  type="button"
                  onClick={() => navegarProva(1)}
                  aria-label="Ver próximo material"
                  className="flex size-12 items-center justify-center rounded-full border border-border bg-surface text-gold transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* 7 — DEPOIMENTOS */}
      <section className="section-pad px-5" style={{ backgroundColor: "var(--surface)" }}>
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="Depoimentos"
            title="O que dizem os clientes"
            subtitle="Exemplos ilustrativos de experiências com uma rotina de conteúdo mais simples e organizada."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <article
                key={i}
                className="rounded-2xl border border-border p-7"
                style={{ backgroundColor: "var(--surface-2)" }}
              >
                <div className="text-gold flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={d.foto}
                    alt={`Foto ilustrativa de ${d.nome}`}
                    loading="lazy"
                    width={816}
                    height={816}
                    className="size-12 rounded-full border border-border object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold">{d.nome}</p>
                    <p className="text-xs text-muted-foreground">{d.contexto}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — GARANTIA */}
      <section className="section-pad px-5">
        <div className="card-premium mx-auto flex max-w-4xl flex-col items-center gap-9 p-9 text-center sm:p-14 md:flex-row md:text-left">
          <div className="guarantee-badge flex size-32 shrink-0 flex-col items-center justify-center rounded-full text-primary-foreground">
            <Sparkles className="guarantee-sparkle absolute top-4 right-5 size-4" />
            <ShieldCheck className="relative size-11" strokeWidth={2.4} />
            <span className="relative mt-1 text-sm font-extrabold tracking-wider uppercase">7 dias</span>
            <span className="relative text-[0.55rem] font-bold tracking-[0.16em] uppercase">Garantia</span>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl">Você tem 7 dias para decidir</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Seu acesso é protegido por uma garantia incondicional de 7 dias. Entre, veja todo o
              material com calma e aplique no seu negócio. Se concluir que não é para você, basta
              pedir o reembolso dentro do prazo e devolvemos o valor pago. Sem justificativa e sem
              complicação.
            </p>
          </div>
        </div>
      </section>

      {/* 9 — FAQ */}
      <section className="section-pad px-5" style={{ backgroundColor: "var(--surface)" }}>
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="Perguntas frequentes" title="Ainda com dúvidas?" />
          <div className="mt-12 space-y-4">
            {faq.map((item, i) => {
              const open = aberta === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-border"
                  style={{ backgroundColor: "var(--surface-2)" }}
                >
                  <button
                    type="button"
                    onClick={() => setAberta(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-bold sm:text-base">{item.q}</span>
                    {open ? (
                      <Minus className="text-gold size-5 shrink-0" />
                    ) : (
                      <Plus className="text-gold size-5 shrink-0" />
                    )}
                  </button>
                  {open ? (
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="mt-14 text-center">
            <CtaButton>Quero aproveitar a oferta</CtaButton>
          </div>
        </div>
      </section>

      {/* 10 — RODAPÉ */}
      <footer className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="hairline-gold" />
          <div className="mt-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-gold-gradient text-xl">Negócio em Destaque</p>
              <p className="mt-2 text-xs text-muted-foreground">
                © 2026 Negócio em Destaque. Todos os direitos reservados.
              </p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <a href="#" className="hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Contato: contato@suamarca.com.br
              </a>
            </nav>
          </div>
        </div>
      </footer>

      <a
        href={CTA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Comprar Negócio em Destaque"
        className="floating-buy bg-gold-gradient shadow-gold fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full text-primary-foreground sm:right-6 sm:bottom-6 sm:size-16"
      >
        <ShoppingBag className="size-6 sm:size-7" />
      </a>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "lucide-react";

import capaAsset from "@/assets/negocio-em-destaque.png.asset.json";
import mockupKit from "@/assets/mockup-kit.jpg";
import mockupTemplates from "@/assets/mockup-templates.jpg";
import mockupPlanilhas from "@/assets/mockup-planilhas.jpg";
import mockupChecklists from "@/assets/mockup-checklists.jpg";
import mockupAulas from "@/assets/mockup-aulas.jpg";

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

const CTA_LINK = "#oferta";

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
      className={`bg-gold-gradient shadow-gold inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-center text-base font-extrabold tracking-wide text-primary-foreground uppercase transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] sm:w-auto sm:px-10 sm:py-5 sm:text-lg ${className}`}
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
    nome: "[BÔNUS 1 — NOME DO BÔNUS AQUI]",
    desc: "[Descrição curta do bônus. Substitua por um complemento real da sua oferta.]",
    valor: "R$ 97",
  },
  {
    nome: "[BÔNUS 2 — NOME DO BÔNUS AQUI]",
    desc: "[Descrição curta do bônus. Substitua por um complemento real da sua oferta.]",
    valor: "R$ 67",
  },
  {
    nome: "[BÔNUS 3 — NOME DO BÔNUS AQUI]",
    desc: "[Descrição curta do bônus. Substitua por um complemento real da sua oferta.]",
    valor: "R$ 47",
  },
];

const provas = [
  {
    img: mockupKit,
    titulo: "Guia principal",
    legenda: "Conteúdo organizado por etapas, leitura leve no celular ou no computador.",
  },
  {
    img: mockupTemplates,
    titulo: "Templates de posts",
    legenda: "Artes editáveis com padrão visual pronto para publicar.",
  },
  {
    img: mockupPlanilhas,
    titulo: "Planilhas de controle",
    legenda: "Acompanhe entradas, saídas e planejamento em um só lugar.",
  },
  {
    img: mockupChecklists,
    titulo: "Checklists imprimíveis",
    legenda: "Listas para revisar cada etapa antes de colocar no ar.",
  },
  {
    img: mockupAulas,
    titulo: "Materiais complementares",
    legenda: "Recursos extras para aplicar o conteúdo com mais facilidade.",
  },
];

const depoimentos = [
  {
    nome: "[NOME DO CLIENTE]",
    contexto: "[TIPO DE NEGÓCIO]",
    texto: "[DEPOIMENTO REAL DE CLIENTE AQUI]",
    inicial: "?",
  },
  {
    nome: "[NOME DO CLIENTE]",
    contexto: "[TIPO DE NEGÓCIO]",
    texto: "[DEPOIMENTO REAL DE CLIENTE AQUI]",
    inicial: "?",
  },
  {
    nome: "[NOME DO CLIENTE]",
    contexto: "[TIPO DE NEGÓCIO]",
    texto: "[DEPOIMENTO REAL DE CLIENTE AQUI]",
    inicial: "?",
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

  return (
    <main className="bg-dark-glow min-h-screen">
      {/* 1 — HERO */}
      <section className="relative overflow-hidden px-5 pt-14 pb-16 sm:pt-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <span className="text-gold inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase">
              <Sparkles className="size-3.5" /> Material digital
            </span>
            <h1 className="mt-6 text-4xl leading-[0.95] sm:text-5xl md:text-6xl">
              Coloque o seu <span className="text-gold-gradient">negócio em destaque</span> sem
              começar tudo do zero
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Estratégias, templates, planilhas e checklists prontos para você organizar sua
              presença digital e transmitir a imagem profissional que o seu trabalho merece.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 md:items-start">
              <CtaButton>Quero conhecer</CtaButton>
              <p className="text-xs tracking-wide text-muted-foreground uppercase">
                Acesso imediato · Garantia de 7 dias
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gold-gradient absolute -inset-4 rounded-[2.5rem] opacity-20 blur-2xl" />
            <img
              src={capaAsset.url}
              alt="Capa do material Negócio em Destaque com notebook e celular"
              width={1024}
              height={1536}
              className="shadow-card relative mx-auto w-full max-w-sm rounded-3xl border border-border md:max-w-md"
            />
          </div>
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
              Os bônus abaixo são espaços editáveis: substitua pelos complementos reais da sua
              oferta antes de publicar a página.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            {bonus.map((b, i) => (
              <article
                key={b.nome}
                className="card-premium flex flex-col gap-5 p-7 sm:flex-row sm:items-center"
              >
                <span className="text-gold font-display text-4xl leading-none">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-base leading-snug sm:text-lg">{b.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
                <span className="text-gold shrink-0 rounded-full border border-border px-4 py-2 text-xs font-bold tracking-wider uppercase">
                  Valor {b.valor}
                </span>
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
              <CtaButton href="#oferta" className="w-full sm:w-auto">
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
            subtitle="Cinco exemplos do que você encontra no acesso, para você saber exatamente o formato e o acabamento do que vai receber."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {provas.map((p) => (
              <figure key={p.titulo} className="card-premium overflow-hidden">
                <img
                  src={p.img}
                  alt={p.titulo}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="p-6">
                  <h3 className="text-base sm:text-lg">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.legenda}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — DEPOIMENTOS */}
      <section className="section-pad px-5" style={{ backgroundColor: "var(--surface)" }}>
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="Depoimentos"
            title="O que dizem os clientes"
            subtitle="Espaços reservados para depoimentos reais. Substitua os textos abaixo pelos relatos dos seus próprios clientes."
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
                  <span className="bg-gold-gradient flex size-10 items-center justify-center rounded-full font-bold text-primary-foreground">
                    {d.inicial}
                  </span>
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
          <div className="bg-gold-gradient shadow-gold flex size-28 shrink-0 flex-col items-center justify-center rounded-full text-primary-foreground">
            <ShieldCheck className="size-8" />
            <span className="mt-1 text-xs font-extrabold tracking-wider uppercase">7 dias</span>
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
              <p className="font-display text-gold-gradient text-xl">Sua Marca</p>
              <p className="mt-2 text-xs text-muted-foreground">
                © 2026 Sua Marca. Todos os direitos reservados.
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
    </main>
  );
}

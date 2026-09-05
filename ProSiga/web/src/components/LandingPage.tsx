import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { FC } from 'react';
import './LandingPage.css';
import Mascot from './Mascot';
import Icon from './Icon';
import type { IconName } from './Icon';
import logoMark from '../assets/logo-mark.png';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
}

interface Feature {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

interface Step {
  id: string;
  title: string;
  description: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'heitor',
    name: 'Heitor Silva',
    role: 'Diretor escolar',
    quote: 'Reduziu o retrabalho da secretaria em poucas semanas de uso.',
    initials: 'HS',
  },
  {
    id: 'mateus',
    name: 'Mateus Torres',
    role: 'Coordenador pedagógico',
    quote: 'A comunicação com as famílias ficou muito mais simples.',
    initials: 'MT',
  },
  {
    id: 'arthur',
    name: 'Arthur Souza',
    role: 'Professor de matemática',
    quote: 'Consigo acompanhar cada turma sem me perder em planilhas.',
    initials: 'AS',
  },
];

const features: Feature[] = [
  {
    id: 'mural',
    icon: 'board',
    title: 'Mural de recados',
    description: 'Compartilhe avisos importantes com toda a turma em segundos.',
  },
  {
    id: 'calendario',
    icon: 'calendar',
    title: 'Calendário acadêmico',
    description: 'Organize provas, entregas e eventos em um calendário único.',
  },
  {
    id: 'notificacoes',
    icon: 'bell',
    title: 'Notificações em tempo real',
    description: 'Alunos e responsáveis são avisados assim que você publica algo novo.',
  },
  {
    id: 'boletim',
    icon: 'report',
    title: 'Boletim digital',
    description: 'Acompanhe notas e frequência sem depender de planilhas soltas.',
  },
  {
    id: 'mensagens',
    icon: 'chat',
    title: 'Mensagens diretas',
    description: 'Fale com professores ou com a turma inteira sem sair da plataforma.',
  },
  {
    id: 'relatorios',
    icon: 'chart',
    title: 'Relatórios de desempenho',
    description: 'Veja o progresso da turma em gráficos simples de entender.',
  },
];

const steps: Step[] = [
  {
    id: 'criar',
    title: 'Crie a turma',
    description: 'Cadastre alunos e professores em poucos minutos, sem planilhas.',
  },
  {
    id: 'compartilhar',
    title: 'Compartilhe o dia a dia',
    description: 'Publique recados, tarefas e materiais em um só lugar.',
  },
  {
    id: 'acompanhar',
    title: 'Acompanhe tudo',
    description: 'Veja quem leu, quem entregou e o que ainda precisa de atenção.',
  },
];

const faqItems: FaqItem[] = [
  {
    id: 'celular',
    question: 'O Pro Siga funciona no celular?',
    answer:
      'Sim. A plataforma se adapta a qualquer tela, e alunos, professores e responsáveis recebem notificações direto no celular.',
  },
  {
    id: 'instalacao',
    question: 'Preciso instalar algum programa?',
    answer: 'Não. O Pro Siga funciona pelo navegador, sem instalação e sem ocupar espaço no aparelho.',
  },
  {
    id: 'tamanho',
    question: 'Dá para usar em qualquer escola?',
    answer: 'Sim. Funciona para escolas de qualquer porte, de uma turma única a redes com várias unidades.',
  },
  {
    id: 'comecar',
    question: 'Como faço para começar?',
    answer: 'Clique em "Criar conta" e configure sua primeira turma em poucos minutos.',
  },
];

const LandingPage: FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(faqItems[0].id);

  return (
    <div className="pro-siga">
      <header className="pro-siga__header">
        <div className="pro-siga__brand">
          <img src={logoMark} alt="Pro Siga" className="pro-siga__logo-mark" />
          <span className="pro-siga__wordmark">Pro Siga</span>
        </div>
        <nav className="pro-siga__nav" aria-label="Navegação principal">
          <div className="pro-siga__nav-links">
            <a className="pro-siga__nav-link" href="#recursos">
              Recursos
            </a>
            <a className="pro-siga__nav-link" href="#como-funciona">
              Como funciona
            </a>
            <a className="pro-siga__nav-link" href="#depoimentos">
              Depoimentos
            </a>
            <a className="pro-siga__nav-link" href="#faq">
              Dúvidas
            </a>
          </div>
          <div className="pro-siga__nav-actions">
            <Link to="entrar" className="pro-siga__btn pro-siga__btn--ghost" style={{ textDecoration: 'none' }}>
              Entrar
            </Link>
          <Link to="criar-conta" className="pro-siga__btn pro-siga__btn--primary" style={{ textDecoration: 'none' }}>
              Criar conta
          </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="pro-siga__hero">
          <div className="pro-siga__hero-art">
            <Mascot
              variant="hero"
              className="pro-siga__mascot"
              title="Mascote do Pro Siga cercado por interrogações, representando dúvidas do dia a dia acadêmico"
            />
          </div>
          <div className="pro-siga__hero-copy">
            <h1 className="pro-siga__eyebrow-free-heading">
              Feito para <em>o aluno</em> e para <em>o professor</em>
            </h1>
            <p>
              O Pro Siga organiza tarefas, recados e atualizações da rotina acadêmica em um
              único lugar, com acesso simples para quem ensina e para quem aprende.
            </p>
            <Link to="criar-conta" className="pro-siga__btn pro-siga__btn--primary" style={{ textDecoration: 'none'}}>
              Experimente já
            </Link>
          </div>
        </section>

        <section className="pro-siga__trust" id="depoimentos" aria-labelledby="pro-siga-trust-heading">
          <div className="pro-siga__trust-intro">
            <h2 id="pro-siga-trust-heading" className="pro-siga__trust-heading">
              Aprovado por quem ensina e por quem aprende
            </h2>
            <p className="pro-siga__trust-sub">
              Escolas de todos os tamanhos usam o Pro Siga para simplificar a rotina de professores,
              alunos e famílias.
            </p>
          </div>
          <ul className="pro-siga__testimonials">
            {testimonials.map((person) => (
              <li key={person.id} className="pro-siga__testimonial">
                <div className="pro-siga__testimonial-person">
                  <span className="pro-siga__avatar" aria-hidden="true">
                    {person.initials}
                  </span>
                  <div>
                    <p className="pro-siga__testimonial-name">{person.name}</p>
                    <p className="pro-siga__testimonial-role">{person.role}</p>
                  </div>
                </div>
                <p className="pro-siga__testimonial-quote">&ldquo;{person.quote}&rdquo;</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pro-siga__section" id="recursos" aria-labelledby="pro-siga-features-title">
          <h2 id="pro-siga-features-title" className="pro-siga__section-heading">
            Tudo o que a rotina escolar precisa, em um só lugar
          </h2>
          <p className="pro-siga__section-sub">
            Recursos pensados para simplificar a comunicação entre escola, professores e famílias.
          </p>
          <div className="pro-siga__feature-grid">
            {features.map((feature) => (
              <div key={feature.id} className="pro-siga__feature">
                <Icon name={feature.icon} className="pro-siga__feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pro-siga__steps" id="como-funciona" aria-labelledby="pro-siga-steps-title">
          <h2 id="pro-siga-steps-title" className="pro-siga__section-heading">
            Como funciona
          </h2>
          <p className="pro-siga__section-sub">Três passos para colocar a sua turma no Pro Siga.</p>
          <ol className="pro-siga__steps-list">
            {steps.map((step, index) => (
              <li key={step.id} className="pro-siga__step">
                <span className="pro-siga__step-index" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="pro-siga__features" aria-labelledby="pro-siga-features-heading">
          <h2 id="pro-siga-features-heading" className="pro-siga__features-heading">
            Pensado em <em>agilidade e facilidade</em> no caminho da informação
          </h2>
          <p className="pro-siga__features-sub">
            Centralize tarefas, recados e atualizações em um só lugar, com acesso simples
            para professores e alunos.
          </p>

          <div className="pro-siga__cards">
            <article className="pro-siga__card">
              <Mascot
                variant="professor"
                className="pro-siga__mascot"
                title="Mascote do Pro Siga na versão do professor, segurando anotações"
              />
              <h3>O professor</h3>
              <p>Organiza conteúdos, acompanha a turma e simplifica a rotina acadêmica.</p>
            </article>
            <article className="pro-siga__card">
              <Mascot
                variant="aluno"
                className="pro-siga__mascot"
                title="Mascote do Pro Siga na versão do aluno, com uma notificação no celular"
              />
              <h3>O aluno</h3>
              <p>Recebe avisos, acompanha informações importantes e se mantém conectado.</p>
            </article>
          </div>

          <div className="pro-siga__features-cta">
            <button type="button" className="pro-siga__btn pro-siga__btn--primary">
              Quero conhecer a plataforma
            </button>
          </div>
        </section>

        <section className="pro-siga__faq" id="faq" aria-labelledby="pro-siga-faq-title">
          <div className="pro-siga__faq-grid">
            <div className="pro-siga__faq-intro">
              <h2 id="pro-siga-faq-title" className="pro-siga__section-heading">
                Perguntas frequentes
              </h2>
              <p className="pro-siga__section-sub">
                Não encontrou o que procurava?{' '}
                <a className="pro-siga__inline-link" href="mailto:contato@prosiga.com.br">
                  Fale com a gente
                </a>
                .
              </p>
            </div>
            <div className="pro-siga__faq-list">
              {faqItems.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div className="pro-siga__faq-item" key={item.id}>
                    <button
                      type="button"
                      className="pro-siga__faq-question"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      onClick={() => setOpenFaq(isOpen ? null : item.id)}
                    >
                      {item.question}
                      <span className="pro-siga__faq-icon" aria-hidden="true">
                        {isOpen ? '\u2212' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pro-siga__faq-answer" id={`faq-panel-${item.id}`}>
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pro-siga__final-cta">
          <div className="pro-siga__final-cta-copy">
            <h2>Pronto para simplificar a rotina da sua escola?</h2>
            <p>Crie sua conta gratuita e configure a primeira turma em poucos minutos.</p>
            <Link to="criar-conta" className="pro-siga__btn pro-siga__btn--primary" style={{ textDecoration: 'none'}}>
              Criar conta gratuita
            </Link>
          </div>
          <Mascot
            variant="aluno"
            className="pro-siga__mascot pro-siga__final-cta-mascot"
            title="Mascote do Pro Siga acenando, convidando para criar uma conta"
          />
        </section>
      </main>

      <footer className="pro-siga__footer">
        <div className="pro-siga__footer-inner">
          <div className="pro-siga__footer-col pro-siga__footer-brand-col">
            <div className="pro-siga__footer-brand">
              <img src={logoMark} alt="Pro Siga" className="pro-siga__logo-mark pro-siga__logo-mark--light" />
              <span className="pro-siga__wordmark pro-siga__wordmark--light">Pro Siga</span>
            </div>
            <p className="pro-siga__footer-tagline">
              A rotina acadêmica organizada para quem ensina e para quem aprende.
            </p>
          </div>
          <div className="pro-siga__footer-col">
            <h3>Produto</h3>
            <a href="#recursos">Recursos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#depoimentos">Depoimentos</a>
          </div>
          <div className="pro-siga__footer-col">
            <h3>Suporte</h3>
            <a href="#faq">Perguntas frequentes</a>
            <a href="mailto:contato@prosiga.com.br">Fale com a gente</a>
          </div>
        </div>
        <p className="pro-siga__footer-copy">
          &copy; {new Date().getFullYear()} Pro Siga. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
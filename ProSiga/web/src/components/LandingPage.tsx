import type { FC } from 'react';
import './LandingPage.css';
import Mascot from './Mascot';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
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

const LandingPage: FC = () => {
  return (
    <div className="pro-siga">
      <header className="pro-siga__header">
        <div className="pro-siga__brand">
          <span className="pro-siga__brand-mark" aria-hidden="true">
            PS
          </span>
          <span>Pro Siga</span>
        </div>
        <nav className="pro-siga__nav" aria-label="Navegação principal">
          <button type="button" className="pro-siga__btn pro-siga__btn--ghost">
            Entrar
          </button>
          <button type="button" className="pro-siga__btn pro-siga__btn--primary">
            Criar conta
          </button>
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
            <button type="button" className="pro-siga__btn pro-siga__btn--primary">
              Experimente já
            </button>
          </div>
        </section>

        <section className="pro-siga__trust" aria-labelledby="pro-siga-trust-heading">
          <h2 id="pro-siga-trust-heading" className="pro-siga__trust-heading">
            Aprovado por quem ensina e por quem aprende
          </h2>
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
      </main>

      <footer className="pro-siga__footer">
        <div className="pro-siga__footer-inner">
          <div className="pro-siga__footer-brand">
            <span className="pro-siga__brand-mark" aria-hidden="true">
              PS
            </span>
            <span>Pro Siga</span>
          </div>
          <p className="pro-siga__footer-copy">
            &copy; {new Date().getFullYear()} Pro Siga. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
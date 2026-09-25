import type { FC } from 'react';
import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.png';
import Mascot from './Mascot';
import './Account.css';

const Account: FC = () => {
  return (
    <div className="account-page">
      <header className="account-header">
        <Link to="/" className="account-brand" aria-label="ProSiga - página inicial">
          <span className="account-brand__mark" aria-hidden="true"><img src={logoMark} alt="" /></span>
          <span>ProSiga</span>
        </Link>

      </header>

      <main className="account-main">
        <div className="account-heading">
          <span className="account-eyebrow">Primeiro passo</span>
          <h1>Como você vai usar o <span className="account-heading__accent">ProSiga</span>?</h1>
          <p>Escolha o seu perfil para continuarmos com o cadastro. As informações da próxima etapa mudam de acordo com essa escolha.</p>
        </div>

        <div className="account-options">
          <Link to="/cadastro?type=professor" className="account-option">
            <span className="account-option__icon"><Mascot variant="teacher" title="Mascote professor do ProSiga" /></span>
            <span className="account-option__content">
              <strong>Sou professor</strong>
              <span>Organizo turmas, lanço notas e frequência e envio avisos aos alunos.</span>
            </span>
            <ArrowIcon />
          </Link>

          <Link to="/cadastro?type=aluno" className="account-option">
            <span className="account-option__icon account-option__icon--student"><Mascot variant="happy" title="Mascote aluno feliz do ProSiga" /></span>
            <span className="account-option__content">
              <strong>Sou aluno</strong>
              <span>Acompanho notas, frequência, materiais e avisos das minhas disciplinas.</span>
            </span>
            <ArrowIcon />
          </Link>
        </div>

        <p className="account-login">Já possui acesso ao ProSiga? <Link to="/entrar">Entrar no sistema</Link></p>
      </main>

      <footer className="account-footer" id="ajuda">
        <span className="account-footer__brand"><img src={logoMark} alt="" /><strong>ProSiga</strong> © 2026 Todos os direitos reservados.</span>
        <span className="account-footer__links"><a href="#termos">Termos de Uso</a><a href="#privacidade">Política de Privacidade</a><a href="#suporte">Suporte Técnico</a></span>
      </footer>
    </div>
  );
};

const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

export default Account;
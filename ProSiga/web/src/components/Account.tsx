import type { FC } from 'react';
import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.png';
import './Account.css';

const Account: FC = () => {
  return (
    <div className="account-page">
      <header className="account-header">
        <Link to="/" className="account-brand" aria-label="ProSiga - página inicial">
          <span className="account-brand__mark" aria-hidden="true"><img src={logoMark} alt="" /></span>
          <span>Pro Siga</span>
        </Link>

        <nav className="account-nav" aria-label="Navegação principal">
          <Link to="/">Início</Link>
          <a href="#sobre">Sobre</a>
          <a href="#ajuda">Ajuda</a>
        </nav>

      </header>

      <main className="account-main">
        <div className="account-heading">
          <span className="account-eyebrow">Primeiro passo</span>
          <h1>Como você vai usar o <span className="account-heading__accent">Pro Siga</span>?</h1>
          <p>Escolha o seu perfil para continuarmos com o cadastro. As informações da próxima etapa mudam de acordo com essa escolha.</p>
        </div>

        <div className="account-options">
          <Link to="/cadastro?type=professor" className="account-option">
            <span className="account-option__icon"><TeacherIcon /></span>
            <span className="account-option__content">
              <strong>Sou professor</strong>
              <span>Organizo turmas, lanço notas e frequência e envio avisos aos alunos.</span>
            </span>
            <ArrowIcon />
          </Link>

          <Link to="/cadastro?type=aluno" className="account-option">
            <span className="account-option__icon account-option__icon--teacher"><StudentIcon /></span>
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
        <span><strong>ProSiga</strong> © 2026 Todos os direitos reservados.</span>
        <span className="account-footer__links"><a href="#termos">Termos de Uso</a><a href="#privacidade">Política de Privacidade</a><a href="#suporte">Suporte Técnico</a></span>
      </footer>
    </div>
  );
};

const StudentIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10 12 5l9 5-9 5-9-5Z" /><path d="M6 12v4c2.8 2.3 9.2 2.3 12 0v-4M21 10v6" /></svg>;
const TeacherIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V7l8-4 8 4v13M2 20h20M8 20v-5h8v5M8 9h.01M12 9h.01M16 9h.01" /></svg>;
const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

export default Account;
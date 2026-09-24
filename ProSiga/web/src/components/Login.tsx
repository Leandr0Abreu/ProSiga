import { useState, type FC, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.png';
import Mascot from './Mascot';
import './Login.css';

const Login: FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'error' | 'success' | 'info'; message: string } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!identifier.trim() || !password.trim()) {
      setFeedback({ type: 'error', message: 'Preencha seu e-mail ou matrícula e sua senha.' });
      return;
    }

    setFeedback(null);
    setIsLoading(true);

    window.setTimeout(() => {
      setIsLoading(false);
      setFeedback({ type: 'success', message: 'Bem-vindo de volta! Redirecionando para o portal...' });
    }, 1200);
  };

  const handleGoogleLogin = () => {
    setFeedback({ type: 'info', message: 'Conectando com o serviço de autenticação Google...' });
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <Link to="/" className="login-brand" aria-label="ProSiga - página inicial">
          <img src={logoMark} alt="" className="login-brand__logo" />
          <span>Pro Siga</span>
        </Link>

        <nav className="login-nav" aria-label="Navegação principal">
          <Link to="/">Início</Link>
          <a href="#sobre">Sobre</a>
          <a href="#ajuda">Ajuda</a>
        </nav>
      </header>

      <main className="login-main">
        <section className="login-intro" id="sobre">
          <div className="login-mascot-wrap">
            <Mascot variant="teacher" title="Mascote ProSiga usando um capelo de formatura" className="login-mascot" />
          </div>
          <div className="login-intro__copy">
            <h1>Feito para o <em>aluno</em> e para o <strong>professor</strong></h1>
            <p>O ProSiga reúne notas, frequência, materiais didáticos e comunicação acadêmica em uma plataforma moderna, intuitiva e acessível.</p>
          </div>
        </section>

        <section className="login-card" aria-labelledby="login-title">
          <div className="login-card__accent" />
          <div className="login-card__heading">
            <h2 id="login-title">Acessar o Portal</h2>
            <p>Insira suas credenciais para continuar no sistema</p>
          </div>

          {feedback && (
            <div className={`login-feedback login-feedback--${feedback.type}`} role="status">
              <span aria-hidden="true">{feedback.type === 'error' ? '!' : feedback.type === 'success' ? '✓' : 'i'}</span>
              {feedback.message}
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-field">
              <span>E-mail ou Matrícula</span>
              <div className="login-input-wrap">
                <UserIcon />
                <input
                  type="text"
                  value={identifier}
                  onChange={(event) => setIdentifier(event.target.value)}
                  placeholder="ex: aluno@prosiga.edu ou 20261002"
                  autoComplete="username"
                  required
                />
              </div>
            </label>

            <label className="login-field">
              <span className="login-field__label-row">
                Senha
                <a href="#recuperar">Esqueceu a senha?</a>
              </span>
              <div className="login-input-wrap">
                <LockIcon />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </label>

            <label className="login-remember">
              <input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} />
              <span>Mantenha-me conectado neste dispositivo</span>
            </label>

            <button type="submit" className="login-submit" disabled={isLoading}>
              {isLoading ? <span className="login-spinner" aria-hidden="true" /> : <span>Entrar no Sistema</span>}
              {isLoading ? 'Acessando...' : <ArrowIcon />}
            </button>
          </form>

          <div className="login-divider"><span>ou acesse com</span></div>

          <button type="button" className="login-google" onClick={handleGoogleLogin}>
            <GoogleIcon />
            Conta Institucional Google
          </button>

          <p className="login-signup">Ainda não possui acesso ao ProSiga? <Link to="/criar-conta">Solicite seu cadastro</Link></p>
        </section>
      </main>

      <footer className="login-footer" id="ajuda">
        <span><strong>ProSiga</strong> © 2026 Todos os direitos reservados.</span>
        <span className="login-footer__links"><a href="#termos">Termos de Uso</a><a href="#privacidade">Política de Privacidade</a><a href="#suporte">Suporte Técnico</a></span>
      </footer>
    </div>
  );
};

const UserIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /></svg>;
const LockIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>;
const EyeIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>;
const EyeOffIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18M10.6 5.2A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a18 18 0 0 1-3.1 4.1M6.2 6.2C3.4 8.2 2 12 2 12s3.5 7 10 7a10 10 0 0 0 4-.8M9.9 9.9a3 3 0 0 0 4.2 4.2" /></svg>;
const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const GoogleIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.6 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h6c-.3 1.4-1 2.5-2.2 3.3v2.8h3.6c2.1-1.9 3.2-4.7 3.2-8.1Z" /><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.2v2.8C4 20.5 7.7 23 12 23Z" /><path fill="#FBBC05" d="M5.8 14.1a7 7 0 0 1 0-4.2V7.1H2.2A11.9 11.9 0 0 0 1 12c0 1.8.4 3.5 1.2 4.9l2.9-2.2.7-.6Z" /><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.1C17.5 2.1 15 1 12 1 7.7 1 4 3.5 2.2 7.1l3.7 2.8c.8-2.6 3.2-4.5 6.1-4.5Z" /></svg>;

export default Login;
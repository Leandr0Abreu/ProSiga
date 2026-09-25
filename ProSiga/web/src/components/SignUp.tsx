import { useState, type FormEvent, type ReactNode } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import logoMark from '../assets/logo-mark.png';
import Mascot from './Mascot';
import './SignUp.css';

type AccountType = 'professor' | 'aluno';

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type: AccountType = searchParams.get('type') === 'professor' ? 'professor' : 'aluno';
  const isProfessor = type === 'professor';
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [form, setForm] = useState({ nome: '', email: '', senha: '', confirmarSenha: '', identificador: '', curso: '' });

  const updateField = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.senha !== form.confirmarSenha) {
      setFeedback('As senhas precisam ser iguais.');
      return;
    }
    setFeedback('Cadastro preenchido! A integração com o servidor será feita nesta etapa.');
  };

  return (
    <div className="signup-page">
      <header className="signup-header">
        <Link to="/" className="signup-brand"><span className="signup-brand__mark"><img src={logoMark} alt="" /></span>ProSiga</Link>
      </header>

      <main className="signup-main">
        <div className="signup-side">
          <button type="button" className="signup-back" onClick={() => navigate('/criar-conta')}><ArrowLeftIcon /> Trocar tipo de conta</button>
          <div className="signup-side-art"><Mascot variant={isProfessor ? 'teacher' : 'happy'} title={isProfessor ? 'Mascote professor do ProSiga' : 'Mascote aluno feliz do ProSiga'} className="signup-side-mascot" /></div>
          <h2>{isProfessor ? <>Organize sua rotina e inspire seus <strong>alunos</strong></> : <>Seu caminho acadêmico começa aqui, <em>aluno</em></>}</h2>
          <p>{isProfessor ? 'Crie suas turmas, acompanhe o desempenho da classe e mantenha toda a comunicação acadêmica em um só lugar.' : 'Tenha suas disciplinas, notas, frequência e materiais sempre ao alcance para estudar com mais tranquilidade.'}</p>
        </div>

        <section className="signup-card" aria-labelledby="signup-title">
          <div className="signup-card__bar" />
          <div className="signup-card__body">
            <span className="signup-badge">Cadastro de {isProfessor ? 'professor' : 'aluno'}</span>
            <h1 id="signup-title">Criar Conta</h1>
            <p className="signup-subtitle">Preencha os dados abaixo para {isProfessor ? 'organizar suas turmas' : 'acompanhar suas disciplinas'} no ProSiga.</p>

            {feedback && <p className="signup-feedback" role="status">{feedback}</p>}
            <form className="signup-form" onSubmit={handleSubmit}>
              <Field label="Nome completo" icon={<UserIcon />} value={form.nome} placeholder="ex: Maria Oliveira" onChange={(value) => updateField('nome', value)} />
              <Field label={isProfessor ? 'E-mail institucional' : 'E-mail ou matrícula'} icon={<MailIcon />} value={form.email} placeholder={isProfessor ? 'ex: professor@prosiga.edu' : 'ex: aluno@prosiga.edu ou 20261002'} onChange={(value) => updateField('email', value)} />
              <Field label={isProfessor ? 'Registro funcional' : 'Matrícula'} icon={<DocumentIcon />} value={form.identificador} placeholder={isProfessor ? 'ex: 4521' : 'ex: 20261002'} onChange={(value) => updateField('identificador', value)} />
              <Field label={isProfessor ? 'Departamento' : 'Curso'} icon={<BuildingIcon />} value={form.curso} placeholder={isProfessor ? 'ex: Ciência da Computação' : 'ex: Engenharia de Software'} onChange={(value) => updateField('curso', value)} />

              <div className="signup-field-row">
                <PasswordField label="Senha" value={form.senha} show={showPassword} onChange={(value) => updateField('senha', value)} onToggle={() => setShowPassword((current) => !current)} />
                <PasswordField label="Confirmar senha" value={form.confirmarSenha} show={showPassword} onChange={(value) => updateField('confirmarSenha', value)} onToggle={() => setShowPassword((current) => !current)} />
              </div>

              <label className="signup-checkbox"><input type="checkbox" required /> <span>Li e aceito os <a href="#termos">Termos de Uso</a> e a <a href="#privacidade">Política de Privacidade</a>.</span></label>
              <button type="submit" className="signup-submit">Criar Conta <ArrowIcon /></button>
              <div className="signup-divider"><span>ou cadastre-se com</span></div>
              <button type="button" className="signup-google"><GoogleIcon /> Conta Institucional Google</button>
              <p className="signup-login">Já possui acesso ao ProSiga? <Link to="/entrar">Entrar</Link></p>
            </form>
          </div>
        </section>
      </main>

      <footer className="signup-footer" id="ajuda">
        <span className="signup-footer__brand"><img src={logoMark} alt="" /><strong>ProSiga</strong> © 2026 Todos os direitos reservados.</span>
        <span className="signup-footer__links"><a href="#termos">Termos de Uso</a><a href="#privacidade">Política de Privacidade</a><a href="#suporte">Suporte Técnico</a></span>
      </footer>
    </div>
  );
};

type FieldProps = { label: string; icon: ReactNode; value: string; placeholder: string; onChange: (value: string) => void };
const Field = ({ label, icon, value, placeholder, onChange }: FieldProps) => <label className="signup-field"><span>{label}</span><div className="signup-input">{icon}<input required value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} /></div></label>;
const PasswordField = ({ label, value, show, onChange, onToggle }: { label: string; value: string; show: boolean; onChange: (value: string) => void; onToggle: () => void }) => <label className="signup-field"><span>{label}</span><div className="signup-input"><LockIcon /><input required minLength={8} type={show ? 'text' : 'password'} value={value} placeholder="Crie uma senha" onChange={(event) => onChange(event.target.value)} /><button type="button" className="signup-eye" onClick={onToggle} aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}><EyeIcon /></button></div></label>;
const UserIcon = () => <svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24"><path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" /></svg>;
const DocumentIcon = () => <svg viewBox="0 0 24 24"><path d="M7 3h10l3 4v13H4V7l3-4ZM9 12h6M9 16h6" /></svg>;
const BuildingIcon = () => <svg viewBox="0 0 24 24"><path d="M4 20V7l8-4 8 4v13M2 20h20M8 20v-5h8v5" /></svg>;
const LockIcon = () => <svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>;
const EyeIcon = () => <svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>;
const ArrowIcon = () => <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const ArrowLeftIcon = () => <svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>;
const GoogleIcon = () => <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.6 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h6c-.3 1.4-1 2.5-2.2 3.3v2.8h3.6c2.1-1.9 3.2-4.7 3.2-8.1Z" /><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.2v2.8C4 20.5 7.7 23 12 23Z" /><path fill="#FBBC05" d="M5.8 14.1a7 7 0 0 1 0-4.2V7.1H2.2A11.9 11.9 0 0 0 1 12c0 1.8.4 3.5 1.2 4.9l2.9-2.2.7-.6Z" /><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.1C17.5 2.1 15 1 12 1 7.7 1 4 3.5 2.2 7.1l3.7 2.8c.8-2.6 3.2-4.5 6.1-4.5Z" /></svg>;

export default SignUp;
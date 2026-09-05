import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Tela de Login</h1>
      <p>A navegação funcionou perfeitamente!</p>
      <br></br>
      {/* Botão para voltar à landing page */}
      <Link to="/criar-conta" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        Ainda não tem uma conta? Criar Conta
      </Link>
      <p></p>
      <Link to="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default Login;
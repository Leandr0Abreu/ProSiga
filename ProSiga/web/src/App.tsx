import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.tsx';
import Account from './components/Account.tsx';
import Login from './components/Login.tsx';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/criar-conta" element={<Account />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.tsx';
import CreateAccount from './components/Account.tsx';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/criar-conta" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
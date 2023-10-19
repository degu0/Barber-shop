import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css'

import Home from './pages/home/Home';
import Scheduling from './pages/scheduling/Scheduling';
import Layout from './components/layout/Layout';
import Service from './pages/service/Service';
import Cadastre from './pages/scheduling/cadastre/Cadastre';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/scheduling' element={<Scheduling />} />
          <Route path='/scheduling/cadastre' element={<Cadastre />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;

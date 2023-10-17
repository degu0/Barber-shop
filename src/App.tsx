import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css'

import Home from './pages/home/Home'
import Service from './pages/service/Service';
import Scheduling from './pages/scheduling/Scheduling';
import Layout from './components/layout/Layout';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/scheduling' element={<Scheduling />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
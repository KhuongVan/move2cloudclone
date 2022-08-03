import { BrowserRouter as BRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { DefaultLayout } from './Layout';
function App() {
  const Layout = DefaultLayout;
  return (
    <BRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/contact-us" element={<Layout><Contact /></Layout>} />
        </Routes>
      </div>
    </BRouter>
  );
}

export default App;

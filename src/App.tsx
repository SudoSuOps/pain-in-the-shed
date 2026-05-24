import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import EpisodeDetail from './pages/EpisodeDetail';
import Lanes from './pages/Lanes';
import LaneDetail from './pages/LaneDetail';
import CostToMintLedger from './pages/CostToMintLedger';
import Subscribe from './pages/Subscribe';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:slug" element={<EpisodeDetail />} />
        <Route path="/lanes" element={<Lanes />} />
        <Route path="/lanes/:slug" element={<LaneDetail />} />
        <Route path="/cost-to-mint" element={<CostToMintLedger />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

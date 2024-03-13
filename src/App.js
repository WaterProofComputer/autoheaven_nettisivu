import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Tuote_1 from './pages/Tuote_1/tuote1';
import Oikeudellisettiedot from './pages/Oikeudellisettiedot/oikeudellisettiedot';
import EULA from './pages/EULA/eula';
import Kayttoehdot from './pages/Kayttoehdot/KayttoehdotPage';
import Tietosuojakaytanto from './pages/Tietosuojakaytanto/TietosuojakaytantoPage';
import NotFound from './pages/404/404Page';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route path='*' element={<NotFound />} />
        <Route
          path='/Tuote/:id'
          element={<Tuote_1/>}
        />
        <Route
          path='/KayttoehdotPage'
          element={<Kayttoehdot/>}
        />
        <Route
          path='/TietosuojakaytantoPage'
          element={<Tietosuojakaytanto/>}
        />
        <Route
          path='/Oikeudellisettiedot'
          element={<Oikeudellisettiedot/>}
        />
        <Route
          path='/EULA'
          element={<EULA/>}
        />
      </Routes>
    </Router>

  );
}

export default App;
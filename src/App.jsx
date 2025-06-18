import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Writeup } from './pages/Writeup';
import { Writeup1 } from './components/Writeups/Writeup1'
import { Writeup2 } from './components/Writeups/Writeup2'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
            <Route path="/writeup" element={<Writeup />}/>
          <Route path="/writeup/writeup1" element={<Writeup1 />} />
          <Route path="/writeup/writeup2" element={<Writeup2 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

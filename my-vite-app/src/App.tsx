import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./share/Footer";
import { Header } from "./share/Header";
import { Home } from "./features/home/Home";
import { NotFound } from "./share/NotFound";
import  Movies from "./features/movies/Movies";
import MovieDetails from "./features/movies/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
           <Route path="/Movies/:id" element={<MovieDetails />} />
         

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

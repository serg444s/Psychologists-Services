import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.jsx";
import NotFoundPage from "./pages/NotFound/NotFound.jsx";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const Home = lazy(() => import("./pages/Home/Home.jsx"));
  const Psychologists = lazy(() =>
    import("./pages/Psychologists/Psychologists.jsx")
  );
  const Favorites = lazy(() => import("./pages/Favorites/Favorites.jsx"));

  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psychologists" element={<Psychologists />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

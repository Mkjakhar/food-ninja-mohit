import BackToTop from "./components/common/BackToTop";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <BackToTop />
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Blog-details" element={<SingleBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

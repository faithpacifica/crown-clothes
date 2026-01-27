import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h3>I am the shop page</h3>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;

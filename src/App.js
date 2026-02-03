import Home from "./routes/home/Home.jsx";
import Navigation from "./routes/navigation/Navigation.jsx";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.jsx";

const Shop = () => {
  return <h3>I am the shop page</h3>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;

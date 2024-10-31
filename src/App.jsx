import { Route, Routes } from "react-router-dom";
import Home from "./components/common/home";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Custormers from "./pages/Custormers";
import Suppliers from "./pages/Suppliers";


function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Product />} /> */}
      <Route path="/" element={<Home />}> {/* Home layout with sidebar */}
        <Route index element={<Overview />} />
        <Route path="Overview" element={<Overview />} />
        <Route path="products" element={<Products />} />
        <Route path="custormers" element={<Custormers />} />
        <Route path="suppliers" element={<Suppliers />} />
 
      </Route>
    </Routes>
  );
}

export default App;

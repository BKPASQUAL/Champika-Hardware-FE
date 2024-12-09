import { Route, Routes } from "react-router-dom";
import Home from "./components/common/home";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Custormers from "./pages/Custormers";
import Suppliers from "./pages/Suppliers";
import MakeInvoice from "./pages/MakeInvoice";
import Invoice from "./pages/Invoice";
import Category from "./pages/Category";
import Learn from "./pages/Learn";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Product />} /> */}
      <Route path="/" element={<Home />}>
        {/* Home layout with sidebar */}
        <Route index element={<Overview />} />
        <Route path="Overview" element={<Overview />} />
        <Route path="products" element={<Products />} />
        <Route path="custormers" element={<Custormers />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="makeInvoice" element={<MakeInvoice />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="category" element={<Category />} />
        <Route path="Learn" element={<Learn />} />
      </Route>
    </Routes>
  );
}

export default App;

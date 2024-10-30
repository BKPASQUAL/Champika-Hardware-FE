import { Route, Routes } from "react-router-dom";
import Home from "./components/common/home";
import Overview from "./pages/Overview";


function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Product />} /> */}
      <Route path="/" element={<Home />}> {/* Home layout with sidebar */}
        <Route index element={<Overview />} />
        <Route path="Overview" element={<Overview />} />
 
      </Route>
    </Routes>
  );
}

export default App;

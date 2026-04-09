import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import FetchAPI from "./components/FetchAPI";
import AxiosPosts from "./components/AxiosPosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/fetch" element={<FetchAPI />} />
        <Route path="/posts" element={<AxiosPosts />} />
      </Routes>
    </Router>
  );
}

export default App;
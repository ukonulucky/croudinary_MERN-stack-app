import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Gallary from "./component/gallary/Gallary";
import Upload from "./component/upload/Upload";

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={
            <Upload />
          } />
           <Route path="/gallary" element={
            <Gallary />
          } />
     </Routes>
      </div>
      </Router>
  );
}

export default App;

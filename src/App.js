import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FormikMain from "./components/formikAll/FormikMain";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/formik" element={<FormikMain />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

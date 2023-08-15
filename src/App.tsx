import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.module.css";
import { Main } from "./pages/Main/Main";
import { StepOne } from "./pages/StepOne/StepOne";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Main />} />
      <Route path="/" element={<StepOne />} />
    </Routes>
  );
};

export default App;

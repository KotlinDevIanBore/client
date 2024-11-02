import {  Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayPersonsWrapper from "./components/display-persons/display-persons-wrapper";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />

    <Routes >
      <Route path="/" element= { <DisplayPersonsWrapper />}/>
    </Routes>
     
    </div>
  );
}

export default App;

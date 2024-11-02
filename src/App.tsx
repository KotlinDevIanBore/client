import {  Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayPersonsWrapper from "./components/display-persons/display-persons-wrapper";
import Header from "./components/header/header";
import AddPerson from "./components/add-missing-persons/add-person";

function App() {
  return (
    <div>
      <Header />

    <Routes >
      <Route path="/" element= { <DisplayPersonsWrapper />}/>
      <Route path="/add" element= {<AddPerson/>}/>
    </Routes>
     
    </div>
  );
}

export default App;

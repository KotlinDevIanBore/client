import {  Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayPersonsWrapper from "./components/display-persons/display-persons-wrapper";
import Header from "./components/header/header";
import AddPersonWrapper from "./components/add-missing-persons/add-person-wrapper";

function App() {
  return (
    <div>
      <Header />

    <Routes >
      <Route path="/" element= { <DisplayPersonsWrapper />}/>
      <Route path="/add" element= {<AddPersonWrapper/>}/>
    </Routes>
     
    </div>
  );
}

export default App;

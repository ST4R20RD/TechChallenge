import styles from "./App.module.scss";
import { Navbar, FileUpload, Footer } from "components";
import {useState} from 'react'
import { Home } from "pages";

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

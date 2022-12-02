import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//react Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase

//conponent
import Home from "./Pages/Home";
import Singin from "./Pages/SingIn";
import Singup from "./Pages/SingUp";
import Pagenotfound from "./Pages/PageNotFound";
import { useState } from "react";
import { UserContext } from "./Context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import firebaseConfig from "./Config/firebaseConfig";

//init firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SingIn" element={<Singin />} />
          <Route path="/SingUp" element={<Singup />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;

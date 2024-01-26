import { useState,useReducer } from "react";
import "./App.css";

import { MovieContext, ThemeContext } from "./assets/context";
import Page from "./assets/components/Page";
import { cartReducer, initialState } from "./assets/Reducer/CartReducer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode,setDarkMode] = useState(true);
  const [state,dispatch] = useReducer(cartReducer,initialState);
  return (
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
      <MovieContext.Provider value={{ state, dispatch }}>
      <Page/>
      <ToastContainer/>
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

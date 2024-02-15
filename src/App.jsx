import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Description from "./components/Description";
import Cart from "./pages/Cart";


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Nav/>
          <Slider/>
          <Routes>
            <Route path="category/:type" element={<Category/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>
          <Description/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

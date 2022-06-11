import React from 'react'
// import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Featured from './components/featured/Featured';
import Home from './components/hero/Home';
// import Register from './pages/Register';
import SignUp from './pages/SignUp';
import Result from './pages/Result';
import ShopApp from './ShopApp';
import Storeowner from './pages/Storeowner';
import MainLogin from './pages/MainLogin';
import StoreLogin from './pages/StoreLogin';
import Checkout from './pages/Checkout/Checkout'
import StockUpdate from './StockUpdate';
// import Sidebar from './components/sidebar/Sidebar';
import Addmedi from './pages/addmedi/Addmedi';
import Homedash from './pages/home/Homedash';
import About from './pages/about/About';
function App() {
  return (
    // <div>
    //   {/* <Navbar/> */}
    //   <Home/>
    //   {/* <Login/> */}
    //   {/* <Register/> */}
    //   <Best/>
    //   <Featured/>
    //   <Footer/>
    // </div>
    <>
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/products" component={ShopApp} />
        <Route exact path="/storeregister" component={Storeowner} />
        <Route exact path="/" component={MainLogin} />
        <Route exact path="/storelogin" component={StoreLogin} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/stockupdate" component={StockUpdate}/>
        {/* <Route exact path="/addmedi" component={Sidebar}/> */}
        <Route exact path="/addmedi" component={Addmedi}/>
        <Route exact path="/homedash" component={Homedash} >
            </Route>
        <Route exact path="/about-us" component={About}></Route>

      </Switch>
      {/* <Cart/> */}
      
      </Router>
    </>
  );
}

export default App;

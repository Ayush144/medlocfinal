import React  from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import { Route } from "react-router-dom";
import Homedash from "./pages/home/Homedash";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { Switch } from 'react-router-dom';

function StockUpdate() {
  return (
    <div>
      <Topbar />
      <div className="container">
          <Sidebar />
            <Switch>
            <Route exact path="/" component={Homedash} >
            </Route> 
            <Route exact path="/users" component={UserList }>
                </Route>
            <Route path="/user/:userId" component={User}> 
            </Route>
            <Route path="/newUser" component={NewUser}>
            </Route>
            <Route path="/products" component={ProductList}>
            </Route>
            <Route path="/product/:productId" component={Product}>
            </Route>
            <Route path="/newproduct" component={NewProduct}>
            </Route>
          </Switch>

      </div>
    </div>
  );
}

export default StockUpdate;

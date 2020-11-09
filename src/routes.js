import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Main from './pages/main';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Produtos from'./pages/produtos';
import Detalhes from './pages/p_detalhes';
import Carrinho from './pages/carrinho';
 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/produtos" component={Produtos} />
            <Route path="/detalhes-produto/:id" component={Detalhes} />
            <Route path="/carrinho" component={Carrinho} />
        </Switch>
    </BrowserRouter>
)
export default Routes;
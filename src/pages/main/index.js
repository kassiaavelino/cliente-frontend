import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import './index.css';

export default class Main extends Component {
 
    render() {
        
        return(
            <div id="all">
                <div className="navbar">
                    <h1><Link to="/"><img className="logo" alt="logo" src={Logo}/></Link></h1>
                    <button className="button">
                        <Link to='/login'>LOGIN</Link>
                    </button>
                </div>
                <div className="content">
                    <small className="text">Bem vindo à</small>
                    <h1 className="text2">Nossa loja online</h1>
                    <small className="text">Conheça nossos produtos, clicando no botão abaixo</small>
                    <br/>
                    <button className="button-link"><Link to='/produtos'>PRODUTOS</Link></button>
                </div>

            </div>
        )
    };
}

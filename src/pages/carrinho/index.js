import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';

import './index.css';

export default class Carrinho extends Component{

    render(){
        return(
            <div className="carrinho">
                <div className="navbar">
                    <h1><Link to="/"><img className="logo" alt="logo" src={Logo}/></Link></h1>
                    <button className="button">
                        <Link to='/login'>LOGIN</Link>
                    </button>
                </div>
                <div className="conteudo-carrinho">
                    <p>CONTEÚDO</p>
                </div>
                
            </div>
        );
    }
}
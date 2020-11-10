import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Item1 from '../../images/item-1.jpg';
import Logo from '../../images/logo.png';
import Cart from '../../images/cart.png';
import './index.css';

export default class Produtos extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            produtos: [],
            erro: null
        };
    }
 
    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/sistema/produtos`)
            .then(produtos =>
                produtos.json().then(produtos => this.setState({ produtos }))
            )
            .catch(erro => this.setState({ erro }));
    } 
    render() {
        const { produtos } = this.state;
        return(
            <div className="products-main">
                <div className="navbar">
                    <h1><Link to="/"><img className="logo" alt="logo" src={Logo}/></Link></h1>
                    <button className="button">
                        <Link to='/login'>LOGIN</Link>
                    </button>
                    
                </div>
                <div>
                <p className="carrinho-img"><Link to='/carrinho'><img className="logo" alt="logo" src={Cart}/></Link></p>
                {produtos.map((produtos, index) =>
                    <div className="article">
                    <div class="card">
                        <p className="image"><img className="itens" alt="img" src={Item1} /></p>
                        <div class="card-body">
                            <h5 class="card-title">{produtos.p_nome}</h5>
                            <p class="card-text">R$ {produtos.p_precovenda}</p>
                            <p> <Link to={`/detalhes-produto/${produtos.p_id}`}> Mais Informações </Link> </p>
                        </div>
                    </div>
                    </div>
                )}
                </div>                
            </div>
        )
    };
}
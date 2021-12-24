import React, {Component} from "react";

export default class Produto extends Component {
    static async getInitialProps({query}){
        const {produto} = query
        console.log(produto)
        return {produto}
    }
    render(){
        const {produto} = this.props
        return(
            <div>
                <h2>Iniciado o FRONT do Produto - {produto}</h2>
            </div>
        )
    }
}
import Link from "next/link";
import React, {Component} from "react";

export default class Index extends Component {
    static async getInitialProps(){
        console.log('loaded')
        return {obj: true}
    }



    render(){
        return(
            <div>
                <h2>Iniciado o FRONT</h2>
                <a href="/">
                    Link padrão
                </a>
                <Link href="/"><span>Link Via next</span></Link>
            </div>

        )
    }
}
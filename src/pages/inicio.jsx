import './inicio.scss'
import { Link } from 'react-router';

export default function Inicio() {


    return(
        <div>
        <div className="cima">
            <div className='p1'>
                <img src="/src/assets/images/renovLogo.png" height="60px"/>
                <h1>React</h1>
                <h1>FreiS</h1>
            </div>
            <div className='p2'>
                <h1>Inicio</h1>
                <h1>Sobre</h1>
            </div>
        </div>
        <div className='topo'>
        <div className='mae'>
            <h1 className="titulo">Escolha um treino...</h1>
            <div className="todos-ex">
                <Link to = {"/e1"} >
                <div className="exercicios">
                    <div className="cores1 quad"></div>
                    <h3>Cupom de Desconto</h3>
                    <p>Exercício 01</p>
                </div>
                </Link>

                <Link to ={"/e2"}>
                <div className="exercicios">
                    <div className="cores2 quad"></div>
                    <h3>Converter Kg/gramas</h3>
                    <p>Exercício 02</p>
                </div>
                </Link>

                <Link to ={"/e3"}>
                <div className="exercicios">
                    <div className="cores3 quad"></div>
                    <h3>Valor total por quantidade</h3>
                    <p>Exercício 03</p>
                </div>
                </Link>

                <Link to ={"/e4"}>
                <div className="exercicios">
                    <div className="cores4 quad"></div>
                    <h3>Leitura do livro</h3>
                    <p>Exercício 04</p>
                </div>
                </Link>

                <Link to ={"/e5"}>
                <div className="exercicios">
                    <div className="cores5 quad"></div>
                    <h3>Média de notas</h3>
                    <p>Exercício 05</p>
                </div>
                </Link>

                <Link to={"/e6"}>
                <div className="exercicios">
                    <div className="cores6 quad"></div>
                    <h3>Salário líquido</h3>
                    <p>Exercício 06</p>
                </div>
                </Link>

                <Link to={"/e7"}>
                <div className="exercicios">
                    <div className="cores7 quad"></div>
                    <h3>Cores primárias</h3>
                    <p>Exercício 07</p>
                </div>
                </Link>

                <Link to = {"/e8"}>
                <div className="exercicios">
                    <div className="cores8 quad"></div>
                    <h3>Temperatura</h3>
                    <p>Exercício 08</p>
                </div>
                </Link>

                <Link to = {"/e9"}>
                <div className="exercicios">
                    <div className="cores9 quad"></div>
                    <h3>Sorveteria</h3>
                    <p>Exercício 09</p>
                </div>
                </Link>

                <Link to = {"/e10"}>
                <div className="exercicios">
                    <div className="cores10 quad"></div>
                    <h3>Cálculo de IMC com histórico</h3>
                    <p>Exercício 10</p>
                </div>
                </Link>
            
                <Link to = {"/e11"}>
                <div className="exercicios">
                    <div className="cores11 quad"></div>
                    <h3>Tabuada</h3>
                    <p>Exercício 11</p>
                </div>
                </Link>

                <Link to = {"/e12"}>
                <div className="exercicios">
                    <div className="cores12 quad"></div>
                    <h3>Comparador de pessoas</h3>
                    <p>Exercício 12</p>
                </div>
                </Link>
                <Link to = {"/e13"}>
                <div className="exercicios">
                    <div className="cores13 quad"></div>
                    <h3>Calculadora</h3>
                    <p>Exercício 13</p>
                </div>
                </Link>
            </div>
            
        </div>
        </div>
        </div>
    )
}
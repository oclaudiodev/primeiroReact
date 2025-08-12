import {useState} from "react";
import {Link} from 'react-router'
import './E13.scss'

export default function E13(){
    const [numero, setNumero] = useState(0)
    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)
    const [operacao, setOperacao] = useState()
    

function operacoes(){
    let soma = Number(valor1)+Number(valor2)
    let subtracao = Number(valor1)-Number(valor2)
    let multiplicacao = Number(valor1)*Number(valor2)
    let divisao = Number(valor1)/Number(valor2)
    let restodadiv = Number(valor1)%Number(valor2)
    let potencia = Number(valor1)**Number(valor2)
    let resp = ''
    if(operacao == 1){
        resp=`o resultado de ${Number(valor1)} + ${Number(valor2)} é: ${soma}`
    }
    else if(operacao == 2){
        resp=`o resultado de ${Number(valor1)} - ${Number(valor2)} é: ${subtracao}`
    }
    else if(operacao == 3){
        resp=`o resultado de ${Number(valor1)} x ${Number(valor2)} é:  ${multiplicacao}`
    }
    else if(operacao == 4){
        resp=`o resultado de ${Number(valor1)} / ${Number(valor2)} é: ${divisao}`
    }
    else if(operacao == 5){
        resp=`o resultado do resto da divisão entre ${Number(valor1)} e ${Number(valor2)} é: ${restodadiv}`
    }
    else if(operacao == 6){
        resp=`o resultado de ${Number(valor1)} elevado a ${Number(valor2)} é: ${potencia}`
    }
    setNumero(resp)
    }

    return(
        <div>
            <div className="cima">
                <div className='p1'>
                    <img src="/src/assets/images/logofrei.png" height="60px"/>
                    <h1>React</h1>
                    <h1>FreiS</h1>
                </div>
                <div className='p2'>
                    <h1>Inicio</h1>
                    <h1>Sobre</h1>
                </div>
            </div>
            <div className='ex13'>
            <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                    <h1 className='e01'>Exercício 13 - Calculadora</h1>
            </div>
            <div className='triste'>
                <p>Implementar um programa em Javascript para calcular operações básicas.</p>
            </div>

            <div className="maior">
                <div className="mini">
                    <div className="cards">
                        <label className="tt">Informe o Primeiro Número</label>
                        <br/>
                        <input className="inp2" value={valor1} onChange = {(e)=> setValor1(e.target.value)}/>
                    </div>
                    <br/>
                    <div>
                        <label className="tt">Informe o Segundo Número</label>
                        <br/>
                        <input className="inp2" value={valor2} onChange = {(e)=> setValor2(e.target.value)}/>
                    </div>
                    <br/>
                    <div>
                        <label className="tt">Informe a Operação a ser usada a partir de seus respectivos números para fazer o cálculo</label>
                        <br/>
                        <label className="tt">1-Soma</label>
                        <br/>
                        <label className="tt">2-Subtração</label>
                        <br/>
                        <label className="tt">3-Multiplicação</label>
                        <br/>
                        <label className="tt">4-Divisão</label>
                        <br/>
                        <label className="tt">5-Resto da Divisão</label>
                        <br/>
                        <label className="tt">6-Potência</label>
                        <br/>
                        <input  value={operacao} onChange = {(e)=> setOperacao(e.target.value)}/>
                        <br/>
                        <button onClick = {operacoes}>calcular</button>
                    </div>
                </div>
            </div>
            <div className='fim0'>
                <p>Resultado: {numero}</p>
            </div>
        </div>
    )
}
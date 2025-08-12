import { useState} from 'react'
import {Link} from 'react-router'
import './E3.scss'

export default function E3(){
    const [valor, setValor] = useState(0)
    const [acaipq, setAcaipq] = useState(0)
    const [acaimd, setAcaimd] = useState(0)
    const [acaig, setAcaig] = useState(0)

function calculo(){
    let acaipqT = Number(acaipq)*13.50
    let acaimdT = Number(acaimd)*15
    let acaigT = Number(acaig)*17.5
    
    let resultado = acaipqT+acaimdT+acaigT
    setValor(resultado)
    
}

    return(
        <div className='tudo'>
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
            <div className='ex3'>
            <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                    <h1 className='e01'>Exercício 03 - Valor por quantidade</h1>
            </div>
            <div className='triste'>
                <p>Implementar um programa em Javascript para calcular o total de venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio, grande, Sabendo que o valor do açaí é R$13,50, R$15,00 e R$17,50 respectivamente.</p>
            </div>
                
               
            <div className='maior'>
                <div className='mini'>
                    <div className='cards'>
                        <label className='tt'>Quantidade Pequeno</label>
                        <br/>
                        <input className='inp2' value={acaipq} onChange = {(e)=> setAcaipq(e.target.value)}/>
                    </div>
                    <br></br>
                    <div className='cards'>
                        <label className='tt'>Quantidade Médio</label>
                        <br/>
                        <input className='inp2' value={acaimd} onChange = {(e)=> setAcaimd(e.target.value)}/>
                    </div>
                    <br/>
                    <div className='cards'>
                        <label className='tt'>Quantidade Grande</label>
                        <br/>
                        <input className='inp2' value = {acaig} onChange = {(e)=> setAcaig(e.target.value)}/>
                        <br/>
                    <button className='bb' onClick = {calculo}>Valor total</button>
                    </div> 
                    <br/>
                </div>
            </div>
            
            <div className='fim0'>
                <p>Resultado: O total é {valor}</p>
            </div>
            
        </div>
    )
}
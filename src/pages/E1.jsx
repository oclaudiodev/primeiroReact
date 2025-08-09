import { useState} from 'react'
import {Link} from 'react-router'
import './E1.scss'

export default function E1(){
    const [numero, setNumero] = useState()
    const [valorR, setValorR] = useState(0)
    const [desc, setDesc] = useState(0)

function desconto(){
    let cupom = Number(valorR) - Number(desc)
    setNumero(cupom)
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
            <div className='ex1'>
                <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                <h1 className='e01'>Exercício 01 - Cupom de desconto</h1>
            </div>

            <div className='triste'>
                <p>Implementar um programa em Javascript para calcular o valor final de uma compra e do cupom de desconto. O cupom diz quantos reais terá de desconto</p>
            </div>
            <div className='dono'>
                <div className='quadro'>
                    <label className='tt'>Informe o valor do pedido</label>
                    <br/>
                    <input value={valorR} onChange = {(e)=> setValorR(e.target.value)}/>
                    <br></br>
                    <label className='tt'>Informe o valor do cupom</label>
                    <br/>
                    <input value={desc} onChange = {(e)=> setDesc(e.target.value)}/>
                    <br/>
                    <button onClick = {desconto}>calcular</button>
                </div>
            </div>
            <div className='fim0'>
                    <p>Resultado: O total é {numero}</p>
            </div>
        </div>
    )
}
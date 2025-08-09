import { useState} from 'react'
import {Link} from 'react-router'
import './E2.scss'

export default function E2(){
    const [numero, setNumero] = useState()
    const [kg, setKg] = useState(0)

function conversionamento(){
    let convert = Number(kg) * 1000
    setNumero(convert)
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
            <div className='ex2'>
            <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>                     <h1 className='e01'>Exercício 02 - Converter KG/gramgas</h1>
            </div>
            <div className='triste'>
                <p>Implementar um programa em Javascript para converter kilos em gramas.</p>
            </div>

            <div className='dono'>
                <div className='quadro'>
                    <label className='tt'>Informe quantos kg vc irá Converter</label>
                    <br/>
                    <input value={kg} onChange = {(e)=> setKg(e.target.value)}/>
                    <br/>
                    <button onClick = {conversionamento}>Converter</button>
                    <br/> 
                </div>
            </div>
            <div className='fim0'>
                <p>Resultado: O total de gramas é{numero}g</p>
            </div>
        </div>
    )
}
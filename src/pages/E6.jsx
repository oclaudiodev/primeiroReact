import { useState} from 'react'
import {Link} from 'react-router'
import './E6.scss'

export default function E6(){
    const [resultado, setResultado] = useState(0)
    const [base, setBase] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)

function salario(){
    let resultado = Number(base)+Number((bonus/100)*1000)-Number(desc)
    setResultado(resultado)
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
            <div className='ex6'>
            <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                    <h1 className='e01'>Exercício 06 - Salário Líquido</h1>
            </div>
            <div className='triste'>
                <p>Implementar um programa em Javascript para calcular o salário líquido.</p>
            </div>
        
            <div className='maior'>
                <div className='mini'>
                    <div className='cards'>
                        <label className='tt'>Qual seu salário base?</label>
                        <br/>
                        <input className='inp2' value={base} onChange = {(e)=> setBase(e.target.value)}/>
                    </div>
                    <br/>
                    <div className='cards'>
                        <label className='tt'>Quantos porcento você recebeu em bônus mensal?</label>
                        <br/>
                        <input className='inp3' value={bonus} onChange = {(e)=> setBonus(e.target.value)}/>
                    </div>
                    <br/>
                    <div className='cards'>
                        <label className='tt'>Quanto foi descontado?</label>
                        <br/>
                        <input className='inp2' value={desc} onChange = {(e)=> setDesc(e.target.value)}/>
                        <br/>
                        <button onClick = {salario}>Calcule</button>
                    </div>
                </div>
            </div>
            <div className='fim0'>
                <p>Seu salário líquido é de R$ {resultado}</p>
            </div>
            
        </div>
    )
}
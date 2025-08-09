import { useState} from 'react'
import {Link} from 'react-router'
import './E5.scss'

export default function E5(){
    const [resultado, setResultado] = useState(0)
    const [trab, setTrab] = useState(0)
    const [prova, setProva] = useState(0)
    const [comp, setComp] = useState(0)

function media(){
    let media = (Number(trab)+Number(prova)+Number(comp))/3
    setResultado(media)
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
            <div className='ex5'>
            <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                    <h1 className='e01'>Exercício 05 - Média de notas</h1>
            </div>
            <div className='triste'>
                <p>Implementar um programa em Javascript para calcular a média dos alunos.</p>
            </div>
        
            <div className='maior'>
                <div className='mini'>
                        <div className='cards'>
                            <label className='tt'>Qual foi sua nota no trabalho?</label>
                            <br/>
                            <input className='inp2' value={trab} onChange = {(e)=> setTrab(e.target.value)}/>
                        </div>
                    <br/>
                    <div className='cards'>
                        <label className='tt'>Qual foi sua nota na prova?</label>
                        <br/>
                        <input className='inp2' value={prova} onChange = {(e)=> setProva(e.target.value)}/>
                    </div>
                    <br/>
                    <div className='cards'>
                        <label className='tt'>Qual foi sua nota de comportamento?</label>
                        <br/>
                        <input className= 'inp2'value={comp} onChange = {(e)=> setComp(e.target.value)}/>
                        <br/>
                        <button className='etn' onClick = {media}>Sua média</button>
                    </div>
                </div>
            </div>
            <div className='fim0'>
                <p>Sua média final é: {resultado}</p>
            </div>
            
        </div>
    )
}
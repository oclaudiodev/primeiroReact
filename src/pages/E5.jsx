import { useState} from 'react'
import {Link} from 'react-router'
import './E5.scss'

export default function E5(){
    const [resultado, setResultado] = useState(0)
    const [resultado2, setResultadoo] = useState(0)
    const [trab, setTrab] = useState(0)
    const [prova, setProva] = useState(0)
    const [comp, setComp] = useState(0)

function media(){
    let media = (Number(trab)+Number(prova)+Number(comp))/3
    let ok =''
    if (media>= 5 ){
        ok = 'true'
    }
    else if(media<5){
        ok = 'false'
    }
    setResultado(media)
    setResultadoo(ok)
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
                <p>Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
            </div>
        
            <div className='maior'>
                <div className='mini2'>
                        <div className='cards'>
                            <label className='tt'>Nota 1</label>
                            <br/>
                            <input className='inp3' value={trab} onChange = {(e)=> setTrab(e.target.value)}/>
                        </div>
                    <br/>
                    <div className='cards'>
                        <label className='tt'>Nota 2</label>
                        <br/>
                        <input className='inp3' value={prova} onChange = {(e)=> setProva(e.target.value)}/>
                    </div>
                    <br/>
                    <div className='cards'>
                        <label className='tt'>Nota 3</label>
                        <br/>
                        <input className= 'inp3'value={comp} onChange = {(e)=> setComp(e.target.value)}/>
                        <br/>
                        <button className='etn' onClick = {media}>Sua média</button>
                    </div>
                </div>
            </div>
            <div className='fim0'>
                <p>Sua média final é: {resultado}<br/>O aluno passou? {resultado2}</p>
            </div>
            
        </div>
    )
}
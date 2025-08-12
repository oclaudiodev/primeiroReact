import { useState} from 'react'
import {Link} from 'react-router'
import './E4.scss'

export default function E4(){
    const [result, setResult] = useState(0)
    const [nome, setNome] = useState()
    const [livro, setLivro] = useState(0)
    const [tempo, setTempo] = useState(0)

function calculo(){
    let calc = Number(livro) * Number(tempo)
    setResult(calc)
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
            <div className='ex4'>
            <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                    <h1 className='e01'>Exercício 04 - Programa do Livro</h1>
            </div>

            <div className='triste'>
                <p>Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página</p>
            </div>
            <div className='dono'>
                <div className='quadro'>
                    <label className='tt'>Nome do Livro??</label>
                    <br/>
                    <input value={nome} onChange = {(e)=> setNome(e.target.value)}/>
                    <br/>
                    <label className='tt'>Total de páginas</label>
                    <br/>
                    <input value={livro} onChange = {(e)=> setLivro(e.target.value)}/>
                    <br/>
                    <label className='tt'>Tempo em segundos de leitura</label>
                    <br/>
                    <input value={tempo} onChange = {(e)=> setTempo(e.target.value)}/>
                    <br/>
                    <button onClick = {calculo}>Calcular</button>
                </div>
            </div>
            <div className='fim0'>
                <p>Você lerá {nome} em {result} segundos ou em {result/60} minutos</p>
            </div>
            
        </div>
    )
}
import { useState} from 'react'
import {Link} from 'react-router'
import './E7.scss'

export default function E7(){
    const [resultado, setResultado] = useState()
    const [cor1, setCor1] = useState()
    const [cor2, setCor2] = useState()

function Misturar(){
    let resp = ''
    if(cor1 == 'Vermelho' && cor2 =='Amarelo'||cor1 == 'vermelho' && cor2 =='amarelo'){
        resp = 'Laranja' 
    }
    else if(cor1 == 'Azul' && cor2 =='Vermelho'||cor1 == 'azul' && cor2 =='vermelho'){
        resp = 'Roxo' 
    }
    else if(cor1 == 'Amarelo' && cor2 =='Azul'||cor1 == 'Amarelo' && cor2 =='Azul'){
        resp = 'Verde' 
    }
    else if(cor1 == 'Amarelo' && cor2 =='Vermelho'||cor1 == 'amarelo' && cor2 =='vermelho'){
        resp = 'Laranja' 
    }
    else if(cor1 == 'Vermelho' && cor2 =='Azul'||cor1 == 'vermelho' && cor2 =='azul'){
        resp = 'Roxo' 
    }
    else if(cor1 == 'Azul' && cor2 =='Amarelo'||cor1 == 'azul' && cor2 =='amarelo'){
        resp = 'Verde' 
    }

    setResultado(resp)
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
            <div className='ex7'>
            <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                    <h1 className='e01'>Exercício 07 - Cores primárias</h1>
            </div>
            <div className='triste'>
                <p>Implementar um programa em Javascript para responder a mistura das cores primárias.</p>
            </div>
        
            <div className='dono'>
                <div className='quadro'>
                    <label>Escolha a primeira cor primária</label>
                    <br/>
                    <input value={cor1} onChange = {(e)=> setCor1(e.target.value)}/>
                    <br/>
                    <label>Escolha a segunda cor primária</label>
                    <br/>
                    <input value={cor2} onChange = {(e)=> setCor2(e.target.value)}/>
                    <br/>
                    <button onClick = {Misturar}>Calcule</button>
                </div>
            </div>
            <div className='fim0'>
                <p>A mistura dessas duas cores é: {resultado}</p>
            </div>
            
        </div>
    )
}
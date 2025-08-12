import {useState} from "react";
import {Link} from 'react-router'
import './E11.scss'

export default function E11(){
    const [numero, setNumero] = useState([])
    const [nb, setNb] = useState(0)
    

function tabuada(){
    let resp = []
    for(let xt=0;xt<=10;xt++){
        resp.push(`${Number(nb)} x ${xt} = ${Number(nb * xt)}`)
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
            <div className='ex11'>
            <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                    <h1 className='e01'>Exercício 11 - Tabuada</h1>
            </div>
            
            <div className='triste'>
                <p>Implementar um programa em Javascript para gerar a tabuada apartir do número informado pelo usuário.</p>
            </div>

            <div className="dono">
                <div className="quadro">
                    <label className="tt">Informe o Número para gerar a tabuada do mesmo!</label>
                    <br/>
                    <input value={nb} onChange = {(e)=> setNb(e.target.value)}/>
                    <br/>
                    <button onClick = {tabuada}>calcular</button>
                </div>
            </div>
            <div className="resp">
                <div className="quad">
                    {numero.map((line,index)=>(
                    <p key={index}>{line}</p>))}
                </div>
            </div>
        </div> 
    )
}
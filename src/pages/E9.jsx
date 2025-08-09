import { useState } from "react";
import {Link} from 'react-router'
import './E9.scss'

export default function E9(){
    const [resultado, setResultado] = useState()
    const [peso, setPeso] = useState()

    function Gramagem(){
        let calc1 = (peso*3.50)/100
        let calc2 = (peso*3)/100
        let resp =''
        if(peso<1000){
            resp = calc1
        }
        else if(peso>=1000){
            resp = calc2
        }
        else if(peso==0){
            resp = 'Peso Inválido'
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
                <div className='ex9'>
                <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                    <h1 className='e01'>Exercício 09 - Sorveteria</h1>
                </div>

            <div className='triste'>
                <p>Implementar um programa em Javascript para calcular o valor do pedido do cliente.</p>
            </div>
        
            <div className="dono">
                <div className="quadro">
                    <label className="tt">Quanto pesa seu sorvete?(gramas)</label>
                    <br/>
                    <input value={peso} onChange = {(e)=> setPeso(e.target.value)}/>
                    <br/>
                    <button onClick = {Gramagem}>Calcule</button>
                </div>
            </div>
            <div className='fim0'>
                <p>O seu sorvete ficou R$: {resultado}</p>
            </div>
            
        </div>
    )
}
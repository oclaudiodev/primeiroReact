import {useState} from "react";
import {Link} from 'react-router'
import './E10.scss'

export default function E10(){
    const [imc, setImc] = useState(0)
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    function calcular(){
        let calc = Number(peso)/(Number(altura)*2)
        let diag = ''
        if(calc>=40){
            diag = `Obesidade Grau 3. Seu IMC é de ${calc}`
        }
        else if(calc>=35 && calc <=39.9){
            diag = `Obesidade Grau 2. Seu IMC é de ${calc}`
        }
        else if(calc>=30 && calc <=34.9){
            diag = `Obesidade Grau 1. Seu IMC é de ${calc}`
        }
        else if(calc>=25 && calc <=29.9){
            diag = `Sobrepeso. Seu IMC é de ${calc}`
        }
        else if(calc>=18.5 && calc <=24.9){
            diag = `Peso Normal. Seu IMC é de ${calc}`
        }
        else if(calc<18.5){
            diag = `Abaixo do Peso. Seu IMC é de ${calc}`
        }
        setImc(diag)
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
            <div className='ex10'>
            <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                <h1 className='e01'>Exercício 10 - Cálculo de IMC com histórico</h1>
            </div>

            <div className='triste'>
                <p>Implementar um programa em Javascript para calcular o IMC.</p>
            </div>

        <div className="dono">
            <div className="quadro">
                <label className="tt">Quanto você tem de altura?</label>
                <br/>
                <input value={altura} onChange = {(e)=> setAltura(e.target.value)}/>
                <br/>
                <label className="tt">Quanto você pesa?</label>
                <br/>
                <input value={peso} onChange = {(e)=> setPeso(e.target.value)}/>
                <br/>
                <button onClick = {calcular}>SEU IMC</button>
            </div>
        </div>
        <div className='fim0'>
            <p> Seu Indice de Massa Corporal resultou em: {imc}</p>
        </div>
        
    </div>
)
}

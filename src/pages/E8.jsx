import{useState} from 'react'
import {Link} from 'react-router'
import './E8.scss'

export default function E8(){
    const [resultado, setResultado] = useState()
    const [temp, setTemp] = useState()


    function temperatura(){
        let temps = ''
        if(temp >=41){
            temps = 'Hipetermia'
        }
        else if(temp>=39.6&&temp<41){
            temps ='Febre Alta'
        }
        else if(temp>=37.6&&temp<39.6){
            temps ='Febre'
        }
        else if(temp>=36&&temp<37.6){
            temps ='Normal'
        }
        else if(temp<36){
            temps ='Hipotermia'
        }
    
     setResultado(temps)
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
            <div className='ex8'>
            <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                    <h1 className='e01'>Exercício 08 - Temperatura</h1>
            </div>
            <div className='triste'>
                <p>Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação</p>
            </div>

            <div className='meio'>
                <img src="/src/assets/images/temps.png" height="130px"/>
            </div>
        
            <div className='dono'>
                <div className={`quadro ${resultado === 'Febre' || resultado === 'Febre Alta' || resultado === 'Hipetermia' ? 'a' : ''}`}>
                    <label className='tt'>Qual sua temperatura atual?</label>
                    <br/>
                    <input value={temp} onChange = {(e)=> setTemp(e.target.value)}/>
                    <br/>
                    <button onClick = {temperatura}>Calcule</button>
                    <br/>
                </div>
            </div>
            
                <div className='fim0'>
                    <p>Sua temperatura atual é: {resultado}</p>
                </div>
            
        </div>
    )

}
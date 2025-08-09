import './E12.scss'
import { Link } from 'react-router';

export default function e12() {




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

        <div className='ex12'>
        <Link to = {'/'}><img className='imgs' src="/src/assets/images/esq.png" height="20px"/></Link>
                <h1 className='e01'>Exercício 12 - Comparador de Pessoas</h1>
        </div>
        
        <div className='triste'>
            <p>Implementar um programa em Javascript para comparar pessoas.</p>
        </div>
    </div>
    )
}
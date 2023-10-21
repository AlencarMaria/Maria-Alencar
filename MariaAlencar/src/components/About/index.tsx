import Foto_perfil from '../../assets/Foto_perfil.jpg';
import './styles.css';

function About() {
    return (
        <main className='perfil'> 
            <img src={Foto_perfil} alt="Minha Foto" />
            <div className='Texto-perfil'>
                Meu nome é Maria Alencar, apaixonada por inovação e informação. Sou proativa e determinada a enfrentar desafios para crescer e evoluir como ser humano e profissional. Aberta a novas conexões e oportunidades de colaboração. 
            </div> 
        </main>
    );
}

export default About;
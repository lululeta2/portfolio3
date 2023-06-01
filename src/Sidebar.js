import SocialNetworks from './SocialNetworks';

import Avatar from './img/Captura de tela 2023-05-09 150459.jpg'

import Information from './information';



import './styles/Sidebar.css';


const Sidebar = () => {
    return(
    <aside className="sidebar">
        <img src={Avatar} alt="Luísa Magalhães"/>
        <p className="title">Desenvolvedora</p>
        <SocialNetworks />
        <Information />
        <a href="https://docs.google.com/document/d/1hBR42BYYtjcH0ZUpYlNQsBbkkg0c5y58/edit?usp=share_link&ouid=113450242586254562874&rtpof=true&sd=true" className="btn">
            Download curriculo
        </a>
    </aside>
    )
}
export default Sidebar
import {FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import './styles/SocialNetworks.css';

const socialNetworks = [
    { name: "instagram",href:"https://instagram.com/lulu.mgp?igshid=NTc4MTIwNjQ2YQ==", icon: <FaInstagram className= "instagram"/> },
    { name: "whatsapp",href:"https://wa.me/5511933164946", icon: <FaWhatsapp className= "whatsapp"/> },
]


const SocialNetworks = () => {
    return(
        <section className='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.href} className="social-btn" id='network.name' key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    ) 
}
export default SocialNetworks
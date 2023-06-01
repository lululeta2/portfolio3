import './styles/informationcontainer.css'

import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

const Information = () => {
    return (
        <section className='information'>
        <div className='info-card'>
            <AiFillPhone className='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(11)93316-4946</p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail className='email-icon'/>
            <div>
                <h3>E-mail</h3>
                <p>lu.magalhesgp@gmail.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment className='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Vargem Grande Paulista / SP</p>
            </div>
        </div>
</section>
    )
}

export default Information
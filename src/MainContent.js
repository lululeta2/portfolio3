import AboutContainer from './AboutContainer';
import TechnologiesContainer from "./TechnologiesContainer";

import './styles/maincontent.css';

const MainContent = () => {
    return (
    <main className='main-content'>
        <AboutContainer/>
        <TechnologiesContainer/>
    </main>
    ) 
}
export default MainContent
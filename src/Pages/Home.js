import '../App.css';
import { Header } from '../components/header.js';
import { TextImageRight, TextBeforeAfter, TextCheck, SliderImage, TextImgBg, AskContact } from '../components/container.js';

export const Home = () => {
    return(
        <div className="App bg-body">
            <header className="App-header">
                <Header />
            </header>
            <div className="container mx-auto w-100">
                <TextImageRight />
                <TextBeforeAfter />
                <TextCheck />
            </div>
            <div className="full-container mx-auto w-full">
                <SliderImage />
                <TextImgBg />
            </div>
            <div className="container mx-auto w-100">
                <AskContact />
            </div>
        </div>
    );
}
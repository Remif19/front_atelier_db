import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-black py-14 mt-14">
                <div className="container mx-auto w-100 flex flex-col md:flex-row">
                    <div className="logo-footer w-full md:w-1/4">
                        <img src="https://www.atelier-db.fr/img/logo-DBpiano.png" alt="DB Piano" className="w-24 mx-auto" />
                    </div>
                    <div className="contact-footer w-full md:w-1/4">
                        <h3 className="text-primary font-bold pb-2">Contact</h3>
                        <p className="text-white">Tél : 06 76 56 45 34</p>
                        <p className="text-white">Mail : info@dbpiano.fr</p>
                    </div>
                    <div className="infos-footer w-full md:w-1/4">
                        <h3 className="text-primary font-bold pb-2">Informations</h3>
                        <p className="text-white">Mentions légales</p>
                        <Link to="/politiques-confidentialite" className="text-white hover:text-primary">Politiques de confidentialité</Link>
                    </div>
                </div>
            </div>
            <div className="w-full bg-body py-5">
                <div className="container mx-auto w-100">
                    <p className="text-center md:text-end text-whitegrey">Réalisé avec <FontAwesomeIcon icon={faHeart} style={{ color: '#A9A9A9' }} /> par <a href="https://www.verywell.digital/">Verywell Digital</a></p>
                </div>
            </div>
        </div>
    )
};
import React from 'react';
import { useRef } from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const TextImageRight = () => {
    return (
        <div className="text-image-right-content" id="qui-sommes-nous">
            <div className="flex flex-wrap items-center pt-5 md:pt-36 md:border-l-2 md:border-white md:border-solid">
                <div className="w-full flex items-center justify-end md:w-1/2">
                    <div className="text-center w-full px-3 md:w-3/4 md:px-0">
                        <div className="title-section pb-6">
                            <h3 className="text-primary uppercase md:text-left">Notre Histoire</h3>
                            <h2 className="text-white uppercase md:text-left">Qui sommes-nous ?</h2>
                        </div>
                        <p className="text-center text-white pb-3 md:text-left">Gravitant depuis de nombreuses années dans les différents
                            domaines artisanaux liés à ce merveilleux instrument, notre
                            équipe s’est progressivement spécialisée dans la rénovation
                            de son meuble.
                        </p>
                        <p className="text-white pb-5 md:text-left">Présents en coulisses, nous avons oeuvré en faveur de
                            multiples maisons renommées à travers l'ensemble de
                            l'hexagone, afin d'offrir à leur clientèle mélomane l'harmonie
                            parfaite entre les mélodies et l'esthétique, entre l'acoustique
                            et la splendeur visuelle.
                        </p>
                        <p className="text-white md:text-left">Aujourd'hui, nous sommes heureux de mettre à disposition
                            de chacun, particuliers et professionnels, nos compétences
                            pour sublimer votre piano.
                        </p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-start md:w-1/2">
                    <div className="text-center w-full px-3 pt-3 md:w-full md:px-0 md:pt-3">
                        <img className="ml-auto w-full md:w-3/4" src="https://www.atelier-db.fr/img/qui-sommes-nous.jpg" alt="DB Piano" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const TextBeforeAfter = () => {

    const FIRST_IMAGE = {
        imageUrl: 'https://www.atelier-db.fr/img/photo-piano-bg.jpg'
    };
    const SECOND_IMAGE = {
        imageUrl: 'https://www.atelier-db.fr/img/qui-sommes-nous.jpg'
    };

    return (
        <div className="text-before-after-content" id='renovation-meuble'>
            <div className="flex flex-wrap flex-col w-full">
                <div className="w-full pt-5 md:w-4/5 md:pt-36 md:border-r-2 md:border-white md:border-solid md:pr-5">
                    <div className="text-center w-full px-3 md:w-4/5 md:px-0">
                        <div className="title-section pb-6">
                            <h3 className="text-primary uppercase md:text-left">Notre Activité</h3>
                            <h2 className="text-white uppercase md:text-left">Rénovation du meuble</h2>
                        </div>
                    </div>
                    <p className="text-center text-white md:w-4/5 md:text-left">
                        Notre atelier vous propose ses mains expertes dans la rénovation et la customisation du meuble de votre piano laqué.
                        Qu’il s’agisse de moderniser un piano bois en laqué blanc, de réparer un éclat de vernis sur une partie endommagée,
                        de faire disparaitre des rayures laissées par l’usure du temps ou encore de vous accompagner dans un projet de
                        personnalisation sur mesure, nos artisans sont à votre entière disposition.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap flex-col w-full">
                <div className="w-11/12 pt-12 overflow-hidden	mx-auto">
                    <ReactBeforeSliderComponent
                        firstImage={FIRST_IMAGE}
                        secondImage={SECOND_IMAGE}
                        feelsOnlyTheDelimiter={true}
                        currentPercentPosition={49.8}

                    />
                </div>
            </div>
        </div>
    )
}

export const TextCheck = () => {

    return (
        <div className="text-check-content" id='nos-prestations'>
            <div className="vertical-line w-px h-48 border border-white border-solid mx-auto"></div>
            <div className="flex flex-wrap flex-row w-full justify-center">
                <div className="w-full pt-5 md:pt-12">
                    <div className="w-full px-3 md:px-0">
                        <div className="title-section pb-6">
                            <h3 className="text-primary uppercase text-center">Notre Activité</h3>
                            <h2 className="text-white uppercase  text-center">Prestations</h2>
                        </div>
                    </div>
                    <div className="checkmark-list flex flex-col md:flex-row">
                        <div className="checkmark-item pb-6 md:pb-0 md:w-1/4">
                            <div className="checkmark text-white"><FontAwesomeIcon icon={faCheck} style={{ color: '#E5B05A' }} /></div>
                            <div className="checkmark-text text-white uppercase font-bold">Réparation<br /> polyester</div>
                        </div>
                        <div className="checkmark-item pb-6 md:pb-0 md:w-1/4">
                            <div className="checkmark text-white"><FontAwesomeIcon icon={faCheck} style={{ color: '#E5B05A' }} /></div>
                            <div className="checkmark-text text-white uppercase font-bold">Laquage couleur<br /> aux choix</div>
                        </div>
                        <div className="checkmark-item pb-6 md:pb-0 md:w-1/4">
                            <div className="checkmark text-white"><FontAwesomeIcon icon={faCheck} style={{ color: '#E5B05A' }} /></div>
                            <div className="checkmark-text text-white uppercase font-bold">Accastillage<br /> complet</div>
                        </div>
                        <div className="checkmark-item pb-6 md:pb-0 md:w-1/4">
                            <div className="checkmark text-white"><FontAwesomeIcon icon={faCheck} style={{ color: '#E5B05A' }} /></div>
                            <div className="checkmark-text text-white uppercase font-bold">Changement<br /> Complet des feutres</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const SliderImage = () => {

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        with: '100px',
        height: '225px'
    }
    const slideImages = [
        {
            url1: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            url2: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
        {
            url1: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            url2: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
        {
            url1: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            url2: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
    ];

    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];

    return (
        <div className="slide-container pt-5 md:pt-12">
            <Slide slidesToScroll={1} slidesToShow={1} indicators={false} responsive={responsiveSettings}>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle }}>
                            <div className="syde-by-syde flex flex-row">
                                <div className="image-container w-1/2">
                                    <img className="w-11/12 ml-auto mr-1" src={slideImage.url1} alt="DB Piano" />
                                </div>
                                <div className="image-container w-1/2">
                                    <img className="w-11/12 mr-auto ml-1" src={slideImage.url2} alt="DB Piano" />
                                </div>
                            </div>
                        </div>
                        <span className="text-white">{slideImage.caption}</span>
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export const TextImgBg = () => {

    const imageBg = {
        backgroundImage: 'url(https://www.atelier-db.fr/img/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
    }

    return (
        <div className="text-image-bg-content mt-5 md:mt-36" style={imageBg} id='art-customisation'>
            <div className="flex flex-wrap flex-row w-full justify-center py-24 md:pt-36 md:pb-36">
                <div className="w-full px-3 md:w-2/5 md:px-0">
                    <div className="title-section pb-6">
                        <h2 className="text-white text-center uppercase">L'ART DE LA CUSTOMISATION</h2>
                    </div>
                    <p className="text-center text-white pb-5">Chez DB Piano, nous croyons que chaque piano est unique, et mérite d'être une oeuvre d'art à
                        part entière. Forts de notre expertise et de notre créativité, nous transformons chaque
                        instrument en une pièce maîtresse distinctive, mêlant le raffinement de la musique à l'élégance
                        du design.
                    </p>
                    <p className="text-center text-white pb-5">Que vous soyez à la recherche d'une touche de modernité audacieuse, d'une élégance classique
                        intemporelle ou d'une fusion artistique inspirante, nous vous offrons une palette infinie de
                        possibilités de customisation. Entrez dans l'univers de l'expression musicale et visuelle. Laisseznous
                        vous emmener dans un voyage où la musique rencontre l'art, et où les pianos deviennent
                        des expressions uniques de votre individualité.
                    </p>
                    <p className="text-center text-white">Faites de votre piano une pièce unique, le transformant en une oeuvre d'art personnalisée,
                        symbole de beauté, d'élégance et de créativité.
                    </p>
                </div>
            </div>
        </div>
    )
}

export const AskContact = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const files = data.getAll("photos");

        if (files !== null) {
            console.log(files);
            data.delete("photos");
            files.forEach((file, index) => {
                data.append(`photos[${index}]`, file);
            });
        }

        await fetch(process.env.REACT_APP_API_URL, {
            method: "POST",
            body: data
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const form = useRef();

    return (
        <div className="ask-contact" id="demande-devis">
            <div className="vertical-line w-px h-48 border border-white border-solid mx-auto"></div>
            <div className="flex flex-wrap flex-row w-full justify-center pt-5 md:pt-12">
                <div className="w-full px-3 md:px-0">
                    <div className="title-section pb-6">
                        <h3 className="text-primary uppercase text-center">Contactez-nous</h3>
                        <h2 className="text-white text-center uppercase">Demandez un devis</h2>
                        <h4 className="text-white text-center uppercase">Tout est possible, il suffit de demander !</h4>
                    </div>
                    <div className="form-container w-full bg-grey my-5">
                        <form enctype="multipart/form-data" method="post" ref={form} onSubmit={handleSubmit} className="py-16">
                            <div className="form-inner w-full mx-auto md:w-2/4">
                                <div className="flex flex-wrap flex-row w-full justify-between">
                                    <div className="w-full px-3 pb-5 text-left md:w-48p md:pl-0 md:pr-0">
                                        <div className="form-group">
                                            <label className="text-white">Prénom*</label>
                                            <input type="text" className="form-control w-full bg-body border border-border border-solid text-white px-2" name='firstname' />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 pb-5 text-left md:w-48p md:pl-0 md:pr-0">
                                        <div className="form-group">
                                            <label className="text-white">Nom*</label>
                                            <input type="text" className="form-control w-full bg-body border border-border border-solid text-white px-2" name='lastname' />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 pb-5 text-left md:w-48p md:pl-0 md:pr-0">
                                        <div className="form-group">
                                            <label className="text-white">Email*</label>
                                            <input type="email" className="form-control w-full bg-body border border-border border-solid text-white px-2" name='email' />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 pb-5 text-left md:w-48p md:pl-0 md:pr-0">
                                        <div className="form-group">
                                            <label className="text-white">Téléphone (facultatif)</label>
                                            <input type="tel" className="form-control w-full bg-body border border-border border-solid text-white px-2" name='phone' />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 pb-5 text-left md:pl-0 md:pr-0">
                                        <div className="form-group">
                                            <label class="text-sm text-white" for="multiple_files">Photos (facultatif)</label>
                                            <input class="w-full block text-sm text-slate-500 py-2 px-4 rounded-md border border-border border-solid text-sm bg-body text-white hover:bg-primary cursor-pointer" id="multiple_files" type="file" name='photos' multiple></input>
                                        </div>
                                    </div>
                                    <div className="w-full px-3 pb-5 text-left md:pl-0 md:pr-0">
                                        <div className="form-group">
                                            <label className="text-white">Comment vous avez-nous connu ?*</label>
                                            <input type="text" className="form-control w-full bg-body border border-border border-solid text-white px-2" name='relational' />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 pb-5 text-left md:pl-0 md:pr-0">
                                        <div className="form-group">
                                            <label className="text-white">Message*</label>
                                            <textarea className="form-control w-full bg-body border border-border border-solid min-h-200px p-2 text-white" name='message' placeholder="Complétez votre demande avec plus d’informations : prestations souhaitées, lieu du piano et tout ce que vous jugerez utile…" />
                                        </div>
                                    </div>
                                    <div className="w-1/4 mx-auto">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary px-3 py-2 bg-primary text-white">Envoyer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


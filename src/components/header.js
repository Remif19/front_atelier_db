export const Header = () => {
    return (
        <div className="w-full bg-cover bg-center h-screen bg-header">
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <img className="mx-auto h-32 w-32 pb-5" src="https://www.atelier-db.fr/img/logo-DBpiano.png" alt="DB Piano" />
                    <h1 className="text-white text-2xl pb-5 font-semibold uppercase md:text-3xl">RENOVATION DE VERNIS POLYESTER <br></br>& CUSTOMISATION DE MEUBLES</h1>
                    <a href="#demande-devis"><button className="px-4 py-2 bg-primary text-white text-sm uppercase font-medium rounded hover:bg-primary focus:outline-none focus:bg-primary">CONTACTEZ-NOUS</button></a>
                </div>
            </div>
        </div>
    )
}

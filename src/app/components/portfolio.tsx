const Portfolio = () => {
    return (
        <section id="portfolio" className="min-h-screen flex flex-col items-center justify-center bg-gray-700 text-white">
            <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
                {/* Ajoute ici des cartes de projet */}
                <div className="bg-white p-4 rounded-lg shadow-md">Projet 1</div>
                <div className="bg-white p-4 rounded-lg shadow-md">Projet 2</div>
                <div className="bg-white p-4 rounded-lg shadow-md">Projet 3</div>
            </div>
        </section>
    );
};

export default Portfolio;
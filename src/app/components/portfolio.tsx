import ProjectCards from "@/app/components/projectCards";

const Portfolio = () => {
    return (
        <div id="portfolio" className="min-h-screen bg-gray-900 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Mes Projets</h2>
                <div className="flex flex-wrap justify-center">
                    <ProjectCards />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-white text-center py-4 mt-auto">
            <div className="container mx-auto">
                <p className="text-sm">
                    © {new Date().getFullYear()} Portfolio. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};


export default Footer;
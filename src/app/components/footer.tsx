const Footer = () => {
    return (
        <footer className="w-full border-t border-white/6 py-5">
            <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
                <p className="text-xs text-[#4b5563]">
                    © {new Date().getFullYear()} Mattéo Humez
                </p>
                <p className="text-xs text-[#4b5563]">
                    Fait avec Next.js
                </p>
            </div>
        </footer>
    );
};

export default Footer;

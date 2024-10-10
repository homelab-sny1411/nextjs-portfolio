const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
            <h2 className="text-4xl font-bold mb-4">Contactez-moi</h2>
            <form className="w-full max-w-lg">
                <div className="mb-4">
                    <input className="w-full p-2 rounded" type="text" placeholder="Votre nom" />
                </div>
                <div className="mb-4">
                    <input className="w-full p-2 rounded" type="email" placeholder="Votre email" />
                </div>
                <div className="mb-4">
                    <textarea className="w-full p-2 rounded" placeholder="Votre message"></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Envoyer</button>
            </form>
        </section>
    );
};

export default Contact;

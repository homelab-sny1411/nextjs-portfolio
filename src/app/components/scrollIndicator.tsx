import { FiChevronsDown } from 'react-icons/fi';

const ScrollIndicator = () => {
    return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce md:hidden">
            <FiChevronsDown />
        </div>
    );
};

export default ScrollIndicator;

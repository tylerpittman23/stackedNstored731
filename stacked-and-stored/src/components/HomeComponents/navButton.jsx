export const NavButton = ({ children, extraClasses = "", onClick }) => (
    <button 
        className={`${extraClasses} w-12 h-10 flex justify-center items-center text-xl`}
        onClick={onClick}
    >
        {children}
    </button>
);

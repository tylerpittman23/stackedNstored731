import { Link } from 'react-router-dom';

export const FooterLink = ({ links }) => (
    <div className="w-56 flex flex-col px-6 pb-20 justify-start items-start relative">
        <h1 className='text-4xl absolute -top-8 text-gray-400' style={{color: '#5c715e'}}>{links.title}</h1>
        {links.linksArr.map((link) => {
            return (
                <Link className="text-white rounded-md p-1.5 mt-5 w-5/6 shadow-sm hover:shadow-md transition-shadow" style={{backgroundColor: '#5c715e'}} key={link.id} to={link.to}>
                    {link.content}
                </Link>
            );
        })}
    </div>
);
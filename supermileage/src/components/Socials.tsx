import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

export default function Socials() { 
    return ( 
        <div className="container mx-auto">
            <ul className="flex gap-4 list-none p-0 justify-center md:justify-start">
                <li>
                    <a 
                    href="https://www.instagram.com/ubcsupermileage/" 
                    className="flex justify-center items-center w-10 h-10 bg-gray-900 text-white rounded-full hover:bg-blue-500 transition-colors"
                    target="_blank" rel="noopener noreferrer">
                        <BsInstagram size={20} />
                    </a>
                </li>
                <li>
                    <a 
                    href="https://www.linkedin.com/company/ubc-supermileage/about/" 
                    className="flex justify-center items-center w-10 h-10 bg-gray-900 text-white rounded-full hover:bg-blue-500 transition-colors"
                    target="_blank" rel="noopener noreferrer">
                        <BsLinkedin size={20} />
                    </a>
                </li>
                <li>
                    <a 
                    href="https://www.youtube.com/user/UBCSupermileageTeam" 
                    className="flex justify-center items-center w-10 h-10 bg-gray-900 text-white rounded-full hover:bg-blue-500 transition-colors"
                    target="_blank" rel="noopener noreferrer">
                        <BsYoutube size={20} />
                    </a>
                </li>
            </ul>
        </div>
    );
}
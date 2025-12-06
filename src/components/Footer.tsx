"use client";
import Socials from './Socials';

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-9 text-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center text-center md:text-left">
                    <div className="w-full">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0 text-center md:text-left">
                                <h4 className="font-bold mb-2">Email</h4>
                                <p className="text-gray-500">
                                <a href="mailto:info@supermileage.ca" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    info@supermileage.ca
                                </a>
                                </p>
                                <h4 className="font-bold mt-4 mb-2">Socials</h4>
                                <Socials/>
                            </div>
                            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0 text-center md:text-left">
                                <h4 className="font-bold mb-2">Team Contact</h4>
                                <p className="text-gray-500">
                                Valentino Jaber, Team Captain
                                </p>
                                <h4 className="font-bold mt-4 mb-2">Faculty Advisor</h4>
                                <p className="text-gray-500">
                                Jon Mikkelsen, Mech. Eng. Faculty <br/>
                                <a href="mailto:mikk@mech.ubc.ca" className="hover:underline">mikk@mech.ubc.ca</a>
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 px-4 text-center md:text-left">
                                <h4 className="font-bold mb-2">Mailing Address</h4>
                                <p className="text-gray-500">
                                UBC Supermileage Team <br/>
                                University of British Columbia <br/>
                                2054-6250 Applied Science Lane <br/>
                                Vancouver, BC, Canada V6T 1Z4
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
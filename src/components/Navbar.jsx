import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () =>{
    return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <div className="mx-2 w-11 font-bold">dior</div>
        </div>
        <div className="m-8 flex items-center justify-center gap-4">
            <a href="https://www.linkedin.com/in/adior-gandawidjaja-8212ab293/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/dbuiior" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/dior.uyu/" target="_blank"><FaInstagram /></a>
            <FaSquareXTwitter/>
        </div>
    </nav>
    );
};

export default Navbar;
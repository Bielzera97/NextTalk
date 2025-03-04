"use client"
import Link from "next/link";
const Navbar = () => {
    return(
        <nav className="flex justify-between items-center bg-slate-200 px-8 py-3">
            <h1>NextTalk</h1>
            <ul className="flex gap-4">
                <li><Link className="menu-items p-3 rounded duration-300" href={"/"}>Home</Link></li>
                <li><Link className="menu-items p-3 rounded duration-300" href={"/more"}>More</Link></li>
                <li><Link className="menu-items p-3 rounded duration-300" href={"/about"}>About</Link></li>
                <li><Link className="menu-items p-3 rounded duration-300 ml-5" href={"/loginPage"}>Login</Link></li>
            </ul>
        </nav>
    )
}


export default Navbar;

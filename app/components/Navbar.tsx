"use client"
import { Button } from "@mui/material";
import MenuHamburguer from "./MenuHamburguer";

const Navbar = () => {
    return(
        <nav className="flex justify-between items-center bg-slate-200 px-8 py-3">
            <h1>NextTalk</h1>
            <ul className="gap-8 hidden sm:flex">
                <li><Button variant="contained" href={"/"}>Home</Button></li>
                <li><Button variant="contained" href={"/profile"}>Profile</Button></li>
                <li><Button variant="contained" href={"/about"}>About</Button></li>
            </ul>
            <MenuHamburguer />
        </nav>
    )
}


export default Navbar;

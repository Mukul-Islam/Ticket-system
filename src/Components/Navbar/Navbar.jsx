import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm pl-[120px] pr-[120px] bg-[white]">
            <div className="navbar-start">
                <h1></h1>
                <a className="btn btn-ghost text-xl">CS — Ticket System</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Faq</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <a className="btn rounded-lx bg-linear-to-r from-cyan-500 to-blue-500">New Ticket</a>
            </div>

        </div>
    );
};

export default Navbar;
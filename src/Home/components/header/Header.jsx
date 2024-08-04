import React, { useState, useEffect } from "react";
import './header.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlineClipboardList, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    const getActiveSection = () => {
        const sections = ['home', 'about', 'skills', 'qualification', 'portfolio', 'contact'];
        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 50 && rect.bottom >= 50) {
                    return `#${section}`;
                }
            }
        }
        return null;
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) {
                header.classList.add("scroll-header");
            } else {
                header.classList.remove("scroll-header");
            }

            const activeSection = getActiveSection();
            setActiveNav(activeSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Portfolio</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home"
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon" />Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about"
                                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineUser className="nav__icon" />About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills"
                                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon" />Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification"
                                className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineClipboardList className="nav__icon" />Qualifications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio"
                                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlinePhotograph className="nav__icon" />Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact"
                                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineMail className="nav__icon" />Contact
                            </a>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(false)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header;

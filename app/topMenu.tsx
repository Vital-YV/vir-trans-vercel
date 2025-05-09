"use client";
import './globals.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useLayout } from './LayoutContext';

export default function TopMenu() {
    const { isVisible, setIsVisible } = useLayout();
    const [changeUl, setChangeUl] = useState('hidden');
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobileMenu(window.innerWidth <= 1280);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const menuItems = [
        { title: "Услуги грузоперевозок", submenu: ["Обычные грузы", "Наливные и опасные грузы", "Негабаритные грузы / мультимодальные доставки"] },
        { title: "Заказчикам и Перевозчикам", submenu: ["Преимущества работы с нами", "Вопросы - ответы", "География перевозок", "Примеры перевозок"] },
        { title: "Нам ДОВЕРЯЮТ", submenu: [] },
        { title: "Задать вопрос/Контакты", submenu: [] },
        { title: "Отзывы", submenu: [] },
        { title: "Вакансии", submenu: [] },
        { title: "Дайджест", submenu: [] },
    ];

    const handleToggleClick = () => {
        setIsVisible((prev) => !prev);
        setChangeUl(isVisible ? 'hidden' : '');
    };

    const handleMouseEnter = (index: number) => {
        setOpenMenu(index);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    const disappearingMenu = () => {
        setIsVisible((prev) => !prev);
        setChangeUl(isVisible ? 'hidden' : '');
        setOpenMenu(null);
    };

    return (
        <div className="w-full h-24 fixed flex flex-col bg-gradient-to-b dark:from-darkMain from-main from-95% to-[#023047]/0">
            {mobileMenu ? (
                <div className="relative">
                    <div className="z-50 fixed top-5 left-5 flex items-center text-white">
                        <div className="text-lg font-semibold">Vir trans</div>
                        <div className="ml-4">
                            <button className="w-3 h-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <div className="w-3 h-0.5 bg-slate-50" />
                                <div className="w-3 h-0.5 mt-0.5 bg-slate-50" />
                                <div className="w-3 h-0.5 mt-0.5 bg-slate-50" />
                            </button>
                        </div>
                    </div>

                    <div
                        className={`fixed inset-0 transition-all duration-300 ${isMenuOpen ? "backdrop-blur-md bg-black/50" : "pointer-events-none"
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    <div
                        className={`fixed top-0 right-0 h-svh w-64 dark:bg-darkMain bg-main shadow-lg transform transition-transform duration-300 
                     ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <ul className="mt-20 pl-4 text-white">
                            {menuItems.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <button className="cursor-pointer dark:hover:text-textDarkMain hover:text-textMain transition-colors text-lg text-left w-full">
                                        <a href={`#${item.title.replace(/\s+/g, '-').toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{item.title}</a>
                                    </button>

                                    {item.submenu.length > 0 && (
                                        <ul className="mt-2 ml-4 space-y-1">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="text-sm flex items-center gap-2 dark:hover:text-textDarkMain hover:text-textMain cursor-pointer transition-colors"
                                                >
                                                    <span className="before:content-['•'] text-white"></span>
                                                    <a href={`#${subItem.replace(/\s+/g, '-').toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{subItem}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            ) : (
                <div className="grid grid-cols-[max-content_auto] h-full">
                    <div className="max-w-max flex items-center px-4 text-white">
                        Vir trans
                    </div>
                    <div className={`flex items-center flex-1`}>
                        <ul className={`h-full list-none flex mt-0 flex-row gap-4`}>
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="grid-cols-1 relative flex items-center justify-center h-full px-6 text-white"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="cursor-pointer dark:hover:text-textDarkMain hover:text-textMain">
                                        <a href={`#${item.title.replace(/\s+/g, '-').toLowerCase()}`}>{item.title}</a>
                                    </button>

                                    {item.submenu.length > 0 && (
                                        <ul
                                            className={`absolute left-0 -mt-2 top-full min-w-max bg-gradient-to-b dark:from-darkMain from-main from-90% to-95% p-4 pb-16 transform transition-all
                                            ${openMenu === index ? "opacity-100 translate-y-0 duration-500 ease-out" : "opacity-0 -translate-y-4 pointer-events-none"}`}
                                        >
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex} className="py-2 dark:hover:text-textDarkMain hover:text-textMain cursor-pointer">
                                                    <a href={`#${subItem.replace(/\s+/g, '-').toLowerCase()}`}>{subItem}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

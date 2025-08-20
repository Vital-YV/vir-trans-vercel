"use client";
import './globals.css';
import React, { useState, useEffect } from "react";
import { useLayout } from './LayoutContext';
import { useRouter, usePathname } from "next/navigation";

export default function TopMenu() {
    const { isVisible, setIsVisible } = useLayout();
    const [changeUl, setChangeUl] = useState('hidden');
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

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
        {
            title: "Vir trans",
            href: "/",
            mainAnchor: "", // Добавлен якорь для основного пункта
            submenu: [
                { label: "О компании", id: "о-компании" },
                { label: "Задать вопрос", id: "задать-вопрос" },
                { label: "Отзывы", id: "отзывы" }
            ]
        },
        {
            title: "Услуги грузоперевозок",
            href: "/",
            mainAnchor: "обычные-грузы", // Якорь для основного пункта
            submenu: [
                { label: "Обычные грузы", id: "обычные-грузы" },
                { label: "Наливные и опасные грузы", id: "наливные-и-опасные-грузы" },
                { label: "Мультимодальные доставки", id: "мультимодальные-доставки" }
            ]
        },
        {
            title: "Заказчикам и Перевозчикам",
            href: "/",
            mainAnchor: "преимущества-работы-с-нами", // Якорь для основного пункта
            submenu: [
                { label: "Преимущества работы с нами", id: "преимущества-работы-с-нами" },
                { label: "Вопросы - ответы", id: "вопросы---ответы" },
                { label: "География перевозок", id: "география-перевозок" }
            ]
        },
        {
            title: "Вакансии",
            href: "/vacancy",
            mainAnchor: null, // Для страниц без якоря
            submenu: []
        }
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

    const scrollToId = (id: string) => {
        const offset = 92;
        const element = document.getElementById(id);
        if (!element) return;

        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const scrollToAnchor = (id: string) => {
        const offset = 92; // смещение под фиксированное меню
        const element = document.getElementById(id);
        if (!element) return;

        const start = window.scrollY;
        const end = element.getBoundingClientRect().top + window.scrollY - offset;
        const duration = 500; // время анимации в мс
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // cubic easing

            window.scrollTo(0, start + (end - start) * ease);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    // Для главного меню
    const handleMainMenuClick = (item: typeof menuItems[0]) => {
        if (pathname === item.href && item.mainAnchor) {
            scrollToAnchor(item.mainAnchor);
        } else if (item.mainAnchor) {
            router.push(`${item.href}#${item.mainAnchor}`);
            setTimeout(() => scrollToAnchor(item.mainAnchor), 50); // небольшая задержка
        } else {
            router.push(item.href);
        }
    };

    // Для подменю
    const handleSubmenuClick = (pageHref: string, anchorId: string) => {
        if (pathname === pageHref) {
            scrollToAnchor(anchorId);
        } else {
            router.push(`${pageHref}#${anchorId}`);
            setTimeout(() => scrollToAnchor(anchorId), 50);
        }
    };


    return (
        <div className="w-full h-24 fixed flex flex-col bg-gradient-to-b dark:from-darkMain from-main from-95% to-[#023047]/0">
            {mobileMenu ? (
                <div className="relative">
                    <div className="z-50 fixed top-5 left-5 flex items-center text-white">
                        <div className="text-lg font-semibold">logo</div>
                        <div className="ml-4">
                            <button className="w-3 h-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <div className="w-3 h-0.5 bg-slate-50 shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />
                                <div className="w-3 h-0.5 mt-0.5 bg-slate-50 shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />
                                <div className="w-3 h-0.5 mt-0.5 bg-slate-50 shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />
                            </button>
                        </div>
                    </div>

                    <div
                        className={`fixed inset-0 transition-all duration-300 ${isMenuOpen ? "backdrop-blur-md bg-black/50" : "pointer-events-none"}`}
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    <div
                        className={`fixed top-0 right-0 h-svh w-64 dark:bg-darkMain bg-main shadow-lg transform transition-transform duration-300 
                     ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <ul className="mt-20 pl-4 text-white">
                            {menuItems.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <div className="cursor-pointer dark:hover:text-textDarkMain hover:text-textMain transition-colors text-lg text-left w-full">
                                        <button
                                            className='text-shadow-[0_1px_3px_rgba(0,0,0,0.4)]'
                                            onClick={() => {
                                                handleMainMenuClick(item);
                                                setIsMenuOpen(false);
                                            }}

                                        >
                                            {item.title}
                                        </button>
                                    </div>

                                    {item.submenu.length > 0 && (
                                        <ul className="mt-2 ml-4 space-y-1">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="text-sm flex items-center gap-2 dark:hover:text-textDarkMain hover:text-textMain cursor-pointer transition-colors"
                                                >
                                                    <span className="before:content-['•'] text-white"></span>
                                                    <button
                                                        onClick={() => {
                                                            handleSubmenuClick(item.href, subItem.id);
                                                            setIsMenuOpen(false);
                                                        }}
                                                    >
                                                        {subItem.label}
                                                    </button>
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
                        logo
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
                                    <div className="cursor-pointer dark:hover:text-textDarkMain hover:text-textMain">
                                        <button
                                            className='text-shadow-[0_1px_3px_rgba(0,0,0,0.4)] dark:hover:text-textDarkMain hover:text-textMain'
                                            onClick={() => handleMainMenuClick(item)}
                                        >
                                            {item.title}
                                        </button>
                                    </div>

                                    {item.submenu.length > 0 && (
                                        <ul
                                            className={`absolute left-0 -mt-2 top-full min-w-max bg-gradient-to-b dark:from-darkMain from-main from-90% to-95% p-4 pb-16 transform transition-all
                                            ${openMenu === index ? "opacity-100 translate-y-0 duration-500 ease-out" : "opacity-0 -translate-y-4 pointer-events-none"}`}
                                        >
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex} className="py-2 dark:hover:text-textDarkMain hover:text-textMain cursor-pointer">
                                                    <button
                                                        onClick={() => handleSubmenuClick(item.href, subItem.id)}
                                                    >
                                                        {subItem.label}
                                                    </button>
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
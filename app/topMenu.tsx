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
            title: "Грузоперевозки",
            href: "/",
            mainAnchor: "vir-trans", // id блока, куда нужно скроллить
            submenu: [
                { label: "О компании", id: "о-компании" },
                { label: "Контакты", id: "контакты" },
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
            mainAnchor: "география-перевозок", // Якорь для основного пункта
            submenu: [
                { label: "География перевозок", id: "география-перевозок" },
                { label: "Вопросы - ответы", id: "вопросы---ответы" },
                { label: "Преимущества работы с нами", id: "преимущества-работы-с-нами" }
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
            // Уже на странице, есть якорь → плавный скролл
            scrollToAnchor(item.mainAnchor);
        } else if (item.mainAnchor) {
            // На другой странице → переход с якорем
            router.push(`${item.href}#${item.mainAnchor}`);
            setTimeout(() => scrollToAnchor(item.mainAnchor), 100);
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

    if (pathname === '/service' || pathname === '/forClients') {
        const isClients = pathname === '/forClients';
        const navigation = isClients
            ? [['Процесс', '#responsibilities'], ['Начало работы', '#start'], ['Вопросы', '#questions'], ['Контакты', '#client-contact']]
            : [['Перевозки', '#foundation-title'], ['Дополнительно', '#special-title'], ['Контакты', '#service-contact']];
        return (
            <header className="relative z-50 border-b border-black/10 bg-brand-background">
                <div className="content-container flex min-w-0 min-h-[76px] items-center justify-between py-4 sm:min-h-[88px]">
                    <a href="/" className="min-w-0 text-[1.5rem] font-extrabold tracking-[-0.06em] text-brand-primary sm:text-[2rem]" aria-label="ВИР-ТРАНС, главная">ВИР-ТРАНС</a>
                    <nav className="hidden items-center gap-7 text-sm font-semibold text-brand-primary md:flex" aria-label="Основная навигация">
                        <a href="/" className="transition-colors hover:text-brand-accent">Главная</a>
                        {navigation.map(([label, href]) => <a key={href} href={href} className="transition-colors hover:text-brand-accent">{label}</a>)}
                    </nav>
                    <button type="button" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-xl text-brand-primary md:hidden" aria-label={isMenuOpen ? 'Закрыть навигацию' : 'Открыть навигацию'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
                    </button>
                    {isMenuOpen && <nav className="absolute right-[var(--content-padding)] top-[4.75rem] flex w-56 flex-col rounded-[var(--radius-md)] border border-black/10 bg-white p-3 text-sm font-semibold shadow-lg md:hidden" aria-label="Мобильная навигация">
                        <a href="/" className="rounded px-3 py-2 hover:bg-black/5" onClick={() => setIsMenuOpen(false)}>Главная</a>
                        {navigation.map(([label, href]) => <a key={href} href={href} className="rounded px-3 py-2 hover:bg-black/5" onClick={() => setIsMenuOpen(false)}>{label}</a>)}
                    </nav>}
                </div>
            </header>
        )
    }

    if (pathname === '/') {
        return null;
    }

    return (
        <div className="w-full h-24 fixed flex flex-col bg-gradient-to-b to-[#3b82f6] from-[#219EBC] font-sans font-semibold">
            {mobileMenu ? (
                <div className="relative">
                    <div className="z-50 fixed top left-1 flex items-center text-white">
                        <img
                            src="logo3.png"
                            alt="logo"
                            className="h-24 w-auto"
                        />
                        <div className="ml-0 mt-1">
                            <button className="w-3 h-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <div className="w-3 h-0.5 bg-[#FF9100] drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                                <div className="w-3 h-0.5 mt-0.5 bg-[#FF9100] drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                                <div className="w-3 h-0.5 mt-0.5 bg-[#FF9100] drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                            </button>
                        </div>
                    </div>

                    <div
                        className={`fixed inset-0 transition-all duration-300 ${isMenuOpen ? "backdrop-blur-md bg-black/50" : "pointer-events-none"}`}
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    <div
                        className={`fixed top-0 right-0 h-svh w-64 bg-gradient-to-b  to-[#3b82f6] from-[#219EBC] shadow-lg transform transition-transform duration-300 
                     ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <ul className="mt-20 pl-4 text-white ">
                            {menuItems.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <div className="cursor-pointer dark:hover:text-textDarkMain hover:text-textMain transition-colors text-lg w-full">
                                        <button
                                            className="w-full text-left text-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
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
                        <img
                            src="/logo3.png"
                            alt="logo"
                            className="h-36 w-auto -mt-6"
                        />

                    </div>
                    <div className={`flex items-center flex-1 -mt-5`}>
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
                                            className=' dark:hover:text-textDarkMain hover:text-textMain'
                                            onClick={() => handleMainMenuClick(item)}
                                        >
                                            {item.title}
                                        </button>
                                    </div>

                                    {item.submenu.length > 0 && (
                                        <ul
                                            className={`absolute left-0 -mt-6 top-full min-w-max bg-gradient-to-b from-[#3b82f6] from-90% to-95% p-4 pb-16 transform transition-all
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

"use client";
import './globals.css'
import Link from 'next/link'
import React, { useState, useEffect } from "react"
import { useLayout } from './LayoutContext';

export default function TopMenu() {
	const { isVisible, setIsVisible } = useLayout(true);
	const [hiddenMenu, setHiddenMenu] = useState('');
	const [changeUl, setChangeUl] = useState('xl:block hidden');
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [subMenu, setSubMenu] = useState('absolute left-0 mt-7 bg-white/50 text-gray-800 shadow-lg rounded-lg py-2');

    const menuItems = [
        {
            title: "Услуги грузоперевозок",
            submenu: ["Наливные и опасные грузы", "Негабаритные грузы / мультимодальные доставки", "Обычные грузы"],
        },
        {
            title: "Нам ДОВЕРЯЮТ",
            submenu: [],
        },
        {
            title: "Задать вопрос/Контакты",
            submenu: [],
        },
        {
            title: "Заказчикам и Перевозчикам",
            submenu: ["Преимущества работы с нами", "Вопросы - ответы", "География перевозок", "Примеры перевозок"],
        },
        {
            title: "Отзывы",
            submenu: [],
        },
        {
            title: "Вакансии",
            submenu: [],
        },
        {
            title: "Дайджест",
            submenu: [],
        },
    ]

     const handleMouseEnter = (index: number) => {
    setOpenMenu(index);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

const handleToggleClick = () => {
	setIsVisible(!isVisible)
	if (isVisible==false){
		setHiddenMenu('w-full');
		setChangeUl('xl:pl-0 cursor-pointer backdrop-blur-sm pr-96 xl:pr-0 xl:backdrop-blur-none p-20 xl:p-0 pb-60 xl:pb-0 w-full xl:h-auto h-screen xl:block')
	}else{
		setHiddenMenu('');
		setChangeUl('xl:pl-60 p-20 xl:p-0 pb-60 xl:pb-0 xl:block hidden')
	}
};
if(window.innerWidth>1280 && isVisible==true){
    setIsVisible(false)
	setHiddenMenu('transition-all ease-in-out -translate-x-96');
	setChangeUl('list-style-none xl:flex xl:mt-1 xl:flex-row xl:ml-80 xl:pl-60 mt-20 ml-4 grid gap-6 font-medium text-base dark:text-white text-black xl:text-white p-20 xl:p-0 pb-60 xl:pb-0 xl:block hidden')
}

const disappearingMenu = () => {
	if(window.innerWidth<1280){
			setIsVisible(!isVisible)
		if (isVisible==true){
			setHiddenMenu('transition-all ease-in-out -translate-x-60');
			setChangeUl('list-style-none xl:flex xl:mt-1 xl:flex-row xl:ml-80 xl:pl-96 mt-20 ml-4 grid gap-6 font-medium text-base dark:text-white text-black xl:text-white p-20 xl:p-0 pb-96 xl:pb-0 xl:block hidden xl:bg-black/0 dark:bg-black/0')
		}
	}
}
  return (
	<div className='fixed flex flex-col w-full bg-gradient-to-r dark:from-fuchsia-600 dark:to-cyan-400 from-cyan-400 to-cyan-800 h-32 text-white z-50'>
		<div className='mt-12 !flex basis-auto'>
			<div className='absolute w-40 z-50 flex flex-row place-content-center'>
				<div className='cursor-pointer px-auto w-max text-2xl font-medium z-40 font-russo'>
					<Link href='/' onClick={disappearingMenu}>
					Vir trans
					</Link>
				</div>
				<div className='pt-forButton ml-2 z-50'>
					<button className='w-3 h-3 xl:hidden' onClick={handleToggleClick} >
						<div className='w-3 h-0.5 bg-slate-50'/>
						<div className='w-3 h-0.5 mt-0.5 bg-slate-50'/>
						<div className='w-3 h-0.5 mt-0.5 bg-slate-50'/>
					</button>
				</div>
			</div>
			<div className={`${hiddenMenu} transition-all ease-in-out `}>
			<ul className={`${changeUl} list-style-none xl:flex xl:mt-1 xl:flex-row xl:ml-80 mt-20 grid gap-4 font-medium text-base dark:text-white text-black xl:text-white z-50`}>
            {menuItems.map((item, index) => (
                <div key={index}>
				<Link href='' onClick={disappearingMenu} ><li className='xl:pb-12 xl:px-6 transition-transform ease-in-out delay-100 hover:-translate-y-0.5 duration-300 hover:xl:text-cyan-800 hover:text-cyan-400 hover:dark:text-fuchsia-600 xl:dark:hover:text-cyan-400 cursor-pointer' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
				<button className="hover:text-gray-300" >{item.title}</button>
                
                {item.submenu.length > 0 && openMenu === index && (
                    
                    <ul className={`${subMenu}`}>
                    {item.submenu.map((subItem, subIndex) => (
                        <div key={subIndex}>
                        <Link href='' onClick={disappearingMenu}><li className='xl:pb-12 xl:px-6 transition-transform ease-in-out delay-100 hover:-translate-y-0.5 duration-300 hover:xl:text-cyan-500 hover:text-cyan-400 hover:dark:text-fuchsia-600 xl:dark:hover:text-cyan-400 cursor-pointer'>
                            {subItem}
                        </li></Link></div>
                    ))}
                    </ul>
                    )}
                </li></Link></div>
                ))}	
            </ul>
		    </div>
		</div>
</div>
  )
}

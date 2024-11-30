"use client";
import './globals.css'
import Link from 'next/link'
import { useState } from 'react';

export default function Footer() {
	
  return (
	<div className='bg-gradient-to-t dark:from-fuchsia-600/60 from-cyan-400/60 dark:to-black/0 to-white/0 dark:text-white xl:px-32 h-40vh max-h-auto'>
		<div className='md:flex md:flex-row grid gap-5 place-content-center md:pt-20'>
			<div className=' mx-auto text-xl font-bold'>
			<p className='w-full text-center'>Contacts</p>
			<div className='w-full'>
				<p className='my-1 font-light xl:text-sm text-xs'>pochita@mail.con</p>
				<p className='my-1 font-light xl:text-sm text-xs'>88888888888</p>
			</div>
			</div>
			<div className=' mx-auto text-xl font-bold'>
			<p className='w-full text-center'>Links</p>
			<div className='w-full'>
				<p className='my-1 font-light xl:text-sm text-xs'>www.one.com</p>
				<p className='my-1 font-light xl:text-sm text-xs'>www.two.com</p>
				<p className='my-1 font-light xl:text-sm text-xs'>www.three.com</p>
			</div>
			</div>
			<div className=' mx-auto text-xl font-bold '>
			<p className='w-full text-center'>About us</p>
			<p className='my-4 font-light xl:text-sm text-xs xl:w-80 w-60'>Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект обеспечивает широкому кругу (специалистов) участие в формировании первоочередных требований.</p>
			</div>

		</div>
	</div>
  )
}

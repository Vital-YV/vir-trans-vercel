"use client";
import './globals.css'

export default function Footer() {

	return (
		<div className="bg-gradient-to-t from-[#023047] from-95% to-white dark:to-black text-white min-h-[30vh] px-6 xl:px-32 flex items-center">
			<div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

				<div>
					<p className="text-xl">Contacts</p>
					<p className="mt-2 font-light text-xs xl:text-sm">pochita@mail.com</p>
					<p className="font-light text-xs xl:text-sm">88888888888</p>
				</div>

				<div>
					<p className="text-xl">Links</p>
					<p className="mt-2 text-xs xl:text-sm">www.one.com</p>
					<p className="text-xs xl:text-sm">www.two.com</p>
					<p className="text-xs xl:text-sm">www.three.com</p>
				</div>

				<div>
					<p className="text-xl">About us</p>
					<p className="mt-4 text-xs xl:text-sm xl:max-w-[20rem]">
						Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект
						обеспечивает широкому кругу специалистов участие в формировании первоочередных требований.
					</p>
				</div>

			</div>
		</div>

	)
}

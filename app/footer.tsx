"use client";
import './globals.css';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-main dark:from-darkMain from-95%  text-white p-6 xl:px-32">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Контакты */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Контакты</h3>
          <p className="text-sm xl:text-base font-light">pochita@mail.com</p>
          <p className="text-sm xl:text-base font-light">+7 (888) 888-88-88</p>
        </div>

        {/* Быстрые ссылки */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Навигация</h3>
          <ul className="space-y-1 text-sm xl:text-base font-light">
            <li><a href="/#о-компании" className="hover:underline">О компании</a></li>
            <li><a href="/service" className="hover:underline">Услуги</a></li>
            <li><a href="/#отзывы" className="hover:underline">Отзывы</a></li>
            <li><a href="/#задать-вопрос" className="hover:underline">Контакты</a></li>
          </ul>
        </div>

        {/* Описание / бренд */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Вир-Транс</h3>
          <p className="text-sm xl:text-base font-light">
            Грузоперевозки по России и СНГ. Быстро, надежно, с гарантией. Работаем с 2010 года.
          </p>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Вир-Транс. Все права защищены.
      </div>
    </footer>
  );
}

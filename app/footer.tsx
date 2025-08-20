"use client";
import './globals.css';
import { usePathname, useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToAnchor = (id: string) => {
    const offset = 92; // под фиксированное меню
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

  const handleFooterClick = (href: string, anchorId?: string) => {
    if (anchorId) {
      if (pathname === href) {
        scrollToAnchor(anchorId);
      } else {
        router.push(`${href}#${anchorId}`);
        setTimeout(() => scrollToAnchor(anchorId), 50);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <footer className="bg-gradient-to-t from-main dark:from-darkMain from-95% text-white p-6 xl:px-32">
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
            <li>
              <button
                className="hover:underline"
                onClick={() => handleFooterClick("/", "о-компании")}
              >
                О компании
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => handleFooterClick("/service")}
              >
                Услуги
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => handleFooterClick("/", "отзывы")}
              >
                Отзывы
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => handleFooterClick("/", "задать-вопрос")}
              >
                Контакты
              </button>
            </li>
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

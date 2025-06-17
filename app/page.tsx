"use client"
import { useState, useEffect, useRef } from "react"


function Reviews() {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = () => {
    // Здесь можно добавить отправку формы
    console.log("Отзыв отправлен:", { message, contact });
    setShowModal(false);
    setMessage("");
    setContact("");
  };

  return (
    <div className="relative min-h-screen text-text1 dark:text-text1Dark overflow-hidden flex flex-col items-center justify-center px-6 py-12">

      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold my-2 ">Отзывы</h1>
        
        <div className="space-y-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-main p-4 rounded-xl border text-white border-gray-700">
              <p className="italic text-base">"{r.text}"</p>
              <div className="mt-2 text-sm text-gray-400">{r.date} — {r.author}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#219EBC] hover:bg-[#3b457c] text-white font-semibold px-5 py-2 rounded my-10"
        >
          Оставить отзыв
        </button>

        <p className="mt-10 text-sm text-gray-400">
          Более подробную информацию можно посмотреть на ресурсе:<br />
          <strong>ATI.SU — Паспорт участника Вир-Транс ★★★★★, код 865279</strong>
        </p>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-md shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Оставить отзыв</h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ваш отзыв"
              rows={4}
              className="w-full border border-gray-300 p-2 rounded mb-4"
            />
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Ваши данные (Имя / ИП / Компания)"
              className="w-full border border-gray-300 p-2 rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Отмена
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const reviews = [
  {
    text: "Надежный заказчик! Оплата в срок! Рекомендуем к сотрудничеству! Успехов и процветания!",
    date: "10 сен 2024",
    author: "Машинный двор, ООО",
  },
  {
    text: "Выражаем благодарность фирме за сотрудничество! Приятно работать с профессионалами. Очень рекомендуем!",
    date: "21 авг 2024",
    author: "Чалый Павел Сергеевич, ИП",
  },
  {
    text: "Работали впервые. Спасибо Олегу за качественную и согласованную работу. Быстро на погрузке и без проблем на выгрузке. Оплата в срок.",
    date: "23 июля 2024",
    author: 'ПКФ "МЕТАЛЛ СВ", ООО',
  },
  {
    text: "Надеемся на дальнейшее сотрудничество! Быстрая загрузка и выгрузка. Оплата без задержек! 🤝",
    date: "22 июля 2024",
    author: "МТА Логистик, ООО",
  },
  {
    text: "Работали с данной компанией, остались довольны. Быстрая загрузка/выгрузка. Оплата в срок. Спасибо Александру. Рекомендую к сотрудничеству.",
    date: "17 июля 2024",
    author: "Неверова Светлана Владимировна, ИП",
  },
  {
    text: "Благодарим за хорошую работу, за быструю оплату! Очень отзывчивые и ответственные сотрудники! Отвечали на звонки даже в не рабочее время.",
    date: "03 июля 2024",
    author: "Халачян Силва Ованесовна, ИП",
  },
  {
    text: "Благодарю за сотрудничество Александра! Очень легкое взаимодействие. Все вопросы решались в рабочем режиме. Удовольствие работать с профессионалами. Удачи)))",
    date: "27 июня 2024",
    author: "ПОПУТНО.ПРО",
  },
];


export default function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const [OKompanii, setOKompanii] = useState('translate-x-full');
  const targetRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setOKompanii('translate-x-0');
    }
  }, [isVisible]);



  return (
    <main className="overflow-x-clip" >

      {/* Титульная страница */}
      <div id='vir-trans' className="w-full min-h-[100svh] flex flex-col items-center justify-center text-centerbg-white bg-white dark:bg-black text-text2 dark:text-text2Dark">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold   px-5 sm:px-0">Грузоперевозки по РФ+</h1>
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mt-2  ">Автомобильные, морские, авиационные и железнодорожные</h2>
        <div className="mt-4 grid grid-cols-4 gap-2">
          <a
            href=""  // Замените на ссылку вашего канала в Telegram
            className="text-[#B7CCBD] hover:text-white transition-colors"
            aria-label="Telegram"
          >
            <img src="/telegram-svg.svg" alt="Telegram" className="w-8 h-8" />
          </a>
          <a
            href=""  // Замените на ссылку вашего VK
            className="text-[#B7CCBD] hover:text-white transition-colors"
            aria-label="VK"
          >
            <img src="/vk-svg.svg" alt="vk" className="w-8 h-8" />
          </a>
          <a
            href=""  // Замените на ваш Mail
            className="text-[#B7CCBD] hover:text-white transition-colors"
            aria-label="Mail"
          >
            <img src="/mail-svg.svg" alt="mail" className="w-8 h-8" />
          </a>
          <a
            href=""  // Замените на ваш номер
            className="text-[#B7CCBD] hover:text-white transition-colors"
            aria-label="Phone"
          >
            <img src="/phone-svg.svg" alt="phone" className="w-8 h-8" />
          </a>


        </div>
      </div>

      {/* О компании */}
      <div id='о-компании' className="w-full min-h-[100svh] flex flex-col items-center justify-center text-center text-text1 dark:text-text1Dark text-xs sm:text-sm md:text-base overflow-hidden">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold ">О КОМПАНИИ</h1>
        <div
          className={`w-svw pr-20vw transform transition-transform duration-700 ease-out ${OKompanii === "translate-x-full" ? "-translate-x-full" : OKompanii}`}
        >
          <p className="mt-4 border border-[#FB8500] rounded-r-xl bg-[#FB8500]/10 p-4 md:px-28 px-10 pl-20vw md:pl-20vw dark:text-[#fb8600]">
            В 2008 году ООО «Вир-Транс» осуществило свою первую транспортировку
            груза, что стало началом нашего успешного пути в логистике. С тех пор мы
            постоянно расширяем свои компетенции и накапливаем опыт в этой сфере.
            Оказывая широкий спектр услуг логистики, мы оперируем всеми видами
            транспорта!
          </p>
        </div>

        <div ref={targetRef} />

        <div
          className={`w-svw pl-20vw transform transition-transform duration-700 ease-out ${OKompanii}`}
        >
          <div className="mt-4 border border-[#219EBC] rounded-l-xl bg-[#219EBC]/10 p-4 md:px-28 px-10 pr-20vw md:pr-20vw dark:text-[#219EBC]">
            <h4 className="font-semibold text-xs md:text-base lg:text-lg">Наши услуги включают:</h4>
            <ul className="mt-2 list-disc list-inside text-left">
              <li>Доставка «точка – точка» обычных грузов любым видом транспорта.</li>
              <li>
                Транспортировку наливных грузов – одно из ключевых направлений
                деятельности компании.
              </li>
              <li>
                Дальнюю доставку крупногабаритных и сверхтяжелых грузов в сложных
                погодных условиях – особая веха в нашем развитии.
              </li>
            </ul>
          </div>

        </div>
        <div>
          <h4 className="text-xs md:text-base lg:text-lg font-semibold mt-4 dark:text-[#219EBC]">Приглашаем Вас к взаимовыгодному сотрудничеству!</h4>
        </div>

      </div>

      {/* Задать вопросы */}
      <div id='задать-вопрос' className="w-full min-h-[100svh] flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-black text-text2 dark:text-text2Dark">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">ЗАДАТЬ ВОПРОС / КОНТАКТЫ</h1>

        <p className="mt-4 text-base md:text-lg lg:text-xl">Подберём транспорт под ваши потребности.</p>
        <p className="text-base md:text-lg lg:text-xl">Предупредим о возможных нюансах.</p>
        <p className="text-base md:text-lg lg:text-xl">Избавим от сомнений.</p>

        {/* Кнопка «Задать вопрос» */}
        <button className="bg-[#219EBC] hover:bg-[#3b457c] text-white font-semibold px-5 py-2 rounded mb-10">
          Задать вопрос
        </button>

        <div className="mt-10 text-xs md:text-base lg:text-lg max-w-3xl text-center">
          <p className="font-semibold">ООО «ВИР-ТРАНС»</p>
          <p>ИНН 6315621732 / ОГРН 1086315013179</p>
          <p>Россия, 443093, г. Самара, ул. Партизанская 82А, офис 507</p>
          <p>Телефон: <a href="tel:+78004440097" className="text-[#219EBC] hover:underline">+7 (800) 444-00-97</a></p>
        </div>

        {/* Список филиалов */}
        <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-6">Филиалы:</h3>
        <ul className="mt-2 list-disc list-inside text-xs md:text-base lg:text-lg text-left max-w-2xl">
          <li>Самара, добавочный 705</li>
          <li>Тольятти, добавочный 701</li>
          <li>Санкт-Петербург, добавочный 706</li>
          <li>Октябрьский, добавочный 703</li>
        </ul>

        {/* Контактные данные */}
        <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-6">Контакты:</h3>
        <ul className="mt-2 list-none text-xs md:text-base lg:text-lg text-left max-w-2xl">
          <li><strong>E-mail:</strong> <a href="mailto:v-t@vir-trans.ru" className="text-[#219EBC] hover:underline dark:text-[#FFB703]">v-t@vir-trans.ru</a></li>
          <li><strong>Сайт:</strong> <a href="https://vir-trans.ru" className="text-[#219EBC] hover:underline dark:text-[#FFB703]">vir-trans.ru</a></li>
          <li><strong>ВКонтакте:</strong> <a href="#" className="text-[#219EBC] hover:underline dark:text-[#FFB703]">vir_trans</a></li>
          <li><strong>Телеграм:</strong> <a href="#" className="text-[#219EBC] hover:underline dark:text-[#FFB703]">vir_trans</a></li>
        </ul>
      </div>

      {/* Отзывы */}
      <div id='отзывы'>
        <Reviews/>
      </div>

    </main >
  );
}

{/* Нам доверяют */ }
{/* <div id='нам-доверяют' className="bg-white dark:bg-black w-full min-h-[100svh] flex flex-col items-center justify-center text-center p-6 text-text2 dark:text-text2Dark ">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">НАМ ДОВЕРЯЮТ</h1>

        <p className="mt-4 text-base md:text-lg lg:text-xl max-w-3xl">
          Нам доверяют крупнейшие компании из сфер нефтегазовой промышленности, металлургии, химического производства, электротехники и товаров народного потребления.
        </p>

        
        <div className="mt-6 flex flex-wrap justify-center gap-6">
        </div>

        <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-8">Мы гарантируем:</h3>
        <ul className="mt-2 list-disc list-inside text-xs md:text-base lg:text-lg max-w-2xl text-left">
          <li>
            <strong>Тщательную проверку партнёров:</strong> Мы отбираем транспортные компании для сотрудничества, оценивая их по утверждённому алгоритму и ряду критериев, включая техническое состояние автопарка, опыт и репутацию.
          </li>
          <li>
            <strong>Контроль качества:</strong> Мониторинг исполнения каждого этапа заказа проводят не только персональные менеджеры загрузок, но и сотрудники собственной службы безопасности.
          </li>
          <li>
            <strong>Прозрачность сделок:</strong> Мы соблюдаем строгое соответствие гражданско-правовым отношениям, требованиям бухгалтерского учета и налогового законодательства по всем сделкам.
          </li>
        </ul>
      </div> */}

{/* Услуги */ }
{/* <div id='услуги-грузоперевозок' className="w-full  flex flex-col items-center justify-center text-center p-6 min-h-[100svh] text-text1 dark:text-text1Dark ">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">УСЛУГИ ГРУЗОПЕРЕВОЗОК</h1>
        <div className="mt-4">(Здесь будет изображение)</div>
      </div> */}
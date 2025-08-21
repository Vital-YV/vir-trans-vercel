"use client"
import { useState, useEffect, useRef } from "react"
import { DeliveryRequestForm } from './DeliveryRequest';
import QuestionRain from './QuestionRain';

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
    <div className="relative min-h-screen text-text1 dark:text-text1Dark overflow-hidden flex flex-col items-center justify-center px-6 py-12 bg-white/90 dark:bg-black/90">

      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold my-2 ">Отзывы</h1>

        <div className="space-y-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#3b82f6] p-4 rounded-xl border text-white border-[#219EBC]">
              <p className="italic text-base">"{r.text}"</p>
              <div className="mt-2 text-sm text-gray-600">{r.date} — {r.author}</div>
            </div>
          ))}
        </div>

        {/* <button
          onClick={() => setShowModal(true)}
          className="bg-[#219EBC] hover:bg-[#3b457c] text-white font-semibold px-5 py-2 rounded my-10"
        >
          Оставить отзыв
        </button> */}

        <p className="mt-10 text-sm text-gray-600">
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


/* Функции из forClients */
interface CircleMotionProps {
  keyNumber: number;
  title: string;
  text: string;
  image: string;
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
}

function CircleMotion({
  keyNumber,
  title,
  text,
  image,
  activeIndex,
  setActiveIndex,
}: CircleMotionProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(activeIndex === keyNumber);
  }, [activeIndex, keyNumber]);

  return (
    <div
      onMouseEnter={() => setActiveIndex(keyNumber)}
      className="relative flex items-center h-20 md:h-24 lg:h-28"
    >
      {/* Круг */}
      <div
        className={`w-20 md:w-24 h-20 md:h-24 lg:w-28 lg:h-28 
          rounded-full dark:bg-[#3b82f6] bg-[#3b82f6] transition-transform duration-300 z-10 
          ${isActive ? '-translate-x-32 md:-translate-x-52' : ''}
        `}
      >
        <img
          src={image}
          alt={image}
          className="scale-75"
          style={{
            filter: "invert(54%) sepia(98%) saturate(2033%) hue-rotate(0deg) brightness(101%) contrast(101%)"
          }}
        />
      </div>

      {/* Блок с текстом */}
      <div
        className={`
          absolute 
          -ml-32 md:-ml-52 
          w-[330px] md:w-[550px] lg:w-[650px] 
          h-20 md:h-24 lg:h-28 
          pl-20 md:pl-32 
          rounded-l-full flex items-center 
          bg-gradient-to-r dark:from-[#3b82f6] from-[#3b82f6] from-80% to-95% z-0 
          transition-opacity duration-300 ${isActive ? 'opacity-100 animate-slideIn' : 'opacity-0 pointer-events-none'}
          `}
      >
        <div className="text-[9px] md:text-sm lg:text-base leading-snug text-white">
          <h3 className="font-bold md:mb-1 ">{title}</h3>
          <p className="text-[6px] md:text-xs lg:text-sm line-clamp-3">{text}</p>
        </div>
      </div>
    </div>
  );
}

const circleData = [
  {
    title: 'Сохранность груза и полная материальная ответственность',
    text: 'Страхование нашей ответственности — обязательное условие. Минимум на рейс — 8 млн ₽. При превышении лимита — доп. страхование. Партнёры: Росгосстрах, Ингосстрах, СК Согласие, СК Пари.',
    image: '/shield.svg'
  },
  {
    title: 'Точное соблюдение сроков',
    text: 'Мы гарантируем своевременную доставку грузов в рамках согласованного графика, строго соблюдая дедлайны.',
    image: '/handshake.svg'
  },
  {
    title: 'Контроль на всех этапах',
    text: 'Мы отслеживаем грузы в пути, информируем клиента и контролируем процесс доставки вплоть до получения.',
    image: '/cup.svg'
  },
  {
    title: 'Персональный подход',
    text: 'Каждому клиенту — индивидуальный менеджер, подбор транспорта и маршрута под задачи и бюджет.',
    image: '/cogs.svg'
  },
];

type FlipCardProps = {
  question: string;
  answer: string;
};

function SpiralCard({ question, answer }: FlipCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[300px] h-[180px] m-4 cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ответ */}
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center text-center text-lg p-6 z-0">
        {answer}
      </div>

      {/* Вопрос */}
      <div
        className={`absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-center text-xl font-semibold p-6 z-10 transition-all duration-700 ease-in-out`}
        style={{
          maskImage: hovered
            ? 'radial-gradient(circle at center, transparent 30%, black 70%)'
            : 'radial-gradient(circle at center, black 100%, black 100%)',
          WebkitMaskImage: hovered
            ? 'radial-gradient(circle at center, transparent 30%, black 70%)'
            : 'radial-gradient(circle at center, black 100%, black 100%)',
          transform: hovered ? 'rotate(720deg) scale(0)' : 'rotate(0deg) scale(1)',
          transformOrigin: 'center',
        }}
      >
        {question}
      </div>
    </div>
  );
}

type FlagsProps = {
  position: string;
  title: string;
  size: string;
  sizeText: string;
  keyNumber: number;
  activeIndexFlags: number;
  setActiveIndexFlags: (index: number) => void;
};

function Flags({
  position,
  title,
  size,
  sizeText,
  keyNumber,
  activeIndexFlags,
  setActiveIndexFlags,
}: FlagsProps) {
  const isActive = activeIndexFlags === keyNumber;



  return (
    <div className={`absolute ${position} flex items-center`}>
      <div
        className={`
    ${size} rounded-full bg-[#F97316] flex items-center justify-center
    transform transition-transform duration-300 ease-out
    ${isActive ? "scale-125 -rotate-12 translate-x-0 z-20" : "scale-100 rotate-0 translate-x-2 z-0"}
  `}
        onMouseEnter={() => setActiveIndexFlags(keyNumber)}
      >
        <img
          src="flag.svg"
          alt="flag"
          className="w-3/4 h-3/4 brightness-0 invert"
        />
      </div>

      <div
        className={`
    z-10 
    italic 
    rounded-l-full ${sizeText}
    bg-gradient-to-r from-[#F97316] from-80% to-95% 
    text-sm text-[#3b82f6] font-bold
    pointer-events-none place-content-center
    transition duration-500 delay-100 ease-in-out
    ${isActive ? "opacity-100 translate-x-2" : "opacity-0 translate-x-0"}
  `}
      >
        <div className="relative z-20">{title}</div>
      </div>

    </div>
  );
}

const flagsList = [
  {
    position: 'left-[34%] top-[42%]',
    title: 'Ямало-Ненецкий автономный округ (ЯНАО)',
    size: 'w-[40px] h-[40px]',
    sizeText: 'h-[50px] -ml-12 pl-12 '
  },
  {
    position: 'left-[30%] top-[55%]',
    title: 'Ханты-Мансийский автономноый округ (ХМАО)',
    size: 'w-[40px] h-[40px]',
    sizeText: 'h-[50px] -ml-12 pl-12 '
  },
  {
    position: 'left-[71%] top-[69%]',
    title: 'Чаяндинское месторождение',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6'
  },
  {
    position: 'left-[77%] top-[73%]',
    title: 'Бодайбо',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6'
  },
  {
    position: 'left-[65%] top-[84%]',
    title: 'Ковыктинское месторождение',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6'
  },
  {
    position: 'left-[39%] top-[99%]',
    title: 'Магистральный',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6'
  },
  {
    position: 'left-[36%] top-[53%]',
    title: 'Суторминское месторождение',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6'
  },
  {
    position: 'left-[0%] top-[70%]',
    title: 'Салмановка',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6'
  },
  {
    position: 'left-[22%] top-[35%]',
    title: 'Усинск',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
  {
    position: 'left-[29%] top-[44%]',
    title: 'Салехард',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
  {
    position: 'left-[39%] top-[48%]',
    title: 'Новозаполярный',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
  {
    position: 'left-[28%] top-[64%]',
    title: 'Салыме',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
  {
    position: 'left-[20%] top-[30%]',
    title: 'Нарьян-Маре',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
  {
    position: 'left-[45%] top-[40%]',
    title: 'Норильск',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
  {
    position: 'left-[68%] top-[78%]',
    title: 'Усть-Кут',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
  {
    position: 'left-[87%] top-[28%]',
    title: 'Якутия',
    size: 'w-[40px] h-[40px]',
    sizeText: 'h-[50px] -ml-12 pl-12 '
  },
  {
    position: 'left-[98%] top-[84%]',
    title: 'Талакан',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
  {
    position: 'left-[52%] top-[50%]',
    title: 'Красноярский край',
    size: 'w-[48px] h-[48px]',
    sizeText: 'h-[60px] -ml-[60px] pl-[60px] '
  },
  {
    position: 'left-[48%] top-[80%]',
    title: 'Лесосибирск',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
  {
    position: 'left-[50%] top-[78%]',
    title: 'Северо-Енисейский',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
  {
    position: 'left-[28%] top-[34%]',
    title: 'Воркута',
    size: 'w-[20px] h-[20px]',
    sizeText: 'h-[25px] -ml-6 pl-6 '
  },
]


/* Функции из service */
type TransportIconProps = {
  src: string;
  alt: string;
  label: string;
};

function TransportIcon({ src, alt, label }: TransportIconProps) {
  const [animate, setAnimate] = useState(false);
  const itemRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnimate(true);
    }
  }, [isVisible]);

  return (
    <div className="flex flex-col items-center">
      <img
        src={src}
        alt={alt}
        className={`w-20 h-20 transition-transform duration-300 ${animate ? 'animate-tilt' : ''}`}
        onMouseEnter={() => setAnimate(true)}
        onAnimationEnd={() => setAnimate(false)}
      />
      <span className="mt-2 text-base" ref={itemRef}>
        {label}
      </span>
    </div>
  );
}


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


  /* Функции из forClients */
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeIndexFalgs, setActiveIndexFlags] = useState<number | null>();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1)); // Убираем `#` и декодируем
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          const offset = 92;
          const y = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, []);


  const qaPairs = [
    {
      question: 'Как производится оплата?',
      answer:
        'Оплата производится на расчётный счёт, согласно договору, учитывая пожелания клиента.',
    },
    {
      question: 'Работаете ли с отсрочкой по оплате?',
      answer:
        'Да, работаем. Длительность отсрочки зависит от объёма заказов.',
    },
    {
      question: 'Предоставляете ли скидки?',
      answer: 'Конечно. Мы готовы обсуждать взаимовыгодные условия.',
    },
    {
      question: 'У вас грузы застрахованы?',
      answer:
        'Наша ответственность застрахована на 8 млн. рублей. При превышении этой суммы производится дополнительное страхование груза по согласованию.',
    },
    {
      question: 'ЭДО. Работаете по электронному обороту документов?',
      answer:
        'Да. Вариант получения сопроводительных документов выбирает клиент. Это может быть ЭДО, почта, курьер.',
    },
    {
      question: 'Гарантируете ли вы налоговую чистоту?',
      answer:
        'Конечно. Все налоги оплачиваются в срок и в полном объёме. Это можно проверить в открытых источниках.',
    },
  ];


  /* Функции из service */
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobile, setMobile] = useState<boolean>(false);
  const [hoverBlock3, setHoverBlock3] = useState(null)

  const [hoveredShipBlock3, setHoveredShipBlock3] = useState(false);
  const [hoveredBigPackageBlock3, setHoveredBigPackageBlock3] = useState(false);
  const [hoveredPackageInHardhatBlock3, setHoveredPackageInHardhatBlock3] = useState(false);
  const [hoveredMagnifierBlock3, setHoveredMagnifierBlock3] = useState(false);


  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1)); // Убираем `#` и декодируем
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          const offset = 92;
          const y = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      title: 'Профессиональный подход',
      content:
        <p className='text-base md:text-lg max-w-3xl mt-2'>
          Мы специализируемся на перевозке различных текучих веществ, будь то химические продукты или пищевые ингредиенты. Наши специалисты обладают высокой квалификацией и опытом, гарантируя безопасную доставку вашего груза.
        </p>,
      color: 'bg-[#3b82f6]',
      subColor: 'bg-[#219EBC]'
    },
    {
      title: '',
      content:
        <p className="">
        </p>,
      color: 'bg-[#FB8500]/0 cursor-default',
      subColor: 'bg-[#ff8c2f]/0'
    },

    {
      title: 'Специализированное оборудование',
      content:
        <p className="text-base md:text-lg max-w-3xl mt-2">
          Для перевозки наливных грузов мы используем специальные автоцистерны. Все емкости проходят строгий санитарный контроль и регулярную проверку на техническое состояние, обеспечивая высокий уровень безопасности и качества доставки.
        </p>,
      color: 'bg-[#3b82f6]',
      subColor: 'bg-[#219EBC]'
    },
    {
      title: '',
      content:
        <p className="">
        </p>,
      color: 'bg-[#FB8500]/0 cursor-default',
      subColor: 'bg-[#ff8c2f]/0'
    },
    {
      title: '',
      content:
        <p className="">
        </p>,
      color: 'bg-[#FB8500]/0 cursor-default',
      subColor: 'bg-[#ff8c2f]/0'
    },
    {
      title: 'Соблюдение стандартов',
      content:
        <p className="text-base md:text-lg max-w-3xl mt-2">
          Мы строго следуем санитарно-эпидемиологическим нормам и стандартам безопасности при перевозке грузов. Перед каждой загрузкой емкости проходят тщательную очистку и обработку, а наши водители проходят профессиональную подготовку.
        </p>,
      color: 'bg-[#3b82f6]',
      subColor: 'bg-[#219EBC]'
    },
    {
      title: '',
      content:
        <p className="">
        </p>,
      color: 'bg-[#FB8500]/0 cursor-default',
      subColor: 'bg-[#ff8c2f]/0'
    },
    {
      title: 'В услуги входит',
      content:
        <ul className="text-base md:text-lg mt-2 list-disc list-inside max-w-2xl text-left">
          <li>Минимальная стоимость доставки, рассчитанная индивидуально для каждого клиента.</li>
          <li>Доставка от 300 кг, от двери до двери.</li>
          <li>
            Перевозка различных типов наливных грузов, включая патоку, растительные масла, минеральные масла, смазочные жидкости,
            растворимые краски, моющие средства, концентраты и экстракты, вина, виноградное сусло, продукты питания и многое другое.
          </li>
        </ul>,
      color: 'bg-[#3b82f6]',
      subColor: 'bg-[#219EBC]'
    },


  ];

  const itemsMobile = [
    {
      title: 'Профессиональный подход',
      content:
        <p className='max-w-3xl mt-2'>
          Мы специализируемся на перевозке различных текучих веществ, будь то химические продукты или пищевые ингредиенты. Наши специалисты обладают высокой квалификацией и опытом, гарантируя безопасную доставку вашего груза.
        </p>,
      color: 'bg-[#3b82f6]',
      subColor: 'bg-[#219EBC]'
    },
    {
      title: 'Специализированное оборудование',
      content:
        <p className="max-w-3xl mt-2">
          Для перевозки наливных грузов мы используем специальные автоцистерны. Все емкости проходят строгий санитарный контроль и регулярную проверку на техническое состояние, обеспечивая высокий уровень безопасности и качества доставки.
        </p>,
      color: 'bg-[#3b82f6]',
      subColor: 'bg-[#219EBC]'
    },
    {
      title: 'Соблюдение стандартов',
      content:
        <p className="max-w-3xl mt-2">
          Мы строго следуем санитарно-эпидемиологическим нормам и стандартам безопасности при перевозке грузов. Перед каждой загрузкой емкости проходят тщательную очистку и обработку, а наши водители проходят профессиональную подготовку.
        </p>,
      color: 'bg-[#3b82f6]',
      subColor: 'bg-[#219EBC]'
    },
    {
      title: 'В услуги входит',
      content:
        <ul className="mt-2 list-disc list-inside max-w-2xl text-left">
          <li>Минимальная стоимость доставки, рассчитанная индивидуально для каждого клиента.</li>
          <li>Доставка от 300 кг, от двери до двери.</li>
          <li>
            Перевозка различных типов наливных грузов, включая патоку, растительные масла, минеральные масла, смазочные жидкости,
            растворимые краски, моющие средства, концентраты и экстракты, вина, виноградное сусло, продукты питания и многое другое.
          </li>
        </ul>,
      color: 'bg-[#3b82f6]',
      subColor: 'bg-[#219EBC]'
    },
  ];

  const itemsBlock3 = [
    {
      title:
        <strong>
          Множество видов транспорта:
        </strong>,
      content:
        <div>
          В компании «Вир-транс» широкий спектр услуг в области перевозок, оперируя всеми видами транспорта: водным, речным, морским, железнодорожным, авиационным, а также вертолетным и вездеходным, всё это обеспечивает нам возможность выбора оптимального маршрута и средств доставки для каждого конкретного груза, гарантируя его безопасность и своевременную доставку.
        </div>
    },
    {
      title:
        <strong>
          Специализация в перевозке крупногабаритных грузов:
        </strong>,
      content:
        <div>
          Мы специализируемся на перевозке крупногабаритных, длинномерных и тяжеловесных грузов. Наш опыт и профессионализм позволяют нам эффективно справляться с самыми сложными задачами, обеспечивая надежность и качество обслуживания наших клиентов. При необходимости наш транспорт будет сопровождаться сотрудниками ГИБДД или специализированными автомобилями прикрытия, чтобы обеспечить максимальный уровень безопасности на каждом этапе пути.
        </div>
    },
    {
      title:
        <strong>
          Инженерная подготовка:
        </strong>,
      content:
        <div>
          Для перевозки негабаритных грузов часто требуется специальное согласование маршрутов с государственными органами и учет ограничений по времени движения. Наша команда инженеров, логистов и специалистов по безопасности разрабатывает оптимальные маршруты и методы подъема и перемещения грузов, обеспечивая их безопасность и эффективность доставки.
        </div>
    },
    {
      title:
        <strong>
          Внимание к деталям:
        </strong>,
      content:
        <div>
          Мы уделяем особое внимание каждой детали в планировании и выполнении перевозок. Даже небольшие изменения в параметрах груза могут потребовать пересмотра всего плана перевозки, поэтому внимательное планирование и координация играют ключевую роль в успешной доставке негабаритных грузов. Мы гарантируем высокий уровень сервиса и качества обслуживания каждому нашему клиенту.
        </div>
    },
  ]


  return (
    <main className="overflow-x-clip" >

      {/* Титульная страница */}
      <div
        id="vir-trans"
        className="w-full min-h-[100svh] flex flex-col items-center justify-center text-center text-text1 dark:text-text1Dark relative"
      >
        <div className="bg-black/30 dark:bg-black/50 backdrop-blur-md rounded-lg px-5 sm:px-10 py-6">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
            Грузоперевозки по РФ+
          </h1>
          <h2 className="text-lg md:text-3xl lg:text-5xl font-semibold mt-2">
            Автомобильные, морские, авиационные и железнодорожные
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2">
          <a
            href="" // Замените на ссылку вашего канала в Telegram
            className="text-[#B7CCBD] hover:text-white transition-colors"
            aria-label="Telegram"
          >
            <img src="/telegram-svg.svg" alt="Telegram" className="w-8 h-8" />
          </a>
          <a
            href="" // Замените на ссылку вашего VK
            className="text-[#B7CCBD] hover:text-white transition-colors"
            aria-label="VK"
          >
            <img src="/vk-svg.svg" alt="vk" className="w-8 h-8" />
          </a>
          <a
            href="" // Замените на ваш Mail
            className="text-[#B7CCBD] hover:text-white transition-colors"
            aria-label="Mail"
          >
            <img src="/mail-svg.svg" alt="mail" className="w-8 h-8" />
          </a>
          <a
            href="" // Замените на ваш номер
            className="text-[#B7CCBD] hover:text-white transition-colors"
            aria-label="Phone"
          >
            <img src="/phone-svg.svg" alt="phone" className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* О компании */}
      <div id='о-компании' className="w-full min-h-[100svh] flex flex-col items-center justify-center text-center text-xs sm:text-sm md:text-base overflow-hidden bg-white/90 dark:bg-black/90 ">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold ">О КОМПАНИИ</h1>
        <div
          className={`w-svw pr-20vw transform transition-transform duration-700 ease-out ${OKompanii === "translate-x-full" ? "-translate-x-full" : OKompanii}`}
        >
          <p className="mt-4 border border-[#FB8500] rounded-r-xl bg-[#FB8500]/60 p-4 md:px-28 px-10 pl-20vw md:pl-20vw text-white">
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
          <div className="mt-4 border border-[#219EBC] rounded-l-xl bg-[#219EBC]/60 p-4 md:px-28 px-10 pr-20vw md:pr-20vw text-white ">
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
          <h4 className="text-xs md:text-base lg:text-lg font-semibold mt-4 text-[#3b82f6]">Приглашаем Вас к взаимовыгодному сотрудничеству!</h4>
        </div>

      </div>

      {/* Задать вопросы */}
      <div id='задать-вопрос' className="w-full min-h-[100svh] flex flex-col items-center justify-center text-center p-6 text-text1 dark:text-text1Dark">
        <div className="bg-black/30 dark:bg-black/50 backdrop-blur-md rounded-lg px-5 sm:px-10 py-6 items-center justify-center text-center">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">ЗАДАТЬ ВОПРОС / КОНТАКТЫ</h1>

          <p className="mt-4 text-base md:text-lg lg:text-xl">Подберём транспорт под ваши потребности.</p>
          <p className="text-base md:text-lg lg:text-xl">Предупредим о возможных нюансах.</p>
          <p className="text-base md:text-lg lg:text-xl">Избавим от сомнений.</p>

          <div className="mt-10 text-xs md:text-base lg:text-lg max-w-3xl text-center">
            <p className="font-semibold">ООО «ВИР-ТРАНС»</p>
            <p>ИНН 6315621732 / ОГРН 1086315013179</p>
            <p>Россия, 443093, г. Самара, ул. Партизанская 82А, офис 507</p>
            <p>Телефон: <a href="tel:+78004440097" className="text-[#3b82f6] hover:underline">+7 (800) 444-00-97</a></p>
          </div>

          {/* Список филиалов */}
          <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-6">Филиалы:</h3>
          <ul className="mt-2 list-disc list-inside text-xs md:text-base lg:text-lg flex flex-col items-center gap-1">
            <li>Самара, добавочный 705</li>
            <li>Тольятти, добавочный 701</li>
            <li>Санкт-Петербург, добавочный 706</li>
            <li>Октябрьский, добавочный 703</li>
          </ul>

          {/* Контактные данные */}
          <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-6">Контакты:</h3>
          <ul className="mt-2 text-xs md:text-base lg:text-lg flex flex-col items-center gap-1">
            <li><strong>E-mail:</strong> <a href="mailto:v-t@vir-trans.ru" className="text-[#3b82f6] hover:underline dark:text-[#FFB703]">v-t@vir-trans.ru</a></li>
            <li><strong>Сайт:</strong> <a href="https://vir-trans.ru" className="text-[#3b82f6] hover:underline dark:text-[#FFB703]">vir-trans.ru</a></li>
            <li><strong>ВКонтакте:</strong> <a href="#" className="text-[#3b82f6] hover:underline dark:text-[#FFB703]">vir_trans</a></li>
            <li><strong>Телеграм:</strong> <a href="#" className="text-[#3b82f6] hover:underline dark:text-[#FFB703]">vir_trans</a></li>
          </ul>
        </div>
      </div>

      {/* Отзывы */}
      <div id='отзывы'>
        <Reviews />
      </div>


      {/*  ====service====  */}
      {/* Услуга 1 ДОСТАВКА «ТОЧКА – ТОЧКА»*/}
      <div id="обычные-грузы" className="relative w-full md:pt-0 min-h-[100svh] flex flex-col items-center justify-center text-center p-6 text-text1 dark:text-text1Dark ">
        <h1
          className="text-xl md:text-3xl lg:text-5xl font-bold mt-10"
          style={{
            textShadow: `
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white
    `
          }}
        >
          ДОСТАВКА «ТОЧКА – ТОЧКА»
        </h1>

        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mt-2  ">Любым видом транспорта!</h2>

        {mobile ? (
          <div className="relative w-[300px] h-[200px] grid place-items-center">
            <div className="absolute top-0 left-0 scale-[0.5]">
              <TransportIcon src='/airplane.svg' alt='airplane' label='АВИА' />
            </div>
            <div className="absolute top-0 right-0 scale-[0.5]">
              <TransportIcon src='/ship.svg' alt='ship' label='Водный транспорт' />
            </div>
            <div className="absolute bottom-0 left-0 scale-[0.5]">
              <TransportIcon src='/earth-globe.svg' alt='earth' label='Мультимодальные' />
            </div>
            <div className="absolute bottom-0 right-0 scale-[0.5]">
              <TransportIcon src='/train.svg' alt='train' label='ЖД' />
            </div>
            <div className="flex felx-col items-center scale-[0.5]">
              <TransportIcon src='/truck.svg' alt='truck' label='Малотоннажки' />
            </div>
          </div>
        ) : (
          <div className="relative w-[600px] h-[400px] mt-20 grid place-items-center">
            <div className="absolute top-0 left-0">
              <TransportIcon src='/airplane.svg' alt='airplane' label='АВИА' />
            </div>
            <div className="absolute top-0 right-0">
              <TransportIcon src='/ship.svg' alt='ship' label='Водный транспорт' />
            </div>
            <div className="absolute bottom-0 left-0">
              <TransportIcon src='/earth-globe.svg' alt='earth' label='Мультимодальные' />
            </div>
            <div className="absolute bottom-0 right-0">
              <TransportIcon src='/train.svg' alt='train' label='ЖД' />
            </div>
            <div className="flex felx-col items-center">
              <TransportIcon src='/truck.svg' alt='truck' label='Малотоннажки' />
            </div>
          </div>
        )}


        <div className="mt-10 bg-black/30 dark:bg-black/50 backdrop-blur-md rounded-lg px-5 sm:px-10 py-6 items-center justify-center text-center">
          <p className=" text-base md:text-lg lg:text-xl max-w-2xl">
            Возьмем на себя все ваши вопросы по логистике.
          </p>

          <p className=" text-xs md:text-base lg:text-lg max-w-2xl">
            Примем заказ в любое время и доставим в любую точку. Всегда готовы пойти навстречу заказчику и предложить оптимальную стоимость и схему транспортировки.
          </p>
        </div>

      </div>

      {/* Услуга 2 ТРАНСПОРТИРОВКА НАЛИВНЫХ И ОПАСНЫХ ГРУЗОВ*/}
      <div id='наливные-и-опасные-грузы' className="relative w-full flex flex-col items-center justify-center text-center p-6 min-h-[100svh] text-black dark:text-white bg-white/90 dark:bg-black/90">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">
          ТРАНСПОРТИРОВКА НАЛИВНЫХ И ОПАСНЫХ ГРУЗОВ
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mt-2  ">
          СВОЙСТВО ИМЕЕТ ЗНАЧЕНИЕ!
        </h2>

        {mobile ? (
          <div className="relative">
            <div className="relative scale-[0.7] grid grid-cols-2 gap-4 w-full h-[calc(0.2*100svh)] place-items-center mb-16">
              {itemsMobile.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center">
                  {/* Круг */}
                  <div className={`relative w-20 h-20 md:w-[100px] md:h-[100px] rounded-full ${item.subColor}`}>
                    <div
                      className={`absolute inset-0 m-auto transition-all duration-500 ease-in-out 
                        w-16 h-16 md:w-20 md:h-20 ${item.color} 
                        ${hoveredIndex === index ? "scale-125" : ""}
                        rounded-full`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                  </div>

                  {/* Заголовок под кругом */}
                  <p
                    className={`mt-2 text-xs sm:text-sm font-semibold transition-all duration-500
            ${hoveredIndex === index ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}
                  >
                    {item.title}
                  </p>

                </div>
              ))}
            </div>

            {/* Блок с текстом */}
            <div className="h-[calc(0.3*100svh)]" />
            <div className="absolute w-full -mt-[calc(0.3*100svh)] flex justify-center text-xs md:text-base lg:text-lg">
              <div
                className={`text-center p-4 transition-all duration-500 transform ease-in-out 
          ${hoveredIndex !== null ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                {hoveredIndex !== null && (
                  <>
                    <h3 className="font-semibold">{itemsMobile[hoveredIndex]?.title}</h3>
                    {itemsMobile[hoveredIndex]?.content}
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="relative grid grid-cols-4 gap-4 w-auto h-[calc(0.2*100svh)] place-items-center my-16 mx-24">
              {items.map((item, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  {/* Круги */}
                  <div className={`relative w-20 h-20 md:w-[100px] md:h-[100px] rounded-full ${item.subColor}`}>
                    <div
                      className={`absolute inset-0 m-auto transition-all duration-500 ease-in-out 
                        w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 ${item.color} 
                        ${hoveredIndex === index ? "scale-125" : ""}
                        rounded-full`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                  </div>


                  {/* Заголовки */}
                  <p
                    className={`text-xs sm:text-sm font-semibold transition-all duration-500 w-24 sm:w-32 md:w-40 break-words
            ${hoveredIndex === index ? "-translate-x-4 opacity-0" : "translate-x-0 opacity-100"} 
            left-[-55px] top-[-15px]`}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Блок с текстом */}
            <div className="relative w-full h-[calc(0.4*100svh)] flex justify-center top-0 text-xs md:text-base lg:text-lg">
              <div
                className={`text-center p-4 transition-all duration-500 transform ease-in-out 
          ${hoveredIndex !== null ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                {hoveredIndex !== null && (
                  <>
                    <h3 className="font-semibold text-lg">{items[hoveredIndex]?.title}</h3>
                    {items[hoveredIndex]?.content}
                  </>
                )}
              </div>
            </div>
          </div>
        )}


        {/* <p className="text-lg md:text-xl mt-6 max-w-2xl">
          Транспортировка наливных грузов – одно из ключевых направлений деятельности компании "ВИР-Транс"
        </p> */}

        <div className="absolute bottom-5 grid grid-cols-2 gap-2 z-20">
          <a href="" className="text-[#B7CCBD] hover:text-white transition-colors" aria-label="Mail">
            <img src="/mail-svg.svg" alt="mail" className="w-8 h-8" />
          </a>
          <a href="" className="text-[#B7CCBD] hover:text-white transition-colors" aria-label="Phone">
            <img src="/phone-svg.svg" alt="phone" className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Услуга 3  ДОСТАВКА НЕГАБАРИТНЫХ ГРУЗОВ. МУЛЬТИМОДАЛЬНАЯ ДОСТАВКА*/}
      <div id='мультимодальные-доставки' className="w-full min-h-[100svh] relative flex flex-col items-center justify-center text-center p-6 text-text1 dark:text-text1Dark ">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">МУЛЬТИМОДАЛЬНАЯ ДОСТАВКА</h1>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">доставка негабаритных грузов</h1>
        <br /><h2 className="text-lg md:text-3xl lg:text-4xl font-semibold mt-2  ">РАЗМЕР ИМЕЕТ ЗНАЧЕНИЕ!</h2>

        <h3 className="text-base md:text-lg lg:text-xl font-semibold my-6">Мы предлагаем Вам:</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:scale-[1] scale-[0.4] gap-3 min-w-max h-[calc(0.4*100svh)] sm:h-auto -mt-16 sm:mt-0">

          <div onMouseEnter={() => setHoverBlock3(0)}>
            <div onMouseEnter={() => setHoveredShipBlock3(true)} onMouseLeave={() => setHoveredShipBlock3(false)}>
              <div className="relative w-64 h-64 bg-white  overflow-hidden rounded-lg scale-75">
                {/* Корабль */}
                <img
                  src="/shipBlock3.svg"
                  alt="ship"
                  className="absolute bottom-0 left-0 w-40"
                  style={{
                    filter: 'invert(19%) sepia(91%) saturate(1755%) hue-rotate(207deg) brightness(95%) contrast(102%)'
                  }}
                />
                {/* Посылка */}
                <img
                  src="/packageBlock3ForHelicopter.svg"
                  alt="package"
                  className={`absolute w-8 left-[70px] bottom-[90px] transition-all
                  ${hoveredShipBlock3 ? 'animate-packageLift' : ''}`}
                  style={{
                    filter: 'invert(19%) sepia(91%) saturate(1755%) hue-rotate(207deg) brightness(95%) contrast(102%)'
                  }}
                />
                {/* Вертолёт */}
                <img
                  src="/helicopterBlock3.svg"
                  alt="helicopter"
                  className={`absolute w-24 top-[-20px] right-[-10px] 
                  ${hoveredShipBlock3 ? 'animate-helicopterFly' : ''}`}
                  style={{
                    filter: 'invert(19%) sepia(91%) saturate(1755%) hue-rotate(207deg) brightness(95%) contrast(102%)'
                  }}
                />
              </div>
            </div>
          </div>

          <div onMouseEnter={() => setHoverBlock3(1)}>
            <div onMouseEnter={() => setHoveredBigPackageBlock3(true)} onMouseLeave={() => setHoveredBigPackageBlock3(false)}>
              <div className="relative w-64 h-64 bg-white  overflow-hidden rounded-lg scale-75">
                <img
                  src="/packageBlock3.svg"
                  alt="package"
                  className={`absolute w-40% left-[76px] bottom-[72px] transition-all 
          ${hoveredBigPackageBlock3 ? 'animate-packageScale' : ''}`}
                  style={{
                    filter: 'invert(19%) sepia(91%) saturate(1755%) hue-rotate(207deg) brightness(95%) contrast(102%)'
                  }}
                />
              </div>
            </div>
          </div>

          <div onMouseEnter={() => setHoverBlock3(2)}>
            <div onMouseEnter={() => setHoveredPackageInHardhatBlock3(true)} onMouseLeave={() => setHoveredPackageInHardhatBlock3(false)}>
              <div className="relative w-64 h-64 bg-white  overflow-hidden rounded-lg scale-75">
                <img
                  src="/hardHatBlock3.svg"
                  alt="hard-hat"
                  className={`absolute w-40% left-[90px] bottom-[120px] transition-all rotate-12
          ${hoveredPackageInHardhatBlock3 ? 'animate-packageInHardhat' : ''}`}
                  style={{
                    filter: 'invert(19%) sepia(91%) saturate(1755%) hue-rotate(207deg) brightness(95%) contrast(102%)'
                  }}
                />
                <img
                  src="/packageBlock3.svg"
                  alt="package"
                  className={`absolute w-40% left-[76px] bottom-[72px] scale-[1.2]`}
                  style={{
                    filter: 'invert(19%) sepia(91%) saturate(1755%) hue-rotate(207deg) brightness(95%) contrast(102%)'
                  }}
                />
              </div>
            </div>
          </div>

          <div onMouseEnter={() => setHoverBlock3(3)}>
            <div onMouseEnter={() => setHoveredMagnifierBlock3(true)} onMouseLeave={() => setHoveredMagnifierBlock3(false)}>
              <div className="relative w-64 h-64 bg-white overflow-hidden rounded-lg scale-75">
                <img
                  src="/magnifier.svg"
                  alt="magnifier"
                  className={`absolute w-40% left-[120px] bottom-[72px] transition-all
          ${hoveredMagnifierBlock3 ? 'animate-magnifier ' : ''}`}
                  style={{
                    filter: 'invert(19%) sepia(91%) saturate(1755%) hue-rotate(207deg) brightness(95%) contrast(102%)'
                  }}
                />
                <img
                  src="/packageBlock3.svg"
                  alt="package"
                  className={`absolute w-40% left-[76px] bottom-[72px] scale-[1.2]`}
                  style={{
                    filter: 'invert(19%) sepia(91%) saturate(1755%) hue-rotate(207deg) brightness(95%) contrast(102%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>


        <div className={`mt-8 text-left max-w-3xl min-h-[calc(0.3*100svh)] space-y-4 list-disc list-inside text-xs md:text-base lg:text-lg transition-all duration-500 transform ease-in-out ${hoverBlock3 !== null ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
          <div className="bg-black/30 dark:bg-black/50 backdrop-blur-md rounded-lg px-5 sm:px-10 py-6 items-center justify-center text-center">
            {hoverBlock3 !== null && (
              <div>
                {itemsBlock3[hoverBlock3].title}
                {itemsBlock3[hoverBlock3].content}
              </div>
            )}
          </div>
        </div>

        {/* <p className="pt-6 max-w-2xl bottom-0 border-t-2 text-xs md:text-base lg:text-lg">
          В мире современной логистики каждый сантиметр имеет значение, особенно когда речь идет о перевозке негабаритных и мультимодальных грузов. Мы стремимся к эффективности и надежности в любых условиях, преодолевая все возможные сложности пути: от мостов и паромных переправ до горных серпантинов и зимников.
        </p> */}
      </div>



      {/*  ====forClients====  */}


      {/* География перевозок */}
      <div id='география-перевозок' className="hidden md:block relative min-h-screen text-black dark:text-white overflow-hidden flex flex-col items-center justify-center px-6 py-12">
        <div className="relative w-full max-w-6xl mx-auto aspect-[3/2]">
          {/* Заголовок теперь внутри контейнера */}
          <h1 className="absolute top-0 left-0 w-full text-3xl md:text-4xl lg:text-5xl font-bold z-50 drop-shadow-md drop-shadow-black text-center">
            География перевозок
          </h1>

          <img
            src="map.png"
            alt="map"
            className="absolute top-0 left-7 w-full h-full object-contain scale-[2.2] z-0"
          />
          {flagsList.map((item, index) => (
            <Flags
              key={index}
              keyNumber={index}
              title={item.title}
              position={item.position}
              size={item.size}
              sizeText={item.sizeText}
              activeIndexFlags={activeIndexFalgs}
              setActiveIndexFlags={setActiveIndexFlags}
            />
          ))}
        </div>
      </div>

      {/* География перевозок - мобильная версия */}
      <div className="md:hidden w-full py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 dark:bg-black/50 backdrop-blur-md rounded-lg px-5 sm:px-10 py-6 items-center justify-center text-center">
            <h1 className="text-3xl font-bold mb-6">География перевозок</h1>

            <div className="space-y-4 text-white dark:text-gray-300">
              <p>Наша компания охватывает широкую географию доставок, включая ключевые регионы и труднодоступные месторождения по всей России.</p>

              <p>Мы успешно осуществляем транспортировку в такие разнообразные и удаленные точки, как месторождения в:</p>

              <ul className="list-disc text-left pl-6 space-y-2">
                <li>Ямало-Ненецком автономном округе (ЯНАО)</li>
                <li>Ханты-Мансийском автономном округе (ХМАО)</li>
                <li>Чаяндинском</li>
                <li>Бодайбо</li>
                <li>Ковыктинском</li>
                <li>Магистральном</li>
                <li>Суторминском</li>
                <li>Салмановском</li>
                <li>Усинске</li>
                <li>Салехарде</li>
                <li>Новозаполярном</li>
                <li>Салыме</li>
                <li>Нарьян-Маре</li>
                <li>Норильске</li>
                <li>Усть-Куте</li>
                <li>Якутии</li>
                <li>Талакане</li>
                <li>Красноярском крае</li>
                <li>Лесосибирске</li>
                <li>Северо-Енисейском</li>
                <li>Воркуте</li>
                <li>Республике Саха</li>
                <li>и других регионах</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Вопросы - ответы */}
      <div id='вопросы---ответы' className="relative min-h-screen bg-white/90 dark:bg-black/90 text-[#219EBC] dark:text-white flex flex-col items-center justify-center px-6 py-12 ">
        <QuestionRain />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 z-10">Вопросы – ответы</h1>
        <div className="flex flex-wrap justify-center max-w-5xl">
          {qaPairs.map(({ question, answer }, index) => (
            <SpiralCard key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>

      {/* Преимущества работы с нами */}
      <div id='преимущества-работы-с-нами' className="w-full min-h-[100svh]  text-text1 flex flex-col items-center justify-center text-center p-6 dark:text-text2Dark">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2  ">Преимущества работы с нами</h1>
        <div className="flex flex-col space-y-6 md:space-y-12 lg:space-y-16 mt-10">
          {circleData.map((item, index) => (
            <CircleMotion
              key={index}
              keyNumber={index}
              title={item.title}
              text={item.text}
              image={item.image}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
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
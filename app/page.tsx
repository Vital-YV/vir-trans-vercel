"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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

interface CircleMotionProps {
  keyNumber: number;
  title: string;
  text: string;
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
}

function CircleMotion({
  keyNumber,
  title,
  text,
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
          rounded-full bg-darkMain transition-transform duration-300 z-10 
          ${isActive ? '-translate-x-32 md:-translate-x-52' : ''}
        `}
      />

      {/* Блок с текстом */}
      <div
        className={`
          absolute 
          -ml-32 md:-ml-52 
          w-[350px] md:w-[550px] lg:w-[650px] 
          h-20 md:h-24 lg:h-28 
          pl-28 md:pl-32 
          rounded-l-full flex items-center 
          bg-gradient-to-r dark:from-darkMain from-main from-90% to-95% z-0 
          transition-opacity duration-300 ${isActive ? 'opacity-100 animate-slideIn' : 'opacity-0 pointer-events-none'}
          `}
      >
        <div className="text-[10px] md:text-sm lg:text-base leading-snug">
          <h3 className="font-bold md:mb-1">{title}</h3>
          <p className="text-white text-[6px] md:text-xs lg:text-sm line-clamp-3">{text}</p>
        </div>
      </div>
    </div>
  );
}

const circleData = [
  {
    title: 'Сохранность груза и полная материальная ответственность',
    text: 'Страхование нашей ответственности — обязательное условие. Минимальная сумма на рейс — 8 млн ₽. При превышении лимита — доп. страхование. Партнёры: Росгосстрах, Ингосстрах, СК Согласие, СК Пари.',
  },
  {
    title: 'Точное соблюдение сроков',
    text: 'Мы гарантируем своевременную доставку грузов в рамках согласованного графика, строго соблюдая дедлайны.',
  },
  {
    title: 'Контроль на всех этапах',
    text: 'Мы отслеживаем грузы в пути, информируем клиента и контролируем процесс доставки вплоть до получения.',
  },
  {
    title: 'Персональный подход',
    text: 'Каждому клиенту — индивидуальный менеджер, подбор транспорта и маршрута под задачи и бюджет.',
  },
];


export default function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const [OKompanii, setOKompanii] = useState('translate-x-full');
  const targetRef = useRef();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [itemContent, setItemContent] = useState('opacity-0')
  const [mobile, setMobile] = useState<boolean>(false);
  const [hoverBlock3, setHoverBlock3] = useState(null)

  const [hoveredShipBlock3, setHoveredShipBlock3] = useState(false);
  const [hoveredBigPackageBlock3, setHoveredBigPackageBlock3] = useState(false);
  const [hoveredPackageInHardhatBlock3, setHoveredPackageInHardhatBlock3] = useState(false);
  const [hoveredMagnifierBlock3, setHoveredMagnifierBlock3] = useState(false);

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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
      color: 'bg-[#FB8500] hover:bg-slate-100',
    },
    {
      title: '',
      content:
        <p className="">
        </p>,
      color: 'bg-[#FB8500]/0 cursor-default',
    },

    {
      title: 'Специализированное оборудование',
      content:
        <p className="text-base md:text-lg max-w-3xl mt-2">
          Для перевозки наливных грузов мы используем специальные автоцистерны. Все емкости проходят строгий санитарный контроль и регулярную проверку на техническое состояние, обеспечивая высокий уровень безопасности и качества доставки.
        </p>,
      color: 'bg-[#FB8500] hover:bg-slate-100',
    },
    {
      title: '',
      content:
        <p className="">
        </p>,
      color: 'bg-[#FB8500]/0 cursor-default',
    },
    {
      title: '',
      content:
        <p className="">
        </p>,
      color: 'bg-[#FB8500]/0 cursor-default',
    },
    {
      title: 'Соблюдение стандартов',
      content:
        <p className="text-base md:text-lg max-w-3xl mt-2">
          Мы строго следуем санитарно-эпидемиологическим нормам и стандартам безопасности при перевозке грузов. Перед каждой загрузкой емкости проходят тщательную очистку и обработку, а наши водители проходят профессиональную подготовку.
        </p>,
      color: 'bg-[#FB8500] hover:bg-slate-100',
    },
    {
      title: '',
      content:
        <p className="">
        </p>,
      color: 'bg-[#FB8500]/0 cursor-default',
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
      color: 'bg-[#FB8500] hover:bg-slate-100',
    },


  ];

  const itemsMobile = [
    {
      title: 'Профессиональный подход',
      content:
        <p className='max-w-3xl mt-2'>
          Мы специализируемся на перевозке различных текучих веществ, будь то химические продукты или пищевые ингредиенты. Наши специалисты обладают высокой квалификацией и опытом, гарантируя безопасную доставку вашего груза.
        </p>,
      color: 'bg-[#FB8500] hover:bg-slate-100',
    },
    {
      title: 'Специализированное оборудование',
      content:
        <p className="max-w-3xl mt-2">
          Для перевозки наливных грузов мы используем специальные автоцистерны. Все емкости проходят строгий санитарный контроль и регулярную проверку на техническое состояние, обеспечивая высокий уровень безопасности и качества доставки.
        </p>,
      color: 'bg-[#FB8500] hover:bg-slate-100',
    },
    {
      title: 'Соблюдение стандартов',
      content:
        <p className="max-w-3xl mt-2">
          Мы строго следуем санитарно-эпидемиологическим нормам и стандартам безопасности при перевозке грузов. Перед каждой загрузкой емкости проходят тщательную очистку и обработку, а наши водители проходят профессиональную подготовку.
        </p>,
      color: 'bg-[#FB8500] hover:bg-slate-100',
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
      color: 'bg-[#FB8500] hover:bg-slate-100',
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

  const circleMouseEnter = (index) => {
    setHoveredIndex(index)
    items[index].hover = 'opacity-100'
  }

  const circleMouseLeave = () => {
    setHoveredIndex(null)

  }


  return (
    <main className="overflow-x-clip" >
      {/* Титульная страница */}
      <div className="w-full min-h-[100svh] flex flex-col items-center justify-center text-center text-text1 dark:text-text1Dark ">
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
      <div className="w-full min-h-[100svh] flex flex-col items-center justify-center text-center bg-white dark:bg-black text-text2 text-xs sm:text-sm md:text-base overflow-hidden">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold ">О КОМПАНИИ</h1>
        <div
          className={`w-svw pr-20vw transform transition-transform duration-700 ease-out ${OKompanii === "translate-x-full" ? "-translate-x-full" : OKompanii}`}
        >
          <p className="mt-4 border border-[#FB8500] rounded-r-xl bg-[#FB8500]/20 p-4 md:px-28 px-10 pl-20vw md:pl-20vw dark:text-[#FB8500]">
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
          <div className="mt-4 border border-[#219EBC] rounded-l-xl bg-[#219EBC]/20 p-4 md:px-28 px-10 pr-20vw md:pr-20vw dark:text-[#219EBC]">
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

      {/* Услуги */}
      <div id='услуги-грузоперевозок' className="w-full  flex flex-col items-center justify-center text-center p-6 min-h-[100svh] text-text1 dark:text-text1Dark ">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">УСЛУГИ ГРУЗОПЕРЕВОЗОК</h1>
        <div className="mt-4">(Здесь будет изображение)</div>
      </div>

      {/* Услуга 1 ДОСТАВКА «ТОЧКА – ТОЧКА»*/}
      <div id="обычные-грузы" className="relative w-full pt-20 md:pt-0 min-h-[100svh] bg-white dark:bg-black text-text2 flex flex-col items-center justify-center text-center p-6 dark:text-text2Dark">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">ДОСТАВКА «ТОЧКА – ТОЧКА»</h1>
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mt-2  ">Любым видом транспорта!</h2>

        {mobile ? (
          <div className="relative w-[300px] h-[200px] grid place-items-center">
            <div className="absolute top-0 left-0 scale-[0.5]">
              <TransportIcon src='/truck.svg' alt='truck' label='Малотоннажки' />
            </div>
            <div className="absolute top-0 right-0 scale-[0.5]">
              <TransportIcon src='/ship.svg' alt='ship' label='Водный транспорт' />
            </div>
            <div className="absolute bottom-0 left-0 scale-[0.5]">
              <TransportIcon src='/airplane.svg' alt='airplane' label='АВИА' />
            </div>
            <div className="absolute bottom-0 right-0 scale-[0.5]">
              <TransportIcon src='/train.svg' alt='train' label='ЖД' />
            </div>
            <div className="flex felx-col items-center scale-[0.5]">
              <TransportIcon src='/earth-globe.svg' alt='earth' label='Мультимодальные' />
            </div>
          </div>
        ) : (
          <div className="relative w-[600px] h-[400px] mt-20 grid place-items-center">
            <div className="absolute top-0 left-0">
              <TransportIcon src='/truck.svg' alt='truck' label='Малотоннажки' />
            </div>
            <div className="absolute top-0 right-0">
              <TransportIcon src='/ship.svg' alt='ship' label='Водный транспорт' />
            </div>
            <div className="absolute bottom-0 left-0">
              <TransportIcon src='/airplane.svg' alt='airplane' label='АВИА' />
            </div>
            <div className="absolute bottom-0 right-0">
              <TransportIcon src='/train.svg' alt='train' label='ЖД' />
            </div>
            <div className="flex felx-col items-center">
              <TransportIcon src='/earth-globe.svg' alt='earth' label='Мультимодальные' />
            </div>
          </div>
        )}


        <div className="mt-10">
          <p className="mt-6 text-base md:text-lg lg:text-xl max-w-2xl">
            Возьмем на себя все ваши вопросы по логистике.
          </p>

          <p className="mt-2 text-xs md:text-base lg:text-lg max-w-2xl">
            Примем заказ в любое время и доставим в любую точку. Всегда готовы пойти навстречу заказчику и предложить оптимальную стоимость и схему транспортировки.
          </p>
        </div>

      </div>

      {/* Услуга 2 ТРАНСПОРТИРОВКА НАЛИВНЫХ И ОПАСНЫХ ГРУЗОВ*/}
      <div id='наливные-и-опасные-грузы' className="w-full flex flex-col items-center justify-center text-center p-6 min-h-[100svh] text-text1 dark:text-text1Dark ">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">
          ТРАНСПОРТИРОВКА НАЛИВНЫХ И ОПАСНЫХ ГРУЗОВ
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mt-2  ">
          СВОЙСТВО ИМЕЕТ ЗНАЧЕНИЕ!
        </h2>

        {mobile ? (
          <div>
            <div className="relative scale-[0.7] grid grid-cols-2 gap-4 w-full h-[calc(0.2*100svh)] place-items-center mb-16">
              {itemsMobile.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center">
                  {/* Круг */}
                  <div
                    className={`transition-all duration-500 ease-in-out 
            w-16 h-16 md:w-20 md:h-20 ${item.color} 
            ${hoveredIndex === index ? "scale-110" : ""} 
            rounded-full`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />

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
            <div className="relative w-full h-[calc(0.3*100svh)] flex justify-center text-xs md:text-base lg:text-lg">
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
            <div className="relative grid grid-cols-4 gap-4 w-full h-[calc(0.2*100svh)] place-items-center my-16 mx-24">
              {items.map((item, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  {/* Круги */}
                  <div
                    className={`transition-all duration-500 ease-in-out w-20 h-10 sm:w-14 sm:h-18 md:w-20 md:h-20 ${item.color} 
            ${hoveredIndex === index ? "scale-110" : ""}
            rounded-full`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />

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
            <div className="relative w-full h-[calc(0.3*100svh)] flex justify-center top-0 text-xs md:text-base lg:text-lg">
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

        <div className="mt-4 grid grid-cols-2 gap-2">
          <a href="" className="text-[#B7CCBD] hover:text-white transition-colors" aria-label="Mail">
            <img src="/mail-svg.svg" alt="mail" className="w-8 h-8" />
          </a>
          <a href="" className="text-[#B7CCBD] hover:text-white transition-colors" aria-label="Phone">
            <img src="/phone-svg.svg" alt="phone" className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Услуга 3  ДОСТАВКА НЕГАБАРИТНЫХ ГРУЗОВ. МУЛЬТИМОДАЛЬНАЯ ДОСТАВКА*/}
      <div id='негабаритные-грузы-/-мультимодальные-доставки' className="bg-white dark:bg-black text-text2 w-full min-h-[100svh] relative flex flex-col items-center justify-center text-center p-6 dark:text-text2Dark">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">ДОСТАВКА НЕГАБАРИТНЫХ ГРУЗОВ</h1>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">МУЛЬТИМОДАЛЬНАЯ ДОСТАВКА</h1>
        <br /><h2 className="text-lg md:text-3xl lg:text-4xl font-semibold mt-2  ">РАЗМЕР ИМЕЕТ ЗНАЧЕНИЕ!</h2>

        <h3 className="text-base md:text-lg lg:text-xl font-semibold my-6">Мы предлагаем Вам:</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:scale-[1] scale-[0.4] gap-3 min-w-max h-[calc(0.4*100svh)] sm:h-auto -mt-16 sm:mt-0">

          <div onMouseEnter={() => setHoverBlock3(0)}>
            <div onMouseEnter={() => setHoveredShipBlock3(true)} onMouseLeave={() => setHoveredShipBlock3(false)}>
              <div className="relative w-64 h-64 bg-blue-100 overflow-hidden rounded-lg">
                {/* Корабль */}
                <img
                  src="/shipBlock3.svg"
                  alt="ship"
                  className="absolute bottom-0 left-0 w-40"
                />
                {/* Посылка */}
                <img
                  src="/packageBlock3ForHelicopter.svg"
                  alt="package"
                  className={`absolute w-8 left-[70px] bottom-[90px] transition-all
          ${hoveredShipBlock3 ? 'animate-packageLift' : ''}`}
                />
                {/* Вертолёт */}
                <img
                  src="/helicopterBlock3.svg"
                  alt="helicopter"
                  className={`absolute w-24 top-[-20px] right-[-10px] 
          ${hoveredShipBlock3 ? 'animate-helicopterFly' : ''}`}
                />
              </div>
            </div>
          </div>

          <div onMouseEnter={() => setHoverBlock3(1)}>
            <div onMouseEnter={() => setHoveredBigPackageBlock3(true)} onMouseLeave={() => setHoveredBigPackageBlock3(false)}>
              <div className="relative w-64 h-64 bg-blue-100 overflow-hidden rounded-lg">
                <img
                  src="/packageBlock3.svg"
                  alt="package"
                  className={`absolute w-40% left-[76px] bottom-[72px] transition-all 
          ${hoveredBigPackageBlock3 ? 'animate-packageScale' : ''}`}
                />
              </div>
            </div>
          </div>

          <div onMouseEnter={() => setHoverBlock3(2)}>
            <div onMouseEnter={() => setHoveredPackageInHardhatBlock3(true)} onMouseLeave={() => setHoveredPackageInHardhatBlock3(false)}>
              <div className="relative w-64 h-64 bg-blue-100 overflow-hidden rounded-lg">
                <img
                  src="/hardHatBlock3.svg"
                  alt="hard-hat"
                  className={`absolute w-40% left-[90px] bottom-[120px] transition-all rotate-12
          ${hoveredPackageInHardhatBlock3 ? 'animate-packageInHardhat' : ''}`}
                />
                <img
                  src="/packageBlock3.svg"
                  alt="package"
                  className={`absolute w-40% left-[76px] bottom-[72px] scale-[1.2]`}
                />
              </div>
            </div>
          </div>

          <div onMouseEnter={() => setHoverBlock3(3)}>
            <div onMouseEnter={() => setHoveredMagnifierBlock3(true)} onMouseLeave={() => setHoveredMagnifierBlock3(false)}>
              <div className="relative w-64 h-64 bg-blue-100 overflow-hidden rounded-lg">
                <img
                  src="/magnifier.svg"
                  alt="magnifier"
                  className={`absolute w-40% left-[120px] bottom-[72px] transition-all
          ${hoveredMagnifierBlock3 ? 'animate-magnifier ' : ''}`}
                />
                <img
                  src="/packageBlock3.svg"
                  alt="package"
                  className={`absolute w-40% left-[76px] bottom-[72px] scale-[1.2]`}
                />
              </div>
            </div>
          </div>
        </div>


        <div className={`mt-4 text-left max-w-3xl min-h-[calc(0.3*100svh)] space-y-4 list-disc list-inside text-xs md:text-base lg:text-lg transition-all duration-500 transform ease-in-out ${hoverBlock3 !== null ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
          {hoverBlock3 !== null && (
            <div>
              {itemsBlock3[hoverBlock3].title}
              {itemsBlock3[hoverBlock3].content}
            </div>
          )}
        </div>

        {/* <p className="pt-6 max-w-2xl bottom-0 border-t-2 text-xs md:text-base lg:text-lg">
          В мире современной логистики каждый сантиметр имеет значение, особенно когда речь идет о перевозке негабаритных и мультимодальных грузов. Мы стремимся к эффективности и надежности в любых условиях, преодолевая все возможные сложности пути: от мостов и паромных переправ до горных серпантинов и зимников.
        </p> */}
      </div>

      {/* Нам доверяют */}
      <div id='нам-доверяют' className="w-full min-h-[100svh] flex flex-col items-center justify-center text-center p-6 text-text1 dark:text-text1Dark ">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">НАМ ДОВЕРЯЮТ</h1>

        <p className="mt-4 text-base md:text-lg lg:text-xl max-w-3xl">
          Нам доверяют крупнейшие компании из сфер нефтегазовой промышленности, металлургии, химического производства, электротехники и товаров народного потребления.
        </p>

        {/* Лого клиентов */}
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
      </div>

      {/* Задать вопросы */}
      <div id='задать-вопрос/контакты' className="w-full min-h-[100svh] bg-white dark:bg-black text-text2 flex flex-col items-center justify-center text-center p-6 dark:text-text2Dark">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">ЗАДАТЬ ВОПРОС / КОНТАКТЫ</h1>

        <p className="mt-4 text-base md:text-lg lg:text-xl">Подберём транспорт под ваши потребности.</p>
        <p className="text-base md:text-lg lg:text-xl">Предупредим о возможных нюансах.</p>
        <p className="text-base md:text-lg lg:text-xl">Избавим от сомнений.</p>

        {/* Кнопка «Задать вопрос» */}
        <button className="mt-6 px-6 py-3 bg-[#023047] text-white text-base md:text-lg lg:text-xl font-semibold rounded-2xl shadow-md hover:bg-[#035a78] transition">
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

      {/*ЗАКАЗЧИКАМ И ПЕРЕВОЗЧИКАМ*/}
      <div id='заказчикам-и-перевозчикам' className="w-full min-h-[100svh]  text-text1 flex flex-col items-center justify-center text-center p-6 dark:text-text2Dark">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">ЗАКАЗЧИКАМ И ПЕРЕВОЗЧИКАМ</h1>
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mt-2  ">Преимущества работы с нами:</h2>
        <div className="flex flex-col space-y-6 md:space-y-12 lg:space-y-16 mt-10">
          {circleData.map((item, index) => (
          <CircleMotion
            key={index}
            keyNumber={index}
            title={item.title}
            text={item.text}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
        </div>
      </div>

    </main >
  );
}

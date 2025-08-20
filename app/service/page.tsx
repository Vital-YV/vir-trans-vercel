"use client"
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

export default function Service() {

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
      color: 'bg-[#fb7000]',
      subColor: 'bg-[#ff8c2f]'
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
      color: 'bg-[#fb7000]',
      subColor: 'bg-[#ff8c2f]'
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
      color: 'bg-[#fb7000]',
      subColor: 'bg-[#ff8c2f]'
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
      color: 'bg-[#fb7000]',
      subColor: 'bg-[#ff8c2f]'
    },


  ];

  const itemsMobile = [
    {
      title: 'Профессиональный подход',
      content:
        <p className='max-w-3xl mt-2'>
          Мы специализируемся на перевозке различных текучих веществ, будь то химические продукты или пищевые ингредиенты. Наши специалисты обладают высокой квалификацией и опытом, гарантируя безопасную доставку вашего груза.
        </p>,
      color: 'bg-[#fb7000]',
      subColor: 'bg-[#ff8c2f]'
    },
    {
      title: 'Специализированное оборудование',
      content:
        <p className="max-w-3xl mt-2">
          Для перевозки наливных грузов мы используем специальные автоцистерны. Все емкости проходят строгий санитарный контроль и регулярную проверку на техническое состояние, обеспечивая высокий уровень безопасности и качества доставки.
        </p>,
      color: 'bg-[#fb7000]',
      subColor: 'bg-[#ff8c2f]'
    },
    {
      title: 'Соблюдение стандартов',
      content:
        <p className="max-w-3xl mt-2">
          Мы строго следуем санитарно-эпидемиологическим нормам и стандартам безопасности при перевозке грузов. Перед каждой загрузкой емкости проходят тщательную очистку и обработку, а наши водители проходят профессиональную подготовку.
        </p>,
      color: 'bg-[#fb7000]',
      subColor: 'bg-[#ff8c2f]'
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
      color: 'bg-[#fb7000]',
      subColor: 'bg-[#ff8c2f]'
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
    <main className="overflow-x-clip pt-20" >
      {/* Услуга 1 ДОСТАВКА «ТОЧКА – ТОЧКА»*/}
      <div id="обычные-грузы" className="relative w-full md:pt-0 min-h-[100svh]  text-text1 flex flex-col items-center justify-center text-center p-6 dark:text-text1Dark">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  mt-10">ДОСТАВКА «ТОЧКА – ТОЧКА»</h1>
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
      <div id='наливные-и-опасные-грузы' className="relative bg-white dark:bg-black w-full flex flex-col items-center justify-center text-center p-6 min-h-[100svh] text-text2 dark:text-text2Dark ">
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
            <div className="h-[calc(0.3*100svh)]"/>
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
      <div id='мультимодальные-доставки' className=" text-text1 w-full min-h-[100svh] relative flex flex-col items-center justify-center text-center p-6 dark:text-text1Dark">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">МУЛЬТИМОДАЛЬНАЯ ДОСТАВКА</h1>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  ">доставка негабаритных грузов</h1>
        <br /><h2 className="text-lg md:text-3xl lg:text-4xl font-semibold mt-2  ">РАЗМЕР ИМЕЕТ ЗНАЧЕНИЕ!</h2>

        <h3 className="text-base md:text-lg lg:text-xl font-semibold my-6">Мы предлагаем Вам:</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:scale-[1] scale-[0.4] gap-3 min-w-max h-[calc(0.4*100svh)] sm:h-auto -mt-16 sm:mt-0">

          <div onMouseEnter={() => setHoverBlock3(0)}>
            <div onMouseEnter={() => setHoveredShipBlock3(true)} onMouseLeave={() => setHoveredShipBlock3(false)}>
              <div className="relative w-64 h-64 dark:bg-blue-100 bg-white overflow-hidden rounded-lg">
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
              <div className="relative w-64 h-64 dark:bg-blue-100 bg-white overflow-hidden rounded-lg">
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
              <div className="relative w-64 h-64 dark:bg-blue-100 bg-white overflow-hidden rounded-lg">
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
              <div className="relative w-64 h-64 dark:bg-blue-100 bg-white overflow-hidden rounded-lg">
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


        <div className={`mt-20 text-left max-w-3xl min-h-[calc(0.3*100svh)] space-y-4 list-disc list-inside text-xs md:text-base lg:text-lg transition-all duration-500 transform ease-in-out ${hoverBlock3 !== null ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
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

    </main >
  );
}

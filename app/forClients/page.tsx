"use client"
import { useState, useEffect, useRef } from "react";
import QuestionRain from '../QuestionRain';


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
          rounded-full dark:bg-[#3b457c] bg-main transition-transform duration-300 z-10 
          ${isActive ? '-translate-x-32 md:-translate-x-52' : ''}
        `}
      >
        <img
          src={image}
          alt={image}
          className="scale-75"
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
          bg-gradient-to-r dark:from-[#3b457c] from-main from-80% to-95% z-0 
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
      <img
        src="flag.svg"
        alt="flag"
        className={`
          ${size} rounded-full bg-[#FFB703] transform transition-transform duration-300 ease-out
          ${isActive ? "scale-125 -rotate-12 translate-x-0 z-20" : "scale-100 rotate-0 translate-x-2 z-0"}
        `}
        onMouseEnter={() => {
          setActiveIndexFlags(keyNumber);
        }}
      />
      <div
        className={`
    z-10 
    italic 
    rounded-l-full ${sizeText}
    bg-gradient-to-r from-[#FFB703] from-80% to-95% 
    text-sm text-black font-bold
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


export default function ForClients() {
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

  return (
    <main className="overflow-x-clip" >

      <div className="w-full min-h-[100svh] flex flex-col items-center justify-center text-center bg-white dark:bg-black">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold z-10 text-center">ЗАКАЗЧИКАМ И ПЕРЕВОЗЧИКАМ</h1>
      </div>

      {/* Преимущества работы с нами */}
      <div id='преимущества-работы-с-нами' className="w-full min-h-[100svh]  text-text1 flex flex-col items-center justify-center text-center p-6 dark:text-text2Dark">
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mt-2  ">Преимущества работы с нами</h2>
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

      {/* Вопросы - ответы */}
      <div id='вопросы---ответы' className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center px-6 py-12 ">
        <QuestionRain />
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mt-2 z-10">Вопросы – ответы</h2>
        <div className="flex flex-wrap justify-center max-w-5xl">
          {qaPairs.map(({ question, answer }, index) => (
            <SpiralCard key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>

      {/* География перевозок */}
      <div id='география-перевозок' className="relative min-h-screen text-black dark:text-white overflow-hidden flex flex-col items-center justify-center px-6 py-12">
        <h2 className="text-2xl md:text-5xl lg:text-7xl font-semibold mt-20 z-10 drop-shadow-md drop-shadow-black">География перевозок</h2>
        <div className="relative w-full max-w-6xl mx-auto aspect-[3/2]">
          <img
            src="map.png"
            alt="map"
            className="absolute top-0 left-7 w-full h-full object-contain scale-[2.2]"
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



    </main >
  );
}

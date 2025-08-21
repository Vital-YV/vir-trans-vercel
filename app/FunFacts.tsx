'use client'
import { useEffect, useState } from 'react';

const stories = [
  {
    id: 1,
    title: "Самолёты на дороге",
    content: "В 2012 году в Германии была выполнена одна из самых сложных перевозок - транспортировка Airbus A380, самого крупного пассажирского самолета в мире, по дорогам к заводу Airbus. Это потребовало специального сопровождения и временного демонтажа дорожной инфраструктуры.",
    emoji: "✈️"
  },
  {
    id: 2,
    title: "Колоссальные ветрогенераторы",
    content: "Для перевозки крупных ветрогенераторов используются специализированные транспортные средства, способные перевозить лопасти высотой до 100 метров и более. Каждая такая перевозка требует тщательного планирования маршрута.",
    emoji: "🌪️"
  },
  {
    id: 3,
    title: "Гигантский камень",
    content: "В 2012 году в Лос-Анджелесе негабаритный груз в виде огромного камня для музея застрял на узкой улице из-за недооценки размеров, вызвав серьезные пробки и потребовав специальных мер по эвакуации.",
    emoji: "🪨"
  },
  {
    id: 4,
    title: "Лопасть на дороге",
    content: "В России во время транспортировки ветрогенератора лопасть оторвалась от транспорта и оказалась на проезжей части, создав аварийную ситуацию и привлек внимание очевидцев.",
    emoji: "🌀"
  },
  {
    id: 5,
    title: "Неожиданный пассажир",
    content: "В Германии при перевозке катамарана кот забрался под трейлер, вызвав задержки и потребовав специальной операции по спасению животного.",
    emoji: "🐱"
  },
  {
    id: 6,
    title: "Путаница в маршруте",
    content: "В Японии навигационная система автопоезда ошиблась, и негабаритный груз заблокировал туннель, что привело к неожиданным задержкам.",
    emoji: "🗾"
  },
  {
    id: 7,
    title: "Карнавальный побег",
    content: "При перевозке карнавальных кукол одна выпала на дорогу из-за ненадежного крепления, устроив неожиданное представление для водителей.",
    emoji: "🎪"
  },
  {
    id: 8,
    title: "Кит на грузовике",
    content: "В ЮАР 80-тонного кита перевозили на спецтехнике после его гибели. Это потребовало использования оборудования для сверхтяжелых грузов.",
    emoji: "🐋"
  },
  {
    id: 9,
    title: "Рекордный поезд",
    content: "В 2001 году в Южной Африке перевезен самый длинный грузовой поезд - 682 вагона с углём длиной более 7 километров.",
    emoji: "🚂"
  },
  {
    id: 10,
    title: "Автономные тяжеловозы",
    content: "Автономные транспортные средства нового поколения смогут перевозить негабаритные грузы по сложным маршрутам без водителя, используя ИИ для точного маневрирования с крупногабаритными конструкциями.",
    emoji: "🤖"
  },
  {
    id: 11,
    title: "Материалы будущего",
    content: "Нано-композитные материалы и 3D-печать позволяют создавать сверхлёгкие и прочные крепления для негабаритных грузов, снижая нагрузку на транспорт и расход топлива до 30%.",
    emoji: "🔬"
  },
  {
    id: 12,
    title: "Дроны-тяжеловесы",
    content: "Гибридные грузовые дроны с грузоподъёмностью до 5 тонн уже тестируются для доставки оборудования в труднодоступные районы, где невозможно использовать обычный транспорт.",
    emoji: "🚁"
  },
  {
    id: 13,
    title: "ИИ в логистике",
    content: "Системы искусственного интеллекта анализируют тысячи маршрутов в реальном времени, предсказывая погодные риски и дорожную обстановку для негабаритных перевозок с точностью 97%.",
    emoji: "🧠"
  },
  {
    id: 14,
    title: "Тралы нового поколения",
    content: "Самозагружающиеся платформы с адаптивным клиренсом и поворотными осями позволяют перевозить грузы до 500 тонн без сопровождения, сокращая сроки доставки в 2 раза.",
    emoji: "🚛"
  }
];

export default function CornerFacts() {
  const [activeStory, setActiveStory] = useState<typeof stories[0] | null>(null);
  const [animationState, setAnimationState] = useState<'entering' | 'visible' | 'exiting'>('entering');

  useEffect(() => {
    let animationTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    const showStory = () => {
      const randomStory = stories[Math.floor(Math.random() * stories.length)];
      setActiveStory(randomStory);
      setAnimationState('entering');

      animationTimeout = setTimeout(() => {
        setAnimationState('visible');

        hideTimeout = setTimeout(() => {
          setAnimationState('exiting');

          setTimeout(() => {
            setActiveStory(null);
          }, 1000);
        }, 20000);
      }, 500);
    };

    const firstTimer = setTimeout(showStory, 5000);
    interval = setInterval(showStory, Math.floor(Math.random() * 30000) + 45000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(animationTimeout);
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!activeStory) return null;

  return (
    <div className={`
      fixed bottom-6 right-6 z-[9999] w-96
      transition-all duration-500
      ${animationState === 'entering'
        ? 'translate-x-full'
        : animationState === 'visible'
          ? 'translate-x-0'
          : 'translate-y-full opacity-0'
      }
    `}>
      {/* Блок с локальным размытием фона */}
      <div className={`
        bg-white/5 dark:bg-black/20 
        backdrop-blur-lg
        border-l-4 border-[#F97316]
        shadow-2xl
        pl-8 pr-6 py-5
        rounded-tr-lg
      `}>
        <div className="flex items-center mb-3">
          <span className="text-3xl mr-4 text-[#F97316]">{activeStory.emoji}</span>
          <h3 className="text-black dark:text-white text-xl font-garamond">{activeStory.title}</h3>
        </div>

        <div className="max-h-52 overflow-y-auto pr-3 custom-scrollbar">
          <p className="text-black/90 dark:text-white text-base leading-relaxed">
            {activeStory.content}
          </p>
        </div>

        <div className="mt-4 h-1 bg-gray-600 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 right-0 bg-[#F97316]"
            style={{
              animation: 'progress 20s linear forwards',
              animationPlayState: animationState === 'exiting' ? 'paused' : 'running'
            }}
          />
        </div>
      </div>
    </div>
  );
}
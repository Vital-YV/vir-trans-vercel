"use client"
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Vacancy() {
    const [expandedSections, setExpandedSections] = useState({
        aboutCompany: false,
        offer: false,
        responsibilities: false,
        candidate: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <main className="overflow-x-clip pt-20">
            <div id="вакансии" className="relative w-full min-h-[100svh] text-text1 flex flex-col items-center px-6 py-12 dark:text-text1Dark">
                <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center ">ВАКАНСИИ</h1>

                    <div className="mb-10 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <p className="mb-3 text-lg">По вопросам вакансий пишите на почту: <a href="mailto:v-t@vir-trans.ru" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">v-t@vir-trans.ru</a></p>
                        <p className="text-lg">Телефон для связи: <a href="tel:+78004440097" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">+7(800)444-00-97</a>, доб. 704</p>
                    </div>

                    <div className="mb-10">
                        <div
                            onClick={() => toggleSection('aboutCompany')}
                            className="flex items-center justify-between cursor-pointer group"
                        >
                            <h2 className="flex-1 text-center text-2xl md:text-3xl font-semibold text-[#FB8500] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                Присоединяйся к успешной команде ВИР-Транс!
                            </h2>

                            {expandedSections.aboutCompany ?
                                <FiChevronUp className="text-blue-600 dark:text-blue-400 text-2xl" /> :
                                <FiChevronDown className="text-gray-500 dark:text-gray-400 text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                            }
                        </div>
                        {expandedSections.aboutCompany && (
                            <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
                                <p>Наша компания предоставляет транспортно-экспедиционные услуги по России, СНГ и Европе, используя все виды транспорта. Начав работу в 2008 году с небольшой командой единомышленников в Самарском офисе, сегодня мы активно развиваем филиальную сеть по всей России и занимаем лидирующие позиции в отрасли. Ежедневно мы перевозим разнообразные грузы, неизменно обеспечивая высокое качество и безопасность на каждом этапе.</p>
                                <p>Нам доверяют крупнейшие компании из сфер нефтегазовой промышленности, металлургии, химического производства, электротехники и товаров народного потребления.</p>
                                <p className="font-medium">Наши основные цели:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Обеспечивать устойчивый рост доходов как сотрудников, так и компании в целом.</li>
                                    <li>Быть примером для отрасли, демонстрируя эффективную и взаимовыгодную работу со всеми контрагентами.</li>
                                    <li>Делать рабочий процесс не только продуктивным, но и увлекательным, способствующим развитию новых компетенций у всех сотрудников.</li>
                                </ul>
                                <p>Наша команда — это сплочённый коллектив талантливых и целеустремлённых профессионалов, наши сотрудники — ключ к нашим успехам!</p>
                            </div>
                        )}
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white">В связи с развитием филиальной сети приглашаем на работу во всех городах РФ:</h2>
                        <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                            <li className="pl-2">Логистов</li>
                            <li className="pl-2">Менеджеров по продажам</li>
                            <li className="pl-2">Менеджеров по маркетингу</li>
                            <li className="pl-2">Бизнес медиаторов</li>
                            <li className="pl-2">Региональных представителей</li>
                            <li className="pl-2">Специалистов со «своими клиентами» <span className="text-blue-600 dark:text-blue-400">(особые условия для сотрудничества!)</span></li>
                        </ol>
                    </div>

                    <div className="mb-10">
                        <p className="mb-6 text-gray-700 dark:text-gray-300">Коротко о предстоящих задачах: налаживать деловые связи, организовывать и контролировать грузоперевозки <span className="font-medium">ПРИВЛЕЧЁННЫМ</span> транспортом.</p>

                        <div
                            onClick={() => toggleSection('offer')}
                            className="flex items-center justify-between cursor-pointer group mb-2"
                        >
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                Мы Вам предлагаем:
                            </h2>
                            {expandedSections.offer ?
                                <FiChevronUp className="text-blue-600 dark:text-blue-400 text-2xl" /> :
                                <FiChevronDown className="text-gray-500 dark:text-gray-400 text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                            }
                        </div>
                        {expandedSections.offer && (
                            <ul className="mt-4 list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                                <li className="pl-2">Оформление согласно ТК РФ, заработная плата - своевременно 2 раза в месяц на карту банка;</li>
                                <li className="pl-2">Система мотивации: окладная часть + % от выполнения ежемесячного плана, "потолка" в заработке нет.</li>
                                <li className="pl-2">Пятидневная рабочая неделя (пн.-пт.), с 10:00 до 17:00;</li>
                                <li className="pl-2">Работа в комфортном офисе на оборудованном рабочем месте;</li>
                                <li className="pl-2">Работа на дому с перспективой открытия офиса в вашей локации;</li>
                                <li className="pl-2">Командировки в соответствии с бизнес планами, но только по желанию;</li>
                                <li className="pl-2">Корпоративный смартфон, ноутбук;</li>
                                <li className="pl-2">Стажировка и опытный наставник в течение испытательного срока;</li>
                                <li className="pl-2">Подарки на день рождения и новогодние праздники;</li>
                                <li className="pl-2">Регулярные поощрения за значимые достижения;</li>
                                <li className="pl-2">Перспективы карьерного роста.</li>
                            </ul>
                        )}
                    </div>

                    <div className="mb-10">
                        <div
                            onClick={() => toggleSection('responsibilities')}
                            className="flex items-center justify-between cursor-pointer group mb-2"
                        >
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                Описание некоторых обязанностей:
                            </h2>
                            {expandedSections.responsibilities ?
                                <FiChevronUp className="text-blue-600 dark:text-blue-400 text-2xl" /> :
                                <FiChevronDown className="text-gray-500 dark:text-gray-400 text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                            }
                        </div>
                        {expandedSections.responsibilities && (
                            <ul className="mt-4 list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                                <li className="pl-2">Работа с заказчиками услуг грузовых перевозок,</li>
                                <li className="pl-2">Активный поиск новых заказчиков на перевозки;</li>
                                <li className="pl-2">Согласование условий перевозок;</li>
                                <li className="pl-2">Мониторинг и определение тарифов перевозок;</li>
                                <li className="pl-2">Подбор необходимого ТС исходя из характера груза;</li>
                                <li className="pl-2">Развитие и поддержание активной базы привлеченных перевозчиков, мониторинг работы перевозчиков, выстраивание долгосрочных отношений, работа на ATI.SU;</li>
                                <li className="pl-2">Курирование процесса перевозки на каждом этапе;</li>
                                <li className="pl-2">Выполнение плановых установок;</li>
                                <li className="pl-2">Контроль своевременной оплаты по выполненным заказам;</li>
                                <li className="pl-2">Урегулирование нестандартных, конфликтных ситуаций.</li>
                            </ul>
                        )}
                    </div>

                    <div className="mb-10">
                        <div
                            onClick={() => toggleSection('candidate')}
                            className="flex items-center justify-between cursor-pointer group mb-2"
                        >
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                Ждём от кандидата:
                            </h2>
                            {expandedSections.candidate ?
                                <FiChevronUp className="text-blue-600 dark:text-blue-400 text-2xl" /> :
                                <FiChevronDown className="text-gray-500 dark:text-gray-400 text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                            }
                        </div>
                        {expandedSections.candidate && (
                            <ul className="mt-4 list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                                <li className="pl-2">Активность;</li>
                                <li className="pl-2">Хорошо поставленную, грамотную речь;</li>
                                <li className="pl-2">Рассудительность;</li>
                                <li className="pl-2">Общительность и клиентоориентированность;</li>
                                <li className="pl-2">Понимание и принятие процесса «холодных» контактов;</li>
                                <li className="pl-2">Самоорганизацию;</li>
                                <li className="pl-2">Умение расставлять приоритеты;</li>
                                <li className="pl-2">Высокую личную мотивацию.</li>
                            </ul>
                        )}
                    </div>

                    <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="mb-4 text-lg text-center text-gray-800 dark:text-white">Присылайте резюме на <a href="mailto:v-t@vir-trans.ru" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">v-t@vir-trans.ru</a></p>
                        <p className="text-center text-gray-700 dark:text-gray-300">Не стесняйтесь в резюме или просто отдельным письмом излагать самые смелые вопросы и идеи, всё это только будет способствовать установлению взаимопонимания.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
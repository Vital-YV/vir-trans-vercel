'use client'
import { useState } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';

export function DeliveryRequestForm({ variant = 'floating' }: { variant?: 'floating' | 'inline' }) {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    isLegalEntity: 'нет',
    route: '',
    loadingDate: '',
    unloadingDate: '',
    cargoDescription: '',
    dimensions: '',
    weight: '',
    specialConditions: '',
    contact: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/delivery-request', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Успех:', response.data);
      setIsSubmitted(true);

      setTimeout(() => {
        closeModal();
      }, 3000);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          'Ошибка запроса:',
          error.response?.data || error.message
        );
      } else {
        console.error('Неизвестная ошибка:', error);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormData({
      isLegalEntity: 'нет',
      route: '',
      loadingDate: '',
      unloadingDate: '',
      cargoDescription: '',
      dimensions: '',
      weight: '',
      specialConditions: '',
      contact: ''
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (variant === 'inline') {
    if (isSubmitted) {
      return <p className="border-l-2 border-brand-accent py-3 pl-4 text-base leading-relaxed text-brand-primary">Ваша заявка принята. Скоро с Вами свяжутся.</p>;
    }

    return (
      <form onSubmit={handleSubmit} className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
        <label className="flex min-h-14 items-center border-b border-brand-primary/45 py-2 transition-colors focus-within:border-brand-primary sm:block sm:min-h-0 sm:border-[var(--color-form-border)] sm:py-3">
          <span className="sr-only">Маршрут</span>
          <input name="route" value={formData.route} onChange={handleChange} required placeholder="Откуда → куда" className="w-full bg-transparent text-base text-brand-primary outline-none placeholder:text-brand-primary/80 md:placeholder:text-[var(--color-text-secondary-content)]" />
        </label>
        <label className="flex min-h-14 items-center border-b border-brand-primary/45 py-2 transition-colors focus-within:border-brand-primary sm:block sm:min-h-0 sm:border-[var(--color-form-border)] sm:py-3">
          <span className="sr-only">Груз</span>
          <input name="cargoDescription" value={formData.cargoDescription} onChange={handleChange} required placeholder="Что нужно перевезти" className="w-full bg-transparent text-base text-brand-primary outline-none placeholder:text-brand-primary/80 md:placeholder:text-[var(--color-text-secondary-content)]" />
        </label>
        <label className="flex min-h-14 items-center border-b border-brand-primary/45 py-2 transition-colors focus-within:border-brand-primary sm:block sm:min-h-0 sm:border-[var(--color-form-border)] sm:py-3">
          <span className="sr-only">Дата или период</span>
          <input name="loadingDate" value={formData.loadingDate} onChange={handleChange} required placeholder="Когда планируется перевозка" className="w-full bg-transparent text-base text-brand-primary outline-none placeholder:text-brand-primary/80 md:placeholder:text-[var(--color-text-secondary-content)]" />
        </label>
        <label className="flex min-h-14 items-center border-b border-brand-primary/45 py-2 transition-colors focus-within:border-brand-primary sm:block sm:min-h-0 sm:border-[var(--color-form-border)] sm:py-3">
          <span className="sr-only">Контакт</span>
          <input name="contact" value={formData.contact} onChange={handleChange} required placeholder="Телефон, Telegram или e-mail" className="w-full bg-transparent text-base text-brand-primary outline-none placeholder:text-brand-primary/80 md:placeholder:text-[var(--color-text-secondary-content)]" />
        </label>
        <div className="pt-7 sm:col-span-2">
          <button type="submit" className="inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] bg-brand-accent px-8 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:text-lg">
            Обсудить перевозку
          </button>
        </div>
      </form>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`
    ${pathname === '/' ? 'hidden' : ''}
    bg-gradient-to-r from-[#219EBC] to-[#3b82f6] 
    hover:from-[#1b7a91] hover:to-[#2563eb]
    text-white font-semibold 
    md:px-6 md:py-3 py-3 px-5
    rounded-full 
    shadow-xl 
    transition 
    duration-300 
    ease-in-out 
    transform 
    hover:-translate-y-1 
    hover:scale-105
    flex items-center justify-center
  `}
      >
        {/* Для мобильных устройств */}
        <span className="block md:hidden text-xl font-bold">?</span>

        {/* Для планшетов и десктопов */}
        <span className="hidden md:block">Задать вопрос</span>
      </button>




      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto text-main"
          onClick={handleBackdropClick}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-md mx-auto my-8 max-h-[60%] md:max-h-[70%] overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {!isSubmitted ? (
              <>
                <h2 className="text-xl font-bold mb-4">Запрос стоимости доставки</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-2">Юридическое лицо</label>
                    <select
                      name="isLegalEntity"
                      value={formData.isLegalEntity}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="нет">Нет</option>
                      <option value="да">Да</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2">Маршрут доставки</label>
                    <input
                      type="text"
                      name="route"
                      value={formData.route}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Дата загрузки</label>
                      <input
                        type="date"
                        name="loadingDate"
                        value={formData.loadingDate}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Дата выгрузки</label>
                      <input
                        type="date"
                        name="unloadingDate"
                        value={formData.unloadingDate}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Описание груза</label>
                    <textarea
                      name="cargoDescription"
                      value={formData.cargoDescription}
                      onChange={handleChange}
                      className="w-full p-2 border rounded min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Габариты груза</label>
                      <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Вес груза (кг)</label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Особые условия</label>
                    <textarea
                      name="specialConditions"
                      value={formData.specialConditions}
                      onChange={handleChange}
                      className="w-full p-2 border rounded min-h-[100px]"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 border rounded hover:bg-gray-100"
                    >
                      Отмена
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#219EBC] text-white rounded hover:bg-[#3b457c]"
                    >
                      Отправить запрос
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-bold mb-4">Ваша заявка принята в работу</h3>
                <p>Скоро с Вами свяжутся</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

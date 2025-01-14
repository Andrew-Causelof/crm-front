import { create } from 'zustand';

const useTabStore = create((set) => ({
  activeTab: 'about', // Текущий активный таб (по умолчанию 'about')
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

const useGenderStore = create((set) => ({
  selectedGender: '', // Начальное значение
  setGender: (gender) => set({ selectedGender: gender }), // Установить выбранный пол
  initializeGender: (gender) => set({ selectedGender: gender || '' }), // Инициализация пола
}));

const useUserStore = create((set) => ({
  userData: {
    firstName: '',
    lastName: 'Летов',
    middleName: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    phone: '',
    email: '',
    policyNumber: '',
    passportData: '',
    registrationAddress: '',
  }, // Начальное состояние

  setUserData: (field, value) =>
    set((state) => ({
      userData: {
        ...state.userData,
        [field]: value, // Обновляем только одно поле
      },
    })),

  loadUserData: async () => {
    // try {
    //   const response = await fetch('/api/user'); // Замените на ваш API
    //   const data = await response.json();
    //   set({ userData: data });
    // } catch (error) {
    //   console.error('Ошибка загрузки данных:', error);
    // }
  },

  saveUserData: async () => {
    try {
      const { userData } = useUserStore.getState();
      await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log('Данные сохранены успешно');
    } catch (error) {
      console.error('Ошибка сохранения данных:', error);
    }
  },
}));

export { useTabStore, useUserStore, useGenderStore };

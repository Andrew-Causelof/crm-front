import { create } from "zustand";
import axios from "axios";

import userData from "./data/userData.json"; // Импортируем данные
import descriptions from "./data/descriptions.json"; // Импортируем описания

const useTabStore = create((set) => ({
  activeTab: "about", // Текущий активный таб (по умолчанию 'about')
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

const useUserStore = create((set) => ({
  userData: userData, // Используем данные из файла - Начальное состояние

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
      await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log("Данные сохранены успешно");
    } catch (error) {
      console.error("Ошибка сохранения данных:", error);
    }
  },
}));

const useDescriptionStore = create((set) => ({
  descriptions: [
    {
      tag: "polisTag",
      content:
        "Чтобы ввести 16-значный номер полиса ОМС, нужно указать цифры с лицевой стороны полиса в поле «Полис ОМС». Для полисов старого образца, которые получены до 2011 года, нужно вводить серию и номер без пробелов.",
    },
    {
      tag: "polisRegionTag",
      content: "Регион полиса страхового полиса СНИЛС",
    },
    {
      tag: "snilsTag",
      content:
        "СНИЛС — это личный страховой номер из 11 цифр, который присваивают каждому человеку один раз и на всю жизнь. Он также совпадает с номером счёта, на котором содержится вся информация о стаже работника и пенсионных отчислениях работодателей.",
    },
    {
      tag: "passportTag",
      content:
        "Серия паспорта состоит из четырёх чисел. Номер паспорта состоит из шести цифр.",
    },
    {
      tag: "passportFromTag",
      content:
        "Узнать, кем выдан паспорт, можно на первой странице документа. На развороте с фотографией в первой строчке указано, кем выдан паспорт, а также указаны отделение, город и область.",
    },
    {
      tag: "cityTag",
      content:
        "Узнать город регистрации по паспортным данным можно на странице паспорта, где проставляется штамп постоянной регистрации (начиная с пятой страницы документа).",
    },
    {
      tag: "addressTag",
      content:
        " Обычно сведения о постоянной прописке указываются на 5-й странице паспорта. В этой графе указана дата регистрации, адрес места жительства и орган, который произвёл регистрацию. Если у человека было несколько мест регистрации, то информация о них будет указана на последующих страницах паспорта.",
    },
    {
      tag: "commentTag",
      content: "Опишите, пожалуйста, основное, что вас беспокоит",
    },
    {
      tag: "chronicDiseasesTag",
      content:
        "При ответе на вопрос о хронических заболеваниях в анкете стоит перечислить все известные вам хронические состояния. Если доктору будут важны детали, он задаст дополнительные вопросы.",
    },
    {
      tag: "medicationsTag",
      content:
        "При заполнении анкеты о жалобах на здоровье важно сообщить о приёме любых ранее выписанных медикаментов. Об этом нужно рассказать врачу, чтобы специалист мог учесть сочетаемость препаратов между собой.",
    },
    {
      tag: "surgeriesTag",
      content:
        "При заполнении анкеты о жалобах на здоровье важно сообщить о ранее перенесённых операциях. Если они были, нужно перечислить все операции и год их выполнения.",
    },
    {
      tag: "alergyTag",
      content:
        "При заполнении анкеты о жалобах на здоровье нужно указать, есть ли у вас аллергия или лекарственная непереносимость. Если да, следует описать характер реакции и указать, на какие лекарственные средства она возникает.",
    },
    {
      tag: "infectionTag",
      content:
        "При заполнении анкеты о жалобах на здоровье нужно указать, были ли или есть ли у вас инфекционные заболевания.",
    },
    {
      tag: "inheritanceDiseases",
      content:
        "При заполнении анкеты о жалобах на здоровье нужно указать, есть ли у вас наследственные заболевания.",
    },
    {
      tag: "badHabbitsTag",
      content: "Опишите ваши вредные привычки если они есть",
    },
    {
      tag: "pregnantTag",
      content: "Беременны в настоящий момент?",
    },
    {
      tag: "sickLeaveTag",
      content: "Нужен ли больничный лист?",
    },
  ],
  setDescriptions: (data) => set({ descriptions: data }), // Устанавливаем данные
  getDescriptionByTag: (tag) => {
    return (state) => state.descriptions.find((desc) => desc.tag === tag);
  },
}));

const useDocumentStore = create((set) => ({
  documents: {},
  addDocument: (fieldName, file) =>
    set((state) => ({
      documents: {
        ...state.documents,
        [fieldName]: [...(state.documents[fieldName] || []), file],
      },
    })),
  removeDocument: (fieldName, fileName) =>
    set((state) => ({
      documents: {
        ...state.documents,
        [fieldName]: state.documents[fieldName].filter(
          (file) => file.name !== fileName
        ),
      },
    })),
  clearDocuments: (fieldName) =>
    set((state) => ({
      documents: {
        ...state.documents,
        [fieldName]: [],
      },
    })),
}));

export { useTabStore, useUserStore, useDescriptionStore, useDocumentStore };

import React, { useEffect, useState } from 'react';
import InputField from "../common/InputField";
import PhoneInputField from "../common/PhoneInputField";
import AirDatepickerField from "../common/AirDatepickerField";
import GenderSelector from "../common/GenderSelector";
import SnilsInputField from "../common/SnilsInputField";
import SingleSelector from "../common/SingleSelector";
import { useUserStore } from "../../store";
import regions from "../../data/regions.json";
import Description from "../common/Description";

export default function About() {
    const { userData, setUserData, loadUserData, saveUserData } = useUserStore();
    useEffect(() => {
        loadUserData(); // Загружаем данные при загрузке страницы
    }, [loadUserData]);

    const handleInputChange = (field) => (e) => {
        console.log(e);
        setUserData(field, e.target.value); // Обновляем состояние поля
    };
    const handleDataInputChange = (field) => (e) => {
        setUserData(field, e); // Обновляем состояние поля даты
    };

    const handleSave = () => {
        saveUserData(); // Сохраняем данные в API
    };

    const regionOptions = regions.map(item => item.name);

    const [selectedOptions, setSelectedOptions] = useState([]);


    const handleSelectionChange = (newSelection) => {
      setSelectedOptions(newSelection);
      console.log(newSelection);
    };


    return (
        <form className="main">
            <div className="content">
                <div className="content_head">
                    <div className="breadcrumbs">
                        <a href="client.html" className="breadcrumbs_link">Личный кабинет</a>
                        <span className="breadcrumbs_sep">/</span>
                        <span className="breadcrumbs_text">Информация о клиенте</span>
                    </div>
                    <div className="title title-page">Информация о пациенте</div>
                </div>
                <div className="content_body">
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Основная информация</div>
                        </div>
                        <div className="article_body">

                            <GenderSelector />

                            <div className="form_controls form_controls-grid">
                                <div className="control">
                                    <label className="control_title" htmlFor="lastname">Фамилия</label
                                    >
                                    <InputField
                                        className=""
                                        id="lastname"
                                        type="text"
                                        name="lastname"
                                        value={userData.lastname || ''}
                                        placeholder="Ваша фамилия..."
                                        onChange={handleInputChange('lastName')}
                                    />
                                </div>
                                <div className="control">
                                    <label className="control_title" htmlFor="firstname">Имя</label>
                                    <InputField
                                        id="firstname"
                                        type="text"
                                        name="firstname"
                                        value={userData.firstname || ''}
                                        placeholder="Ваше имя..."
                                        onChange={handleInputChange('firstname')}
                                    />
                                </div>
                                <div className="control">
                                    <label className="control_title" htmlFor="thirdname">Отчество</label>
                                    <InputField
                                        id="thirdname"
                                        value={userData.thirdname || ''}
                                        type="text"
                                        name="thirdname"
                                        onChange={handleInputChange('thirdname')}
                                        placeholder="Ваше отчество..."
                                    // disabled={true} 
                                    />
                                </div>
                                <label className="control_title control control-date" htmlFor="birthday"
                                >Дата рождения
                                    <AirDatepickerField
                                        id="birthday"
                                        type="text"
                                        name="birthday"
                                        placeholder="Выбрать дату"
                                        className="date"
                                        value={userData.birthday || ''}
                                        onChange={handleDataInputChange('birthday')}
                                    />
                                </label>
                                <div className="control">
                                    <label className="control_title" htmlFor="height">Рост, см</label>
                                    <InputField
                                        id="length"
                                        type="text"
                                        name="height"
                                        value={userData.height || ''}
                                        onChange={handleInputChange('height')}
                                        placeholder="Укажите ваш рост"
                                    />
                                </div>
                                <div className="control">
                                    <label className="control_title" htmlFor="weight">Вес, кг</label>
                                    <InputField
                                        id="weight"
                                        type="text"
                                        name="weight"
                                        value={userData.weight || ''}
                                        onChange={handleInputChange('weight')}
                                        placeholder="Укажите ваш вес"
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Контактная информация</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls form_controls-grid">
                                <div className="control">
                                    <label className="control_title" htmlFor="phone">Телефон</label>
                                    <PhoneInputField
                                        id="phone"
                                        name="phone"
                                        value={userData.phone || ''}
                                        onChange={handleInputChange('phone')}
                                        placeholder="+7 (___) ___ - __ - __"
                                    />
                                </div>
                                <div className="control">
                                    <label className="control_title" htmlFor="phone2">Доп. телефон (при наличии)</label>

                                    <PhoneInputField
                                        id="phone"
                                        name="phone2"
                                        value={userData.phone2 || ''}
                                        onChange={handleInputChange('phone2')}
                                        placeholder="+7 (___) ___ - __ - __"
                                    />
                                </div>
                                <div className="control">
                                    <label className="control_title" htmlFor="email">Электронная почта</label>
                                    <InputField
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={userData.email || ''}
                                        onChange={handleInputChange('email')}
                                        placeholder="Укажите ваш e-mail"
                                    />

                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Личные документы</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls form_controls-grid">
                                <div className="control">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="polis"
                                    >Номер страхового полиса
                                        {/* <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div> */}
                                        <Description tag="polisTag" />
                                        
                                        </label>
                                    <InputField
                                        id="polis"
                                        type="text"
                                        name="polis"
                                        value={userData.polis || ''}
                                        onChange={handleInputChange('polis')}
                                        placeholder="Введите 16 цифр полиса..."
                                    />
                                </div>
                                <div className="control">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="polis-reg">Регион полиса
                                        <Description tag="polisRegionTag" />
                                        
                                    </label>
                                    <SingleSelector
                                        options={regionOptions}
                                        onChange={(value) => setUserData('polisRegion', value)} // Обновление polisRegion в глобальном состоянии
                                        value={userData.polisRegion || ''} // Инициализация с данным значением
                                        placeholder="Выберите регион полиса..."
                                    />
                                </div>
                                <div className="control">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="snils"
                                    >СНИЛС
                                        <Description tag="snilsTag" />
                                    </label>
                                    <SnilsInputField
                                        id="snils"
                                        name="snils"
                                        value={userData.snils || ''}
                                        onChange={handleInputChange('snils')}
                                        placeholder="Введите номер СНИЛС..."
                                    />
                                </div>
                                <div className="control">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="passport"
                                    >Серия и номер паспорта
                                    <Description tag="passportTag" />
                                    </label>
                                    <InputField
                                        id="passport"
                                        type="text"
                                        name="passport"
                                        value={userData.passport || ''}
                                        onChange={handleInputChange('passport')}
                                        placeholder="Введите 10 цифр паспорта..."
                                    />
                                </div>
                                <label className="control_title control control-date" htmlFor="passportDate">Дата выдачи
                                    <AirDatepickerField
                                        id="passportDate"
                                        type="text"
                                        name="passportDate"
                                        placeholder="Выбрать дату"
                                        value={userData.passportDate || ''}
                                        onChange={handleDataInputChange('passportDate')}
                                        className="date"
                                    />
                                </label>
                                <div className="control">
                                    <label className="control_title control_title-notice" htmlFor="passport-from">Кем выдан
                                        <Description tag="passportFromTag" />
                                    </label>
                                    <InputField
                                        id="passport-from"
                                        type="text"
                                        name="passport-from"
                                        placeholder="Введите кем выдано..."
                                        value={userData.passportFrom || ''}
                                        onChange={handleInputChange('passportFrom')}
                                    />
                                </div>
                                <div className="control">
                                    <label className="control_title control_title-notice" htmlFor="city">
                                        Город регистрации
                                        <Description tag="cityTag" />
                                    </label>
                                    <InputField
                                        id="city"
                                        type="text"
                                        name="city"
                                        placeholder="Город..."
                                        value={userData.city || ''}
                                        onChange={handleInputChange('city')}
                                    />
                                </div>
                                <div className="control control-x2">
                                    <label className="control_title control_title-notice" htmlFor="address">
                                        Адрес регистрации
                                        <Description tag="addressTag" />
                                    </label>
                                    <InputField
                                        id="address"
                                        type="text"
                                        name="address"
                                        placeholder="Адрес..."
                                        value={userData.address || ''}
                                        onChange={handleInputChange('address')}
                                    />
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <aside className="aside aside-right">
                <div className="widget">
                    <div className="widget_title">Информация</div>
                    <div
                        className="progress progress-dark"
                        data-progress="about"
                    >
                        <div className="progress_bar">
                            <span
                                className="progress_line"
                                style={{ width: '50%' }}
                            ></span>
                        </div>
                        <p className="progress_text">Заполнено <span className="progress_value">50%</span></p>
                    </div>
                    <div className="widget_actions">
                        <button
                            type="submit"
                            className="btn btn-main btn-fw"
                        >
                            Сохранить
                        </button>
                        <a
                            href="info.html"
                            className="btn btn-main btn-fw"
                        >Далее</a
                        >
                    </div>
                </div>
            </aside>
        </form>
    )
}

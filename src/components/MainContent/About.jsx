import React, { useEffect, useState } from 'react';
import InputField from "../common/InputField";
import AirDatepickerField from "../common/AirDatepickerField";
import GenderSelector from "../common/GenderSelector";
import { useUserStore } from "../../store";

export default function About() {
    const { userData, setUserData, loadUserData, saveUserData } = useUserStore();
    useEffect(() => {
        loadUserData(); // Загружаем данные при загрузке страницы
    }, [loadUserData]);

    const handleInputChange = (field) => (e) => {
        setUserData(field, e.target.value); // Обновляем состояние поля
    };

    const handleSave = () => {
        saveUserData(); // Сохраняем данные в API
    };

    console.log(userData);

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
                                        className="ok"
                                        id="lastname"
                                        type="text"
                                        name="lastname"
                                        value={userData.lastName || ''}
                                        placeholder="Ваша фамилия..."
                                        onChange={handleInputChange('lastName')}
                                    />
                                </div>
                                <div className="control">
                                    <label className="control_title" htmlFor="firstname">Имя</label>
                                    <InputField className="err" id="firstname" type="text" name="firstname" placeholder="Ваше имя..." />
                                </div>
                                <div className="control">
                                    <label className="control_title" htmlFor="thirdname">Отчество</label>
                                    <InputField id="thirdname" value="Андреевич" type="text" name="thirdname" placeholder="Ваше отчество..." disabled={true} />
                                </div>
                                <label className="control_title control control-date" htmlFor="birthday"
                                >Дата рождения
                                    <AirDatepickerField
                                        id="birthday"
                                        type="text"
                                        name="birthday"
                                        placeholder="Выбрать дату"
                                        className="date"
                                    />
                                </label>
                                <div className="control">
                                    <label className="control_title" htmlFor="length">Рост, см</label>
                                    <InputField id="length" type="text" name="length" placeholder="Укажите ваш рост" />
                                </div>
                                <div className="control">
                                    <label className="control_title" htmlFor="weight">Вес, кг</label>
                                    <InputField id="weight" type="text" name="weight" placeholder="Укажите ваш вес" />
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
                                    <InputField id="phone" type="text" name="phone" placeholder="+7 (___) ___ - __ - __" />
                                </div>
                                <div className="control">
                                    <label className="control_title" htmlFor="phone2">Доп. телефон (при наличии)</label>
                                    <InputField id="phone2" type="text" name="phone2" placeholder="+7 (___) ___ - __ - __" />
                                </div>
                                <div className="control">
                                    <label className="control_title" htmlFor="email">Электронная почта</label>
                                    <InputField id="email" type="text" name="email" placeholder="Укажите ваш e-mail" />
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
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></label>
                                    <InputField id="polis" type="text" name="polis" placeholder="Введите 16 цифр полиса..." />
                                </div>
                                <div className="control">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="polis-reg"
                                    >Регион полиса
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></label
                                    >
                                    <div className="select">
                                        <button
                                            type="button"
                                            name="polis-region"
                                            value=""
                                            data-select="toggle"
                                            data-index="1"
                                            data-type="single"
                                            className="select_toggle"
                                        >
                                            Выберите регион полиса...
                                        </button>
                                        <div className="select_dropdown">
                                            <ul className="select_options">
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="one"
                                                    data-index="0"
                                                >
                                                    Пункт 1
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="two"
                                                    data-index="1"
                                                >
                                                    Пункт 2
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="three"
                                                    data-index="2"
                                                >
                                                    Пункт 3
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="4"
                                                    data-index="4"
                                                >
                                                    Пункт 4
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="5"
                                                    data-index="5"
                                                >
                                                    Пункт 5
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="6"
                                                    data-index="6"
                                                >
                                                    Пункт 6
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="7"
                                                    data-index="7"
                                                >
                                                    Пункт 7
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="control">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="snils"
                                    >СНИЛС
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></label
                                    >
                                    <InputField id="snils" type="text" name="snils" placeholder="Введите номер СНИЛС..." />
                                </div>
                                <div className="control">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="passport"
                                    >Серия и номер паспорта
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></label
                                    >
                                    <InputField id="passport" type="text" name="passport" placeholder="Введите 10 цифр паспорта..." />
                                </div>
                                <label className="control_title control control-date" htmlFor="passport-date">Дата выдачи
                                    <AirDatepickerField
                                        id="passport-date"
                                        type="text"
                                        name="passport-date"
                                        placeholder="Выбрать дату"
                                        className="date"
                                    />
                                </label>
                                <div className="control">
                                    <label className="control_title control_title-notice" htmlFor="passport-from">Кем выдан
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></label
                                    >
                                    <InputField id="passport-from" type="text" name="passport-from" placeholder="Введите кем выдано..." />
                                </div>
                                <div className="control">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="city"
                                    >Город регистрации
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></label
                                    >
                                    <InputField id="city" type="text" name="city" placeholder="Город..." />
                                </div>
                                <div className="control control-x2">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="address"
                                    >Адрес регистрации
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></label
                                    >
                                    <InputField id="address" type="text" name="address" placeholder="Адрес..." />
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

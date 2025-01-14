import React from 'react'

export default function Info() {
    return (
        <form className="main">
            <div className="content">
                <div className="content_head">
                    <div className="breadcrumbs">
                        <a
                            href="client.html"
                            className="breadcrumbs_link"
                        >Личный кабинет</a
                        >
                        <span className="breadcrumbs_sep">/</span>
                        <span className="breadcrumbs_text">Медицинская информация</span>
                    </div>
                    <div className="title title-page">Медицинская информация</div>
                </div>
                <div className="content_body">
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Жалобы</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="comment"
                                    >Жалобы на здоровье
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
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        placeholder="Опишите, пожалуйста, основное, что вас беспокоит"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Хронические заболевания</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control control-g24">
                                    <span className="control_title control_title-notice"
                                    >Есть ли у вас хронические заболевания?
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></span
                                    >
                                    <div className="checkbox">
                                        <label
                                            htmlFor="chronical-yeah"
                                        >
                                            <input
                                                id="chronical-yeah"
                                                type="radio"
                                                name="chronical"
                                                value="chronical-yeah"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Есть</span>
                                        </label>
                                        <label
                                            htmlFor="chronical-no"
                                        >
                                            <input
                                                id="chronical-no"
                                                type="radio"
                                                name="chronical"
                                                value="chronical-no"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Нет</span>
                                        </label>
                                    </div>
                                    <div className="select">
                                        <button
                                            type="button"
                                            name="chronical-items"
                                            data-select="toggle"
                                            value="one two"
                                            data-index="1"
                                            data-type="multiple"
                                            className="select_toggle"
                                        >
                                            Выбрать один или несколько
                                        </button>
                                        <div className="select_dropdown">
                                            <ul className="select_options">
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="one"
                                                    data-index="0"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox1"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 1</span>
                                                </li>
                                                <li
                                                    className="select_option select_option-selected"
                                                    data-select="option"
                                                    data-value="two"
                                                    data-index="1"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox2"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 2</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="three"
                                                    data-index="2"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 3</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="4"
                                                    data-index="4"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox4"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 4</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="5"
                                                    data-index="5"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox5"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 5</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="6"
                                                    data-index="6"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox6"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 6</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="7"
                                                    data-index="7"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox7"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 7</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="selected">
                                        <div className="selected_item">
                                            <div className="selected_item_head">
                                                <span className="selected_item_title">Сахарный диабет</span>
                                                <button
                                                    type="button"
                                                    className="selected_item_del"
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                            <div className="selected_item_body">
                                                <button
                                                    type="button"
                                                    className="selected_item_add"
                                                >
                                                    Добавить комментарий к заболеванию
                                                </button>
                                            </div>
                                        </div>
                                        <div className="selected_item">
                                            <div className="selected_item_head">
                                                <span className="selected_item_title">Сахарный диабет</span>
                                                <button
                                                    type="button"
                                                    className="selected_item_del"
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                            <div className="selected_item_body">
                                                <button
                                                    type="button"
                                                    className="selected_item_add"
                                                >
                                                    Добавить комментарий к заболеванию
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Приём медикаментов</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control control-g24">
                                    <span className="control_title control_title-notice"
                                    >Принимали ли ранее медикаменты
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></span
                                    >
                                    <div className="checkbox">
                                        <label
                                            htmlFor="chronical-yeah"
                                        >
                                            <input
                                                id="chronical-yeah"
                                                type="radio"
                                                name="chronical"
                                                value="chronical-yeah"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Есть</span>
                                        </label>
                                        <label
                                            htmlFor="chronical-no"
                                        >
                                            <input
                                                id="chronical-no"
                                                type="radio"
                                                name="chronical"
                                                value="chronical-no"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Нет</span>
                                        </label>
                                    </div>
                                    <div className="select">
                                        <button
                                            type="button"
                                            name="chronical-items"
                                            data-select="toggle"
                                            value="one two"
                                            data-index="1"
                                            data-type="multiple"
                                            className="select_toggle"
                                        >
                                            Выбрать один или несколько
                                        </button>
                                        <div className="select_dropdown">
                                            <ul className="select_options">
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="one"
                                                    data-index="0"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox1"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 1</span>
                                                </li>
                                                <li
                                                    className="select_option select_option-selected"
                                                    data-select="option"
                                                    data-value="two"
                                                    data-index="1"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox2"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 2</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="three"
                                                    data-index="2"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 3</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="4"
                                                    data-index="4"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox4"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 4</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="5"
                                                    data-index="5"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox5"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 5</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="6"
                                                    data-index="6"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox6"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 6</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="7"
                                                    data-index="7"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox7"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 7</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="selected">
                                        <div className="selected_item">
                                            <div className="selected_item_head">
                                                <span className="selected_item_title">Аспирин</span>
                                                <button
                                                    type="button"
                                                    className="selected_item_del"
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                            <div className="selected_item_body">
                                                <button
                                                    type="button"
                                                    className="selected_item_add"
                                                >
                                                    Добавить комментарий
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Предыдущие операции</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control control-g24">
                                    <span className="control_title control_title-notice"
                                    >Были у вас ранее операции?
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></span
                                    >
                                    <div className="checkbox">
                                        <label
                                            htmlFor="chronical-yeah"
                                        >
                                            <input
                                                id="chronical-yeah"
                                                type="radio"
                                                name="chronical"
                                                value="chronical-yeah"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Есть</span>
                                        </label>
                                        <label
                                            htmlFor="chronical-no"
                                        >
                                            <input
                                                id="chronical-no"
                                                type="radio"
                                                name="chronical"
                                                value="chronical-no"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Нет</span>
                                        </label>
                                    </div>
                                    <textarea
                                        className="textarea textarea-sm"
                                        name="comment2"
                                        placeholder="Напишите пожалуйста какие операции у вас были..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Аллергии и лекарственная непереносимость</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control control-g24">
                                    <span className="control_title control_title-notice"
                                    >У вас есть аллергия или лекарственная неперносимость?
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></span
                                    >
                                    <div className="checkbox">
                                        <label
                                            htmlFor="alergy-yeah"
                                        >
                                            <input
                                                id="alergy-yeah"
                                                type="radio"
                                                name="alergy"
                                                value="alergy-yeah"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Да</span>
                                        </label>
                                        <label
                                            htmlFor="alergy-no"
                                        >
                                            <input
                                                id="alergy-no"
                                                type="radio"
                                                name="alergy"
                                                value="alergy-no"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Нет</span>
                                        </label>
                                    </div>
                                    <div className="select">
                                        <button
                                            type="button"
                                            name="chronical-items"
                                            data-select="toggle"
                                            value="one two"
                                            data-index="1"
                                            data-type="multiple"
                                            className="select_toggle"
                                        >
                                            Выбрать один или несколько
                                        </button>
                                        <div className="select_dropdown">
                                            <ul className="select_options">
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="one"
                                                    data-index="0"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox1"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 1</span>
                                                </li>
                                                <li
                                                    className="select_option select_option-selected"
                                                    data-select="option"
                                                    data-value="two"
                                                    data-index="1"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox2"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 2</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="three"
                                                    data-index="2"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 3</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="4"
                                                    data-index="4"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox4"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 4</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="5"
                                                    data-index="5"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox5"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 5</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="6"
                                                    data-index="6"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox6"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 6</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="7"
                                                    data-index="7"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox7"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 7</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="selected">
                                        <div className="selected_item">
                                            <div className="selected_item_head">
                                                <span className="selected_item_title">Антибиотики</span>
                                                <button
                                                    type="button"
                                                    className="selected_item_del"
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                            <div className="selected_item_body">
                                                <button
                                                    type="button"
                                                    className="selected_item_add"
                                                >
                                                    Удалить комментарий
                                                </button>
                                                <textarea
                                                    className="textarea textarea-sm"
                                                    placeholder="Прием препаратов должен осуществляться строго в соответствии с рекомендациями врача. Важно соблюдать дозировку, время приема и длительность курса"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="selected_item">
                                            <div className="selected_item_head">
                                                <span className="selected_item_title">Анестетики</span>
                                                <button
                                                    type="button"
                                                    className="selected_item_del"
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                            <div className="selected_item_body">
                                                <button
                                                    type="button"
                                                    className="selected_item_add"
                                                >
                                                    Добавить комментарий
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Инфекционные заболевания</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control control-g24">
                                    <span className="control_title control_title-notice"
                                    >Были ли или есть у вас инфекционные заболевания?
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></span
                                    >
                                    <div className="checkbox">
                                        <label
                                            htmlFor="infection-yeah"
                                        >
                                            <input
                                                id="infection-yeah"
                                                type="radio"
                                                name="infection"
                                                value="infection-yeah"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Да</span>
                                        </label>
                                        <label
                                            htmlFor="infection-no"
                                        >
                                            <input
                                                id="infection-no"
                                                type="radio"
                                                name="infection"
                                                value="infection-no"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Нет</span>
                                        </label>
                                    </div>
                                    <div className="select">
                                        <button
                                            type="button"
                                            name="chronical-items"
                                            data-select="toggle"
                                            value="one two"
                                            data-index="1"
                                            data-type="multiple"
                                            className="select_toggle"
                                        >
                                            Выбрать один или несколько
                                        </button>
                                        <div className="select_dropdown">
                                            <ul className="select_options">
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="one"
                                                    data-index="0"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox1"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 1</span>
                                                </li>
                                                <li
                                                    className="select_option select_option-selected"
                                                    data-select="option"
                                                    data-value="two"
                                                    data-index="1"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox2"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 2</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="three"
                                                    data-index="2"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 3</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="4"
                                                    data-index="4"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox4"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 4</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="5"
                                                    data-index="5"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox5"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 5</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="6"
                                                    data-index="6"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox6"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 6</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="7"
                                                    data-index="7"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox7"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 7</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="selected">
                                        <div className="selected_item">
                                            <div className="selected_item_head">
                                                <span className="selected_item_title">Туберкулёз</span>
                                                <button
                                                    type="button"
                                                    className="selected_item_del"
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                            <div className="selected_item_body">
                                                <button
                                                    type="button"
                                                    className="selected_item_add"
                                                >
                                                    Добавить комментарий к заболеванию
                                                </button>
                                            </div>
                                        </div>
                                        <div className="selected_item">
                                            <div className="selected_item_head">
                                                <span className="selected_item_title">Гепатит</span>
                                                <button
                                                    type="button"
                                                    className="selected_item_del"
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                            <div className="selected_item_body">
                                                <button
                                                    type="button"
                                                    className="selected_item_add"
                                                >
                                                    Добавить комментарий к заболеванию
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Наследственные заболевания</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control">
                                    <label
                                        className="control_title control_title-notice"
                                        htmlFor="comment"
                                    >Есть ли у вас наследственные заболевания?
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
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        placeholder="Напишите пожалуйста есть ли у вас наследственные заболевания..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Вредные привычки</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control control-g24">
                                    <span className="control_title control_title-notice"
                                    >Есть ли у вас вредные привычки?
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></span
                                    >
                                    <div className="checkbox">
                                        <label
                                            htmlFor="habbits-yeah"
                                        >
                                            <input
                                                id="habbits-yeah"
                                                type="radio"
                                                name="habbits"
                                                value="habbits-yeah"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Да</span>
                                        </label>
                                        <label
                                            htmlFor="habbits-no"
                                        >
                                            <input
                                                id="habbits-no"
                                                type="radio"
                                                name="habbits"
                                                value="habbits-no"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Нет</span>
                                        </label>
                                    </div>
                                    <div className="select">
                                        <button
                                            type="button"
                                            name="chronical-items"
                                            data-select="toggle"
                                            value="one two"
                                            data-index="1"
                                            data-type="multiple"
                                            className="select_toggle"
                                        >
                                            Выбрать один или несколько
                                        </button>
                                        <div className="select_dropdown">
                                            <ul className="select_options">
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="one"
                                                    data-index="0"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox1"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 1</span>
                                                </li>
                                                <li
                                                    className="select_option select_option-selected"
                                                    data-select="option"
                                                    data-value="two"
                                                    data-index="1"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox2"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 2</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="three"
                                                    data-index="2"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox3"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 3</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="4"
                                                    data-index="4"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox4"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 4</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="5"
                                                    data-index="5"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox5"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 5</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="6"
                                                    data-index="6"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox6"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 6</span>
                                                </li>
                                                <li
                                                    className="select_option"
                                                    data-select="option"
                                                    data-value="7"
                                                    data-index="7"
                                                >
                                                    <div className="checkbox_item">
                                                        <input
                                                            type="checkbox"
                                                            id="checkbox7"
                                                        />
                                                        <span className="checkbox_item_visible"></span>
                                                    </div>
                                                    <span className="select_option_text">Пункт 7</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="selected">
                                        <div className="selected_item">
                                            <div className="selected_item_head">
                                                <span className="selected_item_title">Курение</span>
                                                <button
                                                    type="button"
                                                    className="selected_item_del"
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                            <div className="selected_item_body">
                                                <button
                                                    type="button"
                                                    className="selected_item_add"
                                                >
                                                    Добавить комментарий к заболеванию
                                                </button>
                                            </div>
                                        </div>
                                        <div className="selected_item">
                                            <div className="selected_item_head">
                                                <span className="selected_item_title">Алкоголь</span>
                                                <button
                                                    type="button"
                                                    className="selected_item_del"
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                            <div className="selected_item_body">
                                                <button
                                                    type="button"
                                                    className="selected_item_add"
                                                >
                                                    Добавить комментарий к заболеванию
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Беременность</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control control-g24">
                                    <span className="control_title control_title-notice"
                                    >Беременны в настоящий момент?
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></span
                                    >
                                    <div className="checkbox">
                                        <label
                                            htmlFor="pregnant-yeah"
                                        >
                                            <input
                                                id="pregnant-yeah"
                                                type="radio"
                                                name="pregnant"
                                                value="pregnant-yeah"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Да</span>
                                        </label>
                                        <label
                                            htmlFor="pregnant-no"
                                        >
                                            <input
                                                id="pregnant-no"
                                                type="radio"
                                                name="pregnant"
                                                value="pregnant-no"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Нет</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Больничный лист</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control control-g24">
                                    <span className="control_title control_title-notice"
                                    >Нужен ли больничный лист?
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div></span
                                    >
                                    <div className="checkbox">
                                        <label
                                            htmlFor="list-yeah"
                                        >
                                            <input
                                                id="list-yeah"
                                                type="radio"
                                                name="list"
                                                value="list-yeah"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Да</span>
                                        </label>
                                        <label
                                            htmlFor="list-no"
                                        >
                                            <input
                                                id="list-no"
                                                type="radio"
                                                name="list"
                                                value="list-no"
                                            />
                                            <div className="checkbox_cell"></div>
                                            <span>Нет</span>
                                        </label>
                                    </div>
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

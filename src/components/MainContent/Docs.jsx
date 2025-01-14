import React from 'react'

export default function Docs() {
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
                        <span className="breadcrumbs_text">Документы и анализы пациента</span>
                    </div>
                    <div className="title title-page">Документы и анализы пациента</div>
                </div>
                <div className="content_body">
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Основные документы</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls form_controls-files">
                                <div className="control control-files control-files-err">
                                    <span className="control_title control_title-notice"
                                    >Копия паспорта
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
                                    <div className="upload">
                                        <input
                                            id="passport-files"
                                            type="file"
                                            className="upload_input"
                                            multiple
                                        />
                                        <label
                                            htmlFor="passport-files"
                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert">
                                        <span className="alert_icon"></span>
                                        <p className="alert_text">
                                            Загруженные документы не соответствует введенным данным
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="form_controls form_controls-files">
                                <div className="control control-files">
                                    <span className="control_title control_title-notice"
                                    >Страховой полис
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
                                    <div className="upload">
                                        <input
                                            id="polis-files"
                                            type="file"
                                            className="upload_input"
                                        />
                                        <label
                                            htmlFor="polis-files"

                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_controls form_controls-files">
                                <div className="control control-files">
                                    <span className="control_title control_title-notice"
                                    >СНИЛС
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
                                    <div className="upload">
                                        <input
                                            id="snils-files"
                                            type="file"
                                            className="upload_input"
                                        />
                                        <label
                                            htmlFor="snils-files"

                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Лабораторные анализы</div>
                        </div>
                        <div className="article_body">
                            <div className="alert alert-v2">
                                <p className="alert_text">
                                    Основные лабораторные исследования (срок действия – 14 дней, если не указано
                                    иное)
                                </p>
                                <span className="alert_icon"></span>
                            </div>
                            <div className="form_controls form_controls-files">
                                <div className="control control-files">
                                    <span className="control_title control_title-notice"
                                    >Общий анализ крови с лейкоцитарной формулой и тромбоцитами + СОЭ
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
                                    <div className="upload">
                                        <input
                                            id="passport-files"
                                            type="file"
                                            className="upload_input"
                                        />
                                        <label
                                            htmlFor="passport-files"

                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_controls form_controls-files">
                                <div className="control control-files">
                                    <span className="control_title control_title-notice"
                                    >Коагулограмма
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="control_title_actions">
                                            <span className="print_btn"></span>
                                            <span className="pdf_btn"></span>
                                        </div>
                                    </span>
                                    <ul className="control_list">
                                        <li>МНО (международное нормализованное отношение)</li>
                                        <li>АЧТВ (активированное частичное тромбопластиновое время)</li>
                                        <li>Фибриноген</li>
                                        <li>Протромбиновое время</li>
                                        <li>Тромбиновое время</li>
                                        <li>Д-димер</li>
                                    </ul>
                                    <div className="upload">
                                        <input
                                            id="passport-files"
                                            type="file"
                                            className="upload_input"
                                        />
                                        <label
                                            htmlFor="passport-files"

                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_controls form_controls-files">
                                <div className="control control-files">
                                    <span className="control_title control_title-notice"
                                    >Биохимический анализ крови
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="control_title_actions">
                                            <span className="print_btn"></span>
                                            <span className="pdf_btn"></span>
                                        </div>
                                    </span>
                                    <ul className="control_list">
                                        <li>Глюкоза</li>
                                        <li>Общий белок</li>
                                        <li>Билирубин (общий, прямой, непрямой)</li>
                                        <li>АЛТ (аланинаминотрансфераза)</li>
                                        <li>АСТ (аспартатаминотрансфераза)</li>
                                        <li>Креатинин</li>
                                        <li>Мочевина</li>
                                        <li>Калий, натрий, хлор</li>
                                        <li>Альбумин</li>
                                    </ul>
                                    <div className="upload">
                                        <input
                                            id="passport-files"
                                            type="file"
                                            className="upload_input"
                                        />
                                        <label
                                            htmlFor="passport-files"

                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_controls form_controls-files">
                                <div className="control control-files">
                                    <span className="control_title control_title-notice"
                                    >Инфекционно-иммунологический анализ крови (pdf / jpg / png)
                                        <div className="control_notice">
                                            <span className="control_notice_icon"></span>
                                            <div className="control_notice_content">
                                                <p>
                                                    Далеко-далеко за словесными горами в стране гласных, и согласных живут
                                                    рыбные тексты.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="control_title_actions">
                                            <span className="print_btn"></span>
                                            <span className="pdf_btn"></span>
                                        </div>
                                    </span>
                                    <ul className="control_list">
                                        <li>RW (сифилис) (3 месяца)</li>
                                        <li>Hbs-антиген (гепатит В) (3 месяца)</li>
                                        <li>Анти-HCV (гепатит С) (3 месяца)</li>
                                        <li>ВИЧ (3 месяца)</li>
                                    </ul>
                                    <div className="upload">
                                        <input
                                            id="passport-files"
                                            type="file"
                                            className="upload_input"
                                        />
                                        <label
                                            htmlFor="passport-files"

                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_controls form_controls-files">
                                <div className="control control-files">
                                    <span className="control_title control_title-notice"
                                    >Определение группы крови и резус-фактора (бессрочно)
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
                                    <div className="upload">
                                        <input
                                            id="polis-files"
                                            type="file"
                                            className="upload_input"
                                        />
                                        <label
                                            htmlFor="polis-files"

                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_controls form_controls-files">
                                <div className="control control-files">
                                    <span className="control_title control_title-notice"
                                    >Фенотипирование эритроцитов (бессрочно) (pdf / jpg / png)
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
                                    <div className="upload">
                                        <input
                                            id="snils-files"
                                            type="file"
                                            className="upload_input"
                                        />
                                        <label
                                            htmlFor="snils-files"

                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_controls form_controls-files">
                                <div className="control control-files">
                                    <span className="control_title control_title-notice"
                                    >Общий анализ мочи
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
                                    <div className="upload">
                                        <input
                                            id="snils-files"
                                            type="file"
                                            className="upload_input"
                                        />
                                        <label
                                            htmlFor="snils-files"

                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Специальные лабораторные исследования:</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls form_controls-files">
                                <div className="control control-files">
                                    <span className="control_title control_title-notice"
                                    >ПЦР на COVID-19 из носоглотки и ротоглотки (не ранее чем за 1-2 дня до
                                        госпитализации, результат действителен 48 часов)
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
                                    <div className="upload">
                                        <input
                                            id="passport-files"
                                            type="file"
                                            className="upload_input"
                                        />
                                        <label
                                            htmlFor="passport-files"

                                            className="upload_btn btn btn-main"
                                        >
                                            <span></span> Загрузить
                                        </label>
                                        <div className="upload_info">
                                            <p>Максимальный размер файла: 10 МБ.</p>
                                            <p>Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx</p>
                                        </div>
                                    </div>
                                    <div className="files">
                                        <div className="files_item">
                                            <span className="files_item_icon"></span>
                                            <span className="files_item_title">Наименование документа.pdf</span>
                                            <div className="files_item_actions">
                                                <span className="files_item_del">Удалить</span>
                                            </div>
                                        </div>
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
                    <div className="widget_actions widget_actions-col">
                        <button className="btn btn-main btn-fw widget_print">
                            Распечатать <span className="widget_print"></span>
                        </button>
                        <a
                            download=""
                            href="info.html"
                            className="btn btn-main btn-fw"
                        >Скачать в формате PDF</a
                        >
                    </div>
                </div>
            </aside>
        </form>
    )
}

export default function Recomendation() {
    return (
        <main className="main">
            <div className="content">
                <div className="content_head">
                    <div className="breadcrumbs">
                        <a
                            href="client.html"
                            className="breadcrumbs_link"
                        >Личный кабинет</a
                        >
                        <span className="breadcrumbs_sep">/</span>
                        <span className="breadcrumbs_text">Рекомендации после операции</span>
                    </div>
                    <div className="title title-page">Рекомендации после операции</div>
                </div>
                <div className="content_body">
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Видео рекомендации</div>
                        </div>
                        <div className="article_body">
                            <div className="video_items">
                                <div className="video_item">
                                    <div className="video_item_img">
                                        <img
                                            src="assets/img/video1.jpg"
                                            alt=""
                                        />
                                        <a
                                            className="video_item_play"
                                            href="#"
                                        ></a>
                                    </div>
                                    <div className="video_item_title">
                                        Послеопреационная зарядка и физические упражнения.
                                    </div>
                                </div>
                                <div className="video_item">
                                    <div className="video_item_img">
                                        <img
                                            src="assets/img/video2.jpg"
                                            alt=""
                                        />
                                        <a
                                            className="video_item_play"
                                            href="#"
                                        ></a>
                                    </div>
                                    <div className="video_item_title">
                                        Послеопреационная зарядка и физические упражнения.
                                    </div>
                                </div>
                                <div className="video_item">
                                    <div className="video_item_img">
                                        <img
                                            src="assets/img/video3.jpg"
                                            alt=""
                                        />
                                        <a
                                            className="video_item_play"
                                            href="#"
                                        ></a>
                                    </div>
                                    <div className="video_item_title">
                                        Послеопреационная зарядка и физические упражнения.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Текстовые рекомендации</div>
                        </div>
                        <div className="article_body">
                            <div className="text_items">
                                <div className="text_unit">
                                    <span className="text_unit_icon"></span>
                                    <div className="text_unit_title">
                                        Послеопреационная зарядка и физические упражнения
                                    </div>
                                    <div className="text_unit_actions actions">
                                        <span className="print_btn"></span>
                                        <span className="pdf_btn"></span>
                                    </div>
                                </div>
                                <div className="text_unit">
                                    <span className="text_unit_icon"></span>
                                    <div className="text_unit_title">Рекомендации по питанию и пищевым добавкам</div>
                                    <div className="text_unit_actions actions">
                                        <span className="print_btn"></span>
                                        <span className="pdf_btn"></span>
                                    </div>
                                </div>
                                <div className="text_unit">
                                    <span className="text_unit_icon"></span>
                                    <div className="text_unit_title">Рекомендации по лекарствам</div>
                                    <div className="text_unit_actions actions">
                                        <span className="print_btn"></span>
                                        <span className="pdf_btn"></span>
                                    </div>
                                </div>
                                <div className="text_unit">
                                    <span className="text_unit_icon"></span>
                                    <div className="text_unit_title">Рекомендации по питанию и пищевым добавкам</div>
                                    <div className="text_unit_actions actions">
                                        <span className="print_btn"></span>
                                        <span className="pdf_btn"></span>
                                    </div>
                                </div>
                                <div className="text_unit">
                                    <span className="text_unit_icon"></span>
                                    <div className="text_unit_title">
                                        Послеопреационная зарядка и физические упражнения
                                    </div>
                                    <div className="text_unit_actions actions">
                                        <span className="print_btn"></span>
                                        <span className="pdf_btn"></span>
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
        </main>
    )
}

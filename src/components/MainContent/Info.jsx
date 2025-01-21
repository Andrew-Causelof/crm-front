import React from 'react'

import { useUserStore } from "../../store";

import YesNoSelector from "../common/YesNoSelector";
import MultipleSelector from "../common/MultipleSelector";
import Description from "../common/Description";
import TextAreaField from "../common/TextAreaField";
import SelectorWithComments from "../common/SelectorWithComments";
import InfoArticle from '../common/InfoArticle';

import ErrorBoundary from "../../tools/ErrorBoundary";

import diseas from "../../data/diseaseList.json";
import medications from "../../data/medicationList.json";
import alergy from "../../data/alergyList.json";
import infection from "../../data/infectionList.json";
import badHabbits from "../../data/badHabbitsList.json";

export default function Info() {

    const { userData, setUserData, loadUserData, saveUserData } = useUserStore();

    console.log(userData);

    return (
        <form className="main">
            <div className="content">
                <div className="content_head">

                    <div className="breadcrumbs">
                        <a href="client.html" className="breadcrumbs_link">Личный кабинет</a>
                        <span className="breadcrumbs_sep">/</span>
                        <span className="breadcrumbs_text">Медицинская информация</span>
                    </div>

                    <div className="title title-page">Медицинская информация</div>

                </div>
                <div className="content_body">
                <InfoArticle
                    title="Жалобы"
                    descriptionTag="commentTag"
                    fieldName="comment"
                    useTextArea
                    textAreaPlaceholder="Опишите, пожалуйста, основное, что вас беспокоит"
                />



                    <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Хронические заболевания</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control control-g24">
                                    <span className="control_title control_title-notice">
                                        Есть ли у вас хронические заболевания?
                                        <Description tag="chronicDiseasesTag" />
                                    </span>

                                    <YesNoSelector
                                        labelYes="Есть"
                                        labelNo="Нет"
                                        fieldName="chronicDiseases"
                                    />

                                    <SelectorWithComments
                                        options={diseas}
                                        placeholder="Выберите один или несколько"
                                        fieldName="diseaseList"
                                    />

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
                                    <span className="control_title control_title-notice">
                                        Принимали ли ранее медикаменты
                                        <Description tag="medicationsTag" />
                                    </span>

                                    <YesNoSelector
                                        labelYes="Есть"
                                        labelNo="Нет"
                                        fieldName="medications"
                                    />
                                    <SelectorWithComments
                                        options={medications}
                                        placeholder="Выберите один или несколько"
                                        fieldName="medicationList"
                                    />
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
                                    <span className="control_title control_title-notice">
                                        Были у вас ранее операции?
                                        <Description tag="surgeriesTag" />
                                        </span>
                                        <YesNoSelector labelYes="Да" labelNo="Нет" fieldName="surgeries" />
                                        <TextAreaField id="surgeriesComment" name="surgeriesComment" placeholder="Напишите пожалуйста какие операции у вас были..." />
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
                                    <span className="control_title control_title-notice">
                                        У вас есть аллергия или лекарственная неперносимость?
                                        <Description tag="alergyTag" />
                                    </span>

                                    <YesNoSelector labelYes="Да" labelNo="Нет" fieldName="alergy" />

                                    <SelectorWithComments
                                        options={alergy}
                                        placeholder="Выберите один или несколько"
                                        fieldName="alergyList"
                                    />

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
                                    <span className="control_title control_title-notice">
                                        Были ли или есть у вас инфекционные заболевания?
                                        <Description tag="infectionTag" />
                                    </span>
                                     <YesNoSelector labelYes="Да" labelNo="Нет" fieldName="infection" />

                                     <SelectorWithComments
                                        options={infection}
                                        placeholder="Выберите один или несколько"
                                        fieldName="infectionList"
                                    />

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
                                    <label className="control_title control_title-notice" htmlFor="comment">
                                            Есть ли у вас наследственные заболевания?
                                            <Description tag="inheritanceDiseases" />
                                    </label>
                                    <TextAreaField id="inheritanceDiseasesComment" name="inheritanceDiseasesComment" placeholder="Напишите пожалуйста есть ли у вас наследственные заболевания..." />
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
                                    <span className="control_title control_title-notice">
                                        Есть ли у вас вредные привычки?
                                        <Description tag="badHabbitsTag" />
                                    </span>

                                    <YesNoSelector labelYes="Да" labelNo="Нет" fieldName="badHabbits" />
                                    <SelectorWithComments
                                        options={badHabbits}
                                        placeholder="Выберите один или несколько"
                                        fieldName="badHabbitsList"
                                    />

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
                                    <span className="control_title control_title-notice">
                                        Беременны в настоящий момент?
                                        <Description tag="pregnantTag" />
                                    </span>

                                    <YesNoSelector labelYes="Да" labelNo="Нет" fieldName="pregnant" />
                                    
                                </div>
                            </div>
                        </div>
                    </article>
                    {/* <article className="article">
                        <div className="article_head">
                            <div className="title title-article">Больничный лист</div>
                        </div>
                        <div className="article_body">
                            <div className="form_controls">
                                <div className="control control-g24">
                                    <span className="control_title control_title-notice">
                                        Нужен ли больничный лист?
                                        <Description tag="sickLeaveTag" />
                                    </span>
                                    <YesNoSelector labelYes="Да" labelNo="Нет" fieldName="sickLeave" />
                                </div>
                            </div>
                        </div>
                    </article> */}
                             <InfoArticle
            title="Больничный лист"
            descriptionTag="sickLeaveTag"
            fieldName="sickLeave"
          />
                </div>
            </div>
            <aside className="aside aside-right">
                <div className="widget">
                    <div className="widget_title">Информация</div>
                    <div className="progress progress-dark" data-progress="about">
                        <div className="progress_bar">
                            <span
                                className="progress_line"
                                style={{ width: '50%' }}
                            ></span>
                        </div>
                        <p className="progress_text">Заполнено <span className="progress_value">50%</span></p>
                    </div>
                    <div className="widget_actions">
                        <button type="submit" className="btn btn-main btn-fw">Сохранить</button>
                        <a href="info.html" className="btn btn-main btn-fw">Далее</a>
                    </div>
                </div>
            </aside>
        </form>
    )
}

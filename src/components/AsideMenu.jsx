import React from 'react';
import Tab from './AsideMenu/Tab';
import ProgressTab from './AsideMenu/ProgressTab';
import { useTabStore } from '../store';

export default function AsideMenu() {
    const { activeTab, setActiveTab } = useTabStore(); // Получаем состояние и функцию изменения

    return (
        <aside id="menu" className="aside aside-left gradient">
            <ul className="menu">
                <ProgressTab
                    text="Информация о пациенте"
                    progress={50}
                    active={activeTab === 'about'}
                    onClick={() => setActiveTab('about')}
                />
                <ProgressTab
                    text="Медицинская информация"
                    progress={76}
                    active={activeTab === 'info'}
                    onClick={() => setActiveTab('info')}
                />
                <ProgressTab
                    text="Документы и анализы пациента"
                    progress={20}
                    active={activeTab === 'docs'}
                    onClick={() => setActiveTab('docs')}
                />
                <Tab
                    text="Правила при госпитализации"
                    active={activeTab === 'rules'}
                    onClick={() => setActiveTab('rules')}
                />
                <Tab
                    text="Рекомендации после операции"
                    active={activeTab === 'recomendation'}
                    onClick={() => setActiveTab('recomendation')}
                />
                <Tab
                    text="Чат с клиникой"
                    active={activeTab === 'chat'}
                    onClick={() => setActiveTab('chat')}
                />
                <Tab
                    text="Контакты"
                    active={activeTab === 'contacts'}
                    onClick={() => setActiveTab('contacts')}
                />
            </ul>
        </aside>
    );
}

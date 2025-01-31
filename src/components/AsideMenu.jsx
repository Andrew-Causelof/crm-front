import React from 'react';
import Tab from './AsideMenu/Tab';
import ProgressTab from './AsideMenu/ProgressTab';
import { useTabStore, useUserStore } from '../store';

export default function AsideMenu() {
    const { activeTab, setActiveTab } = useTabStore(); // Получаем состояние и функцию изменения
    const { userData, setUserData } = useUserStore();

    return (
        <aside id="menu" className="aside aside-left gradient">
            <ul className="menu">
                <ProgressTab
                    text="Информация о пациенте"
                    progress={50}
                    active={userData.activeTab === 'about'}
                    onClick={() => setUserData('activeTab','about')}
                />
                <ProgressTab
                    text="Медицинская информация"
                    progress={76}
                    active={userData.activeTab === 'info'}
                    onClick={() => setUserData('activeTab','info')}
                />
                <ProgressTab
                    text="Документы и анализы пациента"
                    progress={20}
                    active={userData.activeTab === 'docs'}
                    onClick={() => setUserData('activeTab','docs')}
                    
                />
                <Tab
                    text="Правила при госпитализации"
                    active={userData.activeTab === 'rules'}
                    onClick={() => setUserData('activeTab','rules')}
                />
                <Tab
                    text="Рекомендации после операции"
                    active={userData.activeTab === 'recomendation'}
                    onClick={() => setUserData('activeTab','recomendation')}
                />
                <Tab
                    text="Чат с клиникой"
                    active={userData.activeTab === 'chat'}
                    onClick={() => setUserData('activeTab','chat')}
                />
                <Tab
                    text="Контакты"
                    active={userData.activeTab === 'contacts'}
                    onClick={() => setUserData('activeTab','contacts')}
                />
            </ul>
        </aside>
    );
}

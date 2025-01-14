import React from "react";
import About from "./MainContent/About";
import Chat from "./MainContent/Chat";
import Docs from "./MainContent/Docs";
import Info from "./MainContent/Info";
import Recomendation from "./MainContent/Recomendation";
import Rules from "./MainContent/Rules";
import { useTabStore } from "../store";

export default function MainContent() {
    const { activeTab } = useTabStore(); // Получаем текущий активный таб

    return (
        <>
            {activeTab === 'about' && <About />}
            {activeTab === 'info' && <Info />}
            {activeTab === 'docs' && <Docs />}
            {activeTab === 'rules' && <Rules />}
            {activeTab === 'recomendation' && <Recomendation />}
            {activeTab === 'chat' && <Chat />}
        </>
    );
}

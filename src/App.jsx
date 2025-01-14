import Header from './components/Header.jsx';
import AsideMenu from './components/AsideMenu.jsx';
import MainContent from './components/MainContent.jsx';
import Messengers from './components/Messengers.jsx';

function App() {
  return (
    <div className="page page-client">
      <div className="layout">
        <Header />
        <AsideMenu />
        <MainContent />
      </div>
      <Messengers />
    </div>
  );
}

export default App;
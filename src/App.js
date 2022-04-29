import Header from './components/Header';
import MainPage from './components/MainPage';
import Sidebar from "./components/Sidebar";
import FloatButton from "./components/FloatButton";

import './App.scss';

function App() {

  return (
    <div 
      className="App"
      data-testid="AppTest"
    >
      <Header />
      <div className="Container">
        <Sidebar />
        <MainPage />
        <FloatButton />
      </div>
    </div>
  );
}

export default App;

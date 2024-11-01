// import logo from './logo.svg';
import './App.scss';
import MainPage from '../mainPage/MainPage';
import unionImage from '../../assets/Union.png'
import Header from '../header/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={unionImage} alt="circles" className="container_unionCircles"/>
        <Header></Header>
        <hr/>
        <MainPage></MainPage>
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.scss';
import Header from '../header/Header';
import MainRouterPage from '../pages/MainRouterPage';
import HelpRouterPage from '../pages/HelpRouterPage';
import '../../style/style.scss';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

function App() {
    console.log('Render App')

    const [refArr, setRefArr] = useState([])

    const getRefArr = (arr) =>{   
        setRefArr(arr)
    }

    const getRefs = async () => {
        return new Promise((resolve) => {
            resolve(refArr);
        });
    };
   
    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <section  className="app">
                    <Header childRefs={getRefs}></Header>
                    <main>
                        <div className="container">
                            <Routes>
                                <Route  path = '/' element={<MainRouterPage getRefArr={getRefArr}></MainRouterPage>}/>
                                <Route  path = '/help' element={<HelpRouterPage></HelpRouterPage>}/>
                            </Routes>
                        </div>
                    </main>
                </section>
            </Router>
        </I18nextProvider>
        
    );
}

export default App;

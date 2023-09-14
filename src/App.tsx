import { FC } from 'react';
import './styles/App.css';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import HireBlock from './components/HireBlock';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Modal from './components/Modal';
import Loader from './components/Loader';

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

const App:FC = () => {
  return (
    <div className="App">
      <Loader></Loader>
      <Welcome></Welcome>
      <Services></Services>
      <Portfolio></Portfolio>
      <HireBlock></HireBlock>
      <Feedback></Feedback>
      <Footer></Footer>
      <Modal></Modal>
    </div>
  );
}

export default App;

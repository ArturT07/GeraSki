import './App.css';
import Header from './components/Header.jsx';
import "./css/reset.css";
import MainSection from './components/MainSection.jsx';

function App() {

  return (
    <>
    <header>
      <Header />
    </header>
     <main>
      <section className='main-section'>
        <MainSection />
      </section>
     </main>
    </>
  )
}

export default App


import './App.css';
import Header from './Component/Header/Header';
import NavBar from './Component/Navbar/Nav-Bar';
import ApiSection from './Component/apiSection/ApiSection';
import Doaa from './Component/doaa/Doaa';
import Footer from './Component/footer/Footer';
import Service from './Component/funcsection/Service';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Service />
      <Doaa />
      <ApiSection />
      <Footer />
    </>
  );
}

export default App;

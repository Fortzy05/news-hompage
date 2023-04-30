
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsBody from './components/NewsBody';

function App() {
  

  return (
    <div className="text-[15px]">
      <Navbar />
      <NewsBody />
      <Footer />
    </div>
  );
}

export default App

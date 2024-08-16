import './App.css';
import './responsive.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Educations/Education';
import Projects from './pages/Projects/Projects';
import Techstack from './pages/Techstack/Techstack';
import WorkExp from './pages/workExp/WorkExp';
import ScrollToTop from 'react-scroll-to-top';
import { useTheme } from './context/ThemeContext';
import Tada from 'react-reveal/Tada';

function App() {
  const year = new Date().getFullYear();
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <Layout />
        <div className='container'>
          <About />
          <Education />
          <Techstack />
          {/* <Projects /> */}
          <WorkExp />
          <Contact />
        </div>
        <div className='footer pb-3 ms-3'>
          <Tada>
            <h4 className="text-center">Made With 😍 Chheng &copy; {year}</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop color='#f29f77' smooth style={{backgroundColor: '#1e1e2c', borderRadius: '80px'}} />
    </>
  );
}

export default App;


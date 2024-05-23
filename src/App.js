import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from "./extra/Themes";
import HeroSection from './components/HeroSection';
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from './Education';
import { BrowserRouter as Router } from 'react-router-dom';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <Router>
      <Navbar />
      <Body>
        <HeroSection/>
        <Skills/>
        <Education/>
      </Body>
    </Router>
   </ThemeProvider>
  );
}

export default App;

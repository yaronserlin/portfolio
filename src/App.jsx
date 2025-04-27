import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import Container from './components/Container';

function App() {
  const websiteName = "Yaron Serlin";

  useEffect(() => {
    document.title = websiteName;
  }, [websiteName]);

  return (
    <>
      <Container className="page-container">
        <Navbar websiteName={websiteName} />
        <Container className="content">
          <Outlet />
        </Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;

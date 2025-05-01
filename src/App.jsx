import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import './styles/App.css';


function App() {
  const websiteName = "Yaron Serlin";

  useEffect(() => {
    document.title = websiteName;
  }, [websiteName]);

  return (

    <Outlet />

  );
}

export default App;

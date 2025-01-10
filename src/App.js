import './App.css';
import AccordionComponent from './components/accordionComponent';
import { NavComponent } from './components/navComponent';
import { TableComponent } from './components/tableComponent';
import TabsComponent from './components/tabsComponent';
import { useEffect, useState } from 'react';

function App() {
  const [direction, setDirection] = useState("ltr");

  // Load direction from localStorage on initial render
  useEffect(() => {
    const storedDir = localStorage.getItem("direction");
    if (storedDir) {
      setDirection(storedDir);
      document.documentElement.setAttribute("dir", storedDir);
    } else {
      document.documentElement.setAttribute("dir", "ltr"); // Default to LTR
    }
  }, []);

  // Toggle direction and save to localStorage
  const toggleDirection = () => {
    const newDirection = direction === "ltr" ? "rtl" : "ltr";
    setDirection(newDirection);
    document.documentElement.setAttribute("dir", newDirection);
    localStorage.setItem("direction", newDirection); // Save to localStorage
  };
  
  return (
    <div className="App relative pt-20" dir={direction} >
      <button
        onClick={toggleDirection}
        className="absolute z-10 top-4 right-4 bg-blue-500 text-white p-2 rounded">
        Toggle Direction
      </button>

      <NavComponent />


      Accordion
      <AccordionComponent />
      
      Tbale
      <TableComponent />
      
      Tabs
      <TabsComponent />
   
    </div>
  );
}

export default App;


import { useState, useEffect} from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from  './scenes/DotGroup'
import Landing from './scenes/Landing'
import LineGradient from './components/LineGradient'
import MySkills from './scenes/MySkills'
import Projects from './scenes/Projects'
import Testimonials from './scenes/Testimonials'
import Contact from './scenes/Contact'


function App() {
  //Selecteaza partea de navigare in care te afli
  const [selectedPage, setSelectedPage] = useState("home");
  //Check if the min-width is above 1060px
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  //Create isTopOfPage STATE
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect (() => {
    //function handleScroll
    const handleScroll= () => {
      //Check if the window.scrollY == 0 // then  const [isTopOfPage, setIsTopOfPage] = useState(true) = TRUE
      if(window.scrollY == 0) setIsTopOfPage(true);
      if(window.scrollY !==0) setIsTopOfPage(false);
    }
    //Remove eventListener
     window.addEventListener("scroll", handleScroll)
     return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar 
      isTopOfPage={isTopOfPage} 
      selectedPage = {selectedPage} 
      setSelectedPage = {selectedPage}
      />
  <div className="w-5/6 mx-auto md:h-full">
    {/* If is above medium screens and if that is true , create DotGroup */}
   {isAboveMediumScreens && (
    <DotGroup
    //Padd in selected page to DotGroup
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
   )}
   <Landing setSelectedPage={setSelectedPage}/>
  </div>
  {/* <LineGradient/> */}
  <div className="w-5/6 mx-auto md:h-full"> 
   <MySkills/>
  </div>
  {/* <LineGradient/> */}
  {/* PROJECTS */}
  <div className="w-5/6 mx-auto"> 
  <Projects/>
  </div>
  {/* <LineGradient/> */}
  {/* Testimonials */}
  <div className="w-5/6 mx-auto md:h-full"> 
  <Testimonials/>
  </div>
  {/* <LineGradient/> */}
   {/* Contact */}
   <div className="w-5/6 mx-auto md:h-full"> 
  <Contact/>
  </div>
    </div>

  );
}

export default App;

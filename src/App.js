// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import AboutUs from './components/About/AboutUs';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Route path="/" exact component={Home} />
//       <Route path="/about" component={AboutUs} />
//       <Route path="/Navbar" component={Navbar}/>
//       {/* Add more routes for other sections */}
//     </Router>
//   );
// };

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import the Routes element
// import './components/Navbar/Navbar.css';
// import './components/Contact/ContactUs.css';

// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import AboutUs from './components/About/AboutUs';
// import AllJobs from './components/AllJobs/AllJobs';
// import ContactUs from './components/Contact/ContactUs';
// import BookDemo from './components/BookDemo';


// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes> 
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/AllJobs" element={<AllJobs />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/bookdemo" element={<BookDemo />} />
      
        
//       </Routes>
//     </Router>
//   );
// };

// export default App;








// import React from 'react';
// import './components/Navbar/Navbar.css';
// import './components/Contact/ContactUs.css'; import './components/Navbar/Navbar.css';
// import './components/Contact/ContactUs.css'; import './components/Navbar/Navbar.css';
// import './components/Contact/ContactUs.css'; import './components/Navbar/Navbar.css';
// import './components/Contact/ContactUs.css';
// import Footer from './components/Footer/Footer';


// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import AboutUs from './components/About/AboutUs';
// import AllJobs from './components/AllJobs/AllJobs';
// import ContactUs from './components/Contact/ContactUs';
// import BookDemo from './components/BookDemo';
// // import BookDemo from './components/BookDemo';

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes> 
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/AllJobs" element={<AllJobs />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/bookdemo" element={<BookDemo />} />
       
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default App;






// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import 'Routes' and 'Route'
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import AboutUs from './components/About/AboutUs';
// import AllJobs from './components/AllJobs/AllJobs';
// import ContactUs from './components/Contact/ContactUs';
// import BookDemo from './components/BookDemo';
// import Footer from './components/Footer/Footer'; // Import the 'Footer' component

// const App = () => {
//   return (
//     <Router>
//       <>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/AllJobs" element={<AllJobs />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/bookdemo" element={<BookDemo />} />
//         </Routes>
//         <Footer />
//       </>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import AboutUs from './components/About/AboutUs';
// import AllJobs from './components/AllJobs/AllJobs';
// import ContactUs from './components/Contact/ContactUs';
// import BookDemo from './components/BookDemo';
// // import Footer from './components/Footer/Footer';

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/AllJobs" element={<AllJobs />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/bookdemo" element={<BookDemo />} />
//         </Routes>
//       </Router>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import AboutUs from './components/About/AboutUs';
// import AllJobs from './components/AllJobs/AllJobs';
// import ContactUs from './components/Contact/ContactUs';
// import BookDemo from './components/BookDemo';
// // import Footer from './components/Footer/Footer';

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/AllJobs" element={<AllJobs />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/bookdemo" element={<BookDemo />} />
//         </Routes>
//       </Router>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default App;










import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import the Routes element
import './components/Navbar/Navbar.css';
import './components/Contact/ContactUs.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutUs from './components/About/AboutUs';
import AllJobs from './components/AllJobs/AllJobs';
import ContactUs from './components/Contact/ContactUs';
import BookDemo from './components/BookDemo';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/AllJobs" element={<AllJobs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/bookdemo" element={<BookDemo />} />
        
      </Routes>
    </>
  );
};

export default App;

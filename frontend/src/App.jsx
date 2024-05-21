// /* eslint-disable no-unused-vars */
// import './App.css';
// import { BrowserRouter as Router, Route, Routes ,useLocation} from 'react-router-dom';
// import NavbarDefault from './components/Navbar1';
// import AboutRentify from './components/About';
// import Login from './components/Login';
// import Sign from './components/Sign';
// import DashBoard from './page/DashBoard';

// function App() {
//   const location = useLocation();

//   // Conditionally render NavbarDefault based on current route
//   const renderNavbar = () => {
//     if (location.pathname === '/dashboard') {
//       return null; // Return null if on dashboard route
//     }
//     return <NavbarDefault />; // Render NavbarDefault for other routes
//   };

//   return (
//     <Router>
//       <div className="App">
//         {/* <NavbarDefault /> */}
//         {renderNavbar()}
//         <Routes>
//           <Route path="/" element={<AboutRentify />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Sign />} />
//           <Route path ="/dashboard" element={<DashBoard/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavbarDefault from './components/Navbar1';
import AboutRentify from './components/About';
import Login from './components/Login';
import Sign from './components/Sign';
import DashBoard from './page/DashBoard';

function App() {
  return (
    <Router>
      <div className="App">
        <RoutesRenderer />
      </div>
    </Router>
  );
}

function RoutesRenderer() {
  const location = useLocation();

  // Define routes
  const routes = [
    { path: '/', element: <AboutRentify /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Sign /> },
    { path: '/dashboard', element: <DashBoard /> },
  ];

  // Check if the current route matches any of the defined routes
  const matchedRoute = routes.find(route => route.path === location.pathname);

  // Conditionally render NavbarDefault based on the matched route
  return (
    <>
      {matchedRoute && matchedRoute.path !== '/dashboard' && <NavbarDefault />}
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;


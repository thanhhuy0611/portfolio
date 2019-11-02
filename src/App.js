import React from 'react';

import Navigation from './components/Navigation';
import Masthead from './components/Masthead';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import './App.css';
import ScrollUpButton from "react-scroll-up-button";


//import router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <ScrollUpButton
          EasingType="linear"
          StopPosition={0}
          ShowAtPosition={200}
          AnimationDuration={600}
        />
      </div>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Masthead}></Route>

        <Route path='/about' exact component={AboutSection}></Route>

        <Route path='/project' exact component={Projects}></Route>

        <Route path='/contact' exact component={ContactSection}></Route>

      </Switch>

    </Router>
  );
}

export default App;



// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
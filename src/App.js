// import logo from './logo.svg';
// import './App.css';

import './style/index.scss'
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";

function App() {
  return (
    <main className="container">
      <Header />
      <AboutMe />
      <Education />
    </main>
  );
}

export default App;

import Article from "./components/Article";
import Header from "./components/Header";
import Section from "./components/Section";

import "./style.css";

function App() {
  return (
    <div id="hero">
      <Header/>
      {/* input container */}
      <Article/>
      {/* image container */}
    <Section/>
    </div>
  );
}

export default App;

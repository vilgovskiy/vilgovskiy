import './App.css';
import { useRef } from 'react';
import Layout from './components/Layout/Layout';
import About from "./components/Content/About/About";
import FadeInWrapper from './components/UI/FadeInWrapper/FadeInWrapper';

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  let scrollToIntroduction = () => {
    ref1.current.scrollIntoView();
  }

  let scrollToAbout = () => {
    ref2.current.scrollIntoView();
  }

  let scrollToOther = () => {
    ref3.current.scrollIntoView();
  }
  return (
    <div className="App">
      <Layout refs={[scrollToIntroduction, scrollToAbout, scrollToOther]}> 
        <FadeInWrapper><About ref={ref1}/></FadeInWrapper>
        <FadeInWrapper><About ref={ref2}/></FadeInWrapper>
        <FadeInWrapper><About ref={ref3}/></FadeInWrapper>
      </Layout>
    </div>
  );
}

export default App;

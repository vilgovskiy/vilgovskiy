import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./components/Content/About/About";
import FadeInWrapper from "./components/UI/FadeInWrapper/FadeInWrapper";
import Introduction from "./components/Introduction/Introduction";
import Content from "./components/Content/Content";
import Other from "./components/Content/Other/Other";

function App() {
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);

  // let scrollToIntroduction = (e) => {
  //   ref1.current.scrollIntoView({behaviour: "smooth"});
  // };

  // let scrollToAbout = (e) => {
  //   ref2.current.scrollIntoView({behaviour: "smooth"});
  // };

  // let scrollToOther = (e) => {
  //   ref3.current.scrollIntoView({behaviour: "smooth"});
  // };
  return (
    <div className="App">
      <Layout>
        <Introduction />
        <Content>
          <FadeInWrapper>
            <About />
          </FadeInWrapper>
          <FadeInWrapper>
            <Other />
          </FadeInWrapper>
        </Content>
      </Layout>
    </div>
  );
}

export default App;

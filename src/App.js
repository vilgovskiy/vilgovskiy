import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./components/Content/About/About";
import FadeInWrapper from "./components/UI/FadeInWrapper/FadeInWrapper";
import Introduction from "./components/Introduction/Introduction";
import Content from "./components/Content/Content";
import TechStack from "./components/Content/TechStack/TechStack";
import Timeline from "./components/Content/Timeline/Timeline";
import Projects from "./components/Content/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Layout>
        <Introduction />
        <Content>
          <FadeInWrapper>
            <About />
          </FadeInWrapper>
          <FadeInWrapper>
            <TechStack />
          </FadeInWrapper>
          <FadeInWrapper>
            <Timeline/>
          </FadeInWrapper>
          <FadeInWrapper>
            <Projects/>
          </FadeInWrapper>
        </Content>
      </Layout>
    </div>
  );
}

export default App;

import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./components/Content/About/About";
import FadeInWrapper from "./components/UI/FadeInWrapper/FadeInWrapper";
import Introduction from "./components/Introduction/Introduction";
import Content from "./components/Content/Content";
import Other from "./components/Content/Other/Other";
import TechStack from "./components/Content/TechStack/TechStack";

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
            <Other />
          </FadeInWrapper>
        </Content>
      </Layout>
    </div>
  );
}

export default App;

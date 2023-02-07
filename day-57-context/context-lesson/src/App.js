import "./App.css";
import Heading from "./components/Heading";
import LayOut from "./components/LayOut";
import Section from "./components/Section";
import UserInfo from "./components/UserInfo";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const userName = "Tsogtoo";
  return (
    <div className="App">
      <h1>Day-57 React-Context</h1>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section level={4}>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;

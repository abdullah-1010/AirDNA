import Basictabs from "./components/Basictabs";
import Body from "./components/Body";
import Header from "./components/Header";
import Labels from "./components/Labels";
import "./globals.css";

const App = () => {
  return (
    <>
      <Header />
      <Labels />
      <Body />
      <Basictabs />
    </>
  );
};

export default App;

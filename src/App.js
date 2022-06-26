// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Nav />
      </div>

      <main>
        <div>{/* <Project></Project> */}</div>
        <About></About>
      </main>
      <Footer />
    </div>
  );
}

export default App;

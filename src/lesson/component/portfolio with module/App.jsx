import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Project from "./Project";

function App() {
  const name = "John Doe";
  const profession = "Full Stack Developer";
  const projects = [
    {
      title: "Project One",
      desciption: "A web application built using React and Node.js",
      link: "#",
    },
    {
      title: "Project Two",
      desciption: "An ecommerce platform built using Django",
      link: "#",
    },
  ];
  return (
    <div className="App">
      {/* Header section */}
      <Header />

      {/* About section */}
      <About />

      {/* Projects Section */}
      <Project />

      {/* Contact section */}
      <Contact />

      {/* footer section */}
      <Footer />
    </div>
  );
}

export default App;

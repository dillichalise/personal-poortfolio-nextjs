import { Footer } from "./Footer";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { About } from "./About";
import { Experience } from "./Experience";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Intro />
        <About />
        <Experience />
      </div>
      <Footer />
    </>
  );
};

export { Profile };

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Intro } from "./Intro";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Intro />
      </div>
      <Footer />
    </>
  );
};

export { Profile };

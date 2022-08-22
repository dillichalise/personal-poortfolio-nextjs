const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">About</div>
                <p>
                  Hi I am <strong>Dilli Raj Chalise</strong>, Welcome to my
                  personal website.
                </p>
                <p className="text-justify">
                  Experienced Full-stack Software Developer with a demonstrated
                  history of working in the information technology and services
                  industry. Skilled in Object-Oriented Programming (OOP),
                  Javascript: React JS, Node JS. Strong engineering professional
                  with a Bachelor degree education focused in Computer
                  Engineering fromKathmandu Engineering College. .
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">Basic Information</div>
                <div className="row">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Date of Birth:</strong>
                  </div>
                  <div className="col-sm-8">Feb 04, 1996</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Email:</strong>
                  </div>
                  <div className="col-sm-8">dillichalise@gmail.com</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Phone:</strong>
                  </div>
                  <div className="col-sm-8">+977 9841463272</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Address:</strong>
                  </div>
                  <div className="col-sm-8">
                    Banganga-04, Kapilvastu, Lumbini State, Nepal
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Language:</strong>
                  </div>
                  <div className="col-sm-8">Nepali, English, Hindi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };

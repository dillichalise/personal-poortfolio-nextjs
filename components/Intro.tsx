const Intro = () => {
  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small">
          <div
            className="page-header-image"
            data-parallax="true"
            filter-color="green"
          />
          <div className="container">
            <div className="content-center">
              <div className="h2 title">Dilli Raj Chalise</div>
              <p className="category text-white">Web Developer</p>
              <a
                className="btn btn-primary smooth-scroll mr-2"
                href="#contact"
                data-aos="zoom-in"
                data-aos-anchor="data-aos-anchor"
              >
                Hire Me
              </a>
              <a
                className="btn btn-primary"
                href="https://drive.google.com/open?id=1htUBBBw411Ppg30JR0GsEtTOjKpaT1sU"
                target="_blank"
                data-aos="zoom-in"
                data-aos-anchor="data-aos-anchor"
                rel="noreferrer"
              >
                View CV
              </a>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.instagram.com/dilli.chalise"
                  target="_blank"
                  rel="tooltip noreferrer"
                  title="Follow me on Instagram"
                >
                  <i className="fa fa-instagram" />
                </a>
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.linkedin.com/in/dillichalise"
                  target="_blank"
                  rel="tooltip noreferrer"
                  title="Follow me on Linkedin"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://github.com/dillichalise"
                  target="_blank"
                  rel="tooltip noreferrer"
                  title="Follow me on Github"
                >
                  <i className="fa fa-github" />
                </a>
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://twitter.com/dillichalise"
                  target="_blank"
                  rel="tooltip noreferrer"
                  title="Follow me on Twitter"
                >
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Intro };

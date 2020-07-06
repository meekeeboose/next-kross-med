import Head from "next/head";

export default function Home() {
  let date = new Date().getFullYear();

  return (
    <div>
      <Head>
        <title>Mediavil Web Development</title>

        <link rel="stylesheet" href="plugins/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="plugins/slick/slick.css" />
        <link rel="stylesheet" href="plugins/themify-icons/themify-icons.css" />

        <link href="css/style.css" rel="stylesheet" />

        <link
          rel="shortcut icon"
          href="images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />

        {/* <!-- jQuery --> */}
        <script src="plugins/jQuery/jquery.min.js"></script>
        {/* <!-- Bootstrap JS --> */}
        <script src="plugins/bootstrap/bootstrap.min.js"></script>
        {/* <!-- slick slider --> */}
        <script src="plugins/slick/slick.min.js"></script>
        {/* <!-- filter --> */}
        <script src="plugins/shuffle/shuffle.min.js"></script>
        {/* Mains script */}
        <script src="js/script.js"></script>
      </Head>

      <header className="navigation fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand font-tertiary h3" href="index.html">
            <img src="images/logo.png" alt="Mediavil" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-center" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="hero-area bg-primary" id="parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <h1 className=" font-tertiary" style={{ color: "#00C3FF" }}>
                Web <br /> Development <br /> Dumaguete
              </h1>
            </div>
          </div>
        </div>
        <div className="layer-bg w-100">
          <img
            className="img-fluid w-100"
            src="images/illustrations/leaf-bg.png"
            alt="bg-shape"
          />
        </div>
        <div className="layer" id="l2">
          <img src="images/illustrations/dots-cyan.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l3">
          <img src="images/illustrations/leaf-orange.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l4">
          <img src="images/illustrations/dots-orange.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l5">
          <img src="images/illustrations/leaf-yellow.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l6">
          <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l7">
          <img
            src="images/illustrations/dots-group-orange.png"
            alt="bg-shape"
          />
        </div>
        <div className="layer" id="l8">
          <img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l9">
          <img src="images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
        </div>

        <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
          <li className="mb-3">
            <a className="text-white" href="#">
              <i className="ti-facebook"></i>
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white" href="#">
              <i className="ti-instagram"></i>
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white" href="#">
              <i className="ti-dribbble"></i>
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white" href="#">
              <i className="ti-twitter"></i>
            </a>
          </li>
        </ul>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <p className="font-secondary paragraph-lg text-dark">
                Dedicated team committed to establish excellence in all areas of
                Web design, development and digital marketing. We see to it that
                our services meet your expectations.
              </p>
              <a href="about.html" className="btn btn-transparent">
                know more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- skills --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Skills</h2>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="card shadow text-center">
                <div
                  className="position-relative rounded-top progress-wrapper"
                  data-color="#fdb157"
                >
                  <div className="wave" data-progress="90%"></div>
                </div>
                <div className="card-footer bg-white">
                  <h4 className="card-title">Web Design (90%)</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="card shadow text-center">
                <div
                  className="position-relative rounded-top progress-wrapper"
                  data-color="#9473e6"
                >
                  <div className="wave" data-progress="60%"></div>
                </div>
                <div className="card-footer bg-white">
                  <h4 className="card-title">Logo Design (60%)</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="card shadow text-center">
                <div
                  className="position-relative rounded-top progress-wrapper"
                  data-color="#bdecf6"
                >
                  <div className="wave" data-progress="80%"></div>
                </div>
                <div className="card-footer bg-white">
                  <h4 className="card-title">After Effects (80%)</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="card shadow text-center">
                <div
                  className="position-relative rounded-top progress-wrapper"
                  data-color="#ffbcaa"
                >
                  <div className="wave" data-progress="70%"></div>
                </div>
                <div className="card-footer bg-white">
                  <h4 className="card-title">Web App (70%)</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /skills --> */}

      {/* <!-- experience --> */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Experience</h2>
            </div>
            <div className="col-lg-3 col-md-4 text-center">
              <img src="images/experience/icon-1.png" alt="icon" />
              <p className="mb-0">Jan 2007 - Feb 2009</p>
              <h4>Junior UX Designer</h4>
              <h6 className="text-light">WEBEX</h6>
            </div>
            <div className="col-lg-3 col-md-4 text-center">
              <img src="images/experience/icon-2.png" alt="icon" />
              <p className="mb-0">Mar 2009 - Aug 2014</p>
              <h4>UX & UI Designer</h4>
              <h6 className="text-light">AUGMEDIX</h6>
            </div>
            <div className="col-lg-3 col-md-4 text-center">
              <img src="images/experience/icon-3.png" alt="icon" />
              <p className="mb-0">Sep 2014 - Present</p>
              <h4>Senior UI Designer</h4>
              <h6 className="text-light">THEMEFISHER</h6>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ./experience --> */}

      {/* <!-- education --> */}
      <section className="section position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Education</h2>
            </div>
            <div className="col-lg-6 col-md-6 mb-80">
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                </div>
                <div>
                  <p className="text-dark mb-1">2006</p>
                  <h4>Marters in UX Design</h4>
                  <p className="mb-0 text-light">
                    Masassusets Institute of Technology
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-80">
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                </div>
                <div>
                  <p className="text-dark mb-1">2004</p>
                  <h4>Honours in Fine Arts</h4>
                  <p className="mb-0 text-light">Harvard University</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-80">
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                </div>
                <div>
                  <p className="text-dark mb-1">2000</p>
                  <h4>Higher Secondary Certificat</h4>
                  <p className="mb-0 text-light">Cardiff School</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-80">
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                </div>
                <div>
                  <p className="text-dark mb-1">1998</p>
                  <h4>Secondary School Certificate</h4>
                  <p className="mb-0 text-light">Cardiff School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bg image --> */}
        <img
          className="img-fluid edu-bg-image w-100"
          src="images/backgrounds/education-bg.png"
          alt="bg-image"
        />
      </section>
      {/* <!-- /education --> */}

      {/* <!-- services --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">Services</h2>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card hover-shadow shadow">
                <div className="card-body text-center px-4 py-5">
                  <i className="ti-palette icon mb-5 d-inline-block"></i>
                  <h4 className="mb-4">UI Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card active-bg-primary hover-shadow shadow">
                <div className="card-body text-center px-4 py-5">
                  <i className="ti-vector icon mb-5 d-inline-block"></i>
                  <h4 className="mb-4">UX Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card hover-shadow shadow">
                <div className="card-body text-center px-4 py-5">
                  <i className="ti-panel icon mb-5 d-inline-block"></i>
                  <h4 className="mb-4">Interaction Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /services --> */}

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">Portfolio</h2>
            </div>
          </div>
          <div className="row shuffle-wrapper">
            <div className="col-lg-4 col-6 mb-4 shuffle-item">
              <div className="position-relative rounded hover-wrapper">
                <img
                  src="images/portfolio/item-1.png"
                  alt="portfolio-image"
                  className="img-fluid rounded w-100"
                />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a
                      className="btn btn-light btn-sm"
                      href="project-single.html"
                    >
                      view project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6 mb-4 shuffle-item">
              <div className="position-relative rounded hover-wrapper">
                <img
                  src="images/portfolio/item-2.png"
                  alt="portfolio-image"
                  className="img-fluid rounded w-100"
                />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a
                      className="btn btn-light btn-sm"
                      href="project-single.html"
                    >
                      view project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6 mb-4 shuffle-item">
              <div className="position-relative rounded hover-wrapper">
                <img
                  src="images/portfolio/item-3.png"
                  alt="portfolio-image"
                  className="img-fluid rounded w-100"
                />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a
                      className="btn btn-light btn-sm"
                      href="project-single.html"
                    >
                      view project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6 mb-4 shuffle-item">
              <div className="position-relative rounded hover-wrapper">
                <img
                  src="images/portfolio/item-4.png"
                  alt="portfolio-image"
                  className="img-fluid rounded w-100"
                />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a
                      className="btn btn-light btn-sm"
                      href="project-single.html"
                    >
                      view project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6 mb-4 shuffle-item">
              <div className="position-relative rounded hover-wrapper">
                <img
                  src="images/portfolio/item-5.png"
                  alt="portfolio-image"
                  className="img-fluid rounded w-100"
                />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a
                      className="btn btn-light btn-sm"
                      href="project-single.html"
                    >
                      view project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary position-relative testimonial-bg-shapes">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title text-white mb-5">Testimonials</h2>
            </div>
            <div className="col-lg-10 mx-auto testimonial-slider">
              {/* <!-- slider-item --> */}
              <div className="text-center testimonial-content">
                <i className="ti-quote-right text-white icon mb-4 d-inline-block"></i>
                <p className="text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,{" "}
                  <strong>
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </strong>{" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <img
                  className="img-fluid rounded-circle mb-4 d-inline-block"
                  src="images/testimonial/client-1.png"
                  alt="client-image"
                />
                <h4 className="text-white">Jesica Gomez</h4>
                <h6 className="text-light mb-4">CEO, Funder</h6>
              </div>
              {/* <!-- slider-item --> */}
              <div className="text-center testimonial-content">
                <i className="ti-quote-right text-white icon mb-4 d-inline-block"></i>
                <p className="text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,{" "}
                  <strong>
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </strong>{" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <img
                  className="img-fluid rounded-circle mb-4 d-inline-block"
                  src="images/testimonial/client-1.png"
                  alt="client-image"
                />
                <h4 className="text-white">Jesica Gomez</h4>
                <h6 className="text-light mb-4">CEO, Funder</h6>
              </div>
              {/* <!-- slider-item --> */}
              <div className="text-center testimonial-content">
                <i className="ti-quote-right text-white icon mb-4 d-inline-block"></i>
                <p className="text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,{" "}
                  <strong>
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </strong>{" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <img
                  className="img-fluid rounded-circle mb-4 d-inline-block"
                  src="images/testimonial/client-1.png"
                  alt="client-image"
                />
                <h4 className="text-white">Jesica Gomez</h4>
                <h6 className="text-light mb-4">CEO, Funder</h6>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bg shapes --> */}
        <img
          src="images/backgrounds/map.png"
          alt="map"
          className="img-fluid bg-map"
        />
        <img
          src="images/illustrations/dots-group-v.png"
          alt="bg-shape"
          className="img-fluid bg-shape-1"
        />
        <img
          src="images/illustrations/leaf-orange.png"
          alt="bg-shape"
          className="img-fluid bg-shape-2"
        />
        <img
          src="images/illustrations/dots-group-sm.png"
          alt="bg-shape"
          className="img-fluid bg-shape-3"
        />
        <img
          src="images/illustrations/leaf-pink-round.png"
          alt="bg-shape"
          className="img-fluid bg-shape-4"
        />
        <img
          src="images/illustrations/leaf-cyan.png"
          alt="bg-shape"
          className="img-fluid bg-shape-5"
        />
      </section>

      {/* <!-- client logo slider --> */}
      <section className="section pb-0">
        <div className="container">
          <div className="client-logo-slider d-flex align-items-center">
            <a href="#" className="text-center d-block outline-0 p-4">
              <img
                className="d-unset img-fluid"
                src="images/clients-logo/client-logo-1.png"
                alt="client-logo"
              />
            </a>
            <a href="#" className="text-center d-block outline-0 p-4">
              <img
                className="d-unset img-fluid"
                src="images/clients-logo/client-logo-2.png"
                alt="client-logo"
              />
            </a>
            <a href="#" className="text-center d-block outline-0 p-4">
              <img
                className="d-unset img-fluid"
                src="images/clients-logo/client-logo-3.png"
                alt="client-logo"
              />
            </a>
            <a href="#" className="text-center d-block outline-0 p-4">
              <img
                className="d-unset img-fluid"
                src="images/clients-logo/client-logo-4.png"
                alt="client-logo"
              />
            </a>
            <a href="#" className="text-center d-block outline-0 p-4">
              <img
                className="d-unset img-fluid"
                src="images/clients-logo/client-logo-5.png"
                alt="client-logo"
              />
            </a>
            <a href="#" className="text-center d-block outline-0 p-4">
              <img
                className="d-unset img-fluid"
                src="images/clients-logo/client-logo-1.png"
                alt="client-logo"
              />
            </a>
            <a href="#" className="text-center d-block outline-0 p-4">
              <img
                className="d-unset img-fluid"
                src="images/clients-logo/client-logo-2.png"
                alt="client-logo"
              />
            </a>
            <a href="#" className="text-center d-block outline-0 p-4">
              <img
                className="d-unset img-fluid"
                src="images/clients-logo/client-logo-3.png"
                alt="client-logo"
              />
            </a>
            <a href="#" className="text-center d-block outline-0 p-4">
              <img
                className="d-unset img-fluid"
                src="images/clients-logo/client-logo-4.png"
                alt="client-logo"
              />
            </a>
            <a href="#" className="text-center d-block outline-0 p-4">
              <img
                className="d-unset img-fluid"
                src="images/clients-logo/client-logo-5.png"
                alt="client-logo"
              />
            </a>
          </div>
        </div>
      </section>
      {/* <!-- /client logo slider --> */}

      {/* <!-- blog --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">Blogs</h2>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <article className="card shadow">
                <img
                  className="rounded card-img-top"
                  src="images/blog/post-3.jpg"
                  alt="post-thumb"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    <a className="text-dark" href="blog-single.html">
                      Amazon increase income 1.5 Million
                    </a>
                  </h4>
                  <p className="cars-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="blog-single.html" className="btn btn-xs btn-primary">
                    Read More
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <article className="card shadow">
                <img
                  className="rounded card-img-top"
                  src="images/blog/post-4.jpg"
                  alt="post-thumb"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    <a className="text-dark" href="blog-single.html">
                      Amazon increase income 1.5 Million
                    </a>
                  </h4>
                  <p className="cars-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="blog-single.html" className="btn btn-xs btn-primary">
                    Read More
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <article className="card shadow">
                <img
                  className="rounded card-img-top"
                  src="images/blog/post-2.jpg"
                  alt="post-thumb"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    <a className="text-dark" href="blog-single.html">
                      Amazon increase income 1.5 Million
                    </a>
                  </h4>
                  <p className="cars-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="blog-single.html" className="btn btn-xs btn-primary">
                    Read More
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /blog --> */}

      {/* <!-- contact --> */}
      <section
        className="section section-on-footer"
        data-background="images/backgrounds/bg-dots.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">Contact Info</h2>
            </div>
            <div className="col-lg-8 mx-auto">
              <div className="bg-white rounded text-center p-5 shadow-down">
                <h4 className="mb-80">Contact Form</h4>
                <form action="#" className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      className="form-control px-0 mb-4"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control px-0 mb-4"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control px-0 mb-4"
                      placeholder="Type Message Here"
                    ></textarea>
                  </div>
                  <div className="col-lg-6 col-10 mx-auto">
                    <button className="btn btn-primary w-100">send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /contact --> */}

      {/* <!-- footer --> */}
      <footer className="bg-dark footer-section">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5 className="text-light">Email</h5>
                <p className="text-white paragraph-lg font-secondary">
                  steve.fruits@email.com
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="text-light">Phone</h5>
                <p className="text-white paragraph-lg font-secondary">
                  +880 2544 658 256
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="text-light">Address</h5>
                <p className="text-white paragraph-lg font-secondary">
                  125/A, CA Commercial Area, California, USA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top text-center border-dark py-5">
          <p className="mb-0 text-light">
            Copyright © {date}{" "}
            <a href="https://mediavil.com" target="_blank">
              mediavil.com
            </a>
          </p>
        </div>
      </footer>
      {/* <!-- /footer --> */}
    </div>
  );
}

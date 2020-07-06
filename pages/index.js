import Head from "next/head";

export default function Home() {
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
      </Head>

      <header className="navigation fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand font-tertiary h3" href="index.html">
            <img src="images/logo.png" alt="Myself" />
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
              <h1 className="text-white font-tertiary">
                Hi! I am <br /> Ronald <br /> Web Developer
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
    </div>
  );
}

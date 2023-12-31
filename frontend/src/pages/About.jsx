import { Link } from "react-router-dom";
import { GiSupersonicBullet } from "react-icons/gi";

import travel from "../assets/travel.jpg";

const About = () => {
  return (
    <section>
      <div className="container-md py-4">
        <div className="about-topic">
          <h2 className="about text-info h2 fw-bold mb-2">
            {" "}
            About Danakil Tour
          </h2>
          <div className="about-head container-fluid row py-5 mb-3 mx-0 align-items-center">
            <div className="container-fluid text-secondary col-12 col-md-6">
              <p className="d-flex text-start card-text">
                 TOUR is a leading provider of tourism management
                solutions for the travel and tourism industry. We provide
                comprehensive services to help businesses maximize their
                potential and increase their profitability. Our team of
                experienced professionals is dedicated to providing the highest
                quality of service and support to our clients.
              </p>
              <p className="d-flex text-start">
                We understand the importance of tourism management and the
                impact it can have on a business’s success. We strive to provide
                our clients with the best possible solutions to help them
                achieve their goals. Our team of experts is committed to
                providing the highest quality of service and support to our
                clients. We are dedicated to helping our clients maximize their
                potential and increase their profitability.
              </p>
              <p className="d-flex text-start">
                Our team of experienced professionals is committed to providing
                the highest quality of service and support to our clients. We
                are dedicated to helping our clients maximize their potential
                and increase their profitability. Our team of experts is
                committed to providing the highest quality of service and
                support to our clients. We are dedicated to helping our clients
                maximize their potential and increase their profitability.
              </p>
            </div>
            <div className="container-fluid col-10 col-md-6">
              <img
                src="https://media.gettyimages.com/id/1019053440/video/ethiopia-with-national-flag.jpg?s=640x640&k=20&c=DwzLZawpRPqDssmGQV4egzyFBr-nxxjM-8LuLA9BUG4="
                className="container-fluid img-thumbnail"
                alt="ethiopia on a map"
              />
            </div>
          </div>
        </div>
        <p className="text-info h5 my-5">
           TOUR Helps you make the decision
          <Link to="/package" className="text-danger text-decoration-none">
            {" "}
            `where to go?`{" "}
          </Link>
        </p>

        <div className="rating container-fluid row border py-3 my-4 mx-0">
          <img
            src={travel}
            alt="ethiopia on a map"
            className="col-12 col-md-5 my-0"
          />
          <div
            className="col-12 col-md-7 accordion accordion-flush text-start align-self-center my-7"
            id="accordionFlushExample"
          >
            <p className="mb-3 ">
              We offer a wide range of services to help our clients. Our
              services include:
            </p>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Tourism Planning and Development:
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    <GiSupersonicBullet />
                    We provide comprehensive planning and development services
                    to help our clients create and implement successful tourism
                    strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Tourism Marketing and Promotion:{" "}
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    <GiSupersonicBullet />
                    We provide comprehensive marketing and promotion services to
                    help our clients reach their target audiences and increase
                    their visibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Tourism Management and Operations:{" "}
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    <GiSupersonicBullet />
                    We provide comprehensive research and analysis services to
                    help our clients understand their markets and develop
                    effective strategies.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Tourism Research and Analysis:
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    <GiSupersonicBullet /> We provide comprehensive management
                    and operations services to help our clients manage their
                    tourism operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group container-fluid row my-5 align-items-center">
          <div className="contaienr-fluid col-10 col-md-5">
            <img
              src="https://www.worqambatour.com/img/carousel/DEBRE-LIBANOS-7%20DAYS-NORTH-ETHIOPIA-TOUR.jpg"
              className="container-fluid"
              alt="Timket holiday in Gondar"
            />
          </div>
          <div className="contaienr-fluid col-10 col-md-7 text-start">
            <p>
              At  TOUR, we are committed to providing our clients with
              the best possible solutions to help them achieve their goals. Our
              team of experienced professionals is dedicated to providing the
              highest quality of service and support to our clients. We strive
              to provide our clients with the best possible solutions to help
              them maximize their potential and increase their profitability.
            </p>
            <p>
              We are proud to be a leader in the tourism management industry and
              we are committed to providing our clients with the best possible
              solutions to help them achieve their goals. We are dedicated to
              helping our clients maximize their potential and increase their
              profitability. We strive to provide our clients with the best
              possible solutions to help them maximize their potential and
              increase their profitability.
            </p>
          </div>
        </div>
        {/* <div className="andMore h2 text-body fw-normal my-4 ">And More ....   <Link to="/register" className='btn btn-warning  btn-block'>Get started</Link></div> */}
      </div>
    </section>
  );
};

export default About;

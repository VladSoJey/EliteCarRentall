import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="О нас">
      <CommonSection title="О нас" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Мы стремимся предоставлять решения для безопасной езды
                </h2>

                <p className="section__description">
                 Для безопасного вождения необходимо соблюдать правила дорожного движения, быть внимательным и сконцентрированным на дороге, а также поддерживать автомобиль в исправном состоянии.
                </p>

                <p className="section__description">
                 Важно избегать отвлечений, таких как использование мобильного телефона, и соблюдать безопасную дистанцию до других автомобилей. В зимнее время года следует проявлять особую осторожность, избегать резких маневров и учитывать особенности торможения на скользкой дороге. 
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Еще нужна помощь?</h6>
                    <h4>+79998641821</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Эксперты</h6>
              <h2 className="section__title">Наш коллектив</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;

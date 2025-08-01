import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "О нас",
  },

  {
    path: "#",
    display: "Политика безопасности",
  },

  {
    path: "/cars",
    display: "Наши машины",
  },
  {
    path: "/blogs",
    display: "Блог",
  },

  {
    path: "/contact",
    display: "Обратная связь",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Elite Car <br /> Rental
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
             Наша компания существует уже много столетий. И всю нашу историю мы стараемся развиваться и совершенствоваться, чтобы предоставлять для вас лучший сервис услуг
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Карта сайта</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Главный офис</h5>
              <p className="office__info">121351 Екатерины Будановой 5, Москва, Россия</p>
              <p className="office__info">Телефон: +79998641821</p>

              <p className="office__info">Почта: vk.on1999@bk.ru</p>

              <p className="office__info">Рабочее время: 10:00 - 19:00</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Наши новости</h5>
              <p className="section__description">Подпишитесь на наши новости</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Antoshchenkov Vladislav, Kichin Egor. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Адрес отправки" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Адрес назначения" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Дата отправки" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Время отправки"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Авто с кондиционером</option>
            <option value="non-ac">Авто без кондиционера</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Найти машину</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;

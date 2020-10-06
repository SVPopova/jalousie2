import React from "react";
import "./Popup.css";

function Popup(props) {
  return (
    <div className={props.isOpen ? "popup popup_on" : "popup"}>
      <form
        className="site-form popup__form"
        action="../../../form1.php"
        method="POST"
      >
        <button type="button" onClick={props.onClose} className="close-popup">
          X
        </button>
        <h2 className="site-form__title">Мы Вам перезвоним</h2>

        <input
          className="site-form__name"
          type="text"
          name="name"
          placeholder="ВАШЕ ИМЯ"
          required
        />
        <input
          type="tel"
          name="tel"
          placeholder="+7 (___)-___-__-__"
          className="site-form__tel"
          required
        />
        <fieldset className="site-form__fieldset">
          <input
            className="site-form__agreement"
            name="agreement"
            type="checkbox"
            required
          />
          &nbsp;
          <a
            className="site-form__agreement-link"
            href="http://zhaluzipskov.ru/agreement.php"
          >
            Согласен с условиями обработки персональных данных
          </a>
        </fieldset>

        <input
          className="site-form__button"
          type="submit"
          value="заказать звонок"
        />
      </form>
    </div>
  );
}

export default Popup;

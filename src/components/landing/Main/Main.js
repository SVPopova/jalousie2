import React from "react";
import "./Main.css";
import whyWe1 from "../../../img/house.svg";
import whyWe2 from "../../../img/warranty.svg";
import whyWe3 from "../../../img/deadline.svg";
import whyWe4 from "../../../img/offer.svg";
import vertical from "../../../img/zhaluzi1.jpg";
import gorizo from "../../../img/zhaluzi2.jpg";
import rulon from "../../../img/zhaluzi4.jpg";
import rulonCasset from "../../../img/zhaluzi6.jpg";
import shtory from "../../../img/zhaluzi3.jpg";
import zebra from "../../../img/zhaluzi7.png";
import derevyan from "../../../img/zhaluzi5.jpg";
import denNoch from "../../../img/zhaluzi8.jpg";
import gazprom from "../../../img/client1.png";
import uralsib from "../../../img/client2.png";
import magnit from "../../../img/client3.png";
import megafon from "../../../img/client4.png";
import rosgosstrah from "../../../img/client5.png";
import rostelecom from "../../../img/client6.png";
import sroki from "../../../img/benefit6.png";
import proizvod from "../../../img/benefit2.png";
import garantiya from "../../../img/benefit5.png";
import opit from "../../../img/benefit1.png";
import free from "../../../img/benefit4.png";
import many from "../../../img/benefit3.png";
import specProiz from "../../../img/safe.svg";
import zakazchiki from "../../../img/boy.svg";
import uspeh from "../../../img/trophy.svg";
import { CatalogContext } from "../../../context/CatalogContext";

function Main(props) {
  const numenclatura = React.useContext(CatalogContext);
  const massive1 = ["1", "2"];
  const massive2 = ["3", "4"];
  const [state, setState] = React.useState("1");
  console.log(state);
  function handleSetState(e) {
    setState(e.target.value);
  }

  return (
    <>
      <section className="top-content">
        <div className="top-content__box">
          <h1 className="top-content__title">
            Жалюзи и&nbsp;рулонные шторы от производителя
          </h1>
          <form
            className="top-content__form"
            action="../../../form1.php"
            method="POST"
          >
            <h2 className="form__title">ОСТАВЬ ЗАЯВКУ</h2>
            <p className="form__subtitle">
              и получи в подарок БЕСПЛАТНЫЙ монтаж жалюзи
            </p>
            <div className="form__box">
              <input
                className="form__input"
                type="text"
                name="name"
                placeholder="ВАШЕ ИМЯ"
                required
              />
              <input
                type="tel"
                name="tel"
                placeholder="+7 (___)-___-__-__"
                className="form__input"
                required
              />

              <input
                className="form__button"
                type="submit"
                value="ПОЛУЧИТЬ ПОДАРОК"
              />
            </div>
            <fieldset className="site-form__fieldset">
              <input
                className="form__agreement"
                name="agreement"
                type="checkbox"
                defaultChecked
                required
              />
              &nbsp;
              <a
                className="form__agreement-link"
                href="http://zhaluzipskov.ru/agreement.php"
              >
                Согласен с условиями обработки персональных данных
              </a>
            </fieldset>
          </form>
        </div>
      </section>

      <section className="why-we" id="preim">
        <h2 className="section__title">Почему стоит выбрать нас</h2>
        <div className="why-me__list">
          <div className="why-me__box">
            <img className="why-me__img" alt="why-me" src={whyWe1} />
            <p className="why-me__text">ВЫЕЗД ЗАМЕРЩИКА БЕСПЛАТНО</p>
          </div>
          <div className="why-me__box">
            <img className="why-me__img" alt="why-me" src={whyWe2} />
            <p className="why-me__text">ГАРАНТИЯ НА ВСЕ ИЗДЕЛИЯ</p>
          </div>
          <div className="why-me__box">
            <img className="why-me__img" alt="why-me" src={whyWe3} />
            <p className="why-me__text">ИЗГОТОВЛЕНИЕ ОТ 2-Х ДО 4-Х ДНЕЙ</p>
          </div>
          <div className="why-me__box">
            <img className="why-me__img" alt="why-me" src={whyWe4} />
            <p className="why-me__text">
              ЦЕНА ОТ ПРОИЗВОДИТЕЛЯ БЕЗ НАКРУТОК И ПЕРЕПЛАТ
            </p>
          </div>
        </div>

        {/* <ul className="why-we__lists">
          <li className="why-me__arrow_big_left"><img  src={arrow_big_left} alt="большая левая"/></li>
        <li className="why-me__arrow_big_right"><img  src={arrow_big_right} alt="большая правая"/></li>
        <li className="why-me__arrow_little_left"><img  src={arrow_little_left_down} alt="маленькая левая"/></li>
        <li className="why-me__arrow_little_right"><img  src={arrow_little_right_down} alt="маленькая правая"/></li>
          <li className="why-we1">
            <img className="why-we__img" src={whyWe1} alt="Почему мы?" />
            <p className="why-we__subtitle">
              Широкий ассортимент и богатый выбор материалов
            </p>
            <p className="why-we__subtitle">
              Цена от производителя без накруток и переплат
            </p>
          </li>
          <li className="why-we2">
            <img className="why-we__img" src={whyWe2} alt="Почему мы?" />
            <p className="why-we__text">
              1 год гарантии и послегарантийное обслуживание
            </p>
          </li>
          <li className="why-we3">
            <img className="why-we__img" src={whyWe3} alt="Почему мы?" />
            <p className="why-we__text">Бесплатный выезд на замер</p>
          </li>
          <li className="why-we4">
            <img className="why-we__img" src={whyWe4} alt="Почему мы?" />
            <p className="why-we__text">Быстрый монтаж жалюзи</p>
          </li>
          <li className="why-we5">
            <img className="why-we__img" src={whyWe5} alt="Почему мы?" />
            <p className="why-we__text">
              Вся продукция имеет необходимые сертификаты
            </p>
          </li>
        </ul> */}
        <button
          className="why-we__button"
          type="button"
          name="modal"
          onClick={props.onPopup}
        >
          Но главная причина - это выгода
        </button>
      </section>

      <section className="calculate">
        <h2 className="section__title">Наша продукция</h2>
        <div className="calculate__box">
          <a className="calculate__link" href="index.html#vertical">
            <img
              className="calculate__img"
              src={vertical}
              alt=""
              width="150px"
              height="150px"
            />
            <p className="calculate__subtitle">Вертикальные жалюзи</p>
          </a>
          <a className="calculate__link" href="index.html#gorizontal">
            <img
              className="calculate__img"
              src={gorizo}
              alt=""
              width="150px"
              height="150px"
            />
            <p className="calculate__subtitle">Горизонтальные жалюзи</p>
          </a>
          <a className="calculate__link" href="index.html#rulon">
            <img
              className="calculate__img"
              src={rulon}
              alt=""
              width="150px"
              height="150px"
            />
            <p className="calculate__subtitle">Рулонные шторы</p>
          </a>
          <a className="calculate__link" href="index.html#kasset">
            <img
              className="calculate__img"
              src={rulonCasset}
              alt=""
              width="150px"
              height="150px"
            />
            <p className="calculate__subtitle">Рулонно-кассетные шторы</p>
          </a>
          <a className="calculate__link" href="index.html#plisse">
            <img
              className="calculate__img"
              src={shtory}
              alt=""
              width="150px"
              height="150px"
            />
            <p className="calculate__subtitle">Шторы плиссе</p>
          </a>
          <a className="calculate__link" href="index.html#zebra">
            <img
              className="calculate__img"
              src={zebra}
              alt=""
              width="150px"
              height="150px"
            />
            <p className="calculate__subtitle">Жалюзи Зебра</p>
          </a>
          <a className="calculate__link" href="index.html#derevo">
            <img
              className="calculate__img"
              src={derevyan}
              alt=""
              width="150px"
              height="150px"
            />
            <p className="calculate__subtitle">Деревянные жалюзи</p>
          </a>
          <a className="calculate__link" href="index.html#daynight">
            <img
              className="calculate__img"
              src={denNoch}
              alt=""
              width="150px"
              height="150px"
            />
            <p className="calculate__subtitle">Жалюзи День-Ночь</p>
          </a>
        </div>
      </section>

      <section className="catalog" id="catalog">
        <h2 className="section__title">Каталог жалюзи</h2>
        <div className="catalog__lists">
          <select
            className="catalog__select"
            name="Список жалюзи"
            onChange={handleSetState}
            value={state}
          >
            <option className="catalog__option" value="1">
              ВЕРТИКАЛЬНЫЕ ЖАЛЮЗИ (ПЛАСТИК)
            </option>
            <option className="catalog__option" value="2">
              ВЕРТИКАЛЬНЫЕ ЖАЛЮЗИ (ТКАНЬ)
            </option>
            <option className="catalog__option" value="3">
              РУЛОННЫЕ ШТОРЫ
            </option>
            <option className="catalog__option" value="4">
              ШТОРЫ ПЛИССЕ
            </option>
            <option className="catalog__option" value="5">
              ГОРИЗОНТАЛЬНЫЕ ЖАЛЮЗИ И ВЕНУС
            </option>
            <option className="catalog__option" value="6">
              ЖАЛЮЗИ ЗЕБРА
            </option>
          </select>
          <div
            className={
              state === "1"
                ? "catalog__type catalog__type_active"
                : "catalog__type"
            }
          >
            <div id="1" className="catalog__list">
              <div className="catalog__box">
                <img
                  onClick={props.onClick}
                  id="993"
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/124/124374301bfe69039765a94b8c1a962f.jpg"
                  alt="АКВАМАРИН 2261 бежевый, 5,4м"
                />
                <p className="catalog__text">АКВАМАРИН 2261</p>
                <p className="catalog__text">бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  onClick={props.onClick}
                  id="994"
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/6c4/6c43325ecfc0b382fd5a27aca9365910.jpg"
                  alt="АКВАМАРИН 4063 персиковый, 5,4м"
                />

                <p className="catalog__text">АКВАМАРИН 4063 </p>
                <p className="catalog__text">персиковый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="995"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/099/09924c70f8633e23573776b731b0a224.jpg"
                  alt="АКВАМАРИН 4158 розовый, 5,4м"
                />

                <p className="catalog__text">АКВАМАРИН 4158 </p>
                <p className="catalog__text">розовый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="996"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/ab9/ab96e09b0b4cdca9a9900c0c936475ec.jpg"
                  alt="АКВАМАРИН 5150 св. голубой, 5,4м"
                />

                <p className="catalog__text">АКВАМАРИН 5150 </p>
                <p className="catalog__text">голубой</p>
              </div>
              <div className="catalog__box">
                <img
                  id="997"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/490/490b6e70baa64591be24e4b0169bbe4d.jpg"
                  alt="АКВАМАРИН 5608 бирюзовый, 5,4м"
                />
                <p className="catalog__text">АКВАМАРИН 5608 </p>
                <p className="catalog__text">бирюзовый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="998"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/03f/03fd4e9695430d118506c976ef8ddf99.png"
                  alt="АНТИК 7013 серебро,  5,4м"
                />
                <p className="catalog__text">АНТИК 7013 </p>
                <p className="catalog__text">серебро</p>
              </div>
              <div className="catalog__box">
                <img
                  id="999"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/602/6024286ad660ac3f9c45aa3ba111e467.png"
                  alt="АНТИК 7120 матовое золото, 5,4м"
                />

                <p className="catalog__text">АНТИК 7120 </p>
                <p className="catalog__text">золото</p>
              </div>
            </div>
            <div
              id={props.isOpen ? props.boxId : ""}
              className={`${
                props.isOpen && massive1.includes(props.parentId)
                  ? "catalog__info catalog__info_active"
                  : "catalog__info"
              }`}
            >
              <img
                className="info__img"
                src={`${props.isOpen ? numenclatura.src : ""}`}
                alt={`${props.isOpen ? numenclatura.name : ""}`}
              />
              <div className="info__param">
                <p className="info__name">
                  <span className="info__span">Наименование: </span>
                  {props.isOpen ? numenclatura.name : ""}
                </p>
                <p className="info__name">
                  <span className="info__span">Артикул: </span>
                  {props.isOpen ? numenclatura.articul : ""}
                </p>
                <p className="info__name">
                  <span className="info__span">Единица измерения: </span>
                  {props.isOpen ? numenclatura.unit : ""}
                </p>
                <p className="info__name">
                  <span className="info__span">Структура: </span>
                  {props.isOpen ? numenclatura.structure : ""}
                </p>
                <p className="info__name">
                  <span className="info__span">Толщина: </span>
                  {props.isOpen ? numenclatura.thickness : ""}
                </p>
                <p className="info__name">
                  <span className="info__span">Ширина полосы: </span>
                  {props.isOpen ? numenclatura.band : ""}
                </p>
                <p className="info__name">
                  <span className="info__span">Малая фасовка: </span>
                  {props.isOpen ? numenclatura.small : ""}
                </p>
                <p className="info__name">
                  <span className="info__span">Большая фасовка: </span>
                  {props.isOpen ? numenclatura.big : ""}
                </p>
                <p className="info__name">
                  <span className="info__span">Цвет: </span>
                  {props.isOpen ? numenclatura.color : ""}
                </p>
                <p className="info__name">
                  <span className="info__span">Страна происхождения: </span>
                  {props.isOpen ? numenclatura.country : ""}
                </p>
              </div>
            </div>
            <div id="2" className="catalog__list">
              <div className="catalog__box">
                <img
                  id="1000"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/648/6487ed5a867d6bd8679a5635c8a175de.png"
                  alt="АНТИК 7125 бронза, 5,4м"
                />

                <p className="catalog__text">АНТИК 7125 </p>
                <p className="catalog__text">золото</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1001"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/eb1/eb1898ba948b4f5a2c5d38717d81ad44.jpg"
                  alt="БУК 6012, 5,4м"
                />

                <p className="catalog__text">БУК 6012, 5,4м </p>
                <p className="catalog__text">бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1002"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/17a/17a4bf221567a3e1c766cc10fc2fad44.png"
                  alt="ВАЛЕНТИНО 1908 черно-серый, 5,4м"
                />

                <p className="catalog__text">ВАЛЕНТИНО 1908 </p>
                <p className="catalog__text">черный</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1003"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/95f/95f295d5bf32384d3a35b08cc5c0a29a.png"
                  alt="ВАЛЕНТИНО 2261 светло-бежевый, 5,4м"
                />

                <p className="catalog__text">ВАЛЕНТИНО 2261 </p>
                <p className="catalog__text">бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1004"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/825/8252d4452bf8e6c021762a512da4f385.jpg"
                  alt="ДУБ 6016 , 5,4"
                />

                <p className="catalog__text">ДУБ 6016 </p>
                <p className="catalog__text">коричневый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1005"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/342/34272de3a3aa53483a117fab8db26cec.jpg"
                  alt="КАРЕЛИЯ 2868 коричневый, 5,4м"
                />

                <p className="catalog__text">КАРЕЛИЯ 2868 </p>
                <p className="catalog__text">коричневый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1006"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/b9b/b9be5a25245fbe0c88ce21a4bf73c00f.jpg"
                  alt="КЛЁН 6013, 5,4м"
                />

                <p className="catalog__text">КЛЁН 6013, 5,4м</p>
                <p className="catalog__text">бежевый</p>
              </div>
            </div>
          </div>
          <div
            className={
              state === "2"
                ? "catalog__type catalog__type_active"
                : "catalog__type"
            }
          >
            <div className="catalog__list">
              <div className="catalog__box">
                <img
                  id="1541"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/488/48840411b9c5d91ec1ced31bde4fa475.jpg"
                  alt="АВРОРА 4059 розовый 89 мм"
                />

                <p className="catalog__text">АВРОРА 4059 </p>
                <p className="catalog__text">розовый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1543"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/ee9/ee99b2daa84ee4ad1fb9bd45822973bb.jpg"
                  alt="АВРОРА 5173 голубой 89 мм"
                />

                <p className="catalog__text">АВРОРА 5173 </p>
                <p className="catalog__text">голубой</p>
              </div>
              <div className="catalog__box">
                <img
                  id="3107"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/8f7/8f7b81aa0e1fe6dad10e1b04bf372d2a.jpg"
                  alt="АРИЗОНА BLACK-OUT 0225 белый, 89 мм"
                />

                <p className="catalog__text">АРИЗОНА BLACK-OUT 0225 </p>
                <p className="catalog__text">белый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="3109"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/e03/e035ef75bce4f01a78127aefec9046e0.jpg"
                  alt="АРИЗОНА BLACK-OUT 1852 серый, 89 мм"
                />

                <p className="catalog__text">АРИЗОНА BLACK-OUT 1852 </p>
                <p className="catalog__text">серый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="3108"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/687/68784e21a8c6e554d815a59b7f742522.jpg"
                  alt="АРИЗОНА BLACK-OUT 2261 св. бежевый, 89 мм"
                />

                <p className="catalog__text">АРИЗОНА BLACK-OUT 2261 </p>
                <p className="catalog__text">св. бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1545"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/8ff/8fffd4413ff6d3a62a00eceac9786673.jpg"
                  alt="АРУБА 0225 белый 89 мм"
                />

                <p className="catalog__text">АРУБА 0225 </p>
                <p className="catalog__text">белый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1546"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/70e/70e8f53543406c1077a538f8f592d030.jpg"
                  alt="АРУБА 2406 бежевый 89 мм"
                />

                <p className="catalog__text">АРУБА 2406 </p>
                <p className="catalog__text">бежевый</p>
              </div>
            </div>
            <div
              className={`${
                props.isOpen && massive2.includes(props.parentId)
                  ? "catalog__info catalog__info_active"
                  : "catalog__info"
              }`}
            >
              <img
                className="info__img"
                src={`${props.isOpen ? numenclatura.src : ""}`}
                alt={`${props.isOpen ? numenclatura.name : ""}`}
              />
              <div className="info__param">
                <p className="info__name">
                  Наименование: {props.isOpen ? numenclatura.name : ""}
                </p>
                <p className="info__name">
                  Артикул: {props.isOpen ? numenclatura.articul : ""}
                </p>
                <p className="info__name">
                  Единица измерения: {props.isOpen ? numenclatura.unit : ""}
                </p>
                <p className="info__name">
                  Структура: {props.isOpen ? numenclatura.structure : ""}
                </p>
                <p className="info__name">
                  Толщина: {props.isOpen ? numenclatura.thickness : ""}
                </p>
                <p className="info__name">
                  Ширина полосы: {props.isOpen ? numenclatura.band : ""}
                </p>
                <p className="info__name">
                  Малая фасовка: {props.isOpen ? numenclatura.small : ""}
                </p>
                <p className="info__name">
                  Большая фасовка: {props.isOpen ? numenclatura.big : ""}
                </p>
                <p className="info__name">
                  Цвет: {props.isOpen ? numenclatura.color : ""}
                </p>
                <p className="info__name">
                  Страна происхождения:{" "}
                  {props.isOpen ? numenclatura.country : ""}
                </p>
              </div>
            </div>
            <div className="catalog__list">
              <div className="catalog__box">
                <img
                  id="1547"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/9b9/9b9f70b97683518548e6b4f2300a4638.jpg"
                  alt="АРУБА 2746 т. бежевый 89 мм"
                />

                <p className="catalog__text">АРУБА 2746 </p>
                <p className="catalog__text">т. бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1548"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/986/986e44afe112635e99c8a76c3440b759.jpg"
                  alt="БАЛИ 0225 белый 89 мм"
                />

                <p className="catalog__text">БАЛИ 0225 </p>
                <p className="catalog__text">белый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1549"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/11a/11afe1b861a149bcc5ffb1bc130ce3fd.jpg"
                  alt="БАЛИ 2261 бежевый 89 мм"
                />

                <p className="catalog__text">БАЛИ 2261 </p>
                <p className="catalog__text">бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1550"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/23c/23c9e55217fdf8aa88c51bfad252f73c.jpg"
                  alt="БАЛИ 2746 т.бежевый 89 мм"
                />

                <p className="catalog__text">БАЛИ 2746 </p>
                <p className="catalog__text">т.бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1551"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/c2f/c2f3264b169bf31ba917a739bd29e50a.jpg"
                  alt="БАЛИ 2871 шоколад 89 мм"
                />

                <p className="catalog__text">БАЛИ 2871 </p>
                <p className="catalog__text">шоколад</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1552"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/29c/29ca4d9034e9d5930e1bbf1dcdfb0c94.jpg"
                  alt="БАЛИ 3499 оранжевый 89 мм"
                />

                <p className="catalog__text">БАЛИ 3499 </p>
                <p className="catalog__text">оранжевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1553"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/0be/0be7c0511053945de7b763a073e0a063.jpg"
                  alt="БАЛИ 4059 св.розовый 89 мм"
                />

                <p className="catalog__text">БАЛИ 4059 </p>
                <p className="catalog__text">св.розовый</p>
              </div>
            </div>
          </div>
          <div
            className={
              state === "3"
                ? "catalog__type catalog__type_active"
                : "catalog__type"
            }
          >
            <div className="catalog__list">
              <div className="catalog__box">
                <img
                  id="2840"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/2b1/2b1a45bac4bec673b516dcd38e2e4c4a.jpg"
                  alt="АЖУР 0225 белый, 220 см"
                />

                <p className="catalog__text">АЖУР 0225 </p>
                <p className="catalog__text">белый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1839"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/db9/db98dfb55aa5d24ca2e847fd311da57e.jpg"
                  alt="АЛЛЕЯ 2871 темно-коричневый 250 см"
                />

                <p className="catalog__text">АЛЛЕЯ 2871 </p>
                <p className="catalog__text">темно-коричневый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="2967"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/ad1/ad109bd49296ee4c58fbf0f1042e10fb.jpg"
                  alt="АЛЬФА 5992 бирюзовый 200cm"
                />

                <p className="catalog__text">АЛЬФА 5992 </p>
                <p className="catalog__text">бирюзовый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1066"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/30f/30f2427f8816efba61f5e23b8ff8fe50.png"
                  alt="АПОЛЛО BLACK-OUT 2261 св. бежевый 310см"
                />

                <p className="catalog__text">АПОЛЛО BLACK-OUT 2261 </p>
                <p className="catalog__text">св. бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="2912"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/b64/b64a20c7ebc8687e73e9a2c637331619.jpg"
                  alt="АРАБИКА 1605 платина, 240 см"
                />

                <p className="catalog__text">АРАБИКА 1605 </p>
                <p className="catalog__text">платина</p>
              </div>
              <div className="catalog__box">
                <img
                  id="2679"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/a19/a1963fe3dc25031564c3d8327f401487.jpg"
                  alt="БОСТОН 2259 магнолия, 250 см"
                />

                <p className="catalog__text">БОСТОН 2259 </p>
                <p className="catalog__text">магнолия</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1891"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/944/9441d7f55f8cd3d484da49f4535fc379.jpg"
                  alt="ВЕРОНА 0225 белый 235 см"
                />

                <p className="catalog__text">ВЕРОНА 0225 </p>
                <p className="catalog__text">белый</p>
              </div>
            </div>
            <div className="catalog__info">
              <img className="info__img" src="" alt="" />
              <div className="info__param">
                <p className="info__name">Наименование</p>
                <p className="info__name">Артикул</p>
                <p className="info__name">Единица измерения</p>
                <p className="info__name">Структура</p>
                <p className="info__name">Толщина</p>
                <p className="info__name">Ширина полосы</p>
                <p className="info__name">Малая фасовка</p>
                <p className="info__name">Большая фасовка</p>
                <p className="info__name">Цвет</p>
                <p className="info__name">Страна происхождения</p>
              </div>
            </div>
            <div className="catalog__list">
              <div className="catalog__box">
                <img
                  id="1892"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/c07/c07b396275cfe632c5dfabf53ea7e957.jpg"
                  alt="ВЕРОНА 2406 бежевый 235 см"
                />

                <p className="catalog__text">ВЕРОНА 2406 </p>
                <p className="catalog__text">бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1897"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/cdc/cdced94f4e21d1aa982426bc9adf1d33.jpg"
                  alt="ВИНДЗОР ЖЕМЧУГ 2406 бежевый 200 см"
                />

                <p className="catalog__text">ВИНДЗОР ЖЕМЧУГ 2406 </p>
                <p className="catalog__text">бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1100"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/7a3/7a378469ae61fc315cc566a756f23c6a.jpg"
                  alt="ЖЕМЧУГ 5540 оливковый 200 см"
                />

                <p className="catalog__text">ЖЕМЧУГ 5540 </p>
                <p className="catalog__text">оливковый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1101"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/8ab/8ab954f54c27b65f2d43112df0efa592.jpg"
                  alt="ЖЕМЧУГ BLACK-OUT 0225 белый 240 см"
                />

                <p className="catalog__text">ЖЕМЧУГ BLACK-OUT 0225 </p>
                <p className="catalog__text">белый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1108"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/3d2/3d20ce60d2e69b1d10459c7ee6c2df23.jpg"
                  alt="ИМПАЛА BLACK-OUT 2259 св. бежевый 240 см"
                />

                <p className="catalog__text">ИМПАЛА BLACK-OUT 2259 </p>
                <p className="catalog__text">св. бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1109"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/806/8060957366be4f43b214ff232e017009.jpg"
                  alt="ИМПАЛА BLACK-OUT 2406 бежевый 240 см"
                />

                <p className="catalog__text">ИМПАЛА BLACK-OUT 2406 </p>
                <p className="catalog__text">бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1918"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/a3f/a3f7dede381d7318a04fcb39a0192e2a.jpg"
                  alt="КАЛИПСО 2406 бежевый 200см"
                />

                <p className="catalog__text">КАЛИПСО 2406 </p>
                <p className="catalog__text">бежевый</p>
              </div>
            </div>
          </div>
          <div
            className={
              state === "4"
                ? "catalog__type catalog__type_active"
                : "catalog__type"
            }
          >
            <div className="catalog__list">
              <div className="catalog__box">
                <img
                  id="1318"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/d47/d47b3cfd82ec3dd2fc7a0d619271c5db.jpg"
                  alt="Акварель 1608 св.серый, 235см"
                />

                <p className="catalog__text">Акварель 1608 </p>
                <p className="catalog__text">св.серый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1321"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/d9d/d9d6d98fb45b9b7e7424adaa7b5499d8.jpg"
                  alt="Бланш 0225 белый, 220см"
                />

                <p className="catalog__text">Бланш 0225 </p>
                <p className="catalog__text">белый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1324"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/fb7/fb7ea7ba55203fb9141ab8f5402e1ce1.jpg"
                  alt="Веранда 3499 оранжевый, 230 см"
                />

                <p className="catalog__text">Веранда 3499 </p>
                <p className="catalog__text">оранжевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1325"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/023/023b2aa7b24ffab5abb067afc46c56d0.jpg"
                  alt="Веранда 5849 светло-зеленый, 230 см"
                />

                <p className="catalog__text">Веранда 5849 </p>
                <p className="catalog__text">светло-зеленый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1330"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/c83/c836bd2692f525f5cc4e4e28dfec719f.jpg"
                  alt="Гинко 3210 желтый, 230 см"
                />

                <p className="catalog__text">Гинко 3210 </p>
                <p className="catalog__text">желтый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1205"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/b45/b45c39f3959c157c77be5e63a869d84b.jpg"
                  alt="Гофре Папирус 4290 терракота 360 см"
                />

                <p className="catalog__text">Гофре Папирус 4290 </p>
                <p className="catalog__text">терракота</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1206"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/38b/38b6add8b516acfc57f287d6134d1eef.jpg"
                  alt="Гофре Папирус 4469 лиловый 360 см"
                />
                <p className="catalog__text">Гофре Папирус 4469 </p>
                <p className="catalog__text">лиловый</p>
              </div>
            </div>
            <div className="catalog__info">
              <img className="info__img" src="" alt="" />
              <div className="info__param">
                <p className="info__name">Наименование</p>
                <p className="info__name">Артикул</p>
                <p className="info__name">Единица измерения</p>
                <p className="info__name">Структура</p>
                <p className="info__name">Толщина</p>
                <p className="info__name">Ширина полосы</p>
                <p className="info__name">Малая фасовка</p>
                <p className="info__name">Большая фасовка</p>
                <p className="info__name">Цвет</p>
                <p className="info__name">Страна происхождения</p>
              </div>
            </div>
            <div className="catalog__list">
              <div className="catalog__box">
                <img
                  id="1213"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/c5a/c5a051bcc040893bc2308a356a726d3d.png"
                  alt="Гофре Папирус БО 2260 слоновая кость, 450см"
                />

                <p className="catalog__text">Гофре Папирус БО 2260 </p>
                <p className="catalog__text">слоновая кость</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1215"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/d59/d59d52b10826722e0b530c60be4e1998.png"
                  alt="Гофре Экошик 0225 белый 300 см"
                />

                <p className="catalog__text">Гофре Экошик 0225 </p>
                <p className="catalog__text">белый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1226"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/d49/d4990fe9dd6b69cabbb9f843c4d00ce9.png"
                  alt="Дикий Шелк 2406 бежевый , 200 см"
                />

                <p className="catalog__text">Дикий Шелк 2406 </p>
                <p className="catalog__text">бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1227"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/683/68346fba2937b874b90635affda06276.png"
                  alt="Дикий Шелк 2870 коричневый, 200 см"
                />

                <p className="catalog__text">Дикий Шелк 2870 </p>
                <p className="catalog__text">коричневый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1233"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/26c/26c2d68c6a9cf396f6fd9838455efd54.png"
                  alt="Капри Перла 2872 бронза 240 см"
                />

                <p className="catalog__text">Капри Перла 2872 </p>
                <p className="catalog__text">бронза</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1437"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/91a/91a5cff25ab072d332ef2a4da178b71b.png"
                  alt="Лима 5850 зеленый, 235 см"
                />

                <p className="catalog__text">Лима 5850 </p>
                <p className="catalog__text">зеленый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="1247"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/635/635d9130029dae0d6fdb800da6a5232c.png"
                  alt="Мара БО 2406 бежевый, 235 см"
                />

                <p className="catalog__text">Мара БО 2406 </p>
                <p className="catalog__text">бежевый</p>
              </div>
            </div>
          </div>
          <div
            className={
              state === "5"
                ? "catalog__type catalog__type_active"
                : "catalog__type"
            }
          >
            <div className="catalog__list">
              <div className="catalog__box">
                <img
                  id="121"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/eea/eea01ac2ee00431a4dd0b888e8c4a13b.jpg"
                  alt="Лента 16x0.18, 0225"
                />

                <p className="catalog__text">Лента 16x0.18, 0225 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="122"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/b70/b7023670002ccb73b9df4817fa1c0682.jpg"
                  alt="Лента 16x0.18, 1606"
                />

                <p className="catalog__text">Лента 16x0.18, 1606 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="123"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/782/782bd5bf098cd42d57717904f2d9ad7d.jpg"
                  alt="Лента 16x0.18, 2259"
                />

                <p className="catalog__text">Лента 16x0.18, 2259 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="124"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/e3d/e3de0a76ea9c026b2db8b6876c492e9e.jpg"
                  alt="Лента 16x0.18, 2261"
                />

                <p className="catalog__text">Лента 16x0.18, 2261 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="125"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/7f1/7f13506db4796d8e58798e3780fa9d4f.jpg"
                  alt="Лента 16x0.18, 2406"
                />

                <p className="catalog__text">Лента 16x0.18, 2406 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="126"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/d24/d2408620d76e545617b6bcb5337c05dd.jpg"
                  alt="Лента 16x0.18, 2871"
                />

                <p className="catalog__text">Лента 16x0.18, 2871 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="127"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/9b1/9b1769be2b31f39bcc31d74fa1d57f1b.jpg"
                  alt="Лента 16x0.18, 3144"
                />

                <p className="catalog__text">Лента 16x0.18, 3144 </p>
              </div>
            </div>
            <div className="catalog__info">
              <img className="info__img" src="" alt="" />
              <div className="info__param">
                <p className="info__name">Наименование</p>
                <p className="info__name">Артикул</p>
                <p className="info__name">Единица измерения</p>
                <p className="info__name">Структура</p>
                <p className="info__name">Толщина</p>
                <p className="info__name">Ширина полосы</p>
                <p className="info__name">Малая фасовка</p>
                <p className="info__name">Большая фасовка</p>
                <p className="info__name">Цвет</p>
                <p className="info__name">Страна происхождения</p>
              </div>
            </div>
            <div className="catalog__list">
              <div className="catalog__box">
                <img
                  id="128"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/aea/aea613e3a73b9b99aa7271ad115ca8df.jpg"
                  alt="Лента 16x0.18, 4063"
                />

                <p className="catalog__text">Лента 16x0.18, 4063 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="129"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/074/0744aa27790258334f9a97c9d3c7f20f.jpg"
                  alt="Лента 16x0.18, 5173"
                />

                <p className="catalog__text">Лента 16x0.18, 5173 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="130"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/c45/c45915f003557907c0c6311c0e37cedc.jpg"
                  alt="Лента 16x0.18, 5608"
                />

                <p className="catalog__text">Лента 16x0.18, 5608 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="131"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/f70/f70c7951e664dd5e15076358de285cfd.jpg"
                  alt="Лента 16x0.18, 5850"
                />

                <p className="catalog__text">Лента 16x0.18, 5850 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="132"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/a52/a52d4761ca422a64f19548c1e7c80fa9.jpg"
                  alt="Лента 16x0.18, 6012"
                />

                <p className="catalog__text">Лента 16x0.18, 6012 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="133"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/165/1651d2f887bf902c5a66353bda6d41cc.jpg"
                  alt="Лента 16x0.18, 6013"
                />

                <p className="catalog__text">Лента 16x0.18, 6013 </p>
              </div>
              <div className="catalog__box">
                <img
                  id="134"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/046/046916d13570f3073c5e4eafc015687e.jpg"
                  alt="Лента 16x0.18, 7005"
                />

                <p className="catalog__text">Лента 16x0.18, 7005 </p>
              </div>
            </div>
          </div>
          <div
            className={
              state === "6"
                ? "catalog__type catalog__type_active"
                : "catalog__type"
            }
          >
            <div className="catalog__list">
              <div className="catalog__box">
                <img
                  id="3088"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/98b/98b37eb34ebeb03248457f4712af44a0.jpg"
                  alt="зебра АВАНГАРД 2870 коричневый, 280 см"
                />

                <p className="catalog__text">зебра АВАНГАРД 2870 </p>
                <p className="catalog__text">коричневый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="3089"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/f22/f2245692ed315a3e53e3b0d5a773ca55.jpg"
                  alt="зебра АВАНГАРД 3499 оранжевый, 280 см"
                />

                <p className="catalog__text">зебра АВАНГАРД 3499 </p>
                <p className="catalog__text">оранжевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="278"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/2f8/2f84a024a63ca9963608a8dd2ab41203.jpg"
                  alt="зебра АДАЖИО 0225 белый, 280 см"
                />

                <p className="catalog__text">зебра АДАЖИО 0225 </p>
                <p className="catalog__text">белый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="279"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/13a/13a0647c09da5f9c91b5f7eb8500abcd.jpg"
                  alt="зебра АДАЖИО 1852 серый, 280 см"
                />

                <p className="catalog__text">зебра АДАЖИО 1852 </p>
                <p className="catalog__text">серый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="280"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/504/504563235df01a815b06741daf0fe758.jpg"
                  alt="зебра АДАЖИО 2261 св. бежевый, 280 см"
                />

                <p className="catalog__text">зебра АДАЖИО 2261 </p>
                <p className="catalog__text">св. бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="281"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/517/51735eda381707afe4a6bf1378ac355b.jpg"
                  alt="зебра АДАЖИО 2870 коричневый, 280 см"
                />

                <p className="catalog__text">зебра АДАЖИО 2870 </p>
                <p className="catalog__text">коричневый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="282"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/d8a/d8aef2611aeedd013308a9a0b089f6a8.jpg"
                  alt="зебра АЙЛЕНД 0225 белоснежный, 280 см"
                />

                <p className="catalog__text">зебра АЙЛЕНД 0225 </p>
                <p className="catalog__text">белоснежный</p>
              </div>
            </div>
            <div className="catalog__info">
              <img className="info__img" src="" alt="" />
              <div className="info__param">
                <p className="info__name">Наименование</p>
                <p className="info__name">Артикул</p>
                <p className="info__name">Единица измерения</p>
                <p className="info__name">Структура</p>
                <p className="info__name">Толщина</p>
                <p className="info__name">Ширина полосы</p>
                <p className="info__name">Малая фасовка</p>
                <p className="info__name">Большая фасовка</p>
                <p className="info__name">Цвет</p>
                <p className="info__name">Страна происхождения</p>
              </div>
            </div>
            <div className="catalog__list">
              <div className="catalog__box">
                <img
                  id="283"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/c26/c269da33b3c267a801cc3b540dd45a97.png"
                  alt="зебра АРАБЕСКА 2259 магнолия, 270 см"
                />

                <p className="catalog__text">зебра АРАБЕСКА 2259 </p>
                <p className="catalog__text">магнолия</p>
              </div>
              <div className="catalog__box">
                <img
                  id="284"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/deb/deb95fa7caf76c3fb371ba9a993662b5.png"
                  alt="зебра АРАБЕСКА 2261 св. бежевый, 270 см"
                />

                <p className="catalog__text">зебра АРАБЕСКА 2261 </p>
                <p className="catalog__text">св. бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="285"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/ff7/ff72a34dde255bacf2e87a700dcb44c6.png"
                  alt="зебра АРАБЕСКА 2406 бежевый, 270 см"
                />

                <p className="catalog__text">зебра АРАБЕСКА 2406 </p>
                <p className="catalog__text">бежевый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="286"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/3d4/3d447dc4930b5b3d7ace81a5ad877e01.png"
                  alt="зебра БАБОЧКИ 4096 розовый, 260 см"
                />

                <p className="catalog__text">зебра БАБОЧКИ 4096 </p>
                <p className="catalog__text">розовый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="287"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/784/78462cbfcf2c0c3f741fc01f9b690d73.png"
                  alt="зебра ВАЛЕНСИЯ 0225 белый, 280 см"
                />

                <p className="catalog__text">зебра ВАЛЕНСИЯ 0225 </p>
                <p className="catalog__text">белый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="288"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/7d0/7d090645b6433dc79398d58a1ebeca25.png"
                  alt="зебра ВАЛЕНСИЯ 1852 серый, 280 см"
                />

                <p className="catalog__text">зебра ВАЛЕНСИЯ 1852 </p>
                <p className="catalog__text">серый</p>
              </div>
              <div className="catalog__box">
                <img
                  id="289"
                  onClick={props.onClick}
                  className="catalog__img"
                  src="http://amigo.ru/upload/iblock/e2f/e2feef73ba96571ed935ccc8bfe110e4.png"
                  alt="зебра ВАЛЕНСИЯ 2261 св.бежевый, 280 см"
                />

                <p className="catalog__text">зебра ВАЛЕНСИЯ 2261 </p>
                <p className="catalog__text">св.бежевый</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="catalog__button"
          type="button"
          name="modal"
          onClick={props.onPopup}
        >
          СМОТРЕТЬ ВЕСЬ КАТАЛОГ
        </button>
      </section>

      <section className="clients" id="clients">
        <h2 className="section__title">Наши клиенты</h2>
        <ul className="clients__lists">
          <li>
            <img
              className="clients__img"
              src={gazprom}
              width="200px"
              alt="Газпром"
            />
          </li>
          <li>
            <img
              className="clients__img"
              src={uralsib}
              width="200px"
              alt="Уралсиб"
            />
          </li>
          <li>
            <img
              className="clients__img"
              src={magnit}
              width="200px"
              alt="Магнит"
            />
          </li>
          <li>
            <img
              className="clients__img"
              src={megafon}
              width="200px"
              alt="Мегафон"
            />{" "}
          </li>
          <li>
            <img
              className="clients__img"
              src={rosgosstrah}
              width="200px"
              alt="Росгосстрах"
            />
          </li>
          <li>
            <img
              className="clients__img"
              src={rostelecom}
              width="200px"
              alt="Ростелеком"
            />
          </li>
        </ul>
      </section>

      <section className="benefits">
        <h2 className="section__title">Почему нам доверяют?</h2>
        <div className="benefits__box">
          <div className="benefit">
            <img className="benefit__img" src={sroki} alt="Почему мы?" />
            <div className="benefit__info">
              <h3 className="benefit__subtitle">Сроки</h3>
              <p className="benefit__text">
                От вашего обращения до установки готового изделия проходит не
                больше недели!
              </p>
            </div>
          </div>
          <div className="benefit">
            <img className="benefit__img" src={proizvod} alt="Почему мы?" />
            <div className="benefit__info">
              <h3 className="benefit__subtitle">Собственное производство</h3>
              <p className="benefit__text">
                Все жалюзи и рулонные шторы изготавливаются на нашем
                производстве поэтому мы можем себе позволить гибкую ценовую
                политику и предоставлять вам выгодные скидки.
              </p>
            </div>
          </div>
          <div className="benefit">
            <img className="benefit__img" src={garantiya} alt="Почему мы?" />
            <div className="benefit__info">
              <h3 className="benefit__subtitle">Гарантия качества работ</h3>
              <p className="benefit__text">
                Мы гарантируем безупречную работу нашей продукции, даем 1 год
                гарантии, а так же осуществляем послегарантийный ремонт.
              </p>
            </div>
          </div>
          <div className="benefit">
            <img className="benefit__img" src={opit} alt="Почему мы?" />
            <div className="benefit__info">
              <h3 className="benefit__subtitle">Опытные монтажники</h3>
              <p className="benefit__text">
                Мы не берем на работу кого попало! Все наши монтажники и
                замерщики прошли профессиональное обучение и имеют многолетний
                опыт работы с жалюзи и рулонными шторами.
              </p>
            </div>
          </div>
          <div className="benefit">
            <img className="benefit__img" src={free} alt="Почему мы?" />
            <div className="benefit__info">
              <h3 className="benefit__subtitle">Все замеры - бесплатно!</h3>
              <p className="benefit__text">
                Вам не нужно платить за вызов замерщика. Если вы сомневаетесь в
                том подойдут ли жалюзи на ваше окно, то позвоните нам по
                телефону и запишитесь на замер.
              </p>
            </div>
          </div>
          <div className="benefit">
            <img className="benefit__img" src={many} alt="Почему мы?" />
            <div className="benefit__info">
              <h3 className="benefit__subtitle">Богатый ассортимент</h3>
              <p className="benefit__text">
                Компания ПСКОВСКИЕ ЖАЛЮЗИ предлагает широкий выбор расцветок,
                фактур и вариантов исполнений солнцезащитных систем на любой
                вкус и бюджет.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="saving">
        <h2 className="section__title saving__title">
          Закажите бесплатный монтаж жалюзи прямо сейчас
        </h2>
        <div className="saving__box">
          <form className="site-form" action="index.html" method="POST">
            <h2 className="site-form__title">ОСТАВЬ ЗАЯВКУ</h2>
            <p className="site-form__subtitle">
              и получи в подарок БЕСПЛАТНЫЙ монтаж жалюзи
            </p>
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
              value="ПОЛУЧИТЬ ПОДАРОК"
            />
          </form>
        </div>
      </section>

      <section className="result" id="company">
        <h2 className="section__title">
          ПСКОВСКИЕ ЖАЛЮЗИ - это 2746 довольных клиентов
        </h2>
        <div className="result__box">
          <div className="result__advantage">
            <img className="result__img" src={specProiz} alt="" />
            <p className="result__subtitle">
              Специализированное производство жалюзи и рулонных штор
            </p>
          </div>
          <div className="result__advantage">
            <img className="result__img" src={whyWe2} alt="" />
            <p className="result__subtitle">
              Собственный отдел контроля качества на производстве
            </p>
          </div>
          <div className="result__advantage">
            <img className="result__img" src={zakazchiki} alt="" />
            <p className="result__subtitle">
              Более чем 2700 довольных заказчиков в 17 городах
            </p>
          </div>
          <div className="result__advantage">
            <img className="result__img" src={uspeh} alt="" />
            <p className="result__subtitle">
              10 лет успешной работы на рынке солнцезащитных систем
            </p>
          </div>
        </div>
      </section>

      {/* <section className="service">
        <h2 className="section__title">Как мы работаем</h2>
        <ul className="service__box">
          <li className="service__work">
            <img className="service__img" src={zayavka} alt="Как мы работаем" />
            <p className="service__subtitle">
              1. Вы оставляете заявку на сайте или звоните нам по телефону +7
              (8112) 702-802
            </p>
          </li>
          <li className="service__work">
            <img className="service__img" src={zvonok} alt="Как мы работаем" />
            <p className="service__subtitle">
              2. Наш менеджер связывается с Вами, консультирует по всем вопросам
              и согласует время приезда мастера по замерам.
            </p>
          </li>
          <li className="service__work">
            <img className="service__img" src={zamer} alt="Как мы работаем" />
            <p className="service__subtitle">
              3. Наш специалист приезжает к Вам, выполняет необходимые замеры,
              консультирует Вас и рассчитывает точную стоимость работ.
            </p>
          </li>
          <li className="service__work">
            <img className="service__img" src={izgotov} alt="Как мы работаем" />
            <p className="service__subtitle">
              4. Мы производим Ваши жалюзи на нашем предприятии.
            </p>
          </li>
          <li className="service__work">
            <img
              className="service__img"
              src={ustanovka}
              alt="Как мы работаем"
            />
            <p className="service__subtitle">
              5. В назначенный срок наш монтажник приезжает к Вам и
              устанавливает изделия.
            </p>
          </li>
          <li className="service__work">
            <img className="service__img" src={happy} alt="Как мы работаем" />
            <p className="service__subtitle">
              6. Вы становитесь счастливым обладателем жалюзи или рулонных штор.
            </p>
          </li>
        </ul>
      </section> */}

      <section className="contacts" id="contacts">
        <iframe
          className="contacts__map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A069f48e680190270ad2e086d13c01d9fe2b5d99bf0b27cd89ba69b7e84b453d2&amp;source=constructor"
          width="100%"
          height="417"
          frameBorder="0"
          title="Карта"
        ></iframe>

        <div className="contacts__box">
          <div className="contacts__wrap">
            <h2 className="contacts__title">Контактная информация</h2>
            <p className="contacts__text">
              Телефон:{" "}
              <a className="contacts__link" href="tel:+380985554433">
                + 7 (8112) 61-45-11
              </a>
            </p>
            <p className="contacts__text">
              WEB:{" "}
              <a className="contacts__link" href="index.html#">
                zhaluzipskov.ru
              </a>
            </p>
            <p className="contacts__text">
              E-mail:{" "}
              <a
                className="contacts__link"
                href="mailto:mirzhaluzi.pskov@mail.ru"
              >
                mirzhaluzi.pskov@mail.ru
              </a>
            </p>
            <p className="contacts__text">
              Адрес: г. Псков, Октябрьский проспект, дом 54, ТЦ Максимус, 2 этаж
            </p>
            <button
              className="contacts__button"
              type="button"
              onClick={props.onPopup}
              name="modal"
            >
              Связаться с менеджером
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;

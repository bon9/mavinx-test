import React, { useEffect } from "react";
import { connect } from "react-redux";
import { editedStateCancel } from "../../store/actions/editActions";
import "./MainPage..css";
import ItemResult from "./ItemResult";

const MainPage = ({ editedStateCancel }) => {
  useEffect(() => {
    // устанавливаем edited в false после редиректа со страницы редактирования
    editedStateCancel();
  }, [editedStateCancel]);

  const count = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mainWrap">
      <section className="left">
        <div className="headerLeft">
          <div className="title">Фильтры</div>
          <button type="button" className="btnClear">
            Очистить
          </button>
        </div>
        <div className="categories">
          <div className="categoriesHeader">
            Категории <span>(14)</span>
          </div>

          <div className="inputWrap">
            <input
              type="text"
              className="inputCategory"
              placeholder="Название"
            />
            <button className="inputAdd" type="button">
              +
            </button>
          </div>

          <div className="categoriesList">
            <span className="addedCategory">#Логотип</span>
            <span className="addedCategory">#Landing-page</span>
            <span className="addedCategory">#Промо-сайт</span>
            <button className="categoryClose">
              <span>+</span>
            </button>
          </div>

          <div className="cost">
            <div className="сostHeader">Стоимость</div>
            <div className="wrapCostContent">
              <div className="wrapConst">
                <select name="currency" id="currency" className="currency">
                  <option value="USD">USD</option>
                  <option value="UAH">ГРН</option>
                </select>
                <input type="text" className="inputConst" placeholder="от" />
                <input type="text" className="inputConst" placeholder="до" />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                className="roller"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="right">
        <div className="title">
          Найдено
          <span className="result">(192)</span>
        </div>

        <div className="listItemResult">
          {count.map(c => (
            <ItemResult key={c} />
          ))}
        </div>

        <div className="pagination">
          <button className="prev">&larr; Назад</button>
          <span>1</span>
          <span className="activePage">2</span>
          <span>3</span>
          <span>4</span>
          <span>...</span>
          <span>12</span>
          <span>13</span>
          <button className="next">Вперед &rarr;</button>
        </div>
      </section>
    </div>
  );
};

export default connect(
  null,
  { editedStateCancel }
)(MainPage);

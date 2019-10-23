import React from "react";

const ItemResult = () => {
  return (
    <div className="item">
      <div className="itemLeft">
        <h3 className="itemHeader">Дизайн сайта UI и UX</h3>
        <p className="itemDescribe">
          Рекламные компании говорят, что реклама необходима и важна. Она
          информирует людей о новых продуктах. Рекламные щиты на улице делают
          нашу среду яркой
        </p>
        <div className="itemHashtagWrap">
          <span>#Landing page</span>
          <span>#Логотип</span>
          <span>#Промо-сайт</span>
        </div>
      </div>

      <div className="itemRight">
        <div className="priceWrap">
          <div className="price">1 840$</div>
          <p className="priceDescribe">1-2 месяца</p>
        </div>
      </div>
    </div>
  );
};

export default ItemResult;

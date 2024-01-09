import React, { useState } from "react";

const SubRegion = ({ copyCards, region, fun, style }) => {
  const [subregion, setSubregion] = useState(copyCards);

  const subs = copyCards.reduce((accu, curr) => {
    var region = curr.region.toLowerCase();
    if (!accu.hasOwnProperty(region)) {
      accu[region] = [];
    }

    if (!accu[region].includes(curr.subregion)) {
      accu[region].push(curr.subregion);
    }
    return accu;
  }, {});

  var list = subs.hasOwnProperty(region) ? subs[region] : [];

  //   console.log(list);

  const displayed = (e) => {
    const target = e.target.text;
    const result = copyCards.filter((card) => {
      return card.subregion === target;
    });
    fun(result);
    // setFun(result);
  };

  return (
    <div className="dropdown ">
      <button
        className="btn  dropdown-toggle"
        type="button"
        data-bs-toggle={list.length > 0 ? "dropdown" : ""}
        aria-expanded="false"
        style={style}
      >
        Filter by SubRegion:
      </button>
      <ul className="dropdown-menu" onClick={displayed} style={style}>
        {list.map((lis) => {
          return (
            <li key={lis}>
              <a className="dropdown-item" href="#" style={style}>
                {lis}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubRegion;

import React, { useState } from "react";

const SubRegion = ({ copyCards, region, fun, setFun }) => {
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
        className="btn btn-secondary dropdown-toggle bg-white text-black"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by SubRegion:
      </button>
      <ul className="dropdown-menu" onClick={displayed}>
        {list.map((lis) => {
          return (
            <li key={lis}>
              <a className="dropdown-item" href="#">
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

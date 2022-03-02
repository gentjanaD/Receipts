import React from "react";
import { useState } from "react";
const [data, setData] = useState([]);
const fetchData = async () => {
  const resp = await fetch("http://192.168.0.41:3000");
  const data = await resp.json();
  const categoryNames = data.map((el) => {
    return el.category;
  });
  let unique = categoryNames.filter((item, i, ar) => ar.indexOf(item) === i);
  setCategories(unique);
  let newData = unique.map((el) => {
    return {
      category: el,
      data: data.filter((element) => element.category === el),
    };
  });
  setData(newData);
  setLoading(false);
};

export default fetchData;

export const API = url => {
  return;
  try {
    fetch(url)
      .then(resp => resp.json())
      .then(data => data.pizzas);
  } catch (error) {
    console.log(error);
  }
};

API("http://localhost:3000/db.json");

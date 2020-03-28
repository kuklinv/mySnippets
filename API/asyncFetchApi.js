window.onload = async function() {
  let res = await fetch("https://swapi.co/api/planets/").then(res =>
    res.json()
  );
  planetArr = res.results.map((el, index) => {
    el.index = index;
    return el;
  });
  nextPlanetPage = res.next; // next page from api (10 items on one page)
  prevPlanetPage = res.previous;

  drawPlanetsOnHTML();
};

// pagination functionality:

const loadPlanetPage = async function loadPlanetPageFromSWAPI(url) {
  let { next, previous, results } = await fetch(url).then(res => res.json());

  nextPlanetPage = next;
  prevPlanetPage = previous;

  planetArr = results.map((el, index) => {
    el.index = index;
    return el;
  });
  drawPlanetsOnHTML();
};

import pokemon from "../../pokemon.json";

const deetsFunc = (req, res) => {
  if (!req.query.name) {
    res.statusCode = 400;
    res.end("Name is required!");
  } else {
    const found = pokemon.filter(
      ({ name: { english } }) => english === req.query.name
    );

    if (found.length === 0) {
      res.statusCode = 404;
      res.end("Pokemon not found!");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(found[0]));
    }
  }
};

export default deetsFunc;

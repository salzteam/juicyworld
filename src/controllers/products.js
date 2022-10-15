const productsRepo = require("../repo/products");

const create = async (req, res) => {
  console.log(req.file.filename);
  const result = await productsRepo.createProducts(req.body, req.file);
  res.status(result.statusCode).send(result);
};
const drop = async (req, res) => {
  const result = await productsRepo.deleteProducts(req.params);
  res.status(result.statusCode).send(result);
};
const edit = async (req, res) => {
  console.log(req.file);
  const result = await productsRepo.editProducts(
    req.body,
    req.params,
    req.file
  );
  res.status(result.statusCode).send(result);
};
const get = async (req, res) => {
  const result = await productsRepo.getProducts(req.query);
  res.status(result.statusCode).send(result);
};
const productsControllers = {
  create,
  drop,
  edit,
  get,
};

module.exports = productsControllers;

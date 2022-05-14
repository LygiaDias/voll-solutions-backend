import * as sinon from "sinon";
import * as chai from "chai";
import * as bcrypt from "bcryptjs";

import chaiHttp = require("chai-http");
import userMock from "./user.mock";
import productsMock, { productsById } from "./products.mock";

import { app } from "../app";
import UserModel from "../database/models/user.model";
import productsModel from "../database/models/products.model";

import { Response } from "superagent";

chai.use(chaiHttp);

const { expect } = chai;

describe("Endpoint /Login", () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(UserModel, "findOne").resolves(userMock as UserModel);
  });

  after(() => {
    (UserModel.findOne as sinon.SinonStub).restore();
  });

  it("O login tem o retono correto", async () => {
    sinon.stub(bcrypt, "compareSync").returns(true);

    chaiHttpResponse = await chai.request(app).post("/login").send({
      email: "admin@admin.com",
      password: "secret_admin",
    });

    expect(chaiHttpResponse.body.user).to.be.deep.equal(userMock);
    expect(chaiHttpResponse).to.have.status(200);
  });
});

describe("O login retorna uma mensagem de erro ao digitar os dados incorretamente", () => {
  let chaiHttpResponse: Response;

  before(() => {
    sinon.stub(UserModel, "findOne").resolves(null);
  });

  after(() => {
    (UserModel.findOne as sinon.SinonStub).restore();
  });
  it("O endpoint retorna mensagem de erro ao não digitar o email", async () => {
    chaiHttpResponse = await chai.request(app).post("/login").send({
      email: "",
      password: "secret_admin",
    });

    expect(chaiHttpResponse.body.message).to.be.deep.equal(
      "All fields must be filled"
    );
    expect(chaiHttpResponse).to.have.status(400);
  });

  it("O endpoint retorna mensagem de erro ao não digitar o password", async () => {
    chaiHttpResponse = await chai.request(app).post("/login").send({
      email: "admin@admin.com",
      password: "",
    });

    expect(chaiHttpResponse.body.message).to.be.deep.equal(
      "All fields must be filled"
    );
    expect(chaiHttpResponse).to.have.status(400);
  });

  it("O endpoint retorna mensagem de erro ao digitar o email incorretamente", async () => {
    chaiHttpResponse = await chai.request(app).post("/login").send({
      email: "emailincorreto@admin.com",
      password: "secret_admin",
    });

    expect(chaiHttpResponse.body.message).to.be.deep.equal(
      "Incorrect email or password"
    );
    expect(chaiHttpResponse).to.have.status(401);
  });

  it("O endpoint retorna mensagem de erro ao digitar a senha incorretamente", async () => {
    chaiHttpResponse = await chai.request(app).post("/login").send({
      email: "admin@admin.com",
      password: "senha incorreta",
    });

    expect(chaiHttpResponse.body.message).to.be.deep.equal(
      "Incorrect email or password"
    );
    expect(chaiHttpResponse).to.have.status(401);
  });
});

describe("Endpoint /products", () => {
  describe("Testa  se os produtos sao retornados corretamente", () => {
    before(() => {
      sinon
        .stub(productsModel, "findAll")
        .resolves(productsMock as unknown as productsModel[]);
    });

    after(() => {
      (productsModel.findAll as sinon.SinonStub).restore();
    });

    it("Retorna todos os produtos", async () => {
      let chaiHttpResponse = await chai.request(app).get("/products");
      expect(chaiHttpResponse.body).to.be.deep.equal(productsMock);
    });
  });

  describe("Filtra o produto por id", () => {
    before(() => {
      sinon
        .stub(productsModel, "findOne")
        .resolves(productsById as unknown as productsModel);
    });

    after(() => {
      (productsModel.findOne as sinon.SinonStub).restore();
    });

    it("Testando GET por id de um único time", async () => {
      let chaiHttpResponse = await chai.request(app).get("/products/1");
      expect(chaiHttpResponse.body).to.be.deep.equal(productsById);
    });
  });
});

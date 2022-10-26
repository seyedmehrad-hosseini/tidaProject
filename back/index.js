const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const coins = [
  {
    id: 1,
    title: "BTC",
    desc: "Bitcoin",
    count: 19384.21,
  },
  {
    id: 2,
    title: "ETC",
    desc: "Ethereum",
    count: 1348.0,
  },
  {
    id: 3,
    title: "USDT",
    desc: "Tether",
    count: 0.999994,
  },
  {
    id: 4,
    title: "BNB",
    desc: "Binance Coin",
    count: 274.31,
  },
  {
    id: 5,
    title: "XRP",
    desc: "Ripple",
    count: 0.455713,
  },
  {
    id: 6,
    title: "ADA",
    desc: "Cardano",
    count: 10.362954,
  },
  {
    id: 7,
    title: "SOL",
    desc: "Solana",
    count: 28.96,
  },
  {
    id: 8,
    title: "DOGE",
    desc: "Dogecoin",
    count: 0.05965,
  },
  {
    id: 9,
    title: "DOT",
    desc: "Polkadot",
    count: 5.89,
  },
  {
    id: 10,
    title: "MATIC",
    desc: "Polygon",
    count: 0.891844,
  },
  {
    id: 11,
    title: "STETH",
    desc: "Lido Staked Ether",
    count: 1345.42,
  },
  {
    id: 12,
    title: "SHIB",
    desc: "Shiba Inu",
    count: 0.00001003,
  },
  {
    id: 13,
    title: "LTC",
    desc: "Litecoin",
    count: 53.13,
  },
  {
    id: 14,
    title: "TRX",
    desc: "TRON",
    count: 0.061581,
  },
  {
    id: 15,
    title: "UNI",
    desc: "Uniswap",
    count: 6.17,
  },
];

const users = [
  {
    id: 1,
    username: "admin",
    password: "123",
    token: "12345",
  },
];

app.get("/api/coins", (req, res) => {
  res.json(coins);
});

app.post("/api/user", (req, res) => {
  console.log(req.body);
  const index = users.findIndex(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );
  console.log(index);
  if (index === -1) res.json("user not found");
  res.json({ token: users[index].token });
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});

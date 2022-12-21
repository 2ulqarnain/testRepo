const login = {
  event: "login",
  data: {
    apiKey: process.env.API_KEY,
  },
};

const subscribe = {
  event: "subscribe",
  data: {
    ticker: "btcusd",
  },
};

module.exports={
    login,
    subscribe
}
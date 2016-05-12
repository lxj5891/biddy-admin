var MONGODB_URL = process.env.MONGODB_URL || null;

console.log("load mongodb url : " + MONGODB_URL);

if (MONGODB_URL) {

  console.log("load mongodb url : " + MONGODB_URL);

  module.exports = {
    db: {
      name: 'db',
      connector: 'loopback-connector-mongodb',
      url: MONGODB_URL
    }
  };
}

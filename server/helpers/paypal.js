const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASTQUA4xIy_oa2x81lRyZHdlbREeIxO2Uq2Vuth5Y9SwTjfIGDzf-fdiltLeHPqVuxMJ__Lj9i2Bz9Qt",
  client_secret: "EK0b1kyEzZRJ6l-l6wpMoadoZc30N0MBqn4SXhxXG4MgVydo7JnPfGwfH5OVGPDuWgWaF2SLrFH3AnYq",
});

module.exports = paypal;

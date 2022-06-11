const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let marah = 0;
  let tidakMarah = 0;

  let dataIXX = await promiseTheaterIXX();
  dataIXX.forEach((object, index) => {
    if (object.hasil === "marah") {
      marah += 1;
    }
    if (object.hasil === "tidak marah") {
      tidakMarah += 1;
    }
  });

  let dataVGC = await promiseTheaterVGC();
  dataVGC.forEach((object, index) => {
    if (object.hasil === "marah") {
      marah += 1;
    }
    if (object.hasil === "tidak marah") {
      tidakMarah += 1;
    }
  });
  if (emosi === "marah") {
    return marah;
  } else if (emosi === "tidak marah") {
    return tidakMarah;
  }
};

module.exports = {
  promiseOutput,
};

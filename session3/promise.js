// Pembuatan Promise
let hitung = (num, isRunning, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRunning) {
        resolve(num);
      } else {
        reject("error");
      }
    }, timeout);
  });
};

const promiseFunc = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("result after 5 second timer expired!");
      resolve(result * 3);
    }, 5000);
  });
};

/*
  Promise Based
  Pemanggilan Promise
*/
hitung(10, true, 3000)
  .then((result) => {
    console.log(result); // 10
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 20
    return promiseFunc(result);
  })
  .then((result) => {
    console.log(result); // 60
    return result * 4;
  })
  .then((result) => {
    console.log(result); // 240
    return result * 5;
  })
  .then((x) => console.log(x))
  .catch((error) => {
    console.log(error);
  });

// Prommise Based implicit return
hitung(10, true, 3000)
  .then((result) => result * 2)
  .then((result) => promiseFunc(result))
  .then((result) => result * 4)
  .then((result) => result * 5)
  .then((x) => console.log(x))
  .catch((error) => console.log(error));

// Promise with async await
const tes = async () => {
  try {
    const firstResult = await hitung(10, true, 3000);
    const secondResult = (await firstResult) * 2;
    const thirdResult = await promiseFunc(secondResult);
    console.log(thirdResult);
  } catch (error) {
    console.log(error);
  }
};

// // Pembuatan fungsi
// const tes = () => {
//   return "tes";
// };

// const tes2 = () => {
//   return "tes2";
// };

// // Pemanggilan Fungsi
// tes();
// tes2();

/**
 * Create JSDOC comment
 *
 * @description To get distance in google map from point A to point B
 *
 * @param {Number} pointA
 * @param {Number} pointB
 */
const getDistance = (pointA, pointB) => pointA + pointB;

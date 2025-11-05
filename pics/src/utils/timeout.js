export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`請求時間過長! Timeout after ${s} second`));
    }, s * 1000);
  });
};

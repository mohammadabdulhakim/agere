const randArr = (arr: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => {
  let output: any[] = [];

  while (arr.length !== output.length) {
    let anyIndex = Math.floor(Math.random() * arr.length);
    const arrEle = arr[anyIndex];

    if (output.includes(arrEle)) {
      continue;
    } else {
      output.push(arrEle);
    }
  }

  return output;
};

console.log(randArr());

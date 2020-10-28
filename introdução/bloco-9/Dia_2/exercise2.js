const arrayPromise = () => {
  const promise = new Promise((resolve, reject) => {
    let array = [], index = 0;
    while (index <= 10) {
      array.push(Math.floor(Math.random() * 50 + 1));
      index += 1;
    }
    const sum = array.map(number => number * number)
      .reduce((number, acc) => number + acc, 0);

    (sum < 8000) ? resolve() : reject();
  });

    promise
    .then(() => console.log('Deu bom'))
    .catch(() => console.log('Deu ruim'));
};

arrayPromise();
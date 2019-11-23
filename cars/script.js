document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const select = document.getElementById('cars'),
    output = document.getElementById('output'),
    urlLink = 'cars.json';

  const getData = (url) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.setRequestHeader('Content-type', 'application/json');
      request.send();
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          const response = JSON.parse(request.responseText);

          resolve(response);
        } else {

          reject(output.innerHTML = 'Произошла ошибка');
        }
      });
    });
  };

  const resolveIt = (response) => {
    console.log('response: ', response);
    response.cars.forEach(item => {
      if (item.brand === select.value) {
        const { brand, model, price } = item;
        output.innerHTML = `Тачка ${brand} ${model} <br>
                            Цена: ${price}$`;
      }
    });
  };

  select.addEventListener('change', () => {
    getData(urlLink)
      .then(resolveIt)
      .catch((error => console.log(error)));
  });

});
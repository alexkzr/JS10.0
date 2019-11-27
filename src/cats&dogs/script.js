document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const wrap = document.querySelector('.wrap'),
    card = document.querySelector('.card'),
    btn1 = document.getElementById('button1'),
    btn2 = document.getElementById('button2'),
    catUrl = 'https://aws.random.cat/meow',
    dogUrl = 'https://random.dog/woof.json';

  const getJson = url => {
    return fetch(url);
  };


  wrap.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target;
    if (target.matches('#button1')) {
      card.innerHTML = '';

      getJson(dogUrl)
        .then(
          function (response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }

            return response.json().then((data) => {
              if (data.url.includes('jpg', -3) || data.url.includes('png', -3)) {
                let img = document.createElement('img');
                img.src = data.url;
                card.appendChild(img);
              } else if (data.url.includes('mp4', -3)) {
                let img = document.createElement('video');
                img.src = data.url;
                card.appendChild(img);
                img.autoplay = true;
                img.load();
              }

            });
          }
        )
        .catch(error => console.error(error));
    } else if (target.matches('#button2')) {
      card.innerHTML = '';

      getJson(catUrl)
        .then(
          function (response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
            return response.json().then((data) => {
              if (data.file.includes('jpg', -3) || data.file.includes('png', -3)) {
                let img = document.createElement('img');
                img.src = data.file;
                card.appendChild(img);
              } else if (data.file.includes('mp4', -3)) {
                let img = document.createElement('video');
                img.src = data.url;
                card.appendChild(img);
                img.autoplay = true;
                img.load();
              }

            });
          }
        )
        .catch(error => console.error(error));
    }
  });
  fetch(catUrl, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
    mode: 'no-cors',
  }).then((data) => console.log(data));

});
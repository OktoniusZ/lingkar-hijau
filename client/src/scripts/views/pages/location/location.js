const cardMap = document.querySelector('#card_container');
fetch('/relawan')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((data) => {
        cardMap.innerHTML = `
        <div class="card">
          <div class="name-card">
            <h2>Nama Relawan<br></h2>
            <p>${data.nama}</p>
          </div>
          <div class="date-card">
            <h2>Tanggal Penanaman<br></h2>
            <p>${data.tanggal}</p>
          </div>
          <div class="tree-num-card">
            <h2>Jumlah Pohon<br></h2>
            <p>${data.jumlah}</p>
          </div>
          <div class="tree-type-card">
            <h2>Jenis Pohon<br></h2>
            <p>${data.jenis}</p>
          </div>
          <div class="tree-loc-card">
            <h2>Lokasi<br></h2>
            <p>${data.lokasi}</p>
          </div>
        </div>
        `;
      });
    });

const hamburger = document.querySelector('#icon-mobile');
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');

hamburger.addEventListener('click', function(event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

main.addEventListener('click', function(event) {
  drawer.classList.remove('open');
  event.stopPropagation();
});

/* eslint-disable camelcase */
/* eslint-disable max-len */
const menu = document.querySelector('#hamburgerButton');
const main = document.querySelector('main');
const drawer = document.querySelector('#navigationDrawer');

menu.addEventListener('click', function(event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
     (splitedUrl.id ? '/:id' : '') +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};


fetch('/support')
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector('#tableBody');
      console.log(UrlParser.parseActiveUrlWithoutCombiner().id);
      data.forEach((data) => {
        tableBody.innerHTML += `
            <tbody>
            <tr>
              <th scope="row">1</th>
              <th>${data.nama}</th>
              <th>${data.email}</th>
              <th>${data.nomorHp}</th>
              <th>${data.pesan}</th>
            </tr>
            </tbody>
          `;
      });
    });

fetch('/relawan')
    .then((response) => response.json())
    .then((data) => {
      const tableBody_2 = document.querySelector('#tableBody_2');
      let counter = 1;
      data.forEach((data) => {
        tableBody_2.innerHTML += `
        <tr>
          <th scope="row">${counter}</th>
          <th>${data.nama}</th>
          <th>${data.tanggal}</th>
          <th>${data.jumlah}</th>
          <th>${data.jenis}</th>
          <th>${data.lokasi}</th>
          <th>${data.umur} Bulan</th>
          <th>
          <a href="/edit/${data._id}" type="button" class="btn btn-success">Edit</a> 
          <a href="/relawan/delete/${data._id}" type="button" class="btn btn-danger">Hapus</a>
          </th>
        </tr>
      `;
        counter+=1;
        console.log(data);
      });
    });

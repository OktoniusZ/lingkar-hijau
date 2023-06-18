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


const url = window.location.href;
const result= url.split('/');
const Param = result[result.length-2];
console.log(Param);
window.addEventListener('DOMContentLoaded', () => {
  fetch(`/relawan/${Param}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const container = document.querySelector('.container-admin');
        const editForm = document.createElement('form');
        editForm.setAttribute('method', 'post');
        editForm.setAttribute('action', `/relawan/update/${Param}`);
        editForm.innerHTML = `
    <form action="/relawan/update/${Param}" method="post">
    <div class="mb-5">
      <div class="row">
        <div class="form-group col-md-6 mb-3">
          <label for="nama-pohon">Nama Relawan</label>
          <input type="text" name="nama" class="form-dash" id="nama-relawan" placeholder="Masukkan Nama Relawan..." value="${data.nama}" />
        </div>
        <div class="form-group col-md-6 mb-3">
          <label for="jenis-pohon">Jenis Pohon</label>
          <input type="text" name="jenis" class="form-dash" id="jenis-pohon" placeholder="Masukkan Jenis Pohon..." value="${data.jenis}" />
        </div>
        <div class="form-group col-md-6 mb-3">
          <label for="tgl-tanam">Tanggal Penanaman</label>
          <input type="datetime" name="tanggal" class="form-dash" id="tgl-tanam" placeholder="Masukkan Tanggal Penanaman..." value="${data.tanggal}" />
        </div>
        <div class="form-group col-md-6 mb-3">
          <label for="habitat-pohon">Lokasi</label>
          <input type="text" name="lokasi" class="form-dash" id="lokasi-pohon" placeholder="Masukkan Lokasi Pohon..." value="${data.lokasi}" />
        </div>
        <div class="form-group col-md-6 mb-3">
          <label for="umur-pohon">Jumlah Pohon</label>
          <input type="number" name="jumlah" class="form-dash" id="jumlah-pohon" placeholder="Masukkan Jumlah Pohon..." value="${data.jumlah}"/>
        </div>
        <div class="form-group col-md-6 mb-3">
          <label for="desc-pohon">Umur Pohon</label>
          <input type="number" name="umur" class="form-dash" id="umur-pohon" placeholder="Masukkan Umur Pohon..." value="${data.umur}" />
        </div>
        <div class="col-lg-12 mt-5">
          <button class="btn btn-primary" type="submit" id="Update">Update</button>
        </div>
      </form>
  `;
        container.appendChild(editForm);
      });
});


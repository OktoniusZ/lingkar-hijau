/* eslint-disable max-len */

const createTest = () => {
  return `
    <h1>TES</h1>
    <h1>TES</h1>
    <h1>TES</h1>
    <h1>TES</h1>
  `;
};

const createRestaurantFormTemplate = () => {
  return `
  <main>
      <div class="container-admin">
        <h2 class="mt-5 mb-5 display-5">Dashboard Lingkar Hijau</h2>
        <h2 class="mt-5 mb-5">Data Relawan</h2>
        <div class="row">
          <div class="col-12 table-responsive">
            <table class="table table-striped" id="crudTable">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Relawan</th>
                  <th>E-Mail</th>
                  <th>No. Handphone</th>
                  <th>Pesan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <th>Aldo</th>
                  <th>aldopradana3@gmail.com</th>
                  <th>08123456789</th>
                  <th>Hai! saya ingin menanam beberapa pohon di daerah dekat rumah saya nih</th>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <th>Pradana</th>
                  <th>aldoariando36@gmail.com</th>
                  <th>08987654321</th>
                  <th>Halo! apakah ada kontak yang dapat saya hubungi?</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <form id="myForm" action="/relawan" method="POST">
        <h2 class="mt-5 mb-5">Progress Pohon</h2>
        <div class="mb-5">
          <div class="row">
            <div class="form-group col-md-6 mb-3">
              <label for="nama-pohon">Nama Relawan</label>
              <input type="text" name="nama" class="form-dash" id="nama-relawan" />
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="jenis-pohon">Jenis Pohon</label>
              <input type="text" name="jenis" class="form-dash" id="jenis-pohon" />
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="tgl-tanam">Tanggal Penanaman</label>
              <input type="datetime" name="tanggal" class="form-dash" id="tgl-tanam" />
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="habitat-pohon">Lokasi Penanaman</label>
              <input type="text" name="lokasi" class="form-dash" id="lokasi-pohon" />
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="umur-pohon">Jumlah Pohon</label>
              <input type="number" name="jumlah" class="form-dash" id="jumlah-pohon" /> 
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="desc-pohon">Kota Lokasi</label>
              <input type="number" name="kota" class="form-dash" id="kota-lokasi" />
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="desc-pohon">Tipe Hutan</label>
              <input type="number" name="tipe" class="form-dash" id="tipe-hutan" />
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="desc-pohon">Umur Pohon</label>
              <input type="number" name="umur" class="form-dash" id="umur-pohon" />
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="desc-pohon">Orang yang terlibat</label>
              <input type="number" name="orangTerlibat" class="form-dash" id="orang-terlibat" />
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="desc-pohon">Status Pohon</label>
              <input type="number" name="status" class="form-dash" id="status-pohon" />
            </div>
            <div class="col-lg-12 mt-5">
              <button class="btn btn-success" type="submit" id="Submit">Add Data</button>
            </div>
          </div>
        </form>
          <hr />
        </div>
      </div>
    </main>
  `;
};


export {
  createRestaurantFormTemplate,
  createTest,
};

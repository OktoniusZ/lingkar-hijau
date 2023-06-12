/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';

/* eslint-disable new-cap */
const Edit = {
  async render() {
    return `
    <main id="mainContainer">
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
        <hr />
      </div>
    </div>
  </main>
      `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.querySelector('.container-admin');
    console.log(url.id);

    fetch(`/relawan/${url.id}`)
        .then((response) => response.json())
        .then((data) => {
          container.innerHTML += `
          <form id="myForm" action="/relawan/update/${data._id}" method="POST">
            <h2 class="mt-5 mb-5">Progress Pohon</h2>
            <div class="mb-5">
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="nama-pohon">Nama Relawan</label>
                  <input type="text" name="nama" class="form-dash" id="nama-relawan" value="${data.nama}" />
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="jenis-pohon">Jenis Pohon</label>
                  <input type="text" name="jenis" class="form-dash" id="jenis-pohon" value="${data.jenis}" />
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="tgl-tanam">Tanggal Penanaman</label>
                  <input type="datetime" name="tanggal" class="form-dash" id="tgl-tanam" value="${data.tanggal}" />
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="habitat-pohon">Lokasi Penanaman</label>
                  <input type="text" name="lokasi" class="form-dash" id="lokasi-pohon" value="${data.lokasi}" />
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="umur-pohon">Jumlah Pohon</label>
                  <input type="number" name="jumlah" class="form-dash" id="jumlah-pohon" value="${data.jumlah}" /> 
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="desc-pohon">Kota Lokasi</label>
                  <input type="number" name="kota" class="form-dash" id="kota-lokasi" value="${data.kota}" />
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="desc-pohon">Tipe Hutan</label>
                  <input type="number" name="tipe" class="form-dash" id="tipe-hutan" value="${data.tipe}" />
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="desc-pohon">Umur Pohon</label>
                  <input type="number" name="umur" class="form-dash" id="umur-pohon" value="${data.umur}" />
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="desc-pohon">Orang yang terlibat</label>
                  <input type="number" name="orangTerlibat" class="form-dash" id="orang-terlibat" value="${data.orangTerlibat}" />
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="desc-pohon">Status Pohon</label>
                  <input type="number" name="status" class="form-dash" id="status-pohon" value="${data.status}" />
                </div>
                <div class="col-lg-12 mt-5">
                  <button class="btn btn-success" type="submit" id="Submit">Update Data
                  </button>
                </div>
              </div>
            </form>
          `;
        })
        .catch((err) => {
          console.log(err);
        });
  },
};

export default Edit;

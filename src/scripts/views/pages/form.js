/* eslint-disable max-len */
import {createRestaurantFormTemplate} from '../templates/template-creator';

const Relawan = {
  async render() {
    return ` 
    <div class="tes"></div>        
         <div class="row mt-5">
         <div class="col-12 table-responsive">
           <table class="table table-striped table-bordered" id="crudTable">
             <thead>
               <tr>
                 <th>No</th>
                 <th>Nama Relawan</th>
                 <th>Tanggal</th>
                 <th>Jumlah</th>
                 <th>Tipe Hutan</th>
                 <th>Orang yang terlibat</th>
                 <th>Jenis Pohon</th>
                 <th>Lokasi</th>
                 <th>Kota Lokasi</th>
                 <th>Umur</th>
                 <th>Status Pohon</th>
                 <th>Action</th>
               </tr>
             </thead>
             <tbody id="tableBody">
             </tbody>
           </table>
         </div>
       </div>
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.tes');
    restaurantContainer.innerHTML = createRestaurantFormTemplate();
    fetch('/relawan')
        .then((response) => response.json())
        .then((data) => {
          const tableRow = document.getElementById('tableBody');
          data.forEach((data) => {
            tableRow.innerHTML += `
            <tr>
                 <th scope="row">1</th>
                 <th>${data.nama}</th>
                 <th>${data.tanggal}</th>
                 <th>${data.jumlah}</th>
                 <th>${data.tipe}</th>
                 <th>${data.orangTerlibat}</th>
                 <th>${data.jenis}</th>
                 <th>${data.lokasi}</th>
                 <th>${data.kota}</th>
                 <th>${data.umur}</th>
                 <th>T${data.status}</th>
                 <th>
                  <a href="/#/edit/${data._id}" type="button" class="btn btn-success" id="editButton">Edit</a> 
                  <a href="/relawan/delete/${data._id}" type="button" class="btn btn-danger">Hapus</a>
                 </th>
               </tr>
            `;
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
};

export default Relawan;

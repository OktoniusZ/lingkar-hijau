/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

const jumbotronHomeTemplate = () => {
  return `
  <!--Jumbotron -->
  <div class="jumbotron">
    <div class="jumbotron-title">
      <h1>Ayo Beraksi!</h1>
      <p>Lindungi Indonesia untuk tetap hijau dengan mudah dan berkelanjutan,
        bersama kami wujudkan aksi nyatamu untuk hutan Indonesia!</p>
    </div>
    <div class="jumbotron-img">
      <img src="heros/plant-img.png" alt="Plant Logo">
    </div>
  </div>
  `;
};

const sloganHomeTemplate = () => {
  return `
  <main tabindex="0" id="main-content">
  <!-- Slogan -->
  <section class="slogan">
    <div class="slogan-title">
      <h2>Bersama Kami Wujudkan Masa Depan Lebih Baik</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maiores
        animi veritatis magnam ea explicabo enim, totam quis quae deleniti,
        perferendis, aliquam consequuntur vitae aliquid fugit. Quod quibusdam numquam aliquid.</p>
    </div>
    <div class="slogan-icon">
      <div class="slogan-list-type-one">
        <img src="icons/tree-icon.png" alt="Tree Icon">
        <h3>375.5K</h3>
        <p>Pohon Tertanam</p>
      </div>
      <div class="slogan-list-type-two">
        <img src="icons/location-icon.png" alt="Location Icon">
        <h3>38</h3>
        <p>Lokasi</p>
      </div>
      <div class="slogan-list-type-two">
        <img src="icons/volunteer-icon.png" alt="Volunteer Icon">
        <h3>100.6K</h3>
        <p>Relawan</p>
      </div>
      <div class="slogan-list-type-one">
        <img src="icons/person-icon.png" alt="Person Icon">
        <h3>60.5K</h3>
        <p>Partisipan</p>
      </div>
    </div>
  </section>
  `;
};

const creatorHomeTemplate = () => {
  return `
  <!-- Introduction -->
  <section class="intro">
    <div class="intro-title">
      <h2>Saling Mengerti, Saling Melindungi</h2>
    </div>
    <div class="intro-card-container">
      <div class="intro-card">
        <div class="intro-card-img">
          <img src="icons/seal-question-icon.png" alt="Question Icon">
        </div>
        <h3>Apa Itu Lingkar Hijau?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto repellat
          nesciunt esse eligendi impedit molestias sapiente exercitationem facilis. Hic, maiores nobis.
          Quidem corrupti expedita deleniti velit esse sed quas.</p>
      </div>
      <div class="intro-card">
        <div class="intro-card-img">
          <img src="icons/gear-icon.png" alt="Engine Icon">
        </div>
        <h3>Bagaimana Cara Kerja Lingkar Hijau?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto repellat
          nesciunt esse eligendi impedit molestias sapiente exercitationem facilis. Hic, maiores nobis.
          Quidem corrupti expedita deleniti velit esse sed quas.</p>
      </div>
      <div class="intro-card">
        <div class="intro-card-img">
          <img src="icons/person-contact-icon.png" alt="Profile Icon">
        </div>
        <h3>Bagaimana Lingkar Hijau Berkontribusi Dalam Penanaman Pohon?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto repellat
          nesciunt esse eligendi impedit molestias sapiente exercitationem facilis. Hic, maiores nobis.
          Quidem corrupti expedita deleniti velit esse sed quas.</p>
      </div>
    </div> 
  </section>
  `;
};

const listTreeHomeTemplate = () => {
  return `
    <!-- List of Tree Types -->
    <section>
      <div class="tree">
        <h2>Macam-macam pohon yang dapat kita tanam dan Manfaatnya</h2>
        <p>Yuk sebarkan #TanamPohon untuk Indonesia yang lebih cerah!</p>
        <div class="list" id="list-pohon" draggable="false"></div>
        <div class="preview-container" id="preview-pohon"></div>
      </div>
    </section>
    </main>
  `;
};


const mapHomeTemplate = () => {
  return `
  <!-- Map Style -->
  <section class="main-map">
    <div class="container__map">
      <h2>Membagi Kebahagian dengan Menanam Pohon</h2>
      <p>
        Lingkar Hijau Membagi Kebahagian Untuk Semua, Memberikan Informasi
        Pohonmu Untuk Indonesia
      <p>
      <div class="wrapper">
        <div id="map" class="map" style="width: 900px; height: 420px"></div>
      </div>
      <div class="content__map">
        <button class="button__map">
          <a href="#progres_pohon">
            Ikuti Proses Kita
          </a>
        </button>
      </div>
    </div>
  </section>
  `
  ;
};

const formHomeTemplate = () => {
  return `
  <!-- Form -->
  <section>
    <div class="main-form">
      <div class="contact">
        <div class="contact-container">
          <div class="contact-form">
            <form action="/support" method="post">
              <h1>Mari Terhubung</h1>
              <label for="volunteer-name">Nama</label>
              <input type="text" id="volunteer-name" placeholder="Nama Anda" name="nama" />

              <label for="volunteer-email">Email</label>
              <input type="text" id="volunteer-email" placeholder="lingkarhijau@gmail.com" name="email" />

              <label for="volunteer-number">No. Hp/Telp</label>
              <input type="number" id="volunteer-number" placeholder="Nomor telepon Anda" name="nomorHp" />
              
              <label for="volunteer-message">Pesan</label>
              <textarea id="volunteer-message" placeholder="Pesan Anda" rows="4" name="pesan"></textarea>
              <button type="submit">Kirim Pesan</button>
            </form>
          </div>
          <div class="contact-img">
            <img src="images/contact-icon-preview.png" alt="logo-admin" />
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
};

const footerHomeTemplate = () => {
  return `
  <footer class="footer">
  <!-- Footer Description and Profile -->
  <div class="footer-main">
    <div class="footer-title">
      <a href="#/">Lingkar Hijau</a>
      <h4>Website Penanaman Pohon</h4>
      <p>Capstone Project Program Magang dan Studi Independen Bersertifikat Dicoding - Pengembang FrontEnd dan BackEnd Web Batch 4</p>
    </div>
    <div class="footer-profile">
      <h3>Tentang Kami</h3>
      <div class="footer-profile-card">
        <div class="footer-profile-member">
          <img src="images/profile-one.png" alt="Member One">
          <p>Kuncoro Ariadi</p>
        </div>
        <div class="footer-profile-member">
          <img src="images/profile-two.png" alt="Member Two">
          <p>Amalia Nur Izzati</p>
        </div>
        <div class="footer-profile-member">
          <img src="images/profile-three.png" alt="Member Three">
          <p>Oktonius Z S</p>
        </div>
        <div class="footer-profile-member">
          <img src="images/profile-four.png" alt="Member Four">
          <p>Aldo Pradana A</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Copyright -->
  <div class="footer-copyright">
    <p>Lingkar Hijau © 2023 - made with love</p>
  </div>
  </footer>
  `;
};

const loginTemplate = () => {
  return `
  <nav class="login-page">
  <div class="login-container">
    <div class="login-form">
      <form action="">
        <h1>Login</h1>
        <hr />
        <p>Lingkar Hijau</p>
        <label for="">Email</label>
        <input type="text" placeholder="lingkarhijau@gmail.com" />
        <label for="">Password</label>
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
    <div class="login-img">
      <img src="images/admin--.png" alt="logo-admin" />
    </div>
  </div>
  </nav>
  `;
};

const informationPageTemplate = () => {
  return `
  <div class="container-information">
  <div class="title-information" style="width: 100%; background-color: #6bae98; color: white; height: 35vh; display: flex; align-items: center; justify-content: center">
    <div class="title-container" style="width: 90%">
      <h1 style="font-size: 40px; text-align: center">
        "Hijaukan Harapanmu Bersama Kami, <br />
        Satu Pohon pada Setiap Langkah."
      </h1>
    </div>
  </div>
  <div class="text-information" style="text-align: center; width: 75%; margin: 0 auto">
    <h2 style="font-size: 35px; margin-top: 60px">Tentang Kami</h2>
    <p style="margin-top: 20px; line-height: 1.6; font-size: 18px">
      Lingkar Hijau merupakan inovasi yang dibangun oleh generasi penerus bangsa untuk mewujudkan nafas segar di Nusantara. Hal ini kami lakukan sebagai aksi yang nyata untuk bersatu dalam penghijauan. Inilah jejak pelestarian
      lingkungan melalui kegiatan yang selalu menginspirasi Kami.
    </p>
  </div>
  <div class="content-information">
    <div class="information-1">
      <img src="images/3.png" alt="Menanam Pohon" />
      <h1>Penanaman Pohon</h1>
      <div class="information-teks">
        <p>
          Melakukan penanaman pohon merupakan kegiatan utama kami untuk mewujudkan penghijauan. Dengan setiap pohon yang ditanam, kami berharap dapat menciptakan lingkungan yang lebih hijau, meningkatkan kualitas udara, dan menyokong
          keanekaragaman hayati.
        </p>
      </div>
    </div>
    <div class="information-2">
      <img src="images/1.png" alt="Memantau Pohon" />
      <h1>Pemantauan Pohon</h1>
      <div class="information-teks">
        <p>
          Selain menanam, kami juga dengan penuh tanggung jawab merawat setiap pohon yang telah kami tanam. Dengan konsistensi pemantauan kami, perhatian dan kepedulian akan selalu kami berikan untuk memastikan setiap pohon tumbuh
          dengan gemilang dan mewujudkan keindahan alam yang lestari.
        </p>
      </div>
    </div>
    <div class="information-3">
      <img src="images/2.png" alt="Kampanye Kesadaran" />
      <h1>Kampanye Kesadaran</h1>
      <div class="information-teks">
        <p style="margin-bottom: 100px">
          Kami dengan terbuka menerima siapapun yang ingin bergabung dengan kami. Melalui kampanye kesadaran, kami mengundang setiap individu untuk menjadi agen perubahan, menyatukan langkah demi langkah dalam melindungi lingkungan dan
          menciptakan masa depan yang berkelanjutan.
        </p>
      </div>
    </div>
  </div>
  </div>
  `;
};

const supportPageTemplate = () => {
  return `
  <div class="container-support">
  <div class="support-title" style="width: 90%; margin: 0 auto">
    <h1 style="text-align: center; font-size: 25px; margin-bottom: 25px">Kirim Informasi Anda Agar Dapat Terhubung dengan Kami!</h1>
  </div>
  <div class="container-form">
    <form action="/support" method="post" class="form-support">
      <div class="form-data-diri">
        <input type="text" placeholder="Nama Anda" required name="nama" />
        <input type="text" placeholder="E-Mail" required name="email" />
        <input type="text" placeholder="No. Handphone" required name="nomorHp" />
      </div>
      <textarea placeholder="Pesan Anda" class="form-pesan" required name="pesan"></textarea>
      <input type="submit" value="Kirim" class="submit-form" />
    </form>
  </div>
  </div>
  `;
};

const locationPageTemplate = () => {
  return `
  <div class="progress__map__2">
  <h2>Pantau Progres Pohonmu Secara Detail</h2>
  <p>
    Berikut adalah pantauan progres penanaman pohon yang tersebar di wilayah
    Indonesia, <br />
    di update secara real-time untuk memberikan informasi terkini
  </p>
</div>
<div class="container__map__2">
  <div class="card-detail">
    <div class="card__desc">
      <div class="card-map">
        <h2>Nama Relawan</h2>
        <p>Oktonius Zevanya H</p>
        <h2>Tanggal Penanaman</h2>
        <p>20 Januari 2023</p>
        <h2>Jumlah Pohon</h2>
        <p>100</p>
        <h2>Jenis Pohon</h2>
        <p>Pohon Jati</p>
        <h2>Lokasi</h2>
        <p>Pantai Ayah, Cilacap, Jawa Tengah</p>
      </div>
      <div class="card-map">
        <h2>Nama Relawan</h2>
        <p>Amalia Nur Izzati</p>
        <h2>Tanggal Penanaman</h2>
        <p>24 Januari 2023</p>
        <h2>Jumlah Pohon</h2>
        <p>70</p>
        <h2>Jenis Pohon</h2>
        <p>Pohon Mangrove</p>
        <h2>Lokasi</h2>
        <p>Hutan Gunung Rinjani,Lombok Timur, Nusa Tenggara Barat</p>
      </div>
      <div class="card-map">
        <h2>Nama Relawan</h2>
        <p>Kuncoro Ariadi</p>
        <h2>Tanggal Penanaman</h2>
        <p>20 Februari 2023</p>
        <h2>Jumlah Pohon</h2>
        <p>120</p>
        <h2>Jenis Pohon</h2>
        <p>Pohon Jati</p>
        <h2>Lokasi</h2>
        <p>Hutan di Kelurahan Tengkerang Tengah, Kampar, Riau</p>
      </div>
      <div class="card-map">
        <h2>Nama Relawan</h2>
        <p>Aldo Pradana</p>
        <h2>Tanggal Penanaman</h2>
        <p>24 Februari 2023</p>
        <h2>Jumlah Pohon</h2>
        <p>100</p>
        <h2>Jenis Pohon</h2>
        <p>Pohon Jati</p>
        <h2>Lokasi</h2>
        <p>
          Taman Hutan Raya Bukit Soeharto, Kutai Kartanegara, Kalimantan
          Timur
        </p>
      </div>
    </div>
  </div>

  <div class="wrapper">
  <div id="map" class="map" style="width: 900px; height: 420px"></div>
  `;
};


export {
  jumbotronHomeTemplate,
  sloganHomeTemplate,
  creatorHomeTemplate,
  listTreeHomeTemplate,
  mapHomeTemplate,
  formHomeTemplate,
  footerHomeTemplate,
  loginTemplate,
  informationPageTemplate,
  supportPageTemplate,
  locationPageTemplate,
};

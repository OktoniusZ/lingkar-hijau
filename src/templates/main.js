fetch("https://64721d116a9370d5a41b0c81.mockapi.io/informations")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let display = data;
    let namaPohon = [];
    let umurPohon = [];
    let habitatPohon = [];
    let deskripsiPohon = [];
    let manfaatPohon = [];
    let gambarPohon = [];
    console.log(display);

    display.forEach((jenisPohon) => {
      namaPohon.push(jenisPohon.nama);
    });
    display.forEach((umurJenisPohon) => {
      umurPohon.push(umurJenisPohon.umur);
    });
    display.forEach((habitatJenisPohon) => {
      habitatPohon.push(habitatJenisPohon.habitat);
    });
    display.forEach((deskripsiJenisPohon) => {
      deskripsiPohon.push(deskripsiJenisPohon.deskripsi);
    });
    display.forEach((manfaatJenisPohon) => {
      manfaatPohon.push(manfaatJenisPohon.manfaat);
    });
    display.forEach((gambarJenisPohon) => {
      gambarPohon.push(gambarJenisPohon.gambar);
    });
    // console.log(namaPohon);
    // console.log(umurPohon);
    // console.log(habitatPohon);
    console.log(gambarPohon);
    let cardBody = document.getElementById("list-pohon");
    let previewBody = document.getElementById("preview-pohon");
    for (i = 0; i < 10; i++) {
      let _cardBody =
        `
        <ul class="carousel">
            <li class="card">
                <div class="list-gambar">
                        <img src="` +
        gambarPohon[i] +
        `" alt="gambar pohon" draggable="false" (dragstart)="false;"/>
                </div>
                <div class="list-item" tabindex="0">
                    
                    <div class="list-nama">
                        ` +
        namaPohon[i] +
        `
                    </div>
                    <div class="list-umur">
                    ` +
        umurPohon[i] +
        `
                    </div>
                    <div class="list-habitat">
                        <p>` +
        habitatPohon[i] +
        `</p>
                    </div>
                </div>
            </li>
            <div class="lihat">
              <button class="button-pohon" onclick="previewPohon()" data-name="pohon-` +
        [i] +
        `">Lihat</button>
            </div>
        </ul>
        `;

      let _previewBody =
        `
        <div class="pohon-preview" data-target="pohon-` +
        [i] +
        `">
          <div class="preview">
            <div class="preview-item">
            <button class="close-button">&times;</button>
              <div class="list-gambar-2">
                <img src="` +
        gambarPohon[i] +
        `" alt="gambar pohon"/>
              </div>
              <div class="list-nama-2">
            ` +
        namaPohon[i] +
        `
              </div>
              <div class="list-umur">
        ` +
        umurPohon[i] +
        `
              </div>
              <div class="list-habitat-2">
            <p>` +
        habitatPohon[i] +
        `</p>
              </div>
              <div class="list-deskripsi">
            <p>` +
        deskripsiPohon[i] +
        `</p>
              </div>
              <div class="list-manfaat">
            <p>` +
        manfaatPohon[i] +
        `</p>
              </div>
            </div>
          </div>
        </div>
        `;

      cardBody.innerHTML += _cardBody;
      previewBody.innerHTML += _previewBody;
    }
    previewPohon();
  })
  .catch((error) => console.log(error));

const caraousel = document.querySelector(".list");

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  caraousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = caraousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  caraousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  caraousel.classList.remove("dragging");
};

caraousel.addEventListener("mousedown", dragStart);
caraousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

function previewPohon() {
  let previewContainer = document.querySelector(".preview-container");
  let previewBox = previewContainer.querySelectorAll(".pohon-preview");
  document.querySelectorAll(".button-pohon").forEach((pohon) => {
    pohon.onclick = () => {
      previewContainer.style.display = "flex";
      let name = pohon.getAttribute("data-name");
      console.log(name);
      previewBox.forEach((preview) => {
        let target = preview.getAttribute("data-target");
        if (name === target) {
          preview.classList.add("active");
        } else {
          preview.classList.remove("active");
        }
      });
    };
  });
  previewBox.forEach((close) => {
    close.querySelector(".close-button").onclick = () => {
      close.classList.remove("active");
      previewContainer.style.display = "none";
    };
  });
}

document.addEventListener("DOMContentLoaded", function () {
  previewPohon();
});

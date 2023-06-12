/* eslint-disable max-len */
const Main = {
  async render() {
    return ` 
    <h1 style="text-align: center">Ini home page</h1>
    <div class="list" id="list-pohon" draggable="false"></div>
    <div class="preview-container" id="preview-pohon"></div>
    `;
  },

  async afterRender() {
    const container = document.querySelector('.preview-container');
    const listPohon = document.querySelector('#list-pohon');
    let counter = 0;
    fetch('https://64721d116a9370d5a41b0c81.mockapi.io/informations')
        .then((response) => response.json())
        .then((data) => {
          data.forEach((data) => {
            listPohon.innerHTML += `
            <ul class="carousel">
                <li class="card">
                    <div class="list-gambar">
                        <img src="${data.gambar}" alt="gambar pohon" draggable="false" (dragstart)="false;">
                    </div>
                    <div class="list-item" tabindex="0">
                        <div class="list-nama">${data.nama}</div>
                        <div class="list-umur">${data.umur}</div>
                        <div class="list-habitat">${data.habitat}</div>
                    </div>
                </li>
                <div class="lihat">
                    <button class="button-pohon" data-name="pohon-${counter}" onclick=previewPohon()>Lihat</button>
                </div>
            </ul>
            `;

            container.innerHTML += `
        <div class="pohon-preview" data-target="pohon-${counter}">
            <div class="preview">
                <div class="preview-item">
                    <button class="close-button">&times;</button>
                    <div class="list-gambar">
                        <img src="${data.gambar}" alt="gambar pohon">
                    </div>
                    <div class="list-nama-2"><p>${data.nama}</p></div>
                    <div class="list-umur"><p>${data.umur}</p></div>
                    <div class="list-habitat-2"><p>${data.habitat}</p></div>
                    <div class="list-deskripsi"><p>${data.deskripsi}</p></div>
                    <div class="list-manfaat"><p>${data.manfaat}</p></div>
                </div>
            </div>
        </div>
        `;
            counter += 1;
            previewPohon();
          });
        });
    const caraousel = document.querySelector('.list');

    let isDragging = false;
    let startX;
    let startScrollLeft;

    const dragStart = (e) => {
      isDragging = true;
      caraousel.classList.add('dragging');
      startX = e.pageX;
      startScrollLeft = caraousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      caraousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      caraousel.classList.remove('dragging');
    };

    caraousel.addEventListener('mousedown', dragStart);
    caraousel.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);

    const previewPohon = () => {
      const previewContainer = document.querySelector('.preview-container');
      const previewBox = previewContainer.querySelectorAll('.pohon-preview');
      document.querySelectorAll('.button-pohon').forEach((pohon) => {
        pohon.onclick = () => {
          previewContainer.style.display = 'flex';
          const name = pohon.getAttribute('data-name');
          console.log(name);
          previewBox.forEach((preview) => {
            const target = preview.getAttribute('data-target');
            if (name === target) {
              preview.classList.add('active');
            } else {
              preview.classList.remove('active');
            }
          });
        };
      });
      previewBox.forEach((close) => {
        close.querySelector('.close-button').onclick = () => {
          close.classList.remove('active');
          previewContainer.style.display = 'none';
        };
      });
    };

    document.addEventListener('DOMContentLoaded', function() {
      previewPohon();
    });
  },
};

export default Main;

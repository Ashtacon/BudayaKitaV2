let navbarlinks = document.querySelectorAll('#navbar .scrollto');

const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return;
    let section = document.querySelector(navbarlink.hash);
    if (!section) return;
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active');
    } else {
      navbarlink.classList.remove('active');
    }
  });
};

window.addEventListener('load', navbarlinksActive);
window.addEventListener('scroll', navbarlinksActive);

// Artikel
const artikelContainer = document.getElementById('artikelContainer');
const artikelData = [
  { title: 'Kartu 1', description: 'Deskripsi Kartu 1', button: 'Baca Selengkapnya' },
  { title: 'Kartu 2', description: 'Deskripsi Kartu 2', button: 'Baca Selengkapnya' },
  { title: 'Kartu 3', description: 'Deskripsi Kartu 3', button: 'Baca Selengkapnya' },
  { title: 'Kartu 4', description: 'Deskripsi Kartu 4', button: 'Baca Selengkapnya' },
  { title: 'Kartu 5', description: 'Deskripsi Kartu 5', button: 'Baca Selengkapnya' },
  { title: 'Kartu 6', description: 'Deskripsi Kartu 6', button: 'Baca Selengkapnya' }
];

artikelData.forEach(item => {
  const col = document.createElement('div');
  col.classList.add('col');

  const artikel = document.createElement('div');
  artikel.classList.add('artikel');

  const artikelItem = document.createElement('div');
  artikelItem.classList.add('artikel-item');
  
  const title = document.createElement('h2');
  title.classList.add('artikel-title');
  title.textContent = item.title;
 
  const description = document.createElement('p');
  description.classList.add('artikel-desc');
  description.textContent = item.description;
  
  const button = document.createElement('a');
  button.classList.add('artikel-btn', 'btn', 'btn-secondary');
  button.textContent = item.button;

  
  // Gabungkan artikelItem
  artikelItem.appendChild(title);
  artikelItem.appendChild(description);
  artikelItem.appendChild(button);
  // masukkan artikel item ke artikel
  artikel.appendChild(artikelItem);
  // masukkan artikel ke col
  col.appendChild(artikel);
  // masukkan col ke artikelcontainer
  artikelContainer.appendChild(col);
});

// Galery
const galleryContainer = document.getElementById('galleryContainer');
const galleryData = [
  { title: 'Kartu 1'},
  { title: 'Kartu 2'},
  { title: 'Kartu 3'},
  { title: 'Kartu 4'},
  { title: 'Kartu 5'},
  { title: 'Kartu 6'}
];

galleryData.forEach(item => {
  const col = document.createElement('div');
  col.classList.add('col');

  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');

  const gallery = document.createElement('div');
  gallery.classList.add('gallery');
  
  const title = document.createElement('h2');
  title.classList.add('gallery-title');
  title.textContent = item.title;

  galleryItem.appendChild(title);

  gallery.appendChild(galleryItem);

  col.appendChild(gallery); // Memindahkan gallery ke dalam col

  galleryContainer.appendChild(col); // Memindahkan col ke dalam galleryContainer
});

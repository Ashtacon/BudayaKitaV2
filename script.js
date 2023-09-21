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
  { 
    id: 1,
    title: 'Batik Tulis',
    description: 'Seni menghias kain dengan tangan, merupakan bagian penting dari budaya Indonesia.',
    button: 'Baca Selengkapnya',
    image: 'batik.jpg'
  },
  { 
    id: 2,
    title: 'Tari Saman',
    description: 'Tarian cepat dari suku Aceh yang menggambarkan kekompakan dan keindahan gerakan.',
    button: 'Baca Selengkapnya',
    image: 'tariSaman.jpg'
  },
  { 
    id: 3,
    title: 'Wayang Kulit',
    description: 'Teater bayangan Jawa yang mempersembahkan cerita epik dari mitologi Hindu dan Ramayana.',
    button: 'Baca Selengkapnya',
    image: 'wayangKulit.jpg'
  },
  { 
    id: 4,
    title: 'Pencak Silat',
    description: 'Seni bela diri tradisional Indonesia yang menggabungkan keindahan gerakan dengan teknik bertarung.',
    button: 'Baca Selengkapnya',
    image: 'pencakSilat.jpg'
  },
  { 
    id: 5,
    title: 'Upacara Adat Toraja',
    description: 'Ritual unik dari Sulawesi Selatan yang melibatkan upacara pemakaman yang rumit.',
    button: 'Baca Selengkapnya',
    image: 'Upacara.jpg'
  },
  { 
    id: 6,
    title: 'Reog Ponorogo',
    description: 'Tarian maskot dari Jawa Timur yang menggabungkan kekuatan fisik dengan seni kreatif.',
    button: 'Baca Selengkapnya',
    image: 'ReogPonorogo.jpg'
  }
];



function showDetail(id) {
  // You can implement your logic to show details based on the id here
  console.log(`Showing details for item with id ${id}`);
}

artikelData.forEach(item => {
  const col = document.createElement('div');
  col.classList.add('col');

  const artikel = document.createElement('div');
  artikel.classList.add('artikel');

  const artikelItem = document.createElement('div');
  artikelItem.classList.add('artikel-item');
  artikelItem.style.backgroundImage = `url(img/artikel/${item.image})`; // Set background image dynamically
  
  const title = document.createElement('h2');
  title.classList.add('artikel-title');
  title.textContent = item.title;

  const description = document.createElement('p');
  description.classList.add('artikel-desc');
  description.textContent = item.description;

  const button = document.createElement('a');
  button.classList.add('artikel-btn', 'btn', 'btn-secondary');
  button.textContent = item.button;
  button.addEventListener('click', () => showDetail(item.id)); // Use event listener

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
  { title: 'Batik Kraton', type: 'Batik', image:'batikKeraton.jpg'},
  { title: 'Tari Saman', type: 'Tari', image:'tariSaman.jpg'},
  { title: 'Batik Gentongan', type: 'Batik', image:'BatikGentongan.jpg'},
  { title: 'Pencak Silat', type: 'BelaDiri', image:'PencakSilat.jpg'},
  { title: 'Tari Piring', type: 'Tari', image:'tariPiring.png'},
  { title: 'Perisai Diri', type: 'BelaDiri', image:'perisaiDiri.jpg'}
];

galleryData.forEach(item => {
  const col = document.createElement('div');
  col.classList.add('col');

  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');
  galleryItem.style.backgroundImage = `url(img/galeri/${item.image})`;

  const gallery = document.createElement('div');
  gallery.classList.add('gallery');
  gallery.classList.add(item.type);

  gallery.addEventListener('click', () => openLightbox(`img/galeri/${item.image}`));

  const title = document.createElement('h2');
  title.classList.add('gallery-title');
  title.textContent = item.title;

  galleryItem.appendChild(title);

  gallery.appendChild(galleryItem);

  col.appendChild(gallery); // Memindahkan gallery ke dalam col

  galleryContainer.appendChild(col); // Memindahkan col ke dalam galleryContainer
});

function openLightbox(imageSrc) {
  var lightbox = document.getElementById('myLightbox');
  var lightboxImage = lightbox.querySelector('img');
  lightboxImage.src = imageSrc;
  
  // lightbox.style.display = 'block';
  lightbox.classList.add('muncul');
  
  // Gunakan setTimeout untuk mengaktifkan transisi setelah elemen ditampilkan
  setTimeout(function() {
      lightbox.style.opacity = '1';
  }, 10); // Nilai timeout bisa disesuaikan
}


function closeLightbox() {
  var lightbox = document.getElementById('myLightbox');
  lightbox.style.opacity = '0'; 
  
  setTimeout(function() {
      lightbox.style.display = 'none';
  }, 300);
}



// GSAP
gsap.to(".title", {duration: 3, delay:2, text: "BudayaKita"});
gsap.to(".loading", {duration: 3, delay:2, opacity: 0, y:2000});
gsap.from("#hero", {duration:3, delay:1, opacity: .7});
gsap.from(".megamendung", {duration: 2, delay:1, y:-150, opacity: 0.1});

// JQuery Code
$(document).on("scroll",function(){
    setTimeout(function() {
      $(".loading").addClass("hidden");
    }, 3000);
    if ($(document).scrollTop() > 600){
      $(".nav.navs").addClass("fixed-top");     
    }else {
      $(".nav.navs").removeClass("fixed-top");
    }

     // Saat tombol dengan kelas 'nav-link' diklik
     $('.nav-link').click(function(){
      // Menghapus kelas 'active' dari semua tombol 'nav-link'
      $('.nav-link').removeClass('active');
      // Menambahkan kelas 'active' hanya pada tombol yang diklik
      $(this).addClass('active');
    });

    if ($(document).scrollTop() > 100){
        $(".title").addClass("fade")    
      }else {
        $(".title").removeClass("fade");
      }
});

document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById('galleryContainer');
    const filterButtons = document.querySelectorAll('button');
    
    function filterItems(filter) {
        console.log('Filtering by:', filter); // Debugging line
        const gridItems = gridContainer.querySelectorAll('.gallery');
        gridItems.forEach(item => {
            if (filter === '*' || item.classList.contains(filter)) {
                // item.style.display = 'block';
                item.classList.remove('fade');
            } else {
                // item.style.display = 'none';
                item.classList.add('fade');
            }
        });
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');
            console.log('Button clicked with filter:', filterValue); // Debugging line
            filterItems(filterValue);
        });
    });
  });

function showDetail(cardId) {
 window.location.href = `detail.html?card=${cardId}`;
}
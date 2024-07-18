// Data portofolio
const porto = [
    {image: "../image/BH.png", alt: "build House", title: "Building House", desc: "Proyek ini adalah desain dan konstruksi rumah modern dengan fokus pada keberlanjutan dan efisiensi energi."},
    {image: "../image/Express.png", alt: "express", title: "Express", desc: "Proyek ini adalah sistem jasa pengiriman barang yang efisien dan dapat diandalkan, menghubungkan pengirim dengan penerima dengan cepat dan aman."},
    {image: "../image/Green Light.png", alt: "green light", title: "Green Light", desc: "Proyek ini adalah inisiatif untuk membangun infrastruktur pencahayaan hijau yang ramah lingkungan, menggunakan teknologi canggih untuk mengurangi konsumsi energi dan dampak lingkungan negatif."},
    {image: "../image/Xtreme.png", alt: "xtreme", title: "Xtreme Sport", desc: "Proyek ini adalah pengembangan fasilitas olahraga ekstrem yang menggabungkan desain inovatif dengan teknologi terkini untuk menyediakan pengalaman berolahraga yang mendebarkan dan aman."},
    {image: "../image/Speed.png", alt: "speed", title: "Speed House", desc: "Proyek ini adalah pembangunan bengkel kendaraan modern yang dilengkapi dengan fasilitas terkini untuk perawatan dan perbaikan kendaraan."},
    {image: "../image/Plant.png", alt: "plant", title: "Garden", desc: "Proyek ini adalah pembangunan taman modern yang dilengkapi dengan area hijau dan fasilitas terkini untuk menjadi sarana berlibur atau menghabiskan waktu bersama keluarga dan orang terdekat."},
    {image: "../image/mug.jpg", alt: "mug dengan desain geometris", title: "Mug Geometris", desc: "Mug ini memiliki desain geometris yang modern dengan kombinasi warna yang kontras. Cocok untuk digunakan sebagai hadiah atau untuk menambah koleksi peralatan minum Anda."},
];

// Element untuk menempatkan item portofolio
const portoItem = document.getElementById("porto-item");

// Fungsi untuk membuat daftar portofolio
function createPortoList(item) {
    // Membuat li
    const listPorto = document.createElement('li');
    listPorto.className = "bg-white shadow-lg rounded-lg p-6";

    // Membuat evek hover
    listPorto.addEventListener("mouseenter", () => {
        listPorto.style.backgroundColor = "#0ea5e9";
        listPorto.style.transition = "200ms ease-in";
        fontPorto.style.color = "#ffffff";
        paraPorto.style.color = "#ffffff"
        portoImg.style.transform = "scale(1.1)";
    })

    listPorto.addEventListener("mouseleave", () => {
        listPorto.style.backgroundColor = "#ffffff";
        fontPorto.style.color = "#333333";
        paraPorto.style.color = "#333333"
        portoImg.style.transform = "scale(1)";
    })

    // Membuat h3
    const fontPorto = document.createElement('h3');
    fontPorto.className = "text-xl font-bold mb-6 text-center";
    fontPorto.textContent = item.title;
    
    // Menambahkan child fontPorto kedalam listPorto
    listPorto.appendChild(fontPorto);

    // Membuat img
    const portoImg = document.createElement('img');
    portoImg.src = item.image;
    portoImg.alt = item.alt;
    portoImg.className = "mt-4 mb-4 rounded-lg w-96 h-52 cursor-pointer";
    portoImg.style.transition = "transform 0.3s ease"; // Transisi untuk efek hover

    // Menambahkan child portoImg edalam listPorto
    listPorto.appendChild(portoImg);

    // Membuat p
    const paraPorto = document.createElement('p');
    paraPorto.textContent = item.desc;
    paraPorto.className = "text-gray-600 text-justify";

    // Menambahkan child paraPorto kedalam listPorto
    listPorto.appendChild(paraPorto);

    // Menambahkan item portofolio ke dalam container
    portoItem.appendChild(listPorto);
}

// Melakukan looping untuk membuat item porto baru jika memabahkan data pada const porto
porto.forEach(porto => {
    createPortoList(porto);
});

// Data ulasan
const reviews = [
    {image: "../image/anna lauda.jpg", name: "Anna Lauda", rating: 4, desc: "Pelayanan luar biasa! Tim ini memberikan desain logo yang sangat bagus untuk perusahaan kami. Sangat profesional dan responsif."},
    {image: "../image/colombus.jpg", name: "Colombus", rating: 5, desc: "Layanan yang fantastis! Tim sangat berbakat dan kreatif, hasilnya melebihi harapan kami. Desain yang mereka buat benar-benar mencerminkan identitas perusahaan kami."},
    {image: "../image/forest gump.jpg", name: "Forest Gump", rating: 4, desc: "Sangat puas dengan hasil kerja tim ini. Desainnya inovatif dan berkualitas tinggi. Komunikasi yang baik dan pengerjaan tepat waktu."},
    {image: "../image/aiony.jpg", name: "Ayonima", rating: 3, desc: "Desain yang diberikan cukup bagus, meskipun ada beberapa revisi yang diperlukan. Namun, tim cukup cepat dalam merespons dan memperbaiki."},
    {image: "../image/leilani.jpg", name: "John Abas", rating: 4, desc: "Desain yang kreatif dan menarik! Tim sangat membantu dan memberikan banyak saran yang berguna. Kami sangat puas dengan hasil akhirnya."},
    {image: "../image/pospita.jpg", name: "Puspita Kumalala", rating: 4, desc: "Pelayanan yang ramah dan profesional. Desain logo kami sangat memuaskan dan sesuai dengan visi kami. Terima kasih atas kerja kerasnya!."},
];

// Element untuk menempatkan ulasan
const reviewList = document.getElementById("review");

// Fungsi untuk membuat item ulasan
function createReviewItem(review) {
    // Membbuat li
    const listReview = document.createElement("li");
    listReview.className = "w-96 bg-white shadow-lg rounded-lg p-6";

    // Membuat div
    const container = document.createElement("div");
    container.className = "flex items-center mb-4";

    // Membuat img untuk gambar
    const reviewImg = document.createElement("img");
    reviewImg.src = review.image;
    reviewImg.className = "w-12 h-12 rounded-full mr-4 object-cover";

    // Menambahkan child reviewImg kedalam container
    container.appendChild(reviewImg);

    // Membuat div untuk isi content
    const contentContainer = document.createElement("div");
    contentContainer.className = "flex flex-col";

    // Membuat h3
    const fontReview = document.createElement("h3");
    fontReview.className = "text-xl font-serif";
    fontReview.textContent = review.name;

    // Menambahkan child fontReview kedalam contentContainer 
    contentContainer.appendChild(fontReview);

    // Membuat div untuk isi rating
    const rateContainer = document.createElement("div");
    rateContainer.className = "flex";

    // Melakukan perulangan untuk menghitung berapa banyak jumlah bintang pada rating
    for(let i = 0; i < 5; i++) {

        // Membuat img untuk bintang
        const starImg = document.createElement("img");
        // Membuat berapa jumlah rating
        starImg.src = i < review.rating ? "../image/yellow.svg" : "../image/normal.svg";
        starImg.className = "w-4 h-4";

        // Menambahkan child starImg kedalam rateContainer
        rateContainer.appendChild(starImg);
    }
    
    // Menambahkan child rateContainer kedalam contentContainer
    contentContainer.appendChild(rateContainer);

    // Menambahkan child contentContainer kedalam container
    container.appendChild(contentContainer);

    // Menambahkan child container kedalam listReview
    listReview.appendChild(container);

    // Membuat p untuk deskripsi
    const paraRate = document.createElement("p");
    paraRate.className = "text-gray-600 mb-4";
    paraRate.textContent = review.desc;

    // Menambahkan child paraRate kedalam listReview
    listReview.appendChild(paraRate);

    // Menambahkan child listReview ke dalam reviewList
    reviewList.appendChild(listReview);
}

// Melakukan looping untuk membuat item review baru jika memabahkan data pada const reviews
reviews.forEach(review => {
    createReviewItem(review);
});

// Back to top
const header = document.getElementById("head");
const backTop = document.getElementById("back-to-top");

// Tambahkan event listener scroll untuk mengatur class pada elemen
window.addEventListener("scroll", function() {
    header.classList[window.scrollY > 50 ? "add" : "remove"] ("active")
    backTop.classList[window.scrollY > 50 ? "add" : "remove"] ("active")
});

const form = document.getElementById('form-box');

// Event listener ketika form dikirim
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah form dikirim secara default

    // Mengambil nilai dari input
    let username = document.getElementById('usname').value;
    let email = document.getElementById('mail').value;
    let messageBox = document.getElementById('message').value;
    
    // Menampilkan nilai di console
    console.log(`Nama: ${username}, Email: ${email}, Pesan: ${messageBox}`);
    
    // Menampilkan alert
    alert("Pesan sudah dikirim");
    
    // Mengosongkan form setelah pesan dikirim
    document.getElementById('form-box').reset();
});


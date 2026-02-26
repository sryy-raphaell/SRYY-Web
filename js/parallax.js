const cloudLeft = document.querySelector(".cloud-left");
// Mengambil elemen awan kiri dari DOM (disimpan agar tidak query berulang)

const cloudRight = document.querySelector(".cloud-right");
// Mengambil elemen awan kanan dari DOM

window.addEventListener("scroll", () => {
  // Event listener yang berjalan setiap halaman di-scroll

  const scroll = window.scrollY;
  // Menyimpan posisi scroll vertikal saat ini (dalam pixel)

  if (cloudLeft) cloudLeft.style.transform = `translateY(${scroll * -0.2}px)`;
  // Jika elemen ada, geser ke atas dengan kecepatan 0.2x dari scroll (efek parallax)

  if (cloudRight)
    cloudRight.style.transform = `translateY(${scroll * -0.25}px)`;
  // Geser awan kanan sedikit lebih cepat (0.25x) untuk memberi ilusi kedalaman berbeda
});

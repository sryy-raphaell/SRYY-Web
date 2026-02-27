const helloTexts = [
  "Hello World", // Bahasa Inggris
  "Halo Dunia", // Bahasa Indonesia
  "こんにちは世界", // Bahasa Jepang
  "Bonjour le monde", // Bahasa Prancis
  "Hola Mundo", // Bahasa Spanyol
];

let i = 0; // Variabel index untuk melacak teks yang sedang aktif

setInterval(() => {
  // Menjalankan fungsi berulang setiap interval waktu tertentu
  i++; // Pindah ke teks berikutnya

  if (i >= helloTexts.length) i = 0;
  // Jika index melebihi jumlah array, reset ke awal (looping)

  document.getElementById("helloText").textContent = helloTexts[i];
  // Mengganti isi teks pada elemen dengan id="helloText"
}, 2000); // Interval 2000ms = 2 detik

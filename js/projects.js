fetch("data/projects.json")
  // Mengambil file JSON berisi data project dari folder data

  .then((res) => res.json())
  // Mengubah response menjadi format JSON (Promise)

  .then((data) => {
    // Setelah data berhasil diterima dan di-parse

    const table = document.getElementById("projectTable");
    // Mengambil elemen <tbody> tempat data akan dimasukkan

    if (!table) return;
    // Jika elemen tidak ditemukan, hentikan eksekusi (mencegah error)

    let rows = "";
    // Variabel untuk menampung seluruh baris HTML sementara

    data.forEach((p) => {
      // Loop setiap object project dalam array data

      rows += `
<tr>
<td>${p.name}</td>
<td>${p.type}</td>
<td>${p.status}</td>
<td>${p.year}</td>
</tr>`;
      // Membuat template baris tabel menggunakan template literal
      // Data dimasukkan secara dinamis menggunakan ${}
    });

    table.innerHTML = rows;
    // Render sekali saja setelah semua baris selesai dibuat (lebih efisien)
  })

  .catch((err) => {
    // Menangani error jika fetch gagal (misal file tidak ditemukan)

    console.error("Gagal memuat data project:", err);
    // Menampilkan pesan error di console untuk debugging
  });

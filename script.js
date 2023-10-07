// Script JS Dimulai
document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi URL Endpoint untuk mengambil data-data yang dibutuhkan
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // Mengambil elemen button "Get" pada HTML untuk dikenali oleh script.js, agar ketika diklik, data yang diminta bisa muncul. ini berhubungan ke event listener:
  const getPikachuButton = document.getElementById("get-pikachu"); // ke Event Listener tombol get, line terakhir
  const showPokemonInfo = document.getElementById("showPikachu"); // ke penambahan elemen baru nantinya, line 33

  // Membuat sebuah fungsi untuk meminta data-data atau melakukan permintaan AJAX, serta menampilkan data Pikachu
  function showPikachuInfo() {
    // Fetch digunakan untuk meminta permintaan AJAX ke API Pokemon (Fetch adalah cara modern untuk melakukan permintaan AJAX di JavaScript)
    fetch(apiUrl)
      .then((response) => response.json()) // Mengubah respon atas permintaan sebelumnya menjadi objek JSON
      .then((data) => {
        const pokemonNumber = data.id; // Mengambil nomor Pokemon
        const pokemonName = data.name; // Mengambil Nama Pokemon
        const pokemonImage = data.sprites.front_default; // Mengambil URL gambar Pokemon
        const pokemonTypes = data.types
          .map((type) => type.type.name)
          .join(", "); // Mengambil jenis Pokemon. Data types masih berupa array, diambil menggunakan map, menggunakan array function, dan gabungkan dengan join apabila terdapat lebih dari satu

        // Membuat elemen HTML untuk menampilkan data Pokemon dari hasil fetch API nya
        const pokemonCard = document.createElement("div"); // Buat elemen div baru
        pokemonCard.classList.add("pokemon-card"); // Tambahkan nama kelas di div yang baru dibuat
        pokemonCard.innerHTML = `
          <h2> Nomor Pokemon: ${pokemonNumber}</h2>
          <h3> Nama Pokemon: ${pokemonName}</h3>
          <img src="${pokemonImage}" alt="${pokemonName}" />
          <p> Tipe Pokemon: ${pokemonTypes}</p>
        `; // Inner HTML berfungsi untuk menambahkan suatu elemen, dengan format var.innerHTML = `<p>... ${var name}<p>`

        // Tambahkan data baru ke elemen 'ShowPikachu' dengan informasi variabel sebelumnya adalah showPokemonInfo
        showPokemonInfo.appendChild(pokemonCard);
      })
      .catch((error) => console.error("Terjadi kesalahan:", error)); // Tangani kesalahan jika ada. Jadikan ini pasangan dengan fungsi fetch. Karena, ketika fetch dijalankan, ada 2 kemungkinan, sukses dan gagal. catch error akan menangkap pesan error, dan akan menampilkan jika ada kesalahan.
  }

  // Tambahkan event listener ke tombol "Get"
  getPikachuButton.addEventListener("click", showPikachuInfo);
});

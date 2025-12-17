document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Mencegah form dari pengiriman standar ke server
    event.preventDefault();

    // Ambil nilai input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lakukan validasi dasar
    if (username.trim() === "" || password.trim() === "") {
        alert("Harap isi semua kolom.");
        return;
    }

    // Ini adalah simulasi logis sederhana setelah validasi berhasil
    // Dalam aplikasi nyata, data akan dikirim ke server yang aman (backend)
    // untuk otentikasi.
    console.log(`Simulasi login berhasil untuk Username: ${username}`);
    alert("Login berhasil (Simulasi)! Data tidak disimpan ke file.");

    // Setelah simulasi, Anda dapat membersihkan form jika diinginkan
    // event.target.reset();
});


# 🌟 Exposition Muhijunior

![Badge Bahasa: JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge)
![Badge Deployment: Vercel](https://img.shields.io/badge/Deployed%20On-Vercel-black?style=for-the-badge&logo=vercel)
![Status Proyek](https://img.shields.io/badge/Status-Aktif-brightgreen?style=for-the-badge)

## 📌 Deskripsi Proyek

Proyek **Exposition Muhijunior** adalah platform pameran digital yang didedikasikan untuk menampilkan karya-karya terbaik dan proyek inovatif dari tim atau anggota Muhijunior.

Tujuan dari platform ini adalah untuk mendokumentasikan, mempromosikan, dan memamerkan pencapaian teknis anggota tim kepada publik, rekruter, atau komunitas yang lebih luas.

## 🚀 Demo Langsung (Live Demo)

Anda dapat mengakses versi yang sudah di-deploy dari aplikasi ini melalui tautan berikut:

**[Kunjungi Exposition Muhijunior](https://ict-expo.muhijunior.id)**

## ✨ Fitur Utama

* **Tampilan Portofolio/Karya:** Halaman khusus untuk menampilkan detail setiap proyek.
* **Responsif:** Desain yang adaptif untuk berbagai ukuran layar (desktop, tablet, dan *mobile*).
* **Struktur API Terpisah:** Pemisahan antara *frontend* dan *backend* untuk skalabilitas yang lebih baik.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan arsitektur modular dengan pemisahan yang jelas antara klien dan API.

| Bagian | Teknologi Kunci | Catatan |
| :--- | :--- | :--- |
| **Client (Frontend)** | JavaScript, HTML, Tailwind, React | Antarmuka pengguna dan interaksi. |
| **API (Backend)** | Express.js | Menangani logika bisnis dan koneksi ke basis data. |
| **Deployment** | Vercel | Digunakan untuk hosting statis. |
| **Basis Data** | Json (Sementara) | Penyimpanan data proyek dan pengguna, akan migrasi ke MySQL. |

---

## ⚙️ Instalasi dan Setup

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda.

### Prasyarat

Pastikan Anda telah menginstal yang berikut:

* [Node.js](https://nodejs.org/) (versi LTS)
* [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

### Langkah-langkah

1.  **Clone Repositori:**
    ```bash
    git clone [https://github.com/T13-1M/exposition-muhijunior.git](https://github.com/T13-1M/exposition-muhijunior.git)
    cd exposition-muhijunior
    ```

2.  **Setup Backend (API):**
    ```bash
    cd api
    npm install
    # Buat file .env dan isi variabel lingkungan
    cp .env.example .env
    # [GANTI: Tambahkan instruksi konfigurasi database jika diperlukan]
    npm start # Atau perintah start lainnya
    ```

3.  **Setup Frontend (Client):**
    ```bash
    cd ../client
    npm install
    # Buat file .env.local jika diperlukan untuk variabel lingkungan frontend
    npm start # Atau perintah start lainnya
    ```

4.  **Akses Aplikasi:**
    Aplikasi frontend biasanya berjalan di `http://localhost:3000` (tergantung konfigurasi *framework* Anda).

## 🤝 Kontribusi

Kami menyambut kontribusi dari semua anggota tim! Jika Anda menemukan *bug* atau memiliki saran fitur, silakan ikuti langkah-langkah di bawah ini:

1.  *Fork* repositori ini.
2.  Buat *branch* baru: `git checkout -b fitur/nama-fitur`
3.  Lakukan perubahan dan *commit* perubahan Anda: `git commit -m 'feat: Tambahkan fitur X'`
4.  *Push* ke *branch*: `git push origin fitur/nama-fitur`
5.  Ajukan *Pull Request* (PR) ke *branch* `main`.

## 📜 Lisensi

Proyek ini dilisensikan di bawah lisensi **[GANTI: Misalnya, MIT License atau lainnya]**. Lihat file `LICENSE` untuk detail lebih lanjut.

## 🧑‍💻 Tim Pengembang

Proyek ini dikembangkan oleh **T13-1M**.

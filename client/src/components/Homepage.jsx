import React from 'react';

function Homepage() {
    return (
        <div className="w-full">
            <div className="flex flex-col items-center justify-center items-center text-center bg-sky-100 py-20">
                <h1 className="font-extrabold text-5xl mb-3">SMP Muhammadiyah 1 Yogyakarta</h1>
                <h2 className="header-subtitle">Expo Sekolah 2025 - Memamerkan Prestasi dan Inovasi Siswa</h2>
                <div className="button-group">
                    <a href="#hp2" className="button button-dark">Jelajah Proyek</a>
                </div>
            </div>
            <div className="h-content w-full bg-cyan-50 pt-16 px-5 py-20 flex flex-col items-center" id="hp2">
                <h1 className="text-4xl font-extrabold text-center mb-8">Selamat Datang</h1>
                <p className="text-center mb-5">Expo Sekolah 2025 merupakan puncak perayaan kreativitas dan inovasi siswa dari berbagai bidang studi. Kami hadir untuk memamerkan proyek-proyek terbaik, mulai dari teknologi, seni, hingga ilmu pengetahuan, yang lahir dari dedikasi dan semangat belajar siswa.</p>
                <a href="/profile" className="button button-dark">Profile</a>
            </div>
        </div>
    )
};

export default Homepage;
import React from 'react';

function Profilepage() {
    return (
        <div className="w-full">
            <div className="pt-16 px-6 bg-white flex flex-col items-center">
                <h1 className="font-bold text-3xl">Profil Sekolah</h1>
                <p className="text-center font-normal">Mengenal lebih dekat sekolah yang berkomitmen menghasilkan generasi unggul dan berkarakter</p>
                <div className="rounded-xl border bg-card text-card-foreground shadow w-full h-screen px-3 py-2">
                    <h2 className="font-semibold text-xl">Tentang SMP Muhammadiyah 1 Yogyakarta</h2>
                    <p className="mt-5 text-gray-700">SMP Muhammadiyah 1 Yogyakarta adalah sekolah berbasis Islam yang unggul dalam prestasi dan memiliki kelas peminatan teknologi informasi ICT, kelas bahasa, kelas sains, kelas seni budaya olahraga, kelas tahfidz dan kelas reguler</p>
                    <h3>Visi Sekolah</h3>
                    <p>”TERWUJUDNYA GENERASI MUSLIM BERKUALITAS, UNGGUL DALAM PRESTASI, BERWAWASAN IPTEK DAN BERBUDAYA LINGKUNGAN ”</p>
                    <p>Visi ini menjiwai warga sekolah untuk selalu mewujudkannya setiap saat dan berkelanjutan dalam mencapai tujuan sekolah.
Visi tersebut mencerminkan profil dan cita-cita sekolah yang tergambar pada uraian berikut:

a. berorientasi ke depan dengan memperhatikan potensi kekinian
b. sesuai dengan norma dan harapan masyarakat
c. ingin mencapai keunggulan
d. mendorong semangat dan komitmen seluruh warga sekolah
e. mendorong adanya perubahan yang lebih baik
f. mendorong warga sekolah yang riligius
g. mendorong warga sekolah berbudaya lingkungan yang sehat, bersih dan nyaman</p>
                </div>
            </div>
        </div>
    )
}

export default Profilepage;
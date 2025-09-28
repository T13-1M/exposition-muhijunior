import React from 'react';
import { Target, BookOpen, MapPin, Phone, EnvelopeSimple, Globe, User, House, Student, ChartBar, Trophy, Desktop, Flask, Palette, Translate } from '@phosphor-icons/react';

function Profilepage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-16 px-6 bg-white flex flex-col items-center">
                <h1 className="font-bold text-3xl">Profil Sekolah</h1>
                <p className="text-center font-normal mb-6">Mengenal lebih dekat sekolah yang berkomitmen menghasilkan generasi unggul dan berkarakter</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="rounded-xl border bg-card text-card-foreground shadow">
                        <div className="lg:col-span-2">
                            <div className="rounded-xl border bg-card text-card-foreground shadow">
                                <h2 className="font-semibold text-xl p-6">Tentang SMP Muhammadiyah 1 Yogyakarta</h2>
                                <p className="text-gray-700 px-6">SMP Muhammadiyah 1 Yogyakarta adalah sekolah berbasis Islam yang unggul dalam prestasi dan memiliki kelas peminatan teknologi informasi ICT, kelas bahasa, kelas sains, kelas seni budaya olahraga, kelas tahfidz dan kelas reguler.</p>
                                <h3 className="flex gap-2 p-6"><Target size="25"/><span>Visi Sekolah</span></h3>
                                <p className="text-center mx-6">”TERWUJUDNYA GENERASI MUSLIM BERKUALITAS, UNGGUL DALAM PRESTASI, BERWAWASAN IPTEK DAN BERBUDAYA LINGKUNGAN ”</p>
                                <h3 className="flex gap-2 p-6"><BookOpen size="25"/>Misi Sekolah</h3>
                                <p className="px-6 pb-6">a. Meningkatkan pengamalan ajaran Islam dan akhlaqul karimah secara optimal<br/>
b. Melaksanakan pembelajaran dan bimbingan secara efektif dan efisien<br/>
c. Mendorong dan membantu setiap peserta didik untuk mengenali potensi dirinya<br/>
d. Meningkatkan keterampilan akademik dan nonakademik<br/>
e. Meningkatkan sumber daya peserta didik, pendidik dan tenaga kependidikan<br/>
f. Meningkatkan disiplin dan etos kerja yang tinggi dan pelayanan prima<br/>
g. Menumbuhkan semangat apresiasi seni, olah raga dan iptek pada seluruh warga sekolah<br/>
h. Menjalin kerja sama yang harmonis antarwarga sekolah dan lingkungan terkait<br/>
i. Menumbuhkan sikap pola hidup sehat dan berbudaya lingkungan<br/></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max rounded-xl border bg-card text-card-foreground shadow">
                        <h2 className="p-6 font-semibold">Informasi Kontak</h2>
                        <div className="flex flex-col p-6 pt-0">
                            <div className="flex pb-6 gap-2">
                                <MapPin size="25" className="text-blue-600"/>
                                <div>
                                    <span>Alamat</span>
                                    <p>Jl. Purwodiningratan NG I No.902B, Ngampilan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55261</p>
                                </div>
                            </div>
                            <div className="flex pb-6 gap-2">
                                <Phone size="25" className="text-blue-600"/>
                                <div>
                                    <span>Telepone</span>
                                    <p>(0274) 589624</p>
                                </div>
                            </div>
                            <div className="flex pb-6 gap-2">
                                <EnvelopeSimple size="25" className="text-blue-600"/>
                                <div>
                                    <span>Email</span>
                                    <p>info@smpmuh1-yog.sch.id</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Globe size="25" className="text-blue-600"/>
                                <div className="flex flex-col">
                                    <span>Website</span>
                                    <a href="https://smpmuh1-yog.sch.id/" target="_blank">https://smpmuh1-yog.sch.id/</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 pb-6 w-full grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                    <div className="w-full max-w-xs p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                        <span className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3"><ChartBar size="25"/></span>
                        <p className="text-2xl font-bold text-gray-900 mb-1">54</p>
                        <p className="text-gray-600 text-sm">PTK</p>
                    </div>
                    <div className="w-full max-w-xs p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                        <span className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3"><Student size="25"/></span>
                        <p className="text-2xl font-bold text-gray-900 mb-1">40</p>
                        <p className="text-gray-600 text-sm">Guru</p>
                    </div>
                    <div className="w-full max-w-xs p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                        <span className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3"><House size="25"/></span>
                        <p className="text-2xl font-bold text-gray-900 mb-1">22</p>
                        <p className="text-gray-600 text-sm">Kelas</p>
                    </div>
                    <div className="w-full max-w-xs p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                        <span className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-3"><User size="25"/></span>
                        <p className="text-2xl font-bold text-gray-900 mb-1">600+</p>
                        <p className="text-gray-600 text-sm">Total Murid</p>
                    </div>
                </div>
                <div className="w-full my-6 rounded-xl border bg-card text-card-foreground shadow">
                    <h2 className="px-6 pt-6 mb-2 pb-2 font-semibold flex gap-2"><Trophy size="28" color="#000000ff" weight="duotone" />Kelas Pilihan</h2>
                    <div className="grid grid-cols-1 mx-4 md:grid-cols-3 gap-6 justify-beetween">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Desktop size="25" color="white"/>
                            </div>
                            <h1 className="font-semibold mb-2">ICT</h1>
                            <p className="text-sm text-gray-600">kelas khusus yang mempunyai keunggulan spesifik dalam penguasaan teknologi informasi dan komunikasi yang lebih baik. </p>
                        </div>
                        <div className="text-center p-4 bg-red-50 rounded-lg">
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Flask size="25" color="white"/>
                            </div>
                            <h1 className="font-semibold mb-2">Sains</h1>
                            <p className="text-sm text-gray-600">kelas yang dipersiapkan untuk mencetak siswa
dengan prestasi akademik yang tinggi. </p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Translate size="25" color="white"/>
                            </div>
                            <h1 className="font-semibold mb-2">Bahasa</h1>
                            <p className="text-sm text-gray-600">kelas yang didesain sejak awal tahun ajaran untuk mencetak siswa yang handal dalam berbahasa asing, baik inggris, arab, maupun jepang. </p>
                        </div>
                        <div className="text-center p-4 bg-orange-50 rounded-lg">
                            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Palette size="25" color="white"/>
                            </div>
                            <h1 className="font-semibold mb-2">SBO</h1>
                            <p className="text-sm text-gray-600">kelas yang didesain sejak awal tahun ajaran untuk mencetak siswa yang handal dalam berbahasa asing, baik inggris, arab, maupun jepang. </p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <BookOpen size="25" color="white"/>
                            </div>
                            <h1 className="font-semibold mb-2">Thafidz</h1>
                            <p className="text-sm text-gray-600">Kelas peminatan untuk menyiapkan siswa/siswi menjadi Hafidz/Hafidzah yang mencintai Al-Qur’an, berakhlak mulia dan tetap berprestasi dalam bidang akademik.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profilepage;
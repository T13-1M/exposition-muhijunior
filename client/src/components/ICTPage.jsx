import React from 'react';
import { Desktop, Code, ArrowRight } from '@phosphor-icons/react';

function ICTPage() {
    return(
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="mt-16 mb-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Desktop size="32" color="#fff"/>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ICT (Information and Communication Technology)</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bidang teknologi informasi dan komunikasi yang mengembangkan inovasi digital</p>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow mb-6">
                <h2 className="font-semibold text-xl p-6 pt-2 pb-3">Tentang Kelas ICT</h2>
                <p className="text-gray-600 leading-relaxed mb-6 px-6">SMP Muhammadiyah 1 Yogyakarta (sering disebut Muhijunior) memiliki program unggulan yang disebut Kelas ICT (Information and Communication Technology). Program ini didesain untuk mencetak siswa yang unggul dan memiliki keterampilan spesifik dalam penguasaan teknologi informasi dan komunikasi.</p>
                <div>
                    <p className="font-semibold p-6 pt-2 pb-3">Kompetensi yang Dikembangkan</p>
                    <ul className="text-gray-600 leading-relaxed mb-6 px-12 list-disc">
                        <li>Pengembangan Web</li>
                        <li>Editing Video</li>
                        <li>Design Grafis</li>
                    </ul>
                </div>
                <div className="hello wolrd">
                    <p className="font-semibold p-6 pt-2 pb-3">Fasilitas Labolatorium</p>
                    <ul className="text-gray-600 leading-relaxed mb-6 px-12 list-disc">
                        <li>Komputer</li>
                    </ul>
                </div>
            </div>
            <div className="mb-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3"><Code size="25" color="#3850baff" weight="bold"/></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Web Development</p>
                            <p className="text-gray-600 text-sm">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3"><Code size="25" color="#3850baff" weight="bold"/></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Web Development</p>
                            <p className="text-gray-600 text-sm">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3"><Code size="25" color="#3850baff" weight="bold"/></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Web Development</p>
                            <p className="text-gray-600 text-sm">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3"><Code size="25" color="#3850baff" weight="bold"/></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Web Development</p>
                            <p className="text-gray-600 text-sm">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex justify-between mb-6">
                    <h1 className="font-bold text-2xl">Proyek Siswa</h1>
                    <a href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">Lihat Semua Proyek <ArrowRight /></a>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">ICT Project</span>
                            </div>
                            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop" />
                            <div className="absolute inset-0 bg-black opacity-10"></div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">nama project</h2>
                            <p className="text-gray-500 text-sm mb-6">deskripsi singkat</p>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">team</span>
                                <a href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">Detail Proyek <ArrowRight /></a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">ICT Project</span>
                            </div>
                            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop" />
                            <div className="absolute inset-0 bg-black opacity-10"></div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">nama project</h2>
                            <p className="text-gray-500 text-sm mb-6">deskripsi singkat</p>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">team</span>
                                <a href="#" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">Detail Proyek</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ICTPage;
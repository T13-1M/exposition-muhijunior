import React, { useState, useEffect } from 'react';
import { BookOpen, Atom, Microscope, TestTube, ArrowRight } from '@phosphor-icons/react';
import axios from 'axios';
import ProjectDetail from './ProjectDetail';

function Thafidzpage() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/projects?category=tafidz')
            .then((res) => setProjects(res.data || []))
            .catch((err) => {
                console.error('Failed to fetch projects:', err);
                setProjects([]);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mt-16 mb-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen size="32" color="#fff" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Thafidz (Tahfidz Al-Quran)</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Program menghafal dan memahami Al-Quran dengan baik dan benar</p>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow mb-6">
                <h2 className="font-semibold text-xl p-6 pt-2 pb-3">Tentang Kelas Thafidz</h2>
                <p className="text-gray-600 leading-relaxed mb-6 px-6">Program Thafidz Al-Quran adalah program unggulan sekolah yang bertujuan mencetak generasi Qur'ani. Dengan metode pembelajaran yang efektif dan suasana yang kondusif, siswa dibimbing untuk menghafal, memahami, dan mengamalkan Al-Quran dalam kehidupan sehari-hari. Program ini tidak hanya fokus pada hafalan, tetapi juga pada kualitas bacaan dan pemahaman makna.</p>

                <div>
                    <p className="font-semibold p-6 pt-2 pb-3">Metode Pembelajaran</p>
                    <ul className="text-gray-600 leading-relaxed mb-6 px-12 list-disc">
                        <li>Metode Tilawati untuk pemula</li>
                        <li>Metode Yanbu'a untuk tahsin</li>
                        <li>Metode Wahdah untuk menghafal</li>
                        <li>Metode Muroja'ah untuk pemeliharaan</li>
                        <li>Metode Tafsir kontemporer</li>
                        <li>Pembelajaran berbasis teknologi</li>
                    </ul>
                </div>

                <div className="hello wolrd">
                    <p className="font-semibold p-6 pt-2 pb-3">Target Program:</p>
                    <ul className="text-gray-600 leading-relaxed mb-6 px-12 list-disc">
                        <li>Hafal Al-Quran 30 Juz</li>
                        <li>Bacaan sesuai kaidah tajwid</li>
                        <li>Pemahaman makna ayat</li>
                        <li>Kemampuan bahasa Arab dasar</li>
                        <li>Akhlak mulia dalam kehidupan</li>
                        <li>Prestasi dalam kompetisi</li>
                    </ul>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl text-center mb-6 md:text-5xl font-bold text-gray-900">Bidang Thafidz</h2>
                <div className="grid items-center md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3"><BookOpen size="25" color="green" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Tahfidz Al-Quran</p>
                            <p className="text-gray-600 text-sm">Program menghafal Al-Quran 30 Juz dengan metode terbaru</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3"><Microscope size="25" color="green" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Tahsin & Qiroah</p>
                            <p className="text-gray-600 text-sm">Perbaikan bacaan dan seni baca Al-Quran</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3"><TestTube size="25" color="green" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Tafsir & Hadits</p>
                            <p className="text-gray-600 text-sm">Pemahaman makna dan kandungan Al-Quran</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3"><TestTube size="25" color="green" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Arabic Studies</p>
                            <p className="text-gray-600 text-sm">Pembelajaran bahasa Arab untuk memahami Al-Quran</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-between mb-6">
                    <h1 className="font-bold text-2xl">Proyek Siswa</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project?.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">{project?.tag}</span>
                                </div>
                                <img className="w-full h-full object-cover" src={project?.image || ''} alt={project?.title || 'project image'} />
                                <div className="absolute inset-0 bg-black opacity-10" />
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{project?.title}</h2>
                                <p className="text-gray-500 text-sm mb-6">{project?.description}</p>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">{project?.team}</span>
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                                    >
                                        Detail Proyek <ArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </div>
    );
}

export default Thafidzpage;
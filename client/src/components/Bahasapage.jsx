import React, { useState, useEffect } from 'react';
import { Translate, BookOpen, Globe, Chat, ArrowRight } from '@phosphor-icons/react';
import axios from 'axios';
import ProjectDetail from './ProjectDetail';

function Bahasapage() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        axios
            .get('/api/projects?category=Bahasa')
            .then((res) => setProjects(res.data || []))
            .catch((err) => {
                console.error('Failed to fetch projects:', err);
                setProjects([]);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-16 mb-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Translate size="32" color="#fff" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bahasa (Language Studies)</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bidang studi yang mengembangkan kemampuan berbahasa dan literasi siswa</p>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow mb-6">
                <h2 className="font-semibold text-xl p-6 pt-2 pb-3">Tentang Kelas Bahasa</h2>
                <p className="text-gray-600 leading-relaxed mb-6 px-6">Kelas Bahasa dirancang khusus untuk siswa yang memiliki minat dan bakat di bidang bahasa asing. Program ini dilaksanakan secara berkesinambungan dan berkelanjutan mulai dari Kelas VII hingga Kelas IX.</p>

                <div>
                    <p className="font-semibold p-6 pt-2 pb-3">Kompetensi yang Dikembangkan</p>
                    <ul className="text-gray-600 leading-relaxed mb-6 px-12 list-disc">
                        <li>Peningkatan Motivasi dan Kemampuan: Program-program yang diberikan bertujuan untuk meningkatkan motivasi belajar sekaligus meningkatkan kemampuan berbahasa asing siswa.</li>
                        <li>Keterampilan Berbicara (Speaking): Salah satu fokus adalah melatih siswa agar dapat berbicara dengan menggunakan bahasa Inggris yang baik dan benar.</li>
                    </ul>
                </div>

                <div className="hello wolrd">
                    <p className="font-semibold p-6 pt-2 pb-3">Fasilitas</p>
                    <p className="text-gray-600 leading-relaxed mb-6 px-12 ">Untuk menunjang keterampilan berbahasa asing siswa, Kelas Bahasa didukung oleh Perpustakaan Bahasa sebagai salah satu fasilitas utamanya. Secara umum, kelas ini juga mendapat dukungan fasilitas seperti ruang kelas yang nyaman dan sarana lain yang menunjang proses pembelajaran aktif.</p>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl mb-6 text-center md:text-5xl font-bold text-gray-900">Bahasa yang Dipelajari</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3"><BookOpen size="25" color="#4538baff" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Bahasa Arab</p>
                            <p className="text-gray-600 text-sm">Qawaid, Muthala'ah, Conversation</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3"><Globe size="25" color="#4538baff" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Bahasa Inggris</p>
                            <p className="text-gray-600 text-sm">Grammar, Speaking, TOEFL Preparation</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3"><Chat size="25" color="#4538baff" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Bahasa Jepang</p>
                            <p className="text-gray-600 text-sm">Hiragana & Katakana, Percakapan Dasar, Budaya Jepang</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3"><Chat size="25" color="#4538baff" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Bahasa Indonesia</p>
                            <p className="text-gray-600 text-sm">Sastra, Tata Bahasa, Menulis Kreatif </p>
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

export default Bahasapage;
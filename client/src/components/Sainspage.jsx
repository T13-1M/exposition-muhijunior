import React, { useState, useEffect } from 'react';
import { Flask, Atom, Microscope, TestTube, MathOperations, ArrowRight } from '@phosphor-icons/react';
import axios from 'axios';
import ProjectDetail from './ProjectDetail';

function Thafidzpage() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/projects?category=Sains')
            .then((res) => setProjects(res.data || []))
            .catch((err) => {
                console.error('Failed to fetch projects:', err);
                setProjects([]);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-16 mb-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Flask size="32" color="#fff" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sains (Science)</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Penelitian dan eksperimen dalam bidang sains dan teknologi</p>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow mb-6">
                <h2 className="font-semibold text-xl p-6 pt-2 pb-3">Tentang Kelas Sains</h2>
                <p className="text-gray-600 leading-relaxed mb-6 px-6">Kelas Sains adalah salah satu program peminatan unggulan yang dirancang untuk siswa dengan minat dan bakat tinggi pada ilmu pengetahuan alam. Kelas ini dipersiapkan secara khusus untuk mencetak siswa dengan prestasi akademik tinggi di bidang Sains.</p>
                <div>
                    <p className="font-semibold p-6 pt-2 pb-3">Kompetensi yang Dikembangkan</p>
                    <p className="text-gray-600 leading-relaxed mb-6 px-12">Pengembangan kompetensi di Kelas Sains tidak hanya mencakup penguasaan teori, tetapi juga aplikasi dan kemampuan berkompetisi:</p>
                    <ul className="text-gray-600 leading-relaxed mb-6 px-12 list-disc">
                        <li>Penguasaan Konsep Mendalam: Siswa dibekali pemahaman konsep Biologi, Fisika, dan Kimia dengan kurikulum yang lebih kaya dan mendalam dibandingkan kelas reguler.</li>
                        <li>Keterampilan Eksperimental: Siswa dilatih untuk melakukan eksperimen dan prosedur ilmiah secara mandiri dan akurat, termasuk analisis data.</li>
                        <li>Kemampuan Analitis dan Kompetitif: Program ini secara khusus mempersiapkan siswa untuk menghadapi olimpiade dan kompetisi sains. Siswa dilatih memecahkan soal-soal tingkat tinggi dan menguasai strategi kompetisi.</li>
                        <li>Proyek Inovasi: Siswa didorong untuk mengembangkan proyek-proyek berbasis Sains (seperti energi terbarukan atau alat peraga) yang mendorong inovasi praktis.</li>
                    </ul>
                </div>
                <div className="hello wolrd">
                    <p className="font-semibold p-6 pt-2 pb-3">Fasilitas</p>
                    <p className="text-gray-600 leading-relaxed mb-6 px-12 ">Untuk mendukung kegiatan praktikum, penelitian, dan pembelajaran yang berpusat pada eksplorasi, Kelas Sains didukung oleh:</p>
                    <ul className="text-gray-600 leading-relaxed mb-6 px-12 list-disc">
                        <li><b>Laboratorium Terlengkap:</b> Akses intensif ke Lab Biologi, Lab Fisika, dan Lab Kimia dengan peralatan eksperimen yang memadai.</li>
                        <li><b>Akses Internet Cepat:</b> Mendukung riset dan akses ke sumber-sumber pembelajaran ilmiah online.</li>
                        <li><b>Pembinaan Khusus:</b> Adanya mentor atau guru pembimbing spesialis yang memiliki pengalaman dalam melatih dan mendampingi siswa di ajang olimpiade.</li>
                    </ul>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-3xl mb-6 text-center md:text-5xl font-bold text-gray-900">Bidang Sains</h2>
                <div className="grid items-center md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-3"><Atom size="25" color="red" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Fisika</p>
                            <p className="text-gray-600 text-sm">Mekanika, Listrik, Optik, Fisika Modern</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-3"><Microscope size="25" color="red" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Biologi</p>
                            <p className="text-gray-600 text-sm">Botani, Zoologi, Genetika, Ekologi</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-3"><TestTube size="25" color="red" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Kimia</p>
                            <p className="text-gray-600 text-sm">Kimia Organik, Anorganik, Fisik</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-3"><MathOperations size="25" color="red" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Matematika</p>
                            <p className="text-gray-600 text-sm">Aljabar, Geometri, Kalkulus, Statistik</p>
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
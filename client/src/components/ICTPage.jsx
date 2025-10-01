import React, { useState, useEffect } from 'react';
import { Desktop, Code, ArrowRight } from '@phosphor-icons/react';
import axios from 'axios';
import ProjectDetail from './ProjectDetail';

function ICTpage() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/projects?category=ICT')
            .then((res) => setProjects(res.data || []))
            .catch((err) => {
                console.error('Failed to fetch projects:', err);
                setProjects([]);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-16 mb-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Desktop size="32" color="#fff" />
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
                <h2 className="text-3xl text-center mb-6 md:text-5xl font-bold text-gray-900">Teknologi yang Dipelajari</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3"><Code size="25" color="#3850baff" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Web Development</p>
                            <p className="text-gray-600 text-sm">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3"><Code size="25" color="#3850baff" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Web Development</p>
                            <p className="text-gray-600 text-sm">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3"><Code size="25" color="#3850baff" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Web Development</p>
                            <p className="text-gray-600 text-sm">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                        <div className="p-6">
                            <span className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3"><Code size="25" color="#3850baff" weight="bold" /></span>
                            <p className="text-2xl font-bold text-gray-900 mb-1">Web Development</p>
                            <p className="text-gray-600 text-sm">HTML, CSS, JavaScript</p>
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

export default ICTpage;
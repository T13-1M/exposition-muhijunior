import { ArrowRight, Trophy } from '@phosphor-icons/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Homepage() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/projects')
            .then((res) => setProjects(res.data || []))
            .catch((err) => {
                console.error('Failed to fetch projects:', err);
                setProjects([]);
            });
    }, []);

    return (
        <div className="w-full">
            <div className="flex flex-col items-center justify-center items-center text-center bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">SMP Muhammadiyah 1 Yogyakarta</h1>
                <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">Expo Sekolah 2025 - Memamerkan Prestasi dan Inovasi Siswa</h2>
                <div className="button-group">
                    <a href="/profile" className="button button-dark">Lihat Profile</a>
                </div>
            </div>
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyek Unggulan</h1>
                        <p className="text-center mb-5">Temukan karya-karya terbaik siswa dari berbagai bidang studi</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project?.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">ICT Project</span>
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
            </div>
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prestasi Terbaru</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Inilah prestasi terbaru dari siswa siswi kami</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                            <div className="p-6">
                                <span className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3"><Trophy size="25" color="white" weight="bold" /></span>
                                <p className="text-2xl font-bold text-gray-900 mb-1">Juara 1 Olimpiade Sains Nasional</p>
                                <div className="flex justify-center space-x-2 mb-2">
                                    <span className="bg-black text-white rounded-md px-2.5 py-0.5 text-xs font-semibold">Sains</span>
                                    <span className="bg-gray-100 text-black rounded-md px-2.5 py-0.5 text-xs font-semibold border">2025</span>
                                </div>
                                <p className="text-gray-600 text-sm">Nasional</p>
                            </div>
                        </div>
                        <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                            <div className="p-6">
                                <span className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3"><Trophy size="25" color="white" weight="bold" /></span>
                                <p className="text-2xl font-bold text-gray-900 mb-1">Juara 1 Olimpiade Sains Nasional</p>
                                <div className="flex justify-center space-x-2 mb-2">
                                    <span className="bg-black text-white rounded-md px-2.5 py-0.5 text-xs font-semibold">Sains</span>
                                    <span className="bg-gray-100 text-black rounded-md px-2.5 py-0.5 text-xs font-semibold border">2025</span>
                                </div>
                                <p className="text-gray-600 text-sm">Nasional</p>
                            </div>
                        </div>
                        <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                            <div className="p-6">
                                <span className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3"><Trophy size="25" color="white" weight="bold" /></span>
                                <p className="text-2xl font-bold text-gray-900 mb-1">Juara 1 Olimpiade Sains Nasional</p>
                                <div className="flex justify-center space-x-2 mb-2">
                                    <span className="bg-black text-white rounded-md px-2.5 py-0.5 text-xs font-semibold">Sains</span>
                                    <span className="bg-gray-100 text-black rounded-md px-2.5 py-0.5 text-xs font-semibold border">2025</span>
                                </div>
                                <p className="text-gray-600 text-sm">Nasional</p>
                            </div>
                        </div>
                        <div className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-md transition-shadow duration-300">
                            <div className="p-6">
                                <span className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3"><Trophy size="25" color="white" weight="bold" /></span>
                                <p className="text-2xl font-bold text-gray-900 mb-1">Juara 1 Olimpiade Sains Nasional</p>
                                <div className="flex justify-center space-x-2 mb-2">
                                    <span className="bg-black text-white rounded-md px-2.5 py-0.5 text-xs font-semibold">Sains</span>
                                    <span className="bg-gray-100 text-black rounded-md px-2.5 py-0.5 text-xs font-semibold border">2025</span>
                                </div>
                                <p className="text-gray-600 text-sm">Nasional</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
                    Copyright &copy; 2025 - <a href="https://github.com/T13-1M" target="_blank" className="hover:text-blue-300">KoCheng</a>
            </div>
        </div>
    )
};

export default Homepage;
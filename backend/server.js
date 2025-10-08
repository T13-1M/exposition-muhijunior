const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(cors()); 
app.use(express.json()); 
const dbPath = path.resolve(__dirname, 'projects.json'); 


function loadProjects() {
    try {
        const data = fs.readFileSync(dbPath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error saat memuat data projects.json:", error);
        throw new Error("Gagal memuat data project."); 
    }
}

app.get("/", (req, res) => {
    res.status(200).json({ 
        message: "Selamat datang di Serverless API Project!",
        endpoints: "/api/projects, /api/projects/:id"
    });
});

app.get("/api/projects", (req, res) => {
    try {
        const projects = loadProjects();
        const { category } = req.query;

        if (category) {
            const filtered = projects.filter(
                (p) => p.category && p.category.toLowerCase() === category.toLowerCase()
            );
            res.status(200).json(filtered);
        } else {
            res.status(200).json(projects);
        }
    } catch (error) {
        res.status(500).json({ message: error.message || "Kesalahan Server Internal." });
    }
});

app.get("/api/projects/:id", (req, res) => {
    try {
        const projects = loadProjects();
        const projectId = parseInt(req.params.id);
        const project = projects.find((p) => p.id === projectId);

        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: `Project dengan ID ${projectId} tidak ditemukan` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message || "Kesalahan Server Internal." });
    }
});

module.exports = app;
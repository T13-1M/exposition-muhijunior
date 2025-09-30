const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const dbPath = "./projects.json";
function loadProjects() {
    return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
}

app.get("/api/projects", (req, res) => {
    const projects = loadProjects();
    res.json(projects);
});

app.get("/api/projects/:id", (req, res) => {
    const projects = loadProjects();
    const project = projects.find((p) => p.id === parseInt(req.params.id));
    if (project) {
        res.json(project);
    } else {
        res.status(404).json({ message: "Project not found" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

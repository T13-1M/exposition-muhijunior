import { X } from "@phosphor-icons/react";

function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto relative p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold">{project.title}</h2>
        <span className="inline-block mt-2 px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">
          {project.tag}
        </span>

        <img
          src={project.image}
          alt={project.title}
          className="mt-4 rounded-lg w-full"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg">Deskripsi Proyek</h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Detail Proyek</h3>
            <p>
              <span className="font-semibold">Tim:</span> {project.team} <br />
              <span className="font-semibold">Tanggal:</span> {project.date}{" "}
              <br />
              <span className="font-semibold">Teknologi:</span>{" "}
              {project.technologies?.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;

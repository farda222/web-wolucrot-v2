import { useState } from "react";

const StudentComponent = () => {
  const [activeTab, setActiveTab] = useState("submitted");
  const [showAll, setShowAll] = useState(false); // State untuk menampilkan semua murid
  const [students] = useState([
    { id: 1, name: "Alexander Agung", submitted: true, score: 90, iconUrl: "https://via.placeholder.com/30/FF5733" },
    { id: 2, name: "Aditya Widodo P", submitted: false, score: 0, iconUrl: "https://via.placeholder.com/30/FFC300" },
    { id: 3, name: "Farda Syarif Mubarok", submitted: false, score: 0, iconUrl: "https://via.placeholder.com/30/C70039" },
    { id: 4, name: "Rafif Naufal Aditya", submitted: true, score: 80, iconUrl: "https://via.placeholder.com/30/900C3F" },
    { id: 5, name: "Sekar Ayu Wardani", submitted: true, score: 95, iconUrl: "https://via.placeholder.com/30/581845" },
    { id: 6, name: "Unknown", submitted: false, score: 0, iconUrl: "https://via.placeholder.com/30/DAF7A6" },
    // Tambahkan data siswa lainnya di sini
  ]);

  const submittedStudents = students.filter((student) => student.submitted);
  const unsubmittedStudents = students.filter((student) => !student.submitted);

  const handleCheckboxChange = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex mb-4 ml-2 gap-20">
        <button className={`mr-4 font-semibold py-2 px-4 ${activeTab === "submitted" ? "bg-white text-indigo-600 border-b-2 border-indigo-600" : "bg-white"}`} onClick={() => setActiveTab("submitted")}>
          Submitted
        </button>
        <button className={`mr-4 font-semibold py-2 px-4 ${activeTab === "unsubmitted" ? "bg-white text-indigo-600 border-b-2 border-indigo-600" : "bg-white"}`} onClick={() => setActiveTab("unsubmitted")}>
          Unsubmitted
        </button>
      </div>
      <div>
        <label className="inline-flex items-center mb-4">
          <input type="checkbox" checked={showAll} onChange={handleCheckboxChange} className="mr-2" />
          <span>Tampilkan Semua Murid</span>
        </label>
      </div>
      {activeTab === "submitted" && (
        <div className="px-3">
          <ul>
            {showAll
              ? students.map((student) => (
                  <li key={student.id} className="mb-2 flex items-center">
                    <img src={student.iconUrl} alt="icon" className="mr-2 rounded-full" />
                    <span className="ml-2">{student.name}</span>
                    <span className="ml-auto">{student.submitted ? student.score : 0}/100 </span>
                  </li>
                ))
              : submittedStudents.map((student) => (
                  <li key={student.id} className="mb-2 flex items-center mt-8">
                    <img src={student.iconUrl} alt="icon" className="mr-2 rounded-full" />
                    <span className="ml-2">{student.name}</span>
                    <span className="ml-auto">{student.score}/100 </span>
                  </li>
                ))}
          </ul>
        </div>
      )}
      {activeTab === "unsubmitted" && (
        <div className="px-3">
          <ul>
            {showAll
              ? students.map((student) => (
                  <li key={student.id} className="mb-2 flex items-center">
                    <img src={student.iconUrl} alt="icon" className="mr-2 rounded-full" />
                    <span className="ml-2">{student.name}</span>
                    <span className="ml-auto">{student.submitted ? student.score : 0}/100</span>
                  </li>
                ))
              : unsubmittedStudents.map((student) => (
                  <li key={student.id} className="mb-2 flex items-center mt-8">
                    <img src={student.iconUrl} alt="icon" className="mr-2 rounded-full" />
                    <span className="ml-2">{student.name}</span>
                    <span className="ml-auto">{student.score}/100</span>
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentComponent;

import React, { useState } from 'react';

// Icons (install via `npm install react-icons` if not already)
import { FaFileExcel, FaFilePdf } from 'react-icons/fa';

// Excel & File Saver
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// PDF
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const initialStudents = [
  {
    id: 1,
    name: 'Vaibhav Patil',
    className: '8th',
    section: 'combine',
    attendance: 'NOT MARKED',
    reason: '',
    rollNo: '101',
    admissionNo: 'A001',
  },
  {
    id: 2,
    name: 'five step academy',
    className: '8th',
    section: 'combine',
    attendance: 'NOT MARKED',
    reason: '',
    rollNo: '102',
    admissionNo: 'A002',
  },
  {
    id: 3,
    name: 'Prinraj Lankhade',
    className: '12th',
    section: 'combine',
    attendance: 'NOT MARKED',
    reason: '',
    rollNo: '201',
    admissionNo: 'B101',
  },
  {
    id: 4,
    name: 'Shreya',
    className: '10th',
    section: 'A',
    attendance: 'NOT MARKED',
    reason: '',
    rollNo: '301',
    admissionNo: 'C201',
  },
  {
    id: 5,
    name: 'Saurav',
    className: '10th',
    section: 'B',
    attendance: 'NOT MARKED',
    reason: '',
    rollNo: '302',
    admissionNo: 'C202',
  },
  // ... Add more students as needed
];

const Table = () => {
  // -------------------- State Hooks --------------------
  const [students, setStudents] = useState(initialStudents);

  // State to control the Mark Attendance modal
  const [isMarkAttendanceOpen, setIsMarkAttendanceOpen] = useState(false);

  // State to control the Add Reason modal
  const [isAddReasonOpen, setIsAddReasonOpen] = useState(false);

  // For Mark Attendance Modal
  const [selectedAttendance, setSelectedAttendance] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // For Add Reason Modal
  const [currentReason, setCurrentReason] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  // Checkbox selection (if needed)
  const [selectedRows, setSelectedRows] = useState([]);

  // -------------------- Modal Handlers --------------------
  // Mark Attendance
  const openMarkAttendanceModal = () => {
    setSelectedAttendance('');
    setSelectedDate('');
    setIsMarkAttendanceOpen(true);
  };

  const closeMarkAttendanceModal = () => {
    setIsMarkAttendanceOpen(false);
  };

  const handleMarkAttendance = () => {
    // In a real app, you could update attendance for selected rows or all students here.
    closeMarkAttendanceModal();
  };

  // Add Reason
  const openAddReasonModal = (studentId) => {
    setSelectedStudentId(studentId);
    setCurrentReason('');
    setIsAddReasonOpen(true);
  };

  const closeAddReasonModal = () => {
    setIsAddReasonOpen(false);
  };

  const handleSubmitReason = () => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === selectedStudentId
          ? { ...student, reason: currentReason || '-' }
          : student
      )
    );
    closeAddReasonModal();
  };

  // -------------------- Export to Excel --------------------
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'students.xlsx');
  };

  // -------------------- Export to PDF --------------------
  const exportToPDF = () => {
    const doc = new jsPDF();
    // Update columns to include Roll No. and Admission No.
    const tableColumn = [
      'ID',
      'Name',
      'Roll No',
      'Admission No',
      'Class',
      'Section',
      'Attendance',
      'Reason',
    ];
    const tableRows = [];

    students.forEach((student) => {
      const studentData = [
        student.id,
        student.name,
        student.rollNo,
        student.admissionNo,
        student.className,
        student.section,
        student.attendance,
        student.reason,
      ];
      tableRows.push(studentData);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.setFontSize(15);
    doc.text('Students Data', 14, 15);
    doc.save('students.pdf');
  };

  // -------------------- Checkbox Handling --------------------
  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // -------------------- Render --------------------
  return (
    // Outer container with white bg, slight shadow, and padding
    <div className="bg-white shadow p-4 rounded w-full">
      {/* Top Section: Title + Actions + Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        {/* Title */}
        <h1 className="text-xl font-semibold">
          Students ({students.length})
        </h1>

        {/* Right Actions: Search + Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
          {/* Search Bar */}
          <div className="flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search Contact"
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons Group */}
          <div className="flex gap-2">
            {/* Mark Attendance */}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              onClick={openMarkAttendanceModal}
            >
              Mark Attendance
            </button>

            {/* Export to Excel */}
            <button
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={exportToExcel}
            >
              <FaFileExcel className="mr-2" />
              Excel
            </button>

            {/* Export to PDF */}
            <button
              className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              onClick={exportToPDF}
            >
              <FaFilePdf className="mr-2" />
              PDF
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg w-full">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 font-medium text-gray-600">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  // onChange={handleSelectAll} if you want a "select all" feature
                />
              </th>
              <th className="py-3 px-4 font-medium text-gray-600">TODAY ATTENDANCE</th>
              <th className="py-3 px-4 font-medium text-gray-600">ADD REASON</th>
              <th className="py-3 px-4 font-medium text-gray-600">REASON</th>
              {/* New columns */}
              <th className="py-3 px-4 font-medium text-gray-600">Roll No.</th>
              <th className="py-3 px-4 font-medium text-gray-600">Admission No.</th>
              <th className="py-3 px-4 font-medium text-gray-600">NAME</th>
              <th className="py-3 px-4 font-medium text-gray-600">CLASS</th>
              <th className="py-3 px-4 font-medium text-gray-600">SECTION</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                {/* Checkbox */}
                <td className="py-2 px-4">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={selectedRows.includes(student.id)}
                    onChange={() => handleCheckboxChange(student.id)}
                  />
                </td>

                {/* Attendance */}
                <td className="py-2 px-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm rounded-full ${
                      student.attendance === 'NOT MARKED'
                        ? 'bg-gray-200 text-gray-700'
                        : 'bg-green-200 text-green-800'
                    }`}
                  >
                    {student.attendance}
                  </span>
                </td>

                {/* Add Reason Button */}
                <td className="py-2 px-4">
                  <button
                    onClick={() => openAddReasonModal(student.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                  >
                    Add Reason
                  </button>
                </td>

                {/* Reason */}
                <td className="py-2 px-4">{student.reason || '-'}</td>

                {/* New columns data */}
                <td className="py-2 px-4">{student.rollNo}</td>
                <td className="py-2 px-4">{student.admissionNo}</td>

                {/* Name */}
                <td className="py-2 px-4">{student.name}</td>

                {/* Class */}
                <td className="py-2 px-4">{student.className}</td>

                {/* Section */}
                <td className="py-2 px-4">{student.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (static for demo) */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 transition-colors">
          Previous
        </button>
        <span>Page 1 of 1</span>
        <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 transition-colors">
          Next
        </button>
      </div>

      {/* Mark Attendance Modal */}
      {isMarkAttendanceOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeMarkAttendanceModal}
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">Mark Attendance</h2>

            {/* Radio Buttons for Attendance */}
            <div className="flex flex-wrap gap-4 mb-4">
              {['PRESENT', 'ABSENT', 'LATE', 'HALF DAY', 'HOLIDAY'].map((type) => (
                <label key={type} className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value={type}
                    checked={selectedAttendance === type}
                    onChange={(e) => setSelectedAttendance(e.target.value)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>

            {/* Date Input */}
            <label className="block mb-2 font-medium">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Mark Button */}
            <button
              onClick={handleMarkAttendance}
              className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition-colors"
            >
              Mark
            </button>
          </div>
        </div>
      )}

      {/* Add Reason Modal */}
      {isAddReasonOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeAddReasonModal}
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">Add Reason</h2>

            <label className="block mb-2 font-medium">Reason</label>
            <input
              type="text"
              value={currentReason}
              onChange={(e) => setCurrentReason(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSubmitReason}
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;

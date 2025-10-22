import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Routes, Route, useParams } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

// 🧩 Component hiển thị danh sách sinh viên
const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data))
      .catch(() => alert("Không thể tải danh sách sinh viên"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="student-container">
      <h2>Danh sách sinh viên</h2>
      <table>
        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th>Thành phố</th>
          </tr>
        </thead>
        <tbody>
          {students.map((sv) => (
            <tr key={sv.id}>
              <td>{sv.id}</td>
              <td>
                <Link to={`/students/${sv.id}`}>{sv.name}</Link>
              </td>
              <td>{sv.email}</td>
              <td>{sv.phone}</td>
              <td>{sv.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 🧩 Component hiển thị chi tiết sinh viên
const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setStudent(res.data))
      .catch(() => alert("Không tìm thấy sinh viên!"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (!student) return <p>Không có dữ liệu sinh viên.</p>;

  return (
    <div className="student-detail">
      <h2>Thông tin chi tiết sinh viên</h2>
      <p><b>Mã SV:</b> {student.id}</p>
      <p><b>Họ tên:</b> {student.name}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Điện thoại:</b> {student.phone}</p>
      <p><b>Thành phố:</b> {student.address.city}</p>
      <p><b>Công ty:</b> {student.company.name}</p>
      <p><b>Website:</b> {student.website}</p>
      <Link to="/students" className="back-btn">⬅ Quay lại danh sách</Link>
    </div>
  );
};

// 🧩 Component chính Students có router con
const Students: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentList />} />
      <Route path=":id" element={<StudentDetail />} />
    </Routes>
  );
};

export default Students;

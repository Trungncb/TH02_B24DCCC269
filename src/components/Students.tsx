import React, { useEffect, useState } from "react";
import axios from "axios";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get<Student[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Lỗi khi lấy danh sách sinh viên:", err));
  }, []);

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table border={1} cellPadding={10} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;

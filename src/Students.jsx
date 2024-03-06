import { useState, useEffect } from "react";
import { getStudents } from "./services/students";
import { Link } from "react-router-dom";
import GoBackButton from "./GoBackButton";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((data) => setStudents(data));
  }, []);
  return (
    <div>
      {students.map((student) => (
        <Link
          to={`/students/${student.login.uuid}`}
          key={`${student.login.uuid}`}
        >
          <p>{student.name.first}</p>
        </Link>
      ))}
      <GoBackButton />
    </div>
  );
}

export default Students;

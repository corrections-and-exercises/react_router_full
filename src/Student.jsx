import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleStudent } from "./services/students";
import GoBackButton from "./GoBackButton";

function Student() {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    getSingleStudent(id).then((data) => setStudent(data));
  }, []);
  return (
    <div>
      <p>{student.name?.first}</p>
      <GoBackButton />
    </div>
  );
}

export default Student;

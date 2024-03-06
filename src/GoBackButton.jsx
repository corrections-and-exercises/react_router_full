import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  function alertAndBack() {
    alert("Going back to the main page");
    navigate("/");
  }
  return <button onClick={alertAndBack}>Go Back</button>;
}

export default GoBackButton;

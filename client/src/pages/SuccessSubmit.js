import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SuccessSubmit = () => {
  const { answer } = useParams();
  const navigate = useNavigate();

  if (answer == "yes") {
    return <h1>Thank you for your response , See you there!!</h1>;
  } else if (answer == "no") {
    return <h1>We are sorry to hear that you won't attend , on se reprends</h1>;
  }
};
export default SuccessSubmit;

import styled from "styled-components";
import { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledApp } from "./Home";
import Header from "../components/Header";

const Form = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const submit = async (event) => {
    event.preventDefault();

    if (Object.keys(answers).length >= 3) {
      try {
        const request = await axios.post(
          "http://localhost:8000/submitToDb",
          answers
        );
        console.log("response", request.data);
        const answer = Object.values(request.data.submittedData)[1];
        console.log("answer", answer);

        if (answer == "yes") {
          navigate("/Thankyou/yes");
        } else if (answer == "no") {
          navigate("/Thankyou/no");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <StyledApp>
      <Header />

      <div className="homePage">
        <div className="content-box">
          <form>
            <label>
              Your name and your partner's name :
              <input
                required
                type="textarea"
                name="names : "
                placeholder=" Michael and Susan .."
                onChange={handleChange}
              />
            </label>

            <label>
              Will you be there for the Wedding?
              <select
                required
                type="select"
                name="Are you coming to the Wedding ? "
                onChange={handleChange}
              >
                <option disabled selected>
                  Please select :
                </option>
                <option value="yes">Yes I will be there !</option>
                <option value="no">
                  Unfurtunately we won't be hable to make it
                </option>
              </select>
            </label>

            <label>
              Do you have any allergies? If yes please specify wich ones.
              <input
                required
                type="textarea"
                name="allergies : "
                placeholder=" peanuts , fish etc..."
                onChange={handleChange}
              />
            </label>
            {Object.keys(answers).length < 3 ? (
              <button disabled type="submit" value="submit" onClick={submit}>
                Send !
              </button>
            ) : (
              <button type="submit" value="submit" onClick={submit}>
                Send !
              </button>
            )}
          </form>
        </div>
      </div>
    </StyledApp>
  );
};
export default Form;

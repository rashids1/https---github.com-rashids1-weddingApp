import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../fonts/Fontspring-DEMO-theseasons-reg.ttf";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  console.log("drawer", drawer);

  const navigate = useNavigate();
  return drawer ? (
    <StyledDrawer>
      <div className="drawerMenu">
        <AiOutlineClose size={30} onClick={() => setDrawer(!drawer)} />
        <div className="drawerOptions">
          <h3 onClick={() => navigate("/form")}>Make a reservation</h3>
        </div>
        <div style={{ visibility: "hidden" }}>s</div>
      </div>
    </StyledDrawer>
  ) : (
    <StyledHeader>
      <AiOutlineMenu size={30} onClick={() => setDrawer(!drawer)} />
      <h3 onClick={() => navigate("/")}>E M</h3>
      <div className="hideme"></div>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8vh;

  .hideme {
    visibility: hidden;
  }

  h3 {
    font-family: "theSeasons";
  }
`;

const StyledDrawer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 251, 239);

  .drawerMenu {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .drawerOptions {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

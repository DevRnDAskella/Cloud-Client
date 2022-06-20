import styled from "styled-components";

export default styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  background-color: white;
  width: 100%;
  
  .navbar {
    &__header {
      margin-left: 10px;
      font-size: 24px;
      font-weight: 700;
    }

    &__login {
      margin-left: auto;
      margin-right: 20px;
    }
  }
`;

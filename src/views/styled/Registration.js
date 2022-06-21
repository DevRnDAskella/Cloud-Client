import styled from "styled-components";
import * as colors from "./constants/colors";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  align-self: center;
  margin-top: 100px;

  &__header {
    font-size: 30px;
    font-weight: 700;
  }

  input {
    margin: 10px 20px;
  }

  &__btn {
    border: none;
    background-color: ${colors.bg.gray};
    border-radius: 8px;
    color: white;
    font-weight: 700;
    padding: 5px 10px;
    align-self: flex-end;
    margin-top: 10px;
  }
`;

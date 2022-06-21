import styled from "styled-components";
import * as colors from "./constants/colors";

export default styled.input`
  border: none;
  border-bottom: ${colors.fonts.blue} solid 3px;
  background: transparent;
  width: 100%;
  padding: 3px;
  
  &:focus {
    outline: none;
    transform: scale(1.01);
  }

  ::-webkit-input-placeholder {
    /* Chrome */
    color: ${colors.fonts.blue};
    font-weight: 700;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${colors.fonts.blue};
    font-weight: 700;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${colors.fonts.blue};
    font-weight: 700;
  }
  :-moz-placeholder {
    /* Firefox 4 - 18 */
    color: ${colors.fonts.blue};
    font-weight: 700;
  }
`;

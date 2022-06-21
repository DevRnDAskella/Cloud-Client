import styled from "styled-components";

export const parent = styled.div`
  width: 1140px;
  display: flex;
`;

export const main = styled(parent)`
  align-items: center;
`;

export const app = styled(parent)`
  flex-direction: column;
`;

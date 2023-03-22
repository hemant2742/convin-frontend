import { Button } from "antd";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  float: right;
  align-items: center;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  background-color: #e5195f;
  border: 0;
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
`;

export const StyledContainer = styled.div`
  padding: 3rem;
  min-height: 80vh;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

export const GridContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  row-gap: 2rem;
`;

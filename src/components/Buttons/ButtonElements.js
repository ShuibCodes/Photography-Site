import styled from "styled-components"

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#0467FB" : "")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 50px" : "10px 5px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Ubuntu",;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "purple" : "#4B59F7")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

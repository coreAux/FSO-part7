import styled from "styled-components"

export const ToastWrapper = styled.div`
  z-index: 3;
  width: 70vw;
  position: fixed;
  top: 50px;
  left: 50%;
  padding: 5px 15px;
  color: ${({ $type }) => $type === "success" ? "white" : "black"};

  opacity: ${({ $show }) => $show ? "1" : "0"};
  transform: ${({ $show }) => $show ? "translate(-50%, 0)" : "translate(-50%, -200%)"};
  transition: transform .3s, opacity .3s ${({ $show }) => $show ? "0s" : ".3s"};
  display: flex;
  justify-content: center;

  border-radius: 9999px;
  border: 1px solid #f1eff9;
  background-color: ${({ $type }) => {
    switch ($type) {
    case "success":
      return "var(--i)"
    case "error":
      return "var(--deeppink)"
    case "notification":
      return "var(--mp)"
    default:
      return "#f1eff9"
    }
  }};
  border-color: ${({ $type }) => {
    switch ($type) {
    case "success":
      return "var(--i)"
    case "error":
      return "var(--deeppink)"
    case "notification":
      return "var(--mp)"
    default:
      return "#f1eff9"
    }
  }};
`

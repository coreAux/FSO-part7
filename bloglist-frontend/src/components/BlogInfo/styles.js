import styled from "styled-components"
import { StyledButton } from "../Button/styles"

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
`

export const H1 = styled.h1`
  margin: 0 10px;
`

export const H2 = styled.h2`
  margin: 0 10px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    margin-top: 10px;
  }
`

export const RelativeButton = styled(StyledButton)`
  position: relative;
`

export const PurpleHeart = styled.span`
  filter: ${({ $likeIcon }) => $likeIcon === "❤️" ? "hue-rotate(270deg) brightness(85%)" : "none"};
`

export const AbsoluteSpan = styled(PurpleHeart)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const OpacityZero = styled.span`
  opacity: 0;
`

export const CommentsWrapper = styled.div`
  margin-top: 40px;
`

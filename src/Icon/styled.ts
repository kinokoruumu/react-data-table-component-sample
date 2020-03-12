import styled from "styled-components";

type ContainerProps = {
  size: number;
};
export const Container = styled.div`
  position: relative;
  width: ${(props: ContainerProps) => `${props.size}px`};
  height: ${(props: ContainerProps) => `${props.size}px`};
  overflow: hidden;
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

import styled from 'styled-components';

interface ImageProps {
  $initialX: number;
  $initialY: number;
}
export const Image = styled.div<ImageProps>`
  background-image: url('./queen-smaller.jpg');
  background-size: 400x 600px;
  height: 100px;
  width: 100px;
  position: relative;
  background-position: ${({ $initialX, $initialY }) => `-${$initialX * 100}px  -${$initialY * 100}px`};
`;

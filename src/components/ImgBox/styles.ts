import styled from 'styled-components';

interface ImageProps {
  $initialX: number;
  $initialY: number;
  $movedX: number; // Add this prop
  $movedY: number;
}
export const Image = styled.div.attrs<ImageProps>(({ $movedX, $movedY }) => ({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px)`,
  },
}))`
  background-image: url('./queen-smaller.jpg');
  background-size: 600px auto;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  position: relative;
  background-position: ${({ $initialX, $initialY }) => `-${$initialX * 100}px  -${$initialY * 100}px`};
`;

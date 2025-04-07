import { Image } from './styles';

interface ImgBoxProps {
  x: number;
  y: number;
}

const ImgBox = ({ x, y }: ImgBoxProps) => {
  return <Image $initialX={x} $initialY={y} />;
};

export default ImgBox;

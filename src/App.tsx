import { GlobalStyle, ImageContainer, Wrapper } from './styles';
import Header from './components/Header';
import Footer from './components/Footer';
import ImgBox from './components/ImgBox';

//prettier-ignore
const matrix = [
[0,0], [1,0],[2,0],[3,0],[4,0], [5,0],
[0,1], [1,1],[2,1],[3,1],[4,1], [5,1],
[0,2], [1,2],[2,2],[3,2],[4,2], [5,2],
[0,3], [1,3],[2,3],[3,3],[4,3], [5,3],


];

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper>
        <ImageContainer>
          {matrix.map(([x, y], index) => (
            <ImgBox key={index} x={x} y={y} />
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default App;

import styled from 'styled-components';
import LogoSVG from './queenlogo';
import { Marginals } from '../../styles';

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`;

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;
`;

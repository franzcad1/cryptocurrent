import styled from "styled-components";
import { Stack, Link45deg } from "styled-icons/bootstrap";
import { Copy } from "styled-icons/boxicons-regular";
import { Swap } from "styled-icons/entypo";

export const CoinPageContainer = styled.div`
  margin: 25px auto;
  max-width: 1200px;
`;

export const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: ${(props) => props.theme.main};
  margin-top: 70px;
`;

export const DescriptionContainer = styled.div`
  max-width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.background};
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${(props) => props.theme.main};
  border-radius 15px;
  padding: 20px;
`;
export const StackIcon = styled(Stack)`
  width: 22px;
  height: 22px;
  color: ${(props) => props.theme.main};
`;

export const SwapIcon = styled(Swap)`
  width: 22px;
  height: 22px;
  color: ${props => props.theme.main};
`;

export const CopyIcon = styled(Copy)`
  width: 15px;
  height: 15px;
  color: ${props => props.theme.main};
  cursor: pointer;
`;

export const LinksContainer = styled.div`
  display: flex;
  max-width: 100%;
  height: 64px;
  gap: 19px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const LinkContainer = styled.div`
  display: flex;
  width: 33%;
  height: 100%;
  border-radius: 15px;
  height: 64px;
  gap: 19px;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.background};
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: ${props => props.theme.main};
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LinkText = styled.p`
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: ${props => props.theme.main};
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 70%;
`;
export const LinkIcon = styled(Link45deg)`
  width: 15px;
  height: 15px;
  color: ${props => props.theme.main};
`;

export const RangeContainer = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 36px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: ${props => props.theme.main};
`;

export const RadioBox = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  border: 1px solid #06d554;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.4rem;
  transition: background 0.15s, border-color 0.15s;
  padding: 2px;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: #06d554;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0);
  }
`;

export const Input = styled.input`
  display: none;
  &:checked + ${RadioBox} {
    &::after {
      transform: scale(1);
    }
  }
`;

export const ConvertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 331px;
  height: 45px;
  border-radius: 8px;
  background: ${props => props.theme.background};
  gap: 5px;
`;

export const ConvertLabel = styled.div`
  width: 83px;
  height: 45px;
  border-radius: 8px 0 0 8px;
  background: #06d554;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${props => props.theme.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  width: 230px;
  height: 35px;
  background: ${props => props.theme.background};
  border: none;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${props => props.theme.main};
`;

export const CoinDescription = styled.p`
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${props => props.theme.main};
`;

import styled from "styled-components";

export const FilterContainer = styled.form`
  background-color: #fafafa;
  padding: 20px;
  height: 100vh;
  width: 250px;
`;

export const Title = styled.h3`
  font-size: 16px;
  padding-bottom: 10px;
  padding-top: 20px;
`;

export const Text = styled.p`
  padding-bottom: 5px;
  padding-top: 10px;
`;

export const Flex = styled.div`
  align-items: center;
  display: flex;
  margin: 0px ${props => props.mx || "0px"};
`;

export const CenterButton = styled.div`  
  justify-content: center;
  text-align: center;
`;
import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;

export const MainView = styled.div`
  width: calc('100%' - '250px');
`;

export const HeaderTable = styled.div`  
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: auto;
  margin-top: 50px;
  width: 90%;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #FF7000;
  color: #242424;
`;

export const Tr = styled.tr`
  &:nth-child(even){
    background-color: #f2f2f2;
  }
  &:hover{
    background-color: #ddd;
  }
`;
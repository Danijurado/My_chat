import styled from "styled-components";

const UlMessage = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 300px;
  margin: 20px auto;
`;

const LiMessage = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #e0e0e0;
  }
`;

export { UlMessage, LiMessage };

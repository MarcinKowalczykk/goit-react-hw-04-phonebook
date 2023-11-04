import styled from "styled-components";
export const Contacts = styled.ul`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
`;

export const ContactsItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border-radius: 5px;
`;

export const Name = styled.span`
  text-align: left;
  font-size: 22px;
  flex-basis: 33.333%;
`;

export const Number = styled.span`
  text-align: right;

  font-weight: 500;
  font-size: 22px;
  flex-basis: 33.333%;
`;

export const Btn = styled.button`
  /* max-width: 100px; */
  padding: 5px 15px;
  flex-basis: 15%;

  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #282828;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: #ebf5fc;
  }
`;
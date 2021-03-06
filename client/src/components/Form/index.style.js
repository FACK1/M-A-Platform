import styled from "styled-components";
import { Form, Field } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Button from '../Button/index';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  flex-direction: columns;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  margin-top:80px;
  margin-left:50px;
  margin-buttom:100px;
`;

export const StyledLabel = styled.label`
  width: 47%;
`;


export const StyledField = styled(Field)`
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%;
  height: 30px;
  border-radius: 50px;
  border-color:#08A3C3;

  ::placeholder {
    padding-right: 27px;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%;
  height: 30px;
  border-radius: 50px;
  border-color:#08A3C3;
  display: block;
`;

export const StyledSuccessMessage = styled.p`
  font-size: 1.1vw;
  font-weight: bold;
  color: #4BB543;
`;

export const StyledFailMessage = styled.p`
  font-size: 1.1vw;
  font-weight: bold;
  color: red;
`;

export const StyledMessage = styled.div`
`;

export const StyledButton = styled(Button)`
width: 30%;
`;

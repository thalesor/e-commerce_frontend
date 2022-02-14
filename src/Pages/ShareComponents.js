import style from "styled-components";
import { Link } from "react-router-dom";

const AppContainer = style.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 30px;
    overflow-x: hidden;
`;

const Container = style.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;

const Form = style.form`
width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: scroll;
`;

const Input = style.input`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 20px;
    height: 60px;
    background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
    color: ${(props) => props.disabled && "#AFAFAF"};
    border: 1px solid #c5c5c5;
    border-radius: 2px;
    font-size: 20px;
    outline: 0;
    cursor: ${(props) => props.disabled && "not-allowed"};
    &::placeholder {
        color: #DBDBDB;
    }
`;

const TextArea = style.textarea`
    width: 100%;
    padding-left: 20px;
    height: 120px;
    background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
    color: ${(props) => props.disabled && "#AFAFAF"};
    border: 1px solid #c5c5c5;
    border-radius: 2px;
    font-size: 20px;
    outline: 0;
    cursor: ${(props) => props.disabled && "not-allowed"};
    &::placeholder {
        color: #DBDBDB;
    }
`;

const Label = style.label`
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #222;
`;

const FormButton = style.button`
    display: inline-block;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    height: 50px;
    line-height: 46px;
    padding: 0 42px;
    border: 2px solid #ebebeb;
    color: ${(props) => (props.disabled ? "#201f1f" : "#ffffff")};
    z-index: 1;
    font-size: 12px;
    background-color: ${(props) => (props.disabled ? "#bbbbbb" : "#201f1f")};
`;

const LinkTag = style(Link)`
    text-decoration: none;
    font-size: 15px;
    text-align: center;
    width: 100%;
    margin-top: 36px;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
    font-weight: bold;
`;

const Legend = style.h1`
    text-align: center;
    font-family: "Poppins", sans-serif;
    color: #201f1f;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 15px;
`;

const VerticalSeparator = style.div`
    width: 100%;
    height: ${(props) => props.amount}px;
`;

export {
	Container,
	AppContainer,
	Legend,
	Label,
	TextArea,
	Form,
	Input,
	FormButton,
	LinkTag,
	VerticalSeparator,
};

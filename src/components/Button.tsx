import React from "react";
import { IButton } from '../typings'

const Button: React.FC<IButton> = ({ text, onClick }) => <button onClick = { onClick }> { text } </button>

export default Button
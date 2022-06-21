import { StyledInput } from "../../styled";

export const Input = ({ type, value, placeholder, setValue }) => {
  return (
    <StyledInput
      onChange={(evt) => setValue(evt.target.value)}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
};

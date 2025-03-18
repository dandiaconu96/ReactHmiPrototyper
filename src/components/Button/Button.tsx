import Wrapper from "./Button.styles";

interface ButtonProps {
  /** The button label */
  label: string;
  /** Specify if the button can be clicked */
  disabled?: boolean;
  /** Custom click handler */
  onClick?: () => void;
}

export const Button = ({ label, disabled, onClick }: ButtonProps) => {
  return (
    <Wrapper disabled={disabled} onClick={onClick}>
      {label}
    </Wrapper>
  );
};

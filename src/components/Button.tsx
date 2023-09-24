type ButtonProps = {
  question: string;
};

const Button = (props: ButtonProps) => {
  return <button>{props.question}</button>;
};

export default Button;

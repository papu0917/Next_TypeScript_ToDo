
type ButtonProps = {
  text: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const { text, onClick } = props;

  return (
    <button onClick={onClick}>{text}</button>
  )
}

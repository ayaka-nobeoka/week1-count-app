type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
};
const Button: React.FC<Props> = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>増える</button>
      <button onClick={onDecrement}>減る</button>
    </div>
  );
};

export default Button;

const Square = ({ value, onClick }) => {
  //   console.log(props.value);
  // onclick();
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};
export default Square;

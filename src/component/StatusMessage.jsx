import React from 'react';
const StatusMessage = ({ Winner, gamingBoard }) => {
  //   console.log(Winner);
  const { squares, isXNext } = gamingBoard;
  const noMoveLeft = squares.every(squareValue => squareValue !== null);
  //   console.log(noMoveLeft);
  const nextPlayer = isXNext ? 'X' : 'O';
  //   console.log(nextPlayer);
  const renderStatusMessage = () => {
    if (Winner) {
      return (
        <>
          Winner is {''}
          <span className={Winner == 'X' ? 'text-green' : 'text-orange'}>
            {Winner}
          </span>
        </>
      );
    }

    if (!Winner && noMoveLeft) {
      return (
        <>
          <span className="text-orange">The match is draw</span>
        </>
      );
    }
    if (!Winner && !noMoveLeft) {
      return (
        <>
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};
export default StatusMessage;
// const currentstatus = Winner ? `Winner is ${Winner}` : nextPlayer;
//   const finalResult = noMoveLeft
//     ? 'No one win The match is Draw'
//     : currentstatus;
//   return (
//     <>
//       <span className="status-message">{finalResult}</span>
//     </>
//   );

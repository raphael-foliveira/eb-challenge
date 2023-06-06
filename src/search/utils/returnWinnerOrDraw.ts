export const returnWinnerOrDraw = (result: string) => {
  if (result.toLowerCase() === 'empate') {
    return 'Draw';
  }
  return result + ' wins';
};

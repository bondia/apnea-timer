const flexDirection = ({ horizontal = false, reversed = false }) => {
  if (horizontal && reversed) {
    return 'row-reverse';
  }
  if (horizontal) {
    return 'row';
  }
  if (reversed) {
    return 'column-reverse';
  }
  return 'column';
};

export default flexDirection;

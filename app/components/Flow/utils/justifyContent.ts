const justifyContent = ({ spaceAround = false, centered = false }) => {
  if (spaceAround) {
    return 'space-around';
  }
  if (centered) {
    return 'center';
  }
  return 'flex-start';
};

export default justifyContent;

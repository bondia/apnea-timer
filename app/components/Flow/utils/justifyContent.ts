const justifyContent = ({
  spaceAround = false,
  spaceBetween = false,
  centered = false,
}) => {
  if (spaceAround) {
    return 'space-around';
  }
  if (spaceBetween) {
    return 'space-between';
  }
  if (centered) {
    return 'center';
  }
  return 'flex-start';
};

export default justifyContent;

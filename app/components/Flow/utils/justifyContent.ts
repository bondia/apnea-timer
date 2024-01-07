const justifyContent = ({
  spaceAround = false,
  spaceBetween = false,
  centered = false,
  end = false,
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
  if (end) {
    return 'flex-end';
  }
  return 'flex-start';
};

export default justifyContent;

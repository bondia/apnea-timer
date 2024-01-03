const createElevation = (color: string, opacity: number) =>
  `linear-gradient(0deg, rgba(255, 255, 255, ${opacity}) 0%, rgba(255, 255, 255, ${opacity}) 100%), ${color})`;

export default createElevation;

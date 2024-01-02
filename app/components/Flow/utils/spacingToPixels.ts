import { SpacingValues } from '../layout.d';

const spacingToPixels = (spacing?: SpacingValues) => (spacing ? `${spacing * 4}px` : 0);

export default spacingToPixels;

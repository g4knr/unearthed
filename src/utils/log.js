import { isStaging } from './isStaging';

/**
 * Logs a message if on the staging site
 * @param message the message to display
 */

export const log = (message) => {
  if (isStaging) {
    console.log(message);
  }
};

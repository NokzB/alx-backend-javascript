/* Represents ClassRoom Object */
export default class ClassRoom {
  /**
   * Creates a new classroom instance
   * @param {Number} maxStudentsSize
   */
  constructor(maxStudentsSize) {
    // eslint-disable-next-line no-underscore-dangle
    this._maxStudentsSize = maxStudentsSize;
  }
}

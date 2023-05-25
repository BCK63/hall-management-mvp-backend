export default class BadRequest extends Error {
  constructor(message) {
    super(message || 'Bad request');
    this.status = 400;
  }
}

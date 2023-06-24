export default class ForbiddenException extends Error {
  constructor(message) {
    super(message || 'forbidden');
    this.status = 403;
  }
}

export default class UserNotFound extends Error {
  constructor(message) {
    super(message || 'user not found');
    this.status = 404;
  }
}

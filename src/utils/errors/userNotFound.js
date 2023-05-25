export default class UserNotFound extends Error {
  constructor(message) {
    super(message || 'User not found');
    this.status = 404;
  }
}

export default class NotFoundException extends Error {
  constructor(message) {
    super(message || 'Not found');
    this.status = 404;
  }
}

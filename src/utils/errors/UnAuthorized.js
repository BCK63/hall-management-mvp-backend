export default class UnAuthorizedException extends Error {
  constructor(messaage) {
    super(messaage || 'Not Authorized');
    this.status = 401;
  }
}

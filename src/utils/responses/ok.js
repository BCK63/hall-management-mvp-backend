export default function ok(res, message, body) {
  res.status(200).json({ message, body });
}

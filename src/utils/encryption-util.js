import { createCipheriv, createDecipheriv, scryptSync } from 'crypto';

const algorithm = 'aes-192-cbc';
const iv = Buffer.alloc(16, 0); // Initialization crypto vector

export function encrypt(data) {
  const key = scryptSync(process.env.ENCRYPTION_SECRET, 'salt', 10);
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decrypt(data) {
  const key = scryptSync(process.env.ENCRYPTION_SECRET, 'salt', 10);
  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(data, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
}

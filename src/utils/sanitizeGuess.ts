export default function sanitizeGuess(guess: string): string {
  // Remote all non-alphanumeric characters, and convert to uppercase
  return guess.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
}

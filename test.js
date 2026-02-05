const { add } = require('./index');

console.log('Running tests...');
const result = add(2, 3);
if (result === 5) {
  console.log('✓ add(2, 3) = 5');
  process.exit(0);
}
throw new Error(`Expected 5, got ${result}`);

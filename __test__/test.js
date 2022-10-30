import healthColor from '../index';

test('should validate health line color based on recieved player damage', () => {
  const input = [
    { name: 'Маг', health: 90 },
    { name: 'Лучник', health: 40 },
    { name: 'Крестьянин', health: 10 },
  ];
  const output = ['healthy', 'wounded', 'critical'];
  for (let i = 0; i < 3; i += 1) {
    expect(healthColor(input[i])).toBe(output[i]);
  }
});
import Character from '../character';

test('should create new unit', () => {
  const received = new Character('Oleg', 'Bowman');
  const expected = {
    name: 'Oleg',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: null,
    defence: null,
  };
  expect(received).toEqual(expected);
});

test('should throw error cause the name too short', () => {
  const received = () => new Character('O', 'Bowman');
  const expected = 'Имя должно содержать от 2 до 10 символов';
  expect(received).toThrowError(expected);
});

test('should throw error cause the name too long', () => {
  const received = () => new Character('OlegOlegovich', 'Bowman');
  const expected = 'Имя должно содержать от 2 до 10 символов';
  expect(received).toThrowError(expected);
});

test('should throw error cause the type is wrong', () => {
  const received = () => new Character('Oleg', 'Gunman');
  const expected = 'Такого типа нет в списке';
  expect(received).toThrowError(expected);
});

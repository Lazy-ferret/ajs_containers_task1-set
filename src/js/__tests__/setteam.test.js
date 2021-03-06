import Team from '../setteam';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';

test('should add new unit', () => {
  const team = new Team();
  const bowman = new Bowman('Oleg', 'Bowman');
  team.add(bowman);
  const expected = [{
    name: 'Oleg',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }];
  expect(team.toArray()).toEqual(expected);
});

test('should throw error cause unit already exists', () => {
  const team = new Team();
  team.add({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  });
  expect(() => {
    team.add({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    });
  }).toThrowError('Tакой объект уже существует в команде');
});

// test('test-name', () => {
//   const team = new Team();
//   team.add({
//     name: 'Лучник',
//     type: 'Bowman',
//     health: 50,
//     level: 3,
//     attack: 40,
//     defence: 10,
//   });

//   expect(team.add({
//     name: 'Лучник',
//     type: 'Bowman',
//     health: 50,
//     level: 3,
//     attack: 40,
//     defence: 10,
//   })).toThrow();
// });

test('should add all units', () => {
  const team = new Team();
  const bowman = new Bowman('Oleg', 'Bowman');
  const daemon = new Daemon('Igor', 'Daemon');
  const magician = new Magician('Gendalf', 'Magician');
  const units = [bowman, daemon, magician];
  team.addAll(units);
  const expected = [
    {
      name: 'Oleg',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'Igor',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Gendalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },

  ];

  expect(team.toArray()).toEqual(expected);
});

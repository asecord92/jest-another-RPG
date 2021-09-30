const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

test('creates a player object', () => {
    const player = new Player('Dave');
    
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

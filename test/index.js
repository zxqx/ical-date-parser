import iCalDateParser from '../src/index';

describe('ical-date-parser', () => {
  it('Null throws error', () => {
    expect(() => iCalDateParser(null)).toThrow();
  });

  it('Undefined throws error', () => {
    expect(() => iCalDateParser(undefined)).toThrow();
  });

  it('Empty string throws error', () => {
    expect(() => iCalDateParser('')).toThrow();
  });

  it('Invalid input format throws error', () => {
    expect(() => iCalDateParser('20140422X233000Z')).toThrow();
    expect(() => iCalDateParser('20140422T233000Y')).toThrow();
    expect(() => iCalDateParser('20a40422T233000Z')).toThrow();
    expect(() => iCalDateParser('1994-11-05T08:15:30-05:00')).toThrow();
    expect(() => iCalDateParser('asdfgjfhgjkdfhsg')).toThrow();
    expect(() => iCalDateParser(919191919191919197)).toThrow();
    expect(() => iCalDateParser('butt')).toThrow();
  });

  it('Date gets parsed correctly', () => {
    var d = iCalDateParser('20140422T233000Z');
    expect(d.getUTCDate()).toEqual(22);

    d = iCalDateParser('20141203T012000Z');
    expect(d.getUTCDate()).toEqual(3);
  });

  it('Hour gets parsed correctly', () => {
    var d = iCalDateParser('20140422T233000Z');
    expect(d.getUTCHours()).toEqual(23);

    d = iCalDateParser('20141203T012000Z');
    expect(d.getUTCHours()).toEqual(1);
  });

  it('Minutes get parsed correctly', () => {
    var d = iCalDateParser('20140422T233000Z');
    expect(d.getUTCMinutes()).toEqual(30);

    d = iCalDateParser('20141203T012000Z');
    expect(d.getUTCMinutes()).toEqual(20);
  });

  it('Month gets parsed correctly', () => {
    var d = iCalDateParser('20140422T233000Z');
    expect(d.getUTCMonth()).toEqual(3);

    d = iCalDateParser('20141223T012000Z');
    expect(d.getUTCMonth()).toEqual(11);
  });
});

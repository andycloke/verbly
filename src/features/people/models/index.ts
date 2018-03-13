export type PeopleInPlay = {
  yo: boolean;
  tu: boolean;
  el: boolean;
  nosotros: boolean;
  vosotros: boolean;
  ellos: boolean;
};

export const initialState: PeopleInPlay = {
  yo: true,
  tu: true,
  el: true,
  nosotros: true,
  vosotros: false,
  ellos: true
};

export const people = Object.freeze({
  yo: 'yo',
  tu: 'tu',
  el: 'el',
  nosotros: 'nosotros',
  vosotros: 'vosotros',
  ellos: 'ellos'
});

export enum People {
  Yo = 'Yo',
  Tu = 'Tu',
  El = 'El',
  Nosotros = 'Nosotros',
  Vosotros = 'Vosotros',
  Ellos = 'Ellos'
}

export const peopleMap = {
  [People.Yo]: ['Yo'],
  [People.Tu]: ['Tú'],
  [People.El]: ['Él', 'Ella', 'Usted'],
  [People.Nosotros]: ['Nosotros', 'Nosotras'],
  [People.Vosotros]: ['Vosotros', 'Vosotras'],
  [People.Ellos]: ['Ellos', 'Ellas']
};

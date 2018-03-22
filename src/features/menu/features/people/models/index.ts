import { People } from '../../../../../const/models/people';

export type PeopleInPlay = {
  [People.Yo]: boolean;
  [People.Tu]: boolean;
  [People.El]: boolean;
  [People.Nosotros]: boolean;
  [People.Vosotros]: boolean;
  [People.Ellos]: boolean;
};

export const initialState: PeopleInPlay = {
  [People.Yo]: true,
  [People.Tu]: true,
  [People.El]: true,
  [People.Nosotros]: true,
  [People.Vosotros]: false,
  [People.Ellos]: true
};

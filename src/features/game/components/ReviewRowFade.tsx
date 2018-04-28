import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import './ReviewRowFade.css';

type Props = {
  show: boolean;
  children: React.ReactNode;
};

const ReviewRowFade = ({ show, children }: Props) => (
  <CSSTransition
    in={show}
    classNames="ReviewRowFade"
    mountOnEnter
    timeout={300}
  >
    {children}
  </CSSTransition>
);

export default ReviewRowFade;

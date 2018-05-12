import makeGameContainer from '../../../core/features/game/containers/Game';
import Game from '../components/Game';
import ConjugationsFetchWrapper from '../../conjugations/containers/ConjugationsFetchWrapper';

export default ConjugationsFetchWrapper(makeGameContainer(Game));

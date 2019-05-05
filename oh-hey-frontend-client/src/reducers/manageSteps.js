import { ADD_STEP, RESET_STEPS } from '../actions/stepActions';

export default function manageSteps(state = initialState, action) {
  switch (action.type) {
    case ADD_STEP:
      return {
        steps: state.steps + 1
      };
    case RESET_STEPS:
      return {
        steps: 0
      };
    default:
      return state;
  }
}

const initialState = {
  steps: 0
};

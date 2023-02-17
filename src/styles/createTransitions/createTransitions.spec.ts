import createTransitions from './createTransitions';

const transitions = createTransitions();

describe('Create transitions', () => {
  it('should create', () => {
    expect(transitions).toBeTruthy();
  });
});

import defaultTheme from '../defaultTheme/index';
import { Transitions, TransitionsOptions } from '../../types/index';

const defaultTransitionsOptions: TransitionsOptions = {
  duration: {},
  easing: {}
};

export default function createTransitions(userTransitions: TransitionsOptions = {}): Transitions {
  const { transitions } = defaultTheme;
  const transitionsOptions = { ...defaultTransitionsOptions, ...userTransitions };

  transitions.duration = { ...transitions.duration, ...transitionsOptions.duration };
  transitions.easing = { ...transitions.easing, ...transitionsOptions.easing };

  return transitions;
}

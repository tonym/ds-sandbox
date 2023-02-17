import formatMs from '../formatMs/index';
import useTheme from '../../styles/useTheme/index';

const create = (
  props: string | string[] = ['all'],
  options: Partial<{ duration: number | string; easing: string; delay: number | string }> = {}
) => {
  const theme = useTheme();
  const {
    duration: durationOption = theme.transitions.duration.standard,
    easing: easingOption = theme.transitions.easing.easeInOut,
    delay: delayOption = 0
  } = options;

  const duration = typeof durationOption === 'string' ? durationOption : formatMs(durationOption);
  const delay = typeof delayOption === 'string' ? delayOption : formatMs(delayOption);
  const transitions = (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${duration} ${easingOption} ${delay}`);

  return transitions.join(', ');
};

const getAutoHeightDuration = (height: number) => {
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
};

const transitions = { create, getAutoHeightDuration };

export default transitions;

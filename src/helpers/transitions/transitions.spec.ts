import transitions from './transitions';
import useTheme from '../../styles/useTheme/index';

const theme = useTheme();

describe('Transitions', () => {
  describe('create', () => {
    it('should create a default transition', () => {
      const expectedTransition = 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
      const createdTransition = transitions.create();
      expect(createdTransition).toBe(expectedTransition);
    });

    it('should create a default transition for a given CSS property', () => {
      const expectedTransition = 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
      const createdTransition = transitions.create('opacity');
      expect(createdTransition).toBe(expectedTransition);
    });

    it('should create a default transition for each CSS property in an array', () => {
      const expectedTransition = 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
      const createdTransition = transitions.create(['opacity', 'background-color']);
      expect(createdTransition).toBe(expectedTransition);
    });

    it('should create a transition with a theme duration', () => {
      const expectedTransition = 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
      const createdTransition = transitions.create('opacity', { duration: theme.transitions.duration.short });
      expect(createdTransition).toBe(expectedTransition);
    });

    it('should create a transition with a custom duration', () => {
      const expectedTransition = 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
      const createdTransition = transitions.create('opacity', { duration: 400 });
      expect(createdTransition).toBe(expectedTransition);
    });

    it('should create a transition with a pre-formatted custom duration', () => {
      const expectedTransition = 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
      const createdTransition = transitions.create('opacity', { duration: '400ms' });
      expect(createdTransition).toBe(expectedTransition);
    });

    it('should create a transition with a theme easing', () => {
      const expectedTransition = 'opacity 300ms cubic-bezier(0.4, 0, 1, 1) 0ms';
      const createdTransition = transitions.create('opacity', { easing: theme.transitions.easing.easeIn });
      expect(createdTransition).toBe(expectedTransition);
    });

    it('should create a transition with a custom easing', () => {
      const expectedTransition = 'opacity 300ms cubic-bezier(0.5, 0, 1, 1) 0ms';
      const createdTransition = transitions.create('opacity', { easing: 'cubic-bezier(0.5, 0, 1, 1)' });
      expect(createdTransition).toBe(expectedTransition);
    });

    it('should create a transition with a custom delay', () => {
      const expectedTransition = 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 4ms';
      const createdTransition = transitions.create('opacity', { delay: 4 });
      expect(createdTransition).toBe(expectedTransition);
    });

    it('should create a transition with a pre-formatted custom delay', () => {
      const expectedTransition = 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 4ms';
      const createdTransition = transitions.create('opacity', { delay: '4ms' });
      expect(createdTransition).toBe(expectedTransition);
    });
  });

  describe('getAutoHeightDuration', () => {
    it('should calculate a duration from a given number', () => {
      const expectedNumber = 294;
      const returnedNumber = transitions.getAutoHeightDuration(240);
      expect(returnedNumber).toBe(expectedNumber);
    });
  });
});

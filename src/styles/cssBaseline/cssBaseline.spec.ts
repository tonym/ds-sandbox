import cssBaseline from './cssBaseline';

describe('CSS Baseline', () => {
  it('should provide a CSS baseline', () => {
    const providedCssBaseline = cssBaseline();
    expect(providedCssBaseline.attached).toBe(true);
  });

  it('should accept custom styles', () => {
    const styles = {
      '@global': {
        body: {
          fontFamily: '"Comic Sans"'
        }
      }
    };
    const providedCssBaseline = cssBaseline(styles, { meta: 'unit-test' });
    const result = providedCssBaseline.toString();
    expect(result).toContain('font-family: "Comic Sans"');
  });

  it('should accept custom options', () => {
    const options = { meta: 'options-test' };
    const providedCssBaseline = cssBaseline({}, options);
    expect(providedCssBaseline.options.meta).toBe('options-test');
  });
});

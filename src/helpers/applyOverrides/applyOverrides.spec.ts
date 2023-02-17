import applyOverrides from './applyOverrides';
import provideTheme from '../../styles/provideTheme/index';

describe('applyOverrides', () => {
  it('should update component styles with overrides', () => {
    const themeOptions = {
      overrides: {
        Paper: {
          root: {
            fontFamily: '"Comic Sans", sans-serif'
          }
        }
      }
    };
    provideTheme(themeOptions);
    const appliedOverride = applyOverrides(
      {
        root: {
          fontFamily: '"Open Sans"'
        }
      },
      'Paper'
    );
    expect(appliedOverride.root).toEqual(themeOptions.overrides.Paper.root);
  });
});

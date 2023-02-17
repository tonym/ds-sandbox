import { Styles, StyleSheet, StyleSheetFactoryOptions } from 'jss';
import provideStylesheet from './provideStylesheet';
import createStyles from '../createStyles/index';

const styles: Styles = createStyles({
  root: {
    display: 'block'
  }
});

const options: StyleSheetFactoryOptions = {
  meta: 'test-sheet'
};

describe('provideStylesheet', () => {
  it('should return a stylesheet', () => {
    const styleSheet: StyleSheet = provideStylesheet(styles);
    expect(styleSheet).toBeTruthy();
  });

  it('should return a stylesheet with custom options', () => {
    const styleSheet: StyleSheet = provideStylesheet(styles, options);
    expect(styleSheet).toBeTruthy();
  });

  it('should attach the stylesheet', () => {
    provideStylesheet(styles, options);
    const styleSheet = document.querySelector(`style[data-meta=${options.meta}]`);
    expect(styleSheet).toBeTruthy();
  });
});

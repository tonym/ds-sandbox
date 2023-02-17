import { Styles, StyleSheetFactoryOptions } from 'jss';
import provideClasses from './provideClasses';
import createStyles from '../createStyles/index';
import { Classes } from '../../types/index';

const styles: Styles = createStyles({
  root: {
    display: 'block'
  }
});

const options: StyleSheetFactoryOptions = {
  meta: 'test-sheet'
};

describe('provideStylesheet', () => {
  it('should return style classes', () => {
    const classes: Classes = provideClasses(styles);
    expect(classes.root).toBeTruthy();
  });

  it('should accept custom options and return style classes', () => {
    const classes: Classes = provideClasses(styles, options);
    expect(classes.root).toBeTruthy();
  });
});

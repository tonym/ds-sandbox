import { Classes } from 'jss';
import createStyles from '../createStyles/index';
import WithStyles from './withStyles';
import { Theme } from '../../types/index';

const styles = createStyles({
  root: {
    display: 'block'
  }
});

@WithStyles(styles)
class StylesClass {
  public classes: Classes = {};
}
const stylesClass = new StylesClass();

const stylesCreator = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white
    }
  });

@WithStyles(stylesCreator)
class StylesCreatorClass {
  public classes: Classes = {};
}
const stylesCreatorClass = new StylesCreatorClass();

describe('WithStyles', () => {
  it('should create a root class using a styles object', () => {
    expect(stylesClass.classes.root).toBeTruthy();
  });

  it('should create a root class using a styles creator', () => {
    expect(stylesCreatorClass.classes.root).toBeTruthy();
  });
});

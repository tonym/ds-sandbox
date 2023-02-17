import createStylesheet from './createStylesheet';
import { Blue } from '../../colors/index';

const styles = {
  body: {
    backgroundColor: Blue[500]
  }
};

const stylesheet = createStylesheet(styles);

const styleRule = stylesheet.getRule('body');

describe('createStylesheet', () => {
  it('should create', () => {
    expect(stylesheet).toBeTruthy();
  });

  it('should create valid CSS from JSS', () => {
    expect(styleRule.toString()).toMatch('background-color: #2196f3;');
  });
});

import { Styles } from '../../types/index';
import createStyles from './createStyles';
import { Blue } from '../../colors/index';

describe('createStyles', () => {
  it('should return what it was provided', () => {
    const styles: Styles = createStyles({ body: { color: Blue[500] } });
    expect(styles).toEqual({ body: { color: Blue[500] } });
  });
});

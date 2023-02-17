import { StyleSheet, StyleSheetFactoryOptions } from 'jss';
import { addSheet, setTheme, updateCss } from './actions';
import { initialState } from './reducer';
import { ADD_SHEET, SET_THEME, UPDATE_CSS } from '../types/index';
import createStylesheet from '../styles/createStylesheet/index';

const { theme } = initialState;
const options: StyleSheetFactoryOptions = {
  meta: 'OG Styles'
};
const stylesheet: StyleSheet = createStylesheet({}, options);

describe('Actions', () => {
  it(SET_THEME, () => {
    const action = setTheme(theme);
    expect(action).toEqual({ type: SET_THEME, theme: theme });
  });

  it(ADD_SHEET, () => {
    const key = options.meta || '';
    const sheet = { [key]: stylesheet };
    const action = addSheet(sheet);
    expect(action).toEqual({ type: ADD_SHEET, sheet: sheet });
  });

  it(UPDATE_CSS, () => {
    const testCss = { testKey: 'testStyle' };
    const action = updateCss(testCss);
    expect(action).toEqual({ type: UPDATE_CSS, css: testCss });
  });
});

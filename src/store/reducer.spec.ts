import { StyleSheet, StyleSheetFactoryOptions } from 'jss';
import { reducer, initialState } from './reducer';
import { ActionTypes, ADD_SHEET, SET_THEME, UPDATE_CSS } from '../types/index';
import createStylesheet from '../styles/createStylesheet/index';

describe('Reducer', () => {
  it(SET_THEME, () => {
    const { theme } = initialState;
    theme.direction = 'rtl';
    theme.palette = { ...theme.palette, mode: 'dark' };
    const action: ActionTypes = {
      type: SET_THEME,
      theme: theme
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ ...initialState, theme: theme });
  });

  it(ADD_SHEET, () => {
    const options: StyleSheetFactoryOptions = {
      meta: 'OG Styles'
    };
    const stylesheet: StyleSheet = createStylesheet({}, options);
    const key = options.meta || '';
    const sheet = { [key]: stylesheet };
    const action: ActionTypes = {
      type: ADD_SHEET,
      sheet: sheet
    };
    const newState = reducer(initialState, action);
    const sheetInStore = newState.sheets[key];
    expect(sheetInStore).toEqual(stylesheet);
  });

  it(UPDATE_CSS, () => {
    const testCss = { testKey: 'testStyle' };
    const action: ActionTypes = {
      type: UPDATE_CSS,
      css: testCss
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ ...initialState, css: testCss });
  });
});

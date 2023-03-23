import {
  ActionTypes,
  ADD_SHEET,
  ADD_SVG,
  RenderedCSS,
  SET_THEME,
  SET_TOKENS,
  Sheet,
  StyleSheet,
  Svg,
  Theme,
  UPDATE_CSS
} from '../types/index';

export function addSvg(svg: Svg): ActionTypes {
  return { type: ADD_SVG, svg };
}

export function addSheet(sheet: Sheet<string, StyleSheet>): ActionTypes {
  return { type: ADD_SHEET, sheet };
}

export function setTheme(theme: Theme): ActionTypes {
  return { type: SET_THEME, theme };
}

export function setTokens(tokens: string): ActionTypes {
  return { type: SET_TOKENS, tokens };
}

export function updateCss(css: RenderedCSS): ActionTypes {
  return { type: UPDATE_CSS, css };
}

import { JssOptions } from 'jss';
import preset from 'jss-preset-default';
import { initialState } from '../../store/reducer';
import { Theme } from '../../types/types';

const defaultJssPlugins = preset();

export const defaultJssOptions: JssOptions = {
  ...defaultJssPlugins
};

export const defaultTheme: Theme = initialState.theme;

export default defaultTheme;

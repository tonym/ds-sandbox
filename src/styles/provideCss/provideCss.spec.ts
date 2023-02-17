import provideCss from './provideCss';
import { isNumber } from '../../helpers/index';
import { store } from '../../store/index';
import { Components, ComponentNames } from '../../types/index';
import useTheme from '../useTheme/index';

const useThemeModule = { useTheme };

const coreComponents: ComponentNames[] = Object.keys(Components).filter(key => !isNumber(key)) as ComponentNames[];

describe('provideCss', () => {
  it('should create a new theme if a theme is not in the store and return a string', () => {
    const theme = useThemeModule.useTheme();
    theme.initial = true;
    const spy = jest.spyOn(useThemeModule, 'useTheme');
    spy.mockReturnValue(theme);
    const css = provideCss();
    expect(css).toBeTruthy();
  });

  it('should use a theme from the store and return a string', () => {
    const theme = useThemeModule.useTheme();
    theme.initial = false;
    const spy = jest.spyOn(useThemeModule, 'useTheme');
    spy.mockReturnValue(theme);
    const css = provideCss();
    expect(css).toBeTruthy();
  });

  it('should use the complete list of components by default', () => {
    const css = provideCss();
    const valid = coreComponents.every(component => css.includes(component));
    expect(valid).toBeTruthy();
  });

  it('should accept an array of component names', () => {
    const components: ComponentNames[] = ['Button', 'Card'];
    const filteredComponents = coreComponents.filter(component => !components.includes(component));
    const css = provideCss(components);
    let valid = components.every(component => css.includes(component));
    valid = valid ? filteredComponents.every(component => !css.includes(component)) : valid;
    expect(valid).toBeTruthy();
  });

  it('should accept a single component name', () => {
    const css = provideCss('Button');
    const filteredComponents = coreComponents.filter(component => component !== 'Button');
    let valid = css.includes('Button');
    valid = valid ? filteredComponents.every(component => !css.includes(component)) : valid;
    expect(valid).toBeTruthy();
  });

  it('should ignore bad component names', () => {
    const components: string[] = ['Button', 'Card', 'illegalName'];
    const filteredComponents = coreComponents.filter(component => !components.includes(component));
    const css = provideCss(components as ComponentNames[]);
    let valid = components.every(component => css.includes(component) || !css.includes('illegalName'));
    valid = valid ? filteredComponents.every(component => !css.includes(component)) : valid;
    expect(valid).toBeTruthy();
  });

  it('should create a state key with only initial letters if more than 9 components', () => {
    const css = provideCss();
    const keys = coreComponents.join('');
    const key: string = keys.match(/[A-Z]/g)?.join('') as string;
    expect(store.getState().css[key]).toBeTruthy();
  });

  it('should create a state key with full names if less than 6 components', () => {
    const components: ComponentNames[] = ['Accordion', 'AppBar', 'Badge', 'Brand', 'Button'];
    const css = provideCss(components);
    const key = components.join('');
    expect(store.getState().css[key]).toBeTruthy();
  });
});

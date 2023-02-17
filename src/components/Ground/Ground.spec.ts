import { Ground } from './Ground';

describe('Ground', () => {
  it('should create', () => {
    expect(Ground).toBeTruthy();
  });

  it('should set classes property', () => {
    const ground = new Ground();
    const classes = { classKey: 'class-value' };
    ground.classes = classes;
    expect(ground.classes).toEqual(classes);
  });

  it('should set className property from string', () => {
    const ground = new Ground();
    const className = 'custom-class-name';
    ground.className = className;
    expect(ground.className).toEqual(className);
  });

  it('should set className property from an array', () => {
    const ground = new Ground();
    const className = ['custom-class-name', 'another-custom-class-name'];
    ground.className = className;
    const expectedClassName = 'custom-class-name another-custom-class-name';
    expect(ground.className).toEqual(expectedClassName);
  });
});

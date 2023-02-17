import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Badge } from './Badge';
import testHelper from '../../testing/testHelper/index';

describe('Badge', () => {
  let component: Badge;
  let fixture: ComponentFixture<Badge>;
  const selector = `span`;
  const badgeSelector = 'span span';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Badge]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Badge);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a badge element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selector)).toBeTruthy();
  });

  it('should have a root class', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.root);
  });

  it('should accept a custom className', () => {
    const customClass = 'custom-class';
    component.className = customClass;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(customClass);
  });

  it('should detect changes', () => {
    spyOn(component, 'prepareComponent');
    component.ngOnChanges();
    expect(component.prepareComponent).toHaveBeenCalled();
  });

  it('should have a label of "0" if label is not a number and showZero is true', () => {
    component.label = 'three';
    component.showZero = true;
    fixture.detectChanges();
    expect(component.composedLabel).toBe('0');
  });

  it('should have a label of "0+" if max is not a number', () => {
    component.label = 25;
    component.max = 'nine';
    fixture.detectChanges();
    expect(component.composedLabel).toBe('0+');
  });

  it('should show a plus sign if label is greater than max and max is not provided', () => {
    component.label = 125;
    fixture.detectChanges();
    expect(component.composedLabel).toBe(`${component.max}+`);
  });

  it('should show a plus sign if label is greater than max and max is provided', () => {
    component.label = 25;
    component.max = 9;
    fixture.detectChanges();
    expect(component.composedLabel).toBe(`${component.max}+`);
  });

  describe('Visibility', () => {
    it.each`
      test                                              | label        | showZero
      ${'label is a number greater than zero'}          | ${2}         | ${undefined}
      ${'label is a string greater than zero'}          | ${'2'}       | ${undefined}
      ${'label is zero and showZero is true'}           | ${undefined} | ${true}
      ${'label is zero and showZero is "true"'}         | ${undefined} | ${'true'}
      ${'label is not a number and showZero is true'}   | ${'three'}   | ${true}
      ${'label is not a number and showZero is "true"'} | ${'three'}   | ${'true'}
    `('should have a badge if $test', ({ label, showZero }) => {
      component.label = label ? label : component.label;
      component.showZero = showZero ? showZero : component.showZero;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(`.${component.classes.badge}`);
      expect(selectedElement).toBeTruthy();
    });

    it.each`
      test                                            | label        | showZero
      ${'label is zero'}                              | ${0}         | ${undefined}
      ${'label is not provided'}                      | ${undefined} | ${undefined}
      ${'label is not a number'}                      | ${'three'}   | ${undefined}
      ${'label is zero and showZero is not provided'} | ${0}         | ${undefined}
      ${'label is zero and showZero is false'}        | ${0}         | ${false}
      ${'label is zero and showZero is "false"'}      | ${0}         | ${'false'}
    `('should not have a badge if $test', ({ label, showZero }) => {
      component.label = label ? label : component.label;
      component.showZero = showZero ? showZero : component.showZero;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(`.${component.classes.badge}`);
      expect(selectedElement).toBeFalsy();
    });
  });

  describe('Variant', () => {
    it.each`
      test                                     | expectDotClass | variant
      ${'standard if variant is not provided'} | ${false}       | ${undefined}
      ${'standard if variant is "standard"'}   | ${false}       | ${'standard'}
      ${'dot if variant is "dot"'}             | ${true}        | ${'dot'}
    `('should be $test', ({ expectDotClass, variant }) => {
      component.label = 2;
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedBadgeClasses.includes(component.classes.dot)).toBe(expectDotClass);
    });
  });
});

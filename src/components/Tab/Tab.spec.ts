import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Tab } from './Tab';
import testHelper from '../../testing/testHelper/index';

describe('Tab', () => {
  let component: Tab;
  let fixture: ComponentFixture<Tab>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a tab element', () => {
    fixture.detectChanges();
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

  describe('Disabled', () => {
    it.each`
      disabled     | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should check for a disabled class and be $expectedResult when disabled is $disabled', ({ disabled, expectedResult }) => {
      component.disabled = disabled || disabled === false ? disabled : component.disabled;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.disabled)).toBe(expectedResult);
    });
  });

  describe('Selected', () => {
    it.each`
      selected     | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should check for a selected class and be $expectedResult when selected is $selected', ({ selected, expectedResult }) => {
      component.selected = selected || selected === false ? selected : component.selected;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.selected)).toBe(expectedResult);
    });
  });

  describe('Wrapped', () => {
    it.each`
      wrapped      | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should check for a wrapped class and be $expectedResult when wrapped is $wrapped', ({ wrapped, expectedResult }) => {
      component.wrapped = wrapped || wrapped === false ? wrapped : component.wrapped;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.wrapped)).toBe(expectedResult);
    });
  });
});

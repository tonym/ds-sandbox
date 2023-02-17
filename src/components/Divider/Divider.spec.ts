import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Divider } from './Divider';
import testHelper from '../../testing/testHelper/index';

describe('Divider', () => {
  let component: Divider;
  let fixture: ComponentFixture<Divider>;
  const selector = `hr`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Divider]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Divider);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a divider element', () => {
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

  describe('Position', () => {
    it.each`
      absolute     | expectedResult
      ${undefined} | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should be $expectedResult when absolute is $absolute', ({ absolute, expectedResult }) => {
      component.absolute = absolute ? absolute : component.absolute;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.absolute)).toBe(expectedResult);
    });
  });

  describe('Color', () => {
    it.each`
      light        | expectedResult
      ${undefined} | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should be $expectedResult when light is $light', ({ light, expectedResult }) => {
      component.light = light ? light : component.light;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.light)).toBe(expectedResult);
    });
  });

  describe('Orientation', () => {
    it.each`
      expectedResult | orientation
      ${false}       | ${undefined}
      ${false}       | ${'horizontal'}
      ${true}        | ${'vertical'}
    `('should be $expectedResult when orientation is $orientation', ({ orientation, expectedResult }) => {
      component.orientation = orientation ? orientation : component.orientation;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.vertical)).toBe(expectedResult);
    });
  });

  describe('Variant', () => {
    it.each`
      test        | expectedResult | variant
      ${'inset'}  | ${false}       | ${undefined}
      ${'middle'} | ${false}       | ${undefined}
      ${'inset'}  | ${false}       | ${'fullWidth'}
      ${'middle'} | ${false}       | ${'fullWidth'}
      ${'inset'}  | ${true}        | ${'inset'}
      ${'middle'} | ${true}        | ${'middle'}
    `('should be $expectedResult for $test class when variant is $variant', ({ expectedResult, test, variant }) => {
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes[test])).toBe(expectedResult);
    });
  });
});

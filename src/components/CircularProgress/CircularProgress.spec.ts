import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CircularProgress } from './CircularProgress';
import testHelper from '../../testing/testHelper/index';

describe('CircularProgress', () => {
  let component: CircularProgress;
  let fixture: ComponentFixture<CircularProgress>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CircularProgress]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularProgress);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a circular progress element', () => {
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

  describe('Variant and circle classes', () => {
    it.each`
      variant
      ${undefined}
      ${'indeterminate'}
      ${'determinate'}
      ${'static'}
    `('should be indeterminate by default, or variant class if provided', ({ variant }) => {
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[component.variant]);
    });

    it.each`
      expectedClass            | variant
      ${'circleIndeterminate'} | ${undefined}
      ${'circleIndeterminate'} | ${'indeterminate'}
      ${'circleDeterminate'}   | ${'determinate'}
    `('should have class $expectedClass when variant is $variant', ({ expectedClass, variant }) => {
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedCircleClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Color', () => {
    it.each`
      color          | expectedClass
      ${undefined}   | ${'colorPrimary'}
      ${'inherit'}   | ${'colorInherit'}
      ${'primary'}   | ${'colorPrimary'}
      ${'secondary'} | ${'colorSecondary'}
    `('should have $expectedClass class when color is $color', ({ color, expectedClass }) => {
      component.color = color ? color : component.color;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Circle radius', () => {
    it.each`
      expectedCircleR                | thickness
      ${((44 - 3.6) / 2).toString()} | ${undefined}
      ${((44 - 6.5) / 2).toString()} | ${6.5}
      ${((44 - 6.5) / 2).toString()} | ${'6.5'}
    `('should have circleR of $expectedCircleR when thickness is $thickness', ({ expectedCircleR, thickness }) => {
      component.thickness = thickness ? thickness : component.thickness;
      fixture.detectChanges();
      expect(component.circleR).toBe(expectedCircleR);
    });
  });

  describe('Size class', () => {
    it.each`
      size
      ${undefined}
      ${50}
    `('should have a size class', ({ size }) => {
      component.size = size ? size : component.size;
      fixture.detectChanges();
      expect(component.sizeClass).toContain(component.size);
    });
  });

  describe('Value', () => {
    it.each`
      expectedResult   | value        | variant
      ${'determinate'} | ${undefined} | ${'determinate'}
      ${'determinate'} | ${'25.6'}    | ${'determinate'}
      ${''}            | ${undefined} | ${'indeterminate'}
      ${''}            | ${'25.6'}    | ${'indeterminate'}
      ${''}            | ${undefined} | ${undefined}
    `('should create a circle sheet if variant is $variant and value is $value', ({ expectedResult, value, variant }) => {
      component.value = value ? value : component.value;
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.circleClass).toMatch(expectedResult);
    });
  });

  describe('Shrink', () => {
    it.each`
      disableShrink | expectedClass
      ${undefined}  | ${'circleShrink'}
      ${false}      | ${'circleShrink'}
      ${'false'}    | ${'circleShrink'}
      ${true}       | ${'circleDisableShrink'}
      ${'true'}     | ${'circleDisableShrink'}
    `('should have $expectedClass class when disableShrink is $disableShrink', ({ disableShrink, expectedClass }) => {
      component.disableShrink = disableShrink ? disableShrink : component.disableShrink;
      fixture.detectChanges();
      expect(component.composedCircleClasses).toContain(component.classes[expectedClass]);
    });
  });
});

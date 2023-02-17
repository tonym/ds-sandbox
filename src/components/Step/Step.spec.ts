import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Step } from './Step';
import testHelper from '../../testing/testHelper/index';

describe('Step', () => {
  let component: Step;
  let fixture: ComponentFixture<Step>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Step]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a root class', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.root);
  });

  it('should have a step element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selector)).toBeTruthy();
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

  describe('Completed', () => {
    it.each`
      completed    | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should check for completed class and be $expectedResult when completed is $completed', ({ completed, expectedResult }) => {
      component.completed = completed || completed === false ? completed : component.completed;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.completed)).toBe(expectedResult);
    });
  });

  describe('FullWidth', () => {
    it.each`
      expectedResult | fullWidth
      ${false}       | ${undefined}
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should check for fullWidth class and be $expectedResult when fullWidth is $fullWidth', ({ expectedResult, fullWidth }) => {
      component.fullWidth = fullWidth || fullWidth === false ? fullWidth : component.fullWidth;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.fullWidth)).toBe(expectedResult);
    });
  });
});

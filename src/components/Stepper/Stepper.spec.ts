import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PaperModule } from '../Paper/index';
import { Stepper } from './Stepper';
import testHelper from '../../testing/testHelper/index';

describe('Stepper', () => {
  let component: Stepper;
  let fixture: ComponentFixture<Stepper>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Stepper],
      imports: [PaperModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stepper);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a stepper element', () => {
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

  describe('AlternativeLabel', () => {
    it.each`
      alternativeLabel | expectedResult
      ${undefined}     | ${false}
      ${false}         | ${false}
      ${'false'}       | ${false}
      ${true}          | ${true}
      ${'true'}        | ${true}
    `(
      'should check for alternativeLabel class and be $expectedResult when alternativeLabel is $alternativeLabel',
      ({ alternativeLabel, expectedResult }) => {
        component.alternativeLabel = alternativeLabel || alternativeLabel === false ? alternativeLabel : component.alternativeLabel;
        fixture.detectChanges();
        expect(component.composedClasses.includes(component.classes.alternativeLabel)).toBe(expectedResult);
      }
    );
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import testHelper from '../../testing/testHelper/index';
import { ButtonBase } from './ButtonBase';

describe('ButtonBase', () => {
  let component: ButtonBase;
  let fixture: ComponentFixture<ButtonBase>;
  const buttonSelector = `button`;
  const anchorSelector = 'a';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonBase]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBase);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button-base element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(buttonSelector)).toBeTruthy();
  });

  it('should have an anchor element if there is a link', () => {
    component.link = 'link/to/something';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(anchorSelector)).toBeTruthy();
  });

  it('should accept a custom className', () => {
    const customClass = 'custom-class';
    component.className = customClass;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(buttonSelector);
    expect(selectedElement.classList).toContain(customClass);
  });

  it('should detect changes', () => {
    spyOn(component, 'prepareComponent');
    component.ngOnChanges();
    expect(component.prepareComponent).toHaveBeenCalled();
  });

  describe('Disabled', () => {
    it.each`
      expectedResult | value
      ${true}        | ${true}
      ${true}        | ${'true'}
      ${false}       | ${false}
      ${false}       | ${'false'}
    `('class should be $expectedResult if disabled is $value', ({ expectedResult, value }) => {
      component.disabled = value;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.disabled)).toBe(expectedResult);
    });
  });

  describe('Resolve parent', () => {
    it.each`
      expectedResult | hasParent
      ${false}       | ${undefined}
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should be $expectedResult if hasParent is $hasParent', ({ expectedResult, hasParent }) => {
      component.hasParent = hasParent ? hasParent : component.hasParent;
      fixture.detectChanges();
      component.resolveParent();
      expect(component.resolvedParent).toBe(expectedResult);
    });
  });
});

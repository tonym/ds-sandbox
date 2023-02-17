import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Container } from './Container';
import testHelper from '../../testing/testHelper/index';

describe('CardActionArea', () => {
  let component: Container;
  let fixture: ComponentFixture<Container>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Container]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Container);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a container element', () => {
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

  describe('Fixed', () => {
    it.each`
      expectedResult | fixed
      ${true}        | ${true}
      ${true}        | ${'true'}
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${false}       | ${undefined}
    `('should be $expectedResult if fixed is $fixed', ({ expectedResult, fixed }) => {
      component.fixed = fixed ? fixed : component.fixed;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.fixed)).toBe(expectedResult);
    });
  });

  describe('Max width', () => {
    it.each`
      expectedClass   | maxWidth
      ${'maxWidthLg'} | ${undefined}
      ${'maxWidthLg'} | ${'lg'}
      ${'maxWidthMd'} | ${'md'}
      ${'maxWidthSm'} | ${'sm'}
      ${'maxWidthXl'} | ${'xl'}
      ${'maxWidthXs'} | ${'xs'}
    `('should have $expectedClass class when maxWidth is $maxWidth', ({ expectedClass, maxWidth }) => {
      component.maxWidth = maxWidth ? maxWidth : component.maxWidth;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });

    it.each`
      maxWidth
      ${false}
      ${'false'}
    `('should not apply max width if maxWidth is $maxWidth', ({ maxWidth }) => {
      component.maxWidth = maxWidth;
      fixture.detectChanges();
      expect(component.composedClasses).not.toContain('max-width');
    });
  });
});

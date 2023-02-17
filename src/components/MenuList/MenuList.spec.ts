import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PaperModule } from '../Paper/index';
import { MenuList } from './MenuList';
import testHelper from '../../testing/testHelper/index';

describe('MenuList', () => {
  let component: MenuList;
  let fixture: ComponentFixture<MenuList>;
  const selector = 'div';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuList],
      imports: [PaperModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuList);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a menu list element', () => {
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

  describe('Full width', () => {
    it.each`
      expectedResult | fullWidth
      ${true}        | ${undefined}
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should be $expectedResult when selected is $fullWidth', ({ expectedResult, fullWidth }) => {
      component.fullWidth = fullWidth || fullWidth === false ? fullWidth : component.fullWidth;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.fullWidth)).toBe(expectedResult);
    });
  });

  describe('Variant', () => {
    it.each`
      expectedClass | variant
      ${'light'}    | ${undefined}
      ${'light'}    | ${'light'}
      ${'dark'}     | ${'dark'}
    `('should have a $expectedClass when variant is $variant', ({ expectedClass, variant }) => {
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });
});

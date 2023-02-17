import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MenuItem } from './MenuItem';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { SvgIconModule } from '../SvgIcon/index';
import { TypographyModule } from '../Typography/index';
import testHelper from '../../testing/testHelper/index';

describe('MenuItem', () => {
  let component: MenuItem;
  let fixture: ComponentFixture<MenuItem>;
  const selector = 'div';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItem],
      imports: [FlexChildModule, FlexModule, HttpClientModule, SvgIconModule, TypographyModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItem);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a menu item element', () => {
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

  describe('Selected', () => {
    it.each`
      expectedResult | selected
      ${false}       | ${undefined}
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should be $expectedResult when selected is $selected', ({ expectedResult, selected }) => {
      component.selected = selected ? selected : component.selected;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.selected)).toBe(expectedResult);
    });

    it.each`
      expectedFontWeight | selected
      ${'regular'}       | ${undefined}
      ${'semiBold'}      | ${true}
    `('should have a fontWeight of $expectedFontWeight when selected is $selected', ({ expectedFontWeight, selected }) => {
      component.selected = selected ? selected : component.selected;
      fixture.detectChanges();
      expect(component.titleFontWeight).toBe(expectedFontWeight);
    });
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MenuListItem } from './MenuListItem';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { SvgIconModule } from '../SvgIcon/index';
import { TypographyModule } from '../Typography/index';
import testHelper from '../../testing/testHelper/index';

describe('MenuItem', () => {
  let component: MenuListItem;
  let fixture: ComponentFixture<MenuListItem>;
  const selector = 'div';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuListItem],
      imports: [FlexChildModule, FlexModule, HttpClientModule, SvgIconModule, TypographyModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListItem);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a menu list item element', () => {
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

  it('should have an icon class', () => {
    fixture.detectChanges();
    expect(component.titleIconClass).toContain('title-icon');
  });

  describe('Hover', () => {
    it.each`
      expectedResult | hover
      ${true}        | ${undefined}
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should be $expectedResult when hover is $hover', ({ expectedResult, hover }) => {
      component.hover = hover || hover === false ? hover : component.hover;
      fixture.detectChanges();
      expect(component.composedClasses.includes('hover')).toBe(expectedResult);
    });
  });

  describe('Hover with icon', () => {
    it.each`
      expectedResult | hover
      ${true}        | ${undefined}
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should be $expectedResult when hover is $hover', ({ expectedResult, hover }) => {
      component.hover = hover || hover === false ? hover : component.hover;
      component.icon = 'info';
      fixture.detectChanges();
      expect(component.iconClass.includes('icon-hover')).toBe(expectedResult);
    });
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

    it.each`
      expectedIconColor | selected
      ${'inherit'}      | ${undefined}
      ${'primary'}      | ${true}
    `('should have an iconColor of $expectedIconColor when selected is $selected', ({ expectedIconColor, selected }) => {
      component.selected = selected ? selected : component.selected;
      fixture.detectChanges();
      expect(component.iconColor).toBe(expectedIconColor);
    });
  });
});

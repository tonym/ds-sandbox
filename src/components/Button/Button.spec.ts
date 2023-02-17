import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import testHelper from '../../testing/testHelper/index';
import { Button } from './Button';
import { ButtonBaseModule } from '../ButtonBase/index';
import { SvgIconModule, SvgIconService } from '../SvgIcon/index';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;
  const buttonSelector = `button`;
  const anchorSelector = 'a';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Button],
      imports: [ButtonBaseModule, HttpClientTestingModule, SvgIconModule],
      providers: [SvgIconService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(buttonSelector)).toBeTruthy();
  });

  it('should have an anchor element if there is a link', () => {
    component.link = '/link/to/something';
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

  describe('Color', () => {
    it.each`
      variant
      ${undefined}
      ${'outlined'}
      ${'contained'}
    `('should have no color class if no color provided and variant is $variant', ({ variant }) => {
      component.variant = variant ? variant : component.variant;
      expect(component.composedClasses).not.toContain('color');
    });

    it.each`
      color          | expectedClass                | variant
      ${'error'}     | ${'containedColorError'}     | ${'contained'}
      ${'info'}      | ${'containedColorInfo'}      | ${'contained'}
      ${'primary'}   | ${'containedColorPrimary'}   | ${'contained'}
      ${'secondary'} | ${'containedColorSecondary'} | ${'contained'}
      ${'success'}   | ${'containedColorSuccess'}   | ${'contained'}
      ${'warning'}   | ${'containedColorWarning'}   | ${'contained'}
      ${'error'}     | ${'outlinedColorError'}      | ${'outlined'}
      ${'info'}      | ${'outlinedColorInfo'}       | ${'outlined'}
      ${'primary'}   | ${'outlinedColorPrimary'}    | ${'outlined'}
      ${'secondary'} | ${'outlinedColorSecondary'}  | ${'outlined'}
      ${'success'}   | ${'outlinedColorSuccess'}    | ${'outlined'}
      ${'warning'}   | ${'outlinedColorWarning'}    | ${'outlined'}
      ${'error'}     | ${'passiveColorError'}       | ${'passive'}
      ${'info'}      | ${'passiveColorInfo'}        | ${'passive'}
      ${'primary'}   | ${'passiveColorPrimary'}     | ${'passive'}
      ${'secondary'} | ${'passiveColorSecondary'}   | ${'passive'}
      ${'success'}   | ${'passiveColorSuccess'}     | ${'passive'}
      ${'warning'}   | ${'passiveColorWarning'}     | ${'passive'}
      ${'error'}     | ${'textColorError'}          | ${'text'}
      ${'info'}      | ${'textColorInfo'}           | ${'text'}
      ${'primary'}   | ${'textColorPrimary'}        | ${'text'}
      ${'secondary'} | ${'textColorSecondary'}      | ${'text'}
      ${'success'}   | ${'textColorSuccess'}        | ${'text'}
      ${'warning'}   | ${'textColorWarning'}        | ${'text'}
      ${'inherit'}   | ${'colorInherit'}            | ${undefined}
    `('should have $expectedClass color class if color is $color and variant is $variant', ({ color, expectedClass, variant }) => {
      component.color = color;
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Boolean inputs', () => {
    it.each`
      prop           | value
      ${'disabled'}  | ${undefined}
      ${'disabled'}  | ${false}
      ${'disabled'}  | ${'false'}
      ${'elevated'}  | ${undefined}
      ${'elevated'}  | ${false}
      ${'elevated'}  | ${'false'}
      ${'fullWidth'} | ${undefined}
      ${'fullWidth'} | ${false}
      ${'fullWidth'} | ${'false'}
    `('should not be $prop if $prop is $value', ({ prop, value }) => {
      component[prop] = value ? value : component[prop];
      fixture.detectChanges();
      expect(component.composedClasses).not.toContain(component.classes[prop]);
    });

    it.each`
      prop           | value
      ${'disabled'}  | ${true}
      ${'disabled'}  | ${'true'}
      ${'elevated'}  | ${true}
      ${'elevated'}  | ${'true'}
      ${'fullWidth'} | ${true}
      ${'fullWidth'} | ${'true'}
    `('should be $prop if $prop is $value', ({ prop, value }) => {
      component[prop] = value;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[prop]);
    });
  });

  describe('sizes', () => {
    it.each`
      expectedClass
      ${'sizeLg'}
      ${'sizeSm'}
    `('should not have a size if no size is provided', ({ expectedClass }) => {
      fixture.detectChanges();
      expect(component.composedClasses).not.toContain(component.classes[expectedClass]);
    });

    it.each`
      expectedClass | size
      ${'sizeLg'}   | ${'lg'}
      ${'sizeSm'}   | ${'sm'}
    `('should not have a size if no size is provided', ({ expectedClass, size }) => {
      component.size = size;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('variant sizes', () => {
    it.each`
      expectedClass        | variant
      ${'outlinedSizeLg'}  | ${undefined}
      ${'outlinedSizeSm'}  | ${undefined}
      ${'outlinedSizeLg'}  | ${'outlined'}
      ${'outlinedSizeSm'}  | ${'outlined'}
      ${'containedSizeLg'} | ${'contained'}
      ${'containedSizeSm'} | ${'contained'}
      ${'passiveSizeLg'}   | ${'passive'}
      ${'passiveSizeSm'}   | ${'passive'}
      ${'textSizeLg'}      | ${'text'}
      ${'textSizeSm'}      | ${'text'}
    `('should not have a variant size if variant is $variant', ({ expectedClass, variant }) => {
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedClasses).not.toContain(component.classes[expectedClass]);
    });

    it.each`
      expectedClass        | size    | variant
      ${'outlinedSizeLg'}  | ${'lg'} | ${undefined}
      ${'outlinedSizeSm'}  | ${'sm'} | ${undefined}
      ${'outlinedSizeLg'}  | ${'lg'} | ${'outlined'}
      ${'outlinedSizeSm'}  | ${'sm'} | ${'outlined'}
      ${'containedSizeLg'} | ${'lg'} | ${'contained'}
      ${'containedSizeSm'} | ${'sm'} | ${'contained'}
      ${'passiveSizeLg'}   | ${'lg'} | ${'passive'}
      ${'passiveSizeSm'}   | ${'sm'} | ${'passive'}
      ${'textSizeLg'}      | ${'lg'} | ${'text'}
      ${'textSizeSm'}      | ${'sm'} | ${'text'}
    `('should not have a variant size if variant is $variant', ({ expectedClass, size, variant }) => {
      component.size = size;
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('variants', () => {
    it.each`
      variant
      ${undefined}
      ${'contained'}
      ${'outlined'}
      ${'passive'}
      ${'text'}
    `('should be outlined if variant is undefined or variant when variant is $variant', ({ variant }) => {
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[component.variant]);
    });
  });
});

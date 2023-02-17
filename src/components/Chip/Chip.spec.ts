import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Chip } from './Chip';
import { SvgIconModule, SvgIconService } from '../SvgIcon/index';
import testHelper from '../../testing/testHelper/index';

describe('Chip', () => {
  let component: Chip;
  let fixture: ComponentFixture<Chip>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Chip],
      imports: [HttpClientTestingModule, SvgIconModule],
      providers: [SvgIconService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chip);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a chip element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selector)).toBeTruthy();
  });

  it('should accept a custom className', () => {
    const customClass = 'custom-class';
    component.className = customClass;
    component.ngOnInit();
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

  describe('Clickable', () => {
    it.each`
      clickable    | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should be $expectedResult if clickable is $clickable', ({ clickable, expectedResult }) => {
      component.clickable = clickable ? clickable : component.clickable;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.clickable)).toBe(expectedResult);
    });
  });

  describe('Solid colors', () => {
    it.each`
      color          | expectedClass
      ${undefined}   | ${'colorSolidLight'}
      ${'light'}     | ${'colorSolidLight'}
      ${'dark'}      | ${'colorSolidDark'}
      ${'error'}     | ${'colorSolidError'}
      ${'info'}      | ${'colorSolidInfo'}
      ${'primary'}   | ${'colorSolidPrimary'}
      ${'secondary'} | ${'colorSolidSecondary'}
      ${'success'}   | ${'colorSolidSuccess'}
      ${'warning'}   | ${'colorSolidWarning'}
    `('should have class $expectedClass when color is $color', ({ color, expectedClass }) => {
      component.color = color ? color : component.color;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Outlined colors', () => {
    it.each`
      color          | expectedClass
      ${undefined}   | ${'colorOutlinedLight'}
      ${'light'}     | ${'colorOutlinedLight'}
      ${'dark'}      | ${'colorOutlinedDark'}
      ${'error'}     | ${'colorOutlinedError'}
      ${'info'}      | ${'colorOutlinedInfo'}
      ${'primary'}   | ${'colorOutlinedPrimary'}
      ${'secondary'} | ${'colorOutlinedSecondary'}
      ${'success'}   | ${'colorOutlinedSuccess'}
      ${'warning'}   | ${'colorOutlinedWarning'}
    `('should have class $expectedClass when color is $color', ({ color, expectedClass }) => {
      component.color = color ? color : component.color;
      component.outlined = true;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Deletable', () => {
    it.each`
      color        | deletable    | expectedClass
      ${undefined} | ${undefined} | ${undefined}
      ${undefined} | ${false}     | ${undefined}
      ${undefined} | ${'false'}   | ${undefined}
      ${undefined} | ${true}      | ${'deleteIconColorLight'}
      ${undefined} | ${'true'}    | ${'deleteIconColorLight'}
      ${'primary'} | ${true}      | ${'deleteIconColor'}
    `('should be $expectedClass if deletable is $deletable and color is $color', ({ color, deletable, expectedClass }) => {
      component.color = color ? color : component.color;
      component.deletable = deletable ? deletable : component.deletable;
      fixture.detectChanges();
      const expectedClasses = expectedClass ? `${component.classes.deleteIcon} ${component.classes[expectedClass]}` : '';
      component.composeDeleteIconClasses;
      expect(component.composedDeleteIconClasses).toContain(expectedClasses);
    });
  });

  describe('Disabled', () => {
    it.each`
      disabled     | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should be $expectedResult when disabled is $disabled', ({ disabled, expectedResult }) => {
      component.disabled = disabled ? disabled : component.disabled;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.disabled)).toBe(expectedResult);
    });
  });

  describe('Outlined', () => {
    it.each`
      colorClass              | outlined
      ${'colorSolidLight'}    | ${undefined}
      ${'colorSolidLight'}    | ${false}
      ${'colorSolidLight'}    | ${'false'}
      ${'colorOutlinedLight'} | ${true}
      ${'colorOutlinedLight'} | ${'true'}
    `('should have class $expectedResult when outlined is $outlined', ({ colorClass, outlined, expectedResult }) => {
      component.outlined = outlined ? outlined : component.outlined;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[colorClass]);
    });
  });

  describe('Size', () => {
    it.each`
      size         | expectedResult
      ${undefined} | ${false}
      ${'md'}      | ${false}
      ${'sm'}      | ${true}
    `('should be $expectedResult when size is $size', ({ size, expectedResult }) => {
      component.size = size ? size : component.size;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.sm)).toBe(expectedResult);
    });
  });

  describe('Square', () => {
    it.each`
      square       | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should be $expectedResult when square is $square', ({ square, expectedResult }) => {
      component.square = square ? square : component.square;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.square)).toBe(expectedResult);
    });
  });

  describe('Uppercase', () => {
    it.each`
      uppercase    | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should be $expectedResult when uppercase is $uppercase', ({ uppercase, expectedResult }) => {
      component.uppercase = uppercase ? uppercase : component.uppercase;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.uppercase)).toBe(expectedResult);
    });
  });
});

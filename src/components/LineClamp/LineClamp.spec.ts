import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { LineClamp, LineClampButtonProps, LineClampDefaultButtonProps, LineClampDefaultTypographyProps } from './LineClamp';
import testHelper from '../../testing/testHelper/index';
import { ButtonModule } from '../Button/index';
import { TypographyModule, TypographyProps } from '../Typography/index';

@Component({
  selector: 'og-link',
  template: '<span>link</span>'
})
class TestLink {
  @Input() color = 'primary';
  @Input() hasParent = false;
}

describe('LineClamp', () => {
  let component: LineClamp;
  let fixture: ComponentFixture<LineClamp>;
  const selector = `span`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LineClamp, TestLink],
      imports: [ButtonModule, TypographyModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineClamp);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a line clamp element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selector)).toBeTruthy();
  });

  it('should have a root class', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.root);
  });

  it('should have a clamp by default', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.clamped);
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

  it('should accept custom typography control props', () => {
    const customTypographyControlProps: TypographyProps = { align: 'right', paragraph: 'true' };
    const expectedTypographyControlProps: TypographyProps = { ...LineClampDefaultTypographyProps, ...customTypographyControlProps };
    component.controlTypographyProps = customTypographyControlProps;
    fixture.detectChanges();
    expect(component.controlTypographyProps).toEqual(expectedTypographyControlProps);
  });

  it('should accept custom button control props', () => {
    const customButtonControlProps: LineClampButtonProps = { endIcon: 'keyboard-arrow-down' };
    const expectedButtonControlProps: LineClampButtonProps = { ...LineClampDefaultButtonProps, ...customButtonControlProps };
    component.controlButtonProps = customButtonControlProps;
    fixture.detectChanges();
    expect(component.controlButtonProps).toEqual(expectedButtonControlProps);
  });

  it('should emit an event on control click', () => {
    fixture.detectChanges();
    spyOn(component.lineClampClick, 'emit');
    component.toggleClamp(new MouseEvent('click'));
    expect(component.lineClampClick.emit).toHaveBeenCalled();
  });

  describe('Overlay', () => {
    it.each`
      expectedResult | overlay
      ${true}        | ${undefined}
      ${true}        | ${true}
      ${true}        | ${'true'}
      ${false}       | ${false}
      ${false}       | ${'false'}
    `('should be $expectedResult when overlay is $overlay', ({ expectedResult, overlay }) => {
      component.overlay = overlay || overlay === false ? overlay : component.overlay;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.overlay)).toBe(expectedResult);
    });
  });

  describe('Whitespace classes', () => {
    it.each`
      expectedClass              | whiteSpace
      ${'whiteSpaceNormal'}      | ${undefined}
      ${'whiteSpaceNormal'}      | ${'normal'}
      ${'whiteSpaceNowrap'}      | ${'nowrap'}
      ${'whiteSpacePre'}         | ${'pre'}
      ${'whiteSpacePreWrap'}     | ${'preWrap'}
      ${'whiteSpacePreLine'}     | ${'preLine'}
      ${'whiteSpaceBreakSpaces'} | ${'breakSpaces'}
    `('should have a $expectedClass when whiteSpace is $whiteSpace', ({ expectedClass, whiteSpace }) => {
      component.whiteSpace = whiteSpace ? whiteSpace : component.whiteSpace;
      fixture.detectChanges();
      expect(component.whiteSpaceClass).toBe(component.classes[expectedClass]);
    });
  });

  describe('Clamp height', () => {
    it.each`
      height
      ${undefined}
      ${556}
      ${'556'}
    `('should calculate a height class when height is $height', ({ height }) => {
      component.height = height ? height : component.height;
      fixture.detectChanges();
      expect(component.heightClass).toMatch(`${component.height}`);
    });
  });

  describe('Add clamp', () => {
    it.each`
      expectedClass | property         | value
      ${'clamped'}  | ${undefined}     | ${undefined}
      ${'clamped'}  | ${'heightClass'} | ${'height-class'}
      ${'overlay'}  | ${undefined}     | ${undefined}
      ${'overlay'}  | ${'overlay'}     | ${true}
      ${'overlay'}  | ${'overlay'}     | ${'true'}
      ${'overlay'}  | ${'overlay'}     | ${false}
      ${'overlay'}  | ${'overlay'}     | ${'false'}
    `(
      'should add $expectedClass when property is $property and value is $value when addClamp is called',
      ({ expectedClass, property, value }) => {
        component[property] = value;
        fixture.detectChanges();
        component.addClamp();
        const expectedResult = value === false || value === 'false' ? false : true;
        expect(component.composedClasses.includes(component.classes[expectedClass])).toBe(expectedResult);
      }
    );

    it('should use default label when clamp is on', () => {
      fixture.detectChanges();
      component.addClamp();
      expect(component.clampControlLabel).toBe(component.controlLabelMore);
    });

    it('should use custom label when clamp is on and custom label provided', () => {
      const customLabel = 'Expand';
      component.controlLabelMore = customLabel;
      fixture.detectChanges();
      component.addClamp();
      expect(component.clampControlLabel).toBe(customLabel);
    });
  });

  describe('Remove clamp', () => {
    it.each`
      expectedClass
      ${'clamped'}
      ${'heightClass'}
      ${'overlay'}
    `('should remove $expectedClass when property is $property and value is $value when removeClamp is called', ({ expectedClass }) => {
      fixture.detectChanges();
      component.removeClamp();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.classList).not.toContain(component[expectedClass]);
    });

    it('should use default label when clamp is off', () => {
      fixture.detectChanges();
      component.removeClamp();
      expect(component.clampControlLabel).toBe(component.controlLabelLess);
    });

    it('should use custom label when clamp is off and custom label provided', () => {
      const customLabel = 'Collapse';
      component.controlLabelLess = customLabel;
      fixture.detectChanges();
      component.removeClamp();
      expect(component.clampControlLabel).toBe(customLabel);
    });
  });

  describe('Reset clamp', () => {
    it('should set useClamp to true when clamp is reset', () => {
      component.useClamp = false;
      fixture.detectChanges();
      component.resetClamp();
      expect(component.useClamp).toBeTruthy();
    });

    it('should set clamp control label to more when clamp is reset', () => {
      component.clampControlLabel = component.controlLabelLess;
      fixture.detectChanges();
      component.resetClamp();
      expect(component.clampControlLabel).toBe(component.controlLabelMore);
    });

    it('should add clamp when clamp is reset', () => {
      const spiedAddClamp = spyOn(component, 'addClamp');
      fixture.detectChanges();
      component.resetClamp();
      expect(spiedAddClamp).toHaveBeenCalled();
    });
  });

  describe('Toggle clamp', () => {
    it('should toggle clamp off when clamp is on', () => {
      const spiedRemoveClamp = spyOn(component, 'removeClamp');
      fixture.detectChanges();
      component.addClamp();
      component.toggleClamp(new MouseEvent('click'));
      expect(spiedRemoveClamp).toHaveBeenCalled();
    });

    it('should toggle clamp on when clamp is off', () => {
      const spiedAddClamp = spyOn(component, 'addClamp');
      fixture.detectChanges();
      component.removeClamp();
      component.toggleClamp(new MouseEvent('click'));
      expect(spiedAddClamp).toHaveBeenCalled();
    });
  });

  describe('Should use clamp', () => {
    it.each`
      expectedResult | forceClamp
      ${true}        | ${undefined}
      ${false}       | ${undefined}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should set useClamp to $expectedResult when forceClamp is $forceClamp', ({ expectedResult, forceClamp }) => {
      const mockReturnValue = forceClamp ? false : expectedResult;
      jest.spyOn(component, 'checkClampHeight').mockReturnValue(mockReturnValue);
      component.forceClamp = forceClamp ? forceClamp : component.forceClamp;
      fixture.detectChanges();
      component.shouldUseClamp();
      expect(component.useClamp).toBe(expectedResult);
    });

    it('should remove clamp when clamp is not used', () => {
      const spiedRemoveClamp = spyOn(component, 'removeClamp');
      jest.spyOn(component, 'checkClampHeight').mockReturnValue(false);
      fixture.detectChanges();
      component.shouldUseClamp();
      expect(spiedRemoveClamp).toHaveBeenCalled();
    });

    it('should do nothing when clamp is used', () => {
      const spiedRemoveClamp = spyOn(component, 'removeClamp');
      jest.spyOn(component, 'checkClampHeight').mockReturnValue(true);
      fixture.detectChanges();
      component.shouldUseClamp();
      expect(spiedRemoveClamp).not.toHaveBeenCalled();
    });

    it('should not be called before debounce on window resize', () => {
      const spiedShouldUseClamp = spyOn(component, 'shouldUseClamp');
      fixture.detectChanges();
      window.dispatchEvent(new Event('resize'));
      expect(spiedShouldUseClamp).toHaveBeenCalledTimes(0);
    });

    it('should be called after debounce on window resize', () => {
      jest.useFakeTimers();
      const spiedShouldUseClamp = spyOn(component, 'shouldUseClamp');
      fixture.detectChanges();
      window.dispatchEvent(new Event('resize'));
      jest.advanceTimersByTime(400);
      expect(spiedShouldUseClamp).toHaveBeenCalled();
    });
  });

  describe('Check clamp height', () => {
    it('should return true if scrollHeight is greater than clientHeight', () => {
      jest.spyOn(component, 'selectScrollHeight').mockReturnValue(500);
      fixture.detectChanges();
      const checkedClampHeight = component.checkClampHeight();
      expect(checkedClampHeight).toBe(true);
    });

    it('should return false if scrollHeight is less than clientHeight', () => {
      jest.spyOn(component, 'selectClientHeight').mockReturnValue(500);
      fixture.detectChanges();
      const checkedClampHeight = component.checkClampHeight();
      expect(checkedClampHeight).toBe(false);
    });
  });
});

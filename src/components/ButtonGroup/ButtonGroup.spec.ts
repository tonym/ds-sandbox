import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Button } from '../Button/index';
import { ButtonBaseModule } from '../ButtonBase/index';
import { ButtonGroup } from './ButtonGroup';
import { SvgIconModule } from '../SvgIcon/index';
import testHelper from '../../testing/testHelper/index';

@Component({
  selector: 'og-test-button-group',
  template: `
    <og-button-group>
      <og-button>Button one</og-button>
      <og-button>Button two</og-button>
      <og-button>Button three</og-button>
    </og-button-group>
  `
})
class TestButtonGroup {}

describe('ButtonGroup', () => {
  let component: ButtonGroup;
  let fixture: ComponentFixture<TestButtonGroup>;
  const selector = 'div';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Button, ButtonGroup, TestButtonGroup],
      imports: [ButtonBaseModule, HttpClientTestingModule, SvgIconModule]
    })
      .overrideComponent(TestButtonGroup, {
        set: { changeDetection: ChangeDetectionStrategy.OnPush }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonGroup);
    component = fixture.debugElement.children[0].componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button group element', () => {
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
      ${false}       | ${undefined}
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should be full width $expectedResult when fullWidth is $fullWidth', ({ expectedResult, fullWidth }) => {
      component.fullWidth = fullWidth ? fullWidth : component.fullWidth;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.fullWidth)).toBe(expectedResult);
    });
  });

  describe('Button classes', () => {
    it('should add a class to the first button', () => {
      fixture.detectChanges();
      const button = component.buttons.toArray()[0];
      expect(button.className).toContain(component.classes.buttonGroupFirst);
    });

    it('should add a class to the last button', () => {
      fixture.detectChanges();
      const button = component.buttons.toArray()[2];
      expect(button.className).toContain(component.classes.buttonGroupLast);
    });

    it('should add a class to the other buttons', () => {
      fixture.detectChanges();
      const button = component.buttons.toArray()[1];
      expect(button.className).toContain(component.classes.buttonGroupMiddle);
    });
  });
});

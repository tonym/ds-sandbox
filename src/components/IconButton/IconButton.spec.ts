import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IconButton } from './IconButton';
import { ButtonBaseModule } from '../ButtonBase/index';
import { SvgIconModule } from '../SvgIcon/index';
import testHelper from '../../testing/testHelper/index';

describe('IconButton', () => {
  let component: IconButton;
  let fixture: ComponentFixture<IconButton>;
  const selector = 'button';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconButton],
      imports: [ButtonBaseModule, HttpClientTestingModule, SvgIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButton);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a icon button element', () => {
    fixture.detectChanges();
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

  describe('Color', () => {
    it.each`
      color          | expectedClass                 | hover
      ${undefined}   | ${'colorBackgroundPrimary'}   | ${undefined}
      ${'primary'}   | ${'colorBackgroundPrimary'}   | ${'background'}
      ${'error'}     | ${'colorBackgroundError'}     | ${'background'}
      ${'info'}      | ${'colorBackgroundInfo'}      | ${'background'}
      ${'inherit'}   | ${'colorBackgroundInherit'}   | ${'background'}
      ${'secondary'} | ${'colorBackgroundSecondary'} | ${'background'}
      ${'success'}   | ${'colorBackgroundSuccess'}   | ${'background'}
      ${'warning'}   | ${'colorBackgroundWarning'}   | ${'background'}
      ${'primary'}   | ${'colorForegroundPrimary'}   | ${'foreground'}
      ${'error'}     | ${'colorForegroundError'}     | ${'foreground'}
      ${'info'}      | ${'colorForegroundInfo'}      | ${'foreground'}
      ${'inherit'}   | ${'colorForegroundInherit'}   | ${'foreground'}
      ${'secondary'} | ${'colorForegroundSecondary'} | ${'foreground'}
      ${'success'}   | ${'colorForegroundSuccess'}   | ${'foreground'}
      ${'warning'}   | ${'colorForegroundWarning'}   | ${'foreground'}
      ${'primary'}   | ${'colorIconPrimary'}         | ${'icon'}
      ${'error'}     | ${'colorIconError'}           | ${'icon'}
      ${'info'}      | ${'colorIconInfo'}            | ${'icon'}
      ${'inherit'}   | ${'colorIconInherit'}         | ${'icon'}
      ${'secondary'} | ${'colorIconSecondary'}       | ${'icon'}
      ${'success'}   | ${'colorIconSuccess'}         | ${'icon'}
      ${'warning'}   | ${'colorIconWarning'}         | ${'icon'}
    `('should have a $expectedClass when color is $color and hover is $hover', ({ color, expectedClass, hover }) => {
      component.color = color ? color : component.color;
      component.hover = hover ? hover : component.hover;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });

    it.each`
      disabled
      ${true}
      ${'true'}
    `('should not have a color if disabled is $disabled', ({ disabled }) => {
      component.disabled = disabled;
      fixture.detectChanges();
      expect(component.composedClasses).not.toContain('color');
    });
  });

  describe('Disabled', () => {
    it.each`
      disabled     | expectedClass
      ${undefined} | ${'enabledBackground'}
      ${false}     | ${'enabledBackground'}
      ${'false'}   | ${'enabledBackground'}
      ${true}      | ${'disabled'}
      ${'true'}    | ${'disabled'}
    `('should have $expectedClass when disabled is $disabled', ({ disabled, expectedClass }) => {
      component.disabled = disabled || disabled === false ? disabled : component.disabled;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Edge', () => {
    it('should not set an edge by default', () => {
      fixture.detectChanges();
      expect(component.composedClasses).not.toContain('edge');
    });

    it.each`
      edge       | expectedClass
      ${'end'}   | ${'edgeEnd'}
      ${'start'} | ${'edgeStart'}
    `('should have $expectedClass when edge is $edge', ({ edge, expectedClass }) => {
      component.edge = edge ? edge : component.edge;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Size', () => {
    it.each`
      expectedClass | size
      ${'sizeMd'}   | ${undefined}
      ${'sizeMd'}   | ${'md'}
      ${'sizeSm'}   | ${'sm'}
    `('should have $expectedClass when size is $size', ({ size, expectedClass }) => {
      component.size = size ? size : component.size;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });
});

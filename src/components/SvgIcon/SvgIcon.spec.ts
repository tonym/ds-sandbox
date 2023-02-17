import { waitForAsync, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SvgIconService } from './SvgIcon.service';
import { SvgIcon } from './SvgIcon';
import testHelper from '../../testing/testHelper/index';

describe('SvgIcon', () => {
  let component: SvgIcon;
  let fixture: ComponentFixture<SvgIcon>;
  const fontAwesomeIcon = 'https://cdn.jsdelivr.net/npm/font-awesome-svg-icons@0.1.0/svg/info.svg';
  const selector = 'svg';
  const svgString =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SvgIcon],
      imports: [HttpClientTestingModule],
      providers: [SvgIconService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgIcon);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a svg-icon element', () => {
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

  describe('Icon', () => {
    it('should create an iconUrl if icon name is provided', () => {
      component.icon = 'info';
      fixture.detectChanges();
      expect(component.iconUrl).toBeTruthy();
    });

    it('should create an iconUrl if icon is provided as an URL', () => {
      const iconUrl = fontAwesomeIcon;
      component.icon = iconUrl;
      fixture.detectChanges();
      expect(component.iconUrl).toBe(iconUrl);
    });

    it('should not create an iconUrl if no icon is provided', () => {
      fixture.detectChanges();
      expect(component.iconUrl).toBeFalsy();
    });

    it('should render an svg if icon provided', async () => {
      component.icon = 'not_a_real_icon';
      component.svgString = svgString;
      fixture.detectChanges();
      component.parseIcon();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector('path');
      expect(selectedElement).toBeTruthy();
    });

    it('should have an SVG title if svgTitle is provided', () => {
      component.icon = 'still_not_a_real_icon';
      component.svgTitle = 'opensesame icon';
      component.svgString = svgString;
      fixture.detectChanges();
      component.parseIcon();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector('title');
      expect(selectedElement).toBeTruthy();
    });
  });

  describe('Color', () => {
    it.each`
      color          | expectedClass
      ${undefined}   | ${'colorPrimary'}
      ${'error'}     | ${'colorError'}
      ${'info'}      | ${'colorInfo'}
      ${'inherit'}   | ${'colorInherit'}
      ${'primary'}   | ${'colorPrimary'}
      ${'secondary'} | ${'colorSecondary'}
      ${'success'}   | ${'colorSuccess'}
      ${'warning'}   | ${'colorWarning'}
    `('should have a $expectedClass class when color is $ color', ({ color, expectedClass }) => {
      component.color = color ? color : component.color;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Font size', () => {
    it.each`
      expectedClass        | fontSize
      ${'fontSizeMd'}      | ${undefined}
      ${'fontSizeInherit'} | ${'inherit'}
      ${'fontSizeLg'}      | ${'lg'}
      ${'fontSizeMd'}      | ${'md'}
      ${'fontSizeSm'}      | ${'sm'}
    `('should have a $expectedClass when fontSize is $fontSize', ({ expectedClass, fontSize }) => {
      component.fontSize = fontSize ? fontSize : component.fontSize;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Icon Style', () => {
    it.each`
      expected      | iconStyle
      ${'filled'}   | ${undefined}
      ${'filled'}   | ${'filled'}
      ${'outlined'} | ${'outlined'}
      ${'rounded'}  | ${'rounded'}
      ${'sharp'}    | ${'sharp'}
      ${'twotone'}  | ${'twotone'}
    `('should have $expected in iconUrl when iconStyle is $iconStyle', ({ expected, iconStyle }) => {
      component.icon = 'info';
      component.iconStyle = iconStyle ? iconStyle : component.iconStyle;
      fixture.detectChanges();
      expect(component.iconUrl).toContain(expected);
    });
  });

  describe('Shape Rendering', () => {
    it('should have no shape-rendering by default', () => {
      component.icon = 'info';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.getAttribute('shape-rendering')).toBeFalsy();
    });

    it.each`
      shapeRendering
      ${'auto'}
      ${'optimizeSpeed'}
      ${'crispEdges'}
      ${'geometricPrecision'}
    `('should be $shapeRendering when shapeRending is $shapeRendering', ({ shapeRendering }) => {
      component.icon = 'info';
      component.shapeRendering = shapeRendering;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.getAttribute('shape-rendering')).toBe(shapeRendering);
    });
  });

  describe('View Box', () => {
    it('should be 0 0 24 24 by default', () => {
      component.icon = 'info';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.getAttribute('viewBox')).toBe('0 0 24 24');
    });

    it('should use provided value if viewBox is provided', () => {
      component.icon = 'info';
      component.viewBox = '0 0 50 50';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.getAttribute('viewBox')).toBe('0 0 50 50');
    });
  });
});

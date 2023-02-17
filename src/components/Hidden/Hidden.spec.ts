import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LayoutModule } from '@angular/cdk/layout';
import { Hidden } from './Hidden';
import breakpoints from '../../helpers/breakpoints/index';
import useTheme from '../../styles/useTheme/index';
import testHelper from '../../testing/testHelper/index';

const theme = useTheme();

describe('Hidden', () => {
  let component: Hidden;
  let fixture: ComponentFixture<Hidden>;
  const selector = 'span';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Hidden],
      imports: [LayoutModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hidden);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have a hidden element by default', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selector)).toBeFalsy();
  });

  it('should have a root class when not hidden', () => {
    component.shouldBeHidden = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.root);
  });

  it('should accept a custom className when not hidden', () => {
    component.shouldBeHidden = false;
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

  describe('Variant "js"', () => {
    it('should compose a down breakpoint without an at-rule from a breakpoint key', () => {
      component.down = 'lg';
      fixture.detectChanges();
      const expectedBreakpoint = breakpoints.down('lg', false);
      expect(component.breakpoints[0]).toBe(expectedBreakpoint);
    });

    it('should compose an only breakpoint without an at-rule from a breakpoint key', () => {
      component.only = 'lg';
      fixture.detectChanges();
      const expectedBreakpoint = breakpoints.only('lg', false);
      expect(component.breakpoints[0]).toBe(expectedBreakpoint);
    });

    it('should compose an up breakpoint without an at-rule from a breakpoint key', () => {
      component.up = 'lg';
      fixture.detectChanges();
      const expectedBreakpoint = breakpoints.up('lg', false);
      expect(component.breakpoints[0]).toBe(expectedBreakpoint);
    });

    it('should accept multiple breakpoint values', () => {
      const mediaQueries: string[] = [];
      mediaQueries.push(breakpoints.down('sm', false));
      mediaQueries.push(breakpoints.up('lg', false));
      component.down = 'sm';
      component.up = 'lg';
      fixture.detectChanges();
      expect(component.breakpoints).toEqual(mediaQueries);
    });

    it('should subscribe to breakpointObserver if there are breakpoints', () => {
      component.down = 'lg';
      fixture.detectChanges();
      expect(component.breakpointChanges).toBeTruthy();
    });

    it('should not subscribe to breakpointObserver if there are no breakpoints', () => {
      fixture.detectChanges();
      expect(component.breakpointChanges).toBeFalsy();
    });

    it('should unsubscribe from breakpointObserver on destroy', () => {
      component.down = 'lg';
      fixture.detectChanges();
      spyOn(component.breakpointChanges, 'unsubscribe').and.callThrough();
      component.ngOnDestroy();
      expect(component.breakpointChanges.unsubscribe).toHaveBeenCalled();
    });

    it('should not have a breakpoint class', () => {
      component.down = 'lg';
      fixture.detectChanges();
      expect(component.breakpointClass).toBeFalsy();
    });
  });

  describe('Variant "css"', () => {
    beforeEach(() => {
      component.variant = 'css';
    });
    it('should compose a down breakpoint with an at-rule from a breakpoint key', () => {
      component.down = 'lg';
      fixture.detectChanges();
      const expectedBreakpoint = breakpoints.down('lg');
      expect(component.breakpoints[0]).toBe(expectedBreakpoint);
    });

    it('should compose an only breakpoint with an at-rule from a breakpoint key', () => {
      component.only = 'lg';
      fixture.detectChanges();
      const expectedBreakpoint = breakpoints.only('lg');
      expect(component.breakpoints[0]).toBe(expectedBreakpoint);
    });

    it('should compose an up breakpoint with an at-rule from a breakpoint key', () => {
      component.up = 'lg';
      fixture.detectChanges();
      const expectedBreakpoint = breakpoints.up('lg');
      expect(component.breakpoints[0]).toBe(expectedBreakpoint);
    });

    it('should accept multiple breakpoint values', () => {
      const mediaQueries: string[] = [];
      mediaQueries.push(breakpoints.down('sm'));
      mediaQueries.push(breakpoints.up('lg'));
      component.down = 'sm';
      component.up = 'lg';
      fixture.detectChanges();
      expect(component.breakpoints).toEqual(mediaQueries);
    });

    it('should not subscribe to breakpointObserver if there are breakpoints', () => {
      component.down = 'lg';
      fixture.detectChanges();
      expect(component.breakpointChanges).toBeFalsy();
    });

    it('should have a breakpoint class', () => {
      component.down = 'lg';
      fixture.detectChanges();
      expect(component.breakpointClass).toBeTruthy();
    });

    it('should have a media query in the breakpoint rules', () => {
      const mediaQuery = breakpoints.down('lg');
      const expectedBreakpointRules = {};
      expectedBreakpointRules[mediaQuery] = { display: 'none' };
      component.down = 'lg';
      fixture.detectChanges();
      const actualBreakpointRules = component.createBreakpointRules();
      expect(actualBreakpointRules).toMatchObject(expectedBreakpointRules);
    });
  });
});

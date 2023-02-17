import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Accordion } from './Accordion';
import { DividerModule } from '../Divider/index';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { SvgIconModule, SvgIconService } from '../SvgIcon/index';
import { TypographyModule } from '../Typography/index';
import testHelper from '../../testing/testHelper/index';

describe('Accordion', () => {
  let component: Accordion;
  let fixture: ComponentFixture<Accordion>;
  const selector = 'div';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Accordion],
      imports: [DividerModule, FlexChildModule, FlexModule, HttpClientModule, SvgIconModule, TypographyModule],
      providers: [SvgIconService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accordion);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Accordion element', () => {
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

  describe('Collapsed', () => {
    it('should be collapsed by default', () => {
      fixture.detectChanges();
      expect(component.expanded).toBe(false);
    });

    it('should have a right side up control when collapsed', () => {
      fixture.detectChanges();
      expect(component.control.nativeElement.classList).not.toContain(component.classes.controlExpanded);
    });

    it('should not have visible content when collapsed', () => {
      fixture.detectChanges();
      expect(component.content.nativeElement.classList).not.toContain(component.classes.contentExpanded);
    });

    it('should be collapsed when defaultExpanded is false', () => {
      component.defaultExpanded = false;
      fixture.detectChanges();
      expect(component.expanded).toBe(false);
    });

    it('should have a right side up control when defaultExpanded is false', () => {
      component.defaultExpanded = false;
      fixture.detectChanges();
      expect(component.control.nativeElement.classList).not.toContain(component.classes.controlExpanded);
    });

    it('should not have visible content when defaultExpanded is false', () => {
      component.defaultExpanded = false;
      fixture.detectChanges();
      expect(component.content.nativeElement.classList).not.toContain(component.classes.contentExpanded);
    });

    it('should be collapsed when defaultExpanded is "false"', () => {
      component.defaultExpanded = 'false';
      fixture.detectChanges();
      expect(component.expanded).toBe(false);
    });

    it('should have a right side up control when defaultExpanded is "false"', () => {
      component.defaultExpanded = 'false';
      fixture.detectChanges();
      expect(component.control.nativeElement.classList).not.toContain(component.classes.controlExpanded);
    });

    it('should not have visible content when defaultExpanded is "false"', () => {
      component.defaultExpanded = 'false';
      fixture.detectChanges();
      expect(component.content.nativeElement.classList).not.toContain(component.classes.contentExpanded);
    });
  });

  describe('Expanded', () => {
    it('should be expanded by default when defaultExpanded is true', () => {
      component.defaultExpanded = true;
      fixture.detectChanges();
      expect(component.expanded).toBe(true);
    });

    it('should have an upside down control when defaultExpanded is true', () => {
      component.defaultExpanded = true;
      fixture.detectChanges();
      expect(component.control.nativeElement.classList).toContain(component.classes.controlExpanded);
    });

    it('should not visible content when defaultExpanded is true', () => {
      component.defaultExpanded = true;
      fixture.detectChanges();
      expect(component.content.nativeElement.classList).toContain(component.classes.contentExpanded);
    });

    it('should be expanded by default when defaultExpanded is "true"', () => {
      component.defaultExpanded = 'true';
      fixture.detectChanges();
      expect(component.expanded).toBe(true);
    });

    it('should have an upside down control when defaultExpanded is "true"', () => {
      component.defaultExpanded = 'true';
      fixture.detectChanges();
      expect(component.control.nativeElement.classList).toContain(component.classes.controlExpanded);
    });

    it('should not visible content when defaultExpanded is "true"', () => {
      component.defaultExpanded = 'true';
      fixture.detectChanges();
      expect(component.content.nativeElement.classList).toContain(component.classes.contentExpanded);
    });
  });

  describe('Toggle', () => {
    it('should toggle expanded when collapsed', () => {
      fixture.detectChanges();
      component.expanded = false;
      fixture.detectChanges();
      component.toggle(new MouseEvent('click'));
      expect(component.expanded).toBe(true);
    });

    it('should toggle collapsed when expanded', () => {
      fixture.detectChanges();
      component.expanded = true;
      fixture.detectChanges();
      component.toggle(new MouseEvent('click'));
      expect(component.expanded).toBe(false);
    });
  });

  describe('Control', () => {
    it('should show control by default', () => {
      fixture.detectChanges();
      expect(component.shouldShowControl).toBeTruthy();
    });

    it('should show control if showControl is true', () => {
      component.showControl = true;
      fixture.detectChanges();
      expect(component.shouldShowControl).toBeTruthy();
    });

    it('should show control if showControl is "true"', () => {
      component.showControl = 'true';
      fixture.detectChanges();
      expect(component.shouldShowControl).toBeTruthy();
    });

    it('should hide control if showControl is false', () => {
      component.showControl = false;
      fixture.detectChanges();
      expect(component.shouldShowControl).toBe(false);
    });

    it('should hide control if showControl is "false"', () => {
      component.showControl = 'false';
      fixture.detectChanges();
      expect(component.shouldShowControl).toBe(false);
    });

    it('should not toggle expanded when showControl is false', () => {
      component.showControl = false;
      component.expanded = false;
      fixture.detectChanges();
      component.toggle(new MouseEvent('click'));
      expect(component.expanded).toBe(false);
    });

    it('should not toggle expanded when showControl is "false"', () => {
      component.showControl = 'false';
      component.expanded = false;
      fixture.detectChanges();
      expect(component.expanded).toBe(false);
    });
  });
});

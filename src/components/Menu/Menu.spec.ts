import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PaperModule } from '../Paper/index';
import { Menu } from './Menu';
import testHelper from '../../testing/testHelper/index';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;
  const selector = 'div';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Menu],
      imports: [PaperModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a menu element', () => {
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

  describe('Open', () => {
    it.each`
      expectedResult | open
      ${false}       | ${undefined}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should return an include result of $expectedResult when open is $open', ({ expectedResult, open }) => {
      component.open = open ? open : component.open;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.open)).toBe(expectedResult);
    });
  });

  describe('Variant', () => {
    it.each`
      expectedVariant | variant
      ${'light'}      | ${undefined}
      ${'dark'}       | ${'dark'}
      ${'light'}      | ${'light'}
    `('should be $expectedVariant when variant is $variant', ({ expectedVariant, variant }) => {
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.variantClass).toBe(component.classes[expectedVariant]);
    });
  });

  describe('Style bottom', () => {
    it('should set style bottom if view child is defined', () => {
      fixture.detectChanges();
      component.setStyleBottom();
      expect(component.styleBottom).toBeTruthy();
    });

    it('should not set style bottom if view child is undefined', () => {
      component.setStyleBottom();
      expect(component.styleBottom).toBe(undefined);
    });
  });

  describe('Open menu', () => {
    it('should set menu bottom if view child is defined', () => {
      component.menuBottom = undefined;
      component.open = true;
      fixture.detectChanges();
      component.openMenu();
      expect(component.menuBottom).toBe(0);
    });

    it('should not set menu bottom if view child is undefined', () => {
      component.menuBottom = undefined;
      component.open = true;
      component.openMenu();
      expect(component.menuBottom).toBe(undefined);
    });
  });

  describe('Offset', () => {
    it('should set offset if menu bottom is defined', () => {
      component.menuBottom = 32;
      component.setOffset();
      expect(component.offset).toBeTruthy();
    });

    it('should set offset if menu bottom is 0', () => {
      component.menuBottom = 0;
      component.setOffset();
      expect(component.offset).toBeTruthy();
    });

    it('should not set offset if menu bottom is undefined', () => {
      component.menuBottom = undefined;
      component.setOffset();
      expect(component.offset).toBe(undefined);
    });
  });

  describe('Style bottom', () => {
    it('should set style bottom if offset is defined', () => {
      fixture.detectChanges();
      component.styleBottom = undefined;
      component.offset = 32;
      component.setStyleBottom();
      expect(component.styleBottom).toBeTruthy();
    });

    it('should set style bottom if offset is 0', () => {
      fixture.detectChanges();
      component.styleBottom = undefined;
      component.offset = 32;
      component.setStyleBottom();
      expect(component.styleBottom).toBeTruthy();
    });

    it('should set style bottom to "auto" if offset is undefined', () => {
      fixture.detectChanges();
      component.styleBottom = undefined;
      component.offset = undefined;
      component.setStyleBottom();
      expect(component.styleBottom).toBe('auto');
    });

    it('should set style bottom to "auto" if offset is 16 or greater', () => {
      fixture.detectChanges();
      component.styleBottom = undefined;
      component.offset = 16;
      component.setStyleBottom();
      expect(component.styleBottom).toBe('auto');
    });

    it('should set style bottom to "16px" if offset is less than 16', () => {
      fixture.detectChanges();
      component.styleBottom = undefined;
      component.offset = 5;
      component.setStyleBottom();
      expect(component.styleBottom).toBe('16px');
    });
  });
});

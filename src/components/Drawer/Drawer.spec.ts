import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Drawer } from './Drawer';
import { PaperModule } from '../Paper/index';
import testHelper from '../../testing/testHelper/index';

describe('Drawer', () => {
  let component: Drawer;
  let fixture: ComponentFixture<Drawer>;
  const selector = 'div';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Drawer],
      imports: [PaperModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Drawer);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a drawer element', () => {
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
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should be $expectedResult when open is $open', ({ expectedResult, open }) => {
      component.open = open ? open : component.open;
      fixture.detectChanges();
      expect(component.composedClasses.includes('open')).toBe(expectedResult);
    });
  });

  describe('Variant', () => {
    it.each`
      anchor       | expectedClass         | variant
      ${undefined} | ${'permanent'}        | ${'permanent'}
      ${undefined} | ${'permanentLeft'}    | ${'permanent'}
      ${'bottom'}  | ${'permanentBottom'}  | ${'permanent'}
      ${'left'}    | ${'permanentLeft'}    | ${'permanent'}
      ${'right'}   | ${'permanentRight'}   | ${'permanent'}
      ${'top'}     | ${'permanentTop'}     | ${'permanent'}
      ${undefined} | ${'persistent'}       | ${'persistent'}
      ${undefined} | ${'persistentLeft'}   | ${'persistent'}
      ${'bottom'}  | ${'persistentBottom'} | ${'persistent'}
      ${'left'}    | ${'persistentLeft'}   | ${'persistent'}
      ${'right'}   | ${'persistentRight'}  | ${'persistent'}
      ${'top'}     | ${'persistentTop'}    | ${'persistent'}
      ${undefined} | ${'temporary'}        | ${undefined}
      ${undefined} | ${'temporaryLeft'}    | ${undefined}
      ${undefined} | ${'temporary'}        | ${'temporary'}
      ${undefined} | ${'temporaryLeft'}    | ${'temporary'}
      ${'bottom'}  | ${'temporaryBottom'}  | ${'temporary'}
      ${'left'}    | ${'temporaryLeft'}    | ${'temporary'}
      ${'right'}   | ${'temporaryRight'}   | ${'temporary'}
      ${'top'}     | ${'temporaryTop'}     | ${'temporary'}
    `('should have $expectedClass when anchor is $anchor and variant is $variant', ({ anchor, expectedClass, variant }) => {
      component.anchor = anchor ? anchor : component.anchor;
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });
});

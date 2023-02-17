import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Link } from './Link';
import testHelper from '../../testing/testHelper/index';
import { TypographyModule } from '../Typography/index';

describe('Link', () => {
  let component: Link;
  let fixture: ComponentFixture<Link>;
  const selector = `span a`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Link],
      imports: [TypographyModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link element', () => {
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
      color              | expectedClass
      ${undefined}       | ${'colorPrimary'}
      ${'error'}         | ${'colorError'}
      ${'inherit'}       | ${'colorInherit'}
      ${'primary'}       | ${'colorPrimary'}
      ${'secondary'}     | ${'colorSecondary'}
      ${'textPrimary'}   | ${'colorTextPrimary'}
      ${'textSecondary'} | ${'colorTextSecondary'}
    `('should have a $expectedClass when color is $color', ({ color, expectedClass }) => {
      component.color = color ? color : component.color;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Display', () => {
    it.each`
      display          | expectedClass
      ${undefined}     | ${'displayInline'}
      ${'inline'}      | ${'displayInline'}
      ${'inlineBlock'} | ${'displayInlineBlock'}
      ${'block'}       | ${'displayBlock'}
    `('should have a $expectedClass when display is $display', ({ display, expectedClass }) => {
      component.display = display ? display : component.display;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Text decoration', () => {
    it('should have default hover state', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.classList).toContain(component.classes.underlineNone);
    });

    it('should accept an underline prop for hover state', () => {
      component.underline = 'always';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.classList).toContain(component.classes.underlineAlways);
    });
  });

  describe('Resolve parent', () => {
    it.each`
      expectedResult | hasParent
      ${false}       | ${undefined}
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should be $expectedResult if hasParent is $hasParent', ({ expectedResult, hasParent }) => {
      component.hasParent = hasParent ? hasParent : component.hasParent;
      fixture.detectChanges();
      component.resolveParent();
      expect(component.resolvedParent).toBe(expectedResult);
    });
  });
});

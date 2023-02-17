import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Brand } from './Brand';
import { ImageModule } from '../Image/index';
import capitalize from '../../helpers/capitalize/index';
import testHelper from '../../testing/testHelper/index';

describe('Brand', () => {
  let component: Brand;
  let displayClasses: string[];
  let fixture: ComponentFixture<Brand>;
  const selector = 'img';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Brand],
      imports: [ImageModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Brand);
    component = fixture.componentInstance;
    displayClasses = [component.classes.displayBlock, component.classes.displayInherit, component.classes.displayInlineBlock];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a brand element', () => {
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

  describe('Omitted display classes', () => {
    it.each`
      display
      ${undefined}
      ${'initial'}
    `('should not have a display class if display is $display', ({ display }) => {
      component.display = display ? display : component.display;
      fixture.detectChanges();
      expect(component.composedClasses).toEqual(expect.not.arrayContaining(displayClasses));
    });
  });

  describe('Display classes', () => {
    it.each`
      display
      ${'block'}
      ${'inherit'}
      ${'inlineBlock'}
    `('should be display $display', ({ display }) => {
      component.display = display;
      fixture.detectChanges();
      const expectedClass = component.classes[`display${capitalize(component.display)}`];
      expect(component.composedClasses).toContain(expectedClass);
    });
  });

  describe('Size', () => {
    it.each`
      test                                                               | expectedClass | fixed        | size
      ${'default size when no size submitted'}                           | ${'md'}       | ${undefined} | ${undefined}
      ${'default size when no size submitted and fixed is false'}        | ${'md'}       | ${false}     | ${undefined}
      ${'default size when no size submitted and fixed is false'}        | ${'md'}       | ${'false'}   | ${undefined}
      ${'default fixed size when no size submitted and fixed is true'}   | ${'fixedMd'}  | ${true}      | ${undefined}
      ${'default fixed size when no size submitted and fixed is "true"'} | ${'fixedMd'}  | ${'true'}    | ${undefined}
      ${'should use submitted size'}                                     | ${'sm'}       | ${undefined} | ${'sm'}
    `('should use $test', ({ expectedClass, fixed, size }) => {
      component.fixed = fixed || fixed === false ? fixed : component.fixed;
      component.size = size ? size : component.size;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });
});

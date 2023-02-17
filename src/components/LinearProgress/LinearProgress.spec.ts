import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LinearProgress } from './LinearProgress';
import testHelper from '../../testing/testHelper/index';

describe('LinearProgress', () => {
  let component: LinearProgress;
  let fixture: ComponentFixture<LinearProgress>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LinearProgress]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearProgress);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a linear progress element', () => {
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

  describe('Variant', () => {
    it.each`
      selector               | variant
      ${'bar1Indeterminate'} | ${undefined}
      ${'bar1Indeterminate'} | ${'indeterminate'}
      ${'bar1Determinate'}   | ${'determinate'}
      ${'bar1Buffer'}        | ${'buffer'}
    `('should be $variant if variant is $variant', ({ selector, variant }) => {
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      const querySelector = `.${component.classes[selector]}`;
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(querySelector);
      expect(selectedElement).toBeTruthy();
    });
  });

  describe('Bar1 class', () => {
    const bar1DeterminateClass = `og-linear-progress-bar1-determinate-30-bar1`;
    const bar1BufferClass = `og-linear-progress-bar1-buffer-30-bar1`;

    it.each`
      expectedClass           | value             | variant
      ${''}                   | ${undefined}      | ${undefined}
      ${''}                   | ${undefined}      | ${'indeterminate'}
      ${''}                   | ${undefined}      | ${'determinate'}
      ${''}                   | ${undefined}      | ${'buffer'}
      ${bar1DeterminateClass} | ${30}             | ${'determinate'}
      ${bar1DeterminateClass} | ${'30'}           | ${'determinate'}
      ${''}                   | ${'not a number'} | ${'determinate'}
      ${bar1BufferClass}      | ${30}             | ${'buffer'}
      ${bar1BufferClass}      | ${'30'}           | ${'buffer'}
      ${''}                   | ${'not a number'} | ${'buffer'}
    `('should have a "$expectedClass" class if variant is $variant and value is $value', ({ expectedClass, value, variant }) => {
      component.value = value ? value : component.value;
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.bar1Class).toBe(expectedClass);
    });

    it.each`
      direction
      ${'ltr'}
      ${'rtl'}
    `('should have bar1 classes if direction is $direction', ({ direction }) => {
      component.theme.direction = direction;
      component.variant = 'buffer';
      component.value = 30;
      fixture.detectChanges();
      expect(component.bar1Class).toBe(bar1BufferClass);
    });
  });

  describe('Bar2 class', () => {
    const bar2BufferClass = `og-linear-progress-bar2-buffer-30-bar2`;

    it.each`
      expectedClass      | valueBuffer       | variant
      ${''}              | ${undefined}      | ${undefined}
      ${''}              | ${undefined}      | ${'indeterminate'}
      ${''}              | ${undefined}      | ${'determinate'}
      ${''}              | ${undefined}      | ${'buffer'}
      ${bar2BufferClass} | ${30}             | ${'buffer'}
      ${bar2BufferClass} | ${'30'}           | ${'buffer'}
      ${''}              | ${'not a number'} | ${'buffer'}
    `(
      'should have a "$expectedClass" class if variant is $variant and valueBuffer is $value',
      ({ expectedClass, valueBuffer, variant }) => {
        component.valueBuffer = valueBuffer ? valueBuffer : component.value;
        component.variant = variant ? variant : component.variant;
        fixture.detectChanges();
        expect(component.bar2Class).toBe(expectedClass);
      }
    );

    it('should have bar2 classes if direction is ltr', () => {
      component.variant = 'buffer';
      component.valueBuffer = 30;
      component.theme.direction = 'ltr';
      fixture.detectChanges();
      expect(component.bar2Class).toBe(bar2BufferClass);
    });

    it('should have bar2 classes if direction is rtl', () => {
      component.variant = 'buffer';
      component.valueBuffer = 30;
      component.theme.direction = 'rtl';
      fixture.detectChanges();
      expect(component.bar2Class).toBe(bar2BufferClass);
    });
  });

  describe('Color', () => {
    it.each`
      color          | expectedClass
      ${undefined}   | ${'colorPrimary'}
      ${'error'}     | ${'colorError'}
      ${'info'}      | ${'colorInfo'}
      ${'primary'}   | ${'colorPrimary'}
      ${'secondary'} | ${'colorSecondary'}
      ${'success'}   | ${'colorSuccess'}
      ${'warning'}   | ${'colorWarning'}
    `('should have a $expectedClass when color is $color', ({ color, expectedClass }) => {
      component.color = color ? color : component.color;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Height', () => {
    it.each`
      expectedClass   | height
      ${'heightSm'}   | ${undefined}
      ${'heightSm'}   | ${'sm'}
      ${'heightFull'} | ${'full'}
      ${'heightLg'}   | ${'lg'}
      ${'heightMd'}   | ${'md'}
    `('should have a $expectedClass class when height is $height', ({ expectedClass, height }) => {
      component.height = height ? height : component.height;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });
});

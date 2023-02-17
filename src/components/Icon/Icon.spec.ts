import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Icon } from './Icon';
import testHelper from '../../testing/testHelper/index';

describe('Icon', () => {
  let component: Icon;
  let fixture: ComponentFixture<Icon>;
  const selector = `span`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Icon]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Icon);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an icon element', () => {
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
      color          | expectedClass
      ${undefined}   | ${'colorInherit'}
      ${'error'}     | ${'colorError'}
      ${'info'}      | ${'colorInfo'}
      ${'inherit'}   | ${'colorInherit'}
      ${'primary'}   | ${'colorPrimary'}
      ${'secondary'} | ${'colorSecondary'}
      ${'success'}   | ${'colorSuccess'}
      ${'warning'}   | ${'colorWarning'}
    `('should have a $expectedClass class when color is $color', ({ color, expectedClass }) => {
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
    `('should have a $expectedClass class when fontSize is $fontSize', ({ expectedClass, fontSize }) => {
      component.fontSize = fontSize ? fontSize : component.fontSize;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });
});

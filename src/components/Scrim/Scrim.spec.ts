import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Scrim } from './Scrim';
import testHelper from '../../testing/testHelper/index';

describe('Scrim', () => {
  let component: Scrim;
  let fixture: ComponentFixture<Scrim>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Scrim]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scrim);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a scrim element', () => {
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

  describe('Position', () => {
    it.each`
      expectedClass         | position
      ${'positionFixed'}    | ${undefined}
      ${'positionFixed'}    | ${'fixed'}
      ${'positionAbsolute'} | ${'absolute'}
    `('should have a $expectedClass when position is $position', ({ expectedClass, position }) => {
      component.position = position ? position : component.position;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Open', () => {
    it.each`
      expectedResult | open
      ${false}       | ${undefined}
      ${false}       | ${false}
      ${false}       | ${'false'}
      ${true}        | ${true}
      ${true}        | ${'true'}
    `('should check for open class and be $expectedResult when open is $open', ({ expectedResult, open }) => {
      component.open = open || open === false ? open : component.open;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.open)).toBe(expectedResult);
    });
  });
});

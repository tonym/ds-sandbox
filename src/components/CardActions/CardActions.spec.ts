import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import testHelper from '../../testing/testHelper/index';
import { CardActions } from './CardActions';

describe('CardActions', () => {
  let component: CardActions;
  let fixture: ComponentFixture<CardActions>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardActions]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActions);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a card actions element', () => {
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

  it('should have a spacing class', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.spacing);
  });

  it('should not have a spacing class if disableSpacing is true', () => {
    component.disableSpacing = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).not.toContain(component.classes.spacing);
  });

  describe('Background color', () => {
    it.each`
      backgroundColor
      ${'primary'}
      ${'#fbfbfb'}
      ${'rgb(100, 100, 150)'}
      ${'SteelBlue'}
    `('should have a background-color class if backgroundColor is $backgroundColor', ({ backgroundColor }) => {
      component.backgroundColor = backgroundColor;
      fixture.detectChanges();
      expect(component.backgroundColor).toBeTruthy();
    });

    it('should not apply a background-color class if backgroundColor provided is not a color', () => {
      component.backgroundColor = 'phonyColor';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(component.backgroundColorClass).toBe('');
    });
  });
});

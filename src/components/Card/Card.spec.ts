import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Card } from './Card';
import testHelper from '../../testing/testHelper/index';
import { PaperModule } from '../Paper/index';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;
  const selector = `div`;
  const paperClasses = {
    elevation1: 'og-paper-elevation1',
    elevation5: 'og-paper-elevation5',
    elevation8: 'og-paper-elevation8',
    rounded: 'og-paper-rounded'
  };

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Card],
      imports: [PaperModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a card element', () => {
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

  describe('Raised elevation', () => {
    it.each`
      elevation    | expectedClass   | raised
      ${undefined} | ${'elevation8'} | ${true}
      ${undefined} | ${'elevation8'} | ${'true'}
      ${undefined} | ${'elevation1'} | ${false}
      ${undefined} | ${'elevation1'} | ${'false'}
      ${5}         | ${'elevation5'} | ${false}
    `('should apply $expectedClass if raised is $raised and elevation is $elevation', ({ elevation, expectedClass, raised }) => {
      component.elevation = elevation ? elevation : component.elevation;
      component.raised = raised ? raised : component.raised;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.classList).toContain(paperClasses[expectedClass]);
    });
  });

  describe('Variant', () => {
    it.each`
      expectedClass | variant
      ${'elevated'} | ${undefined}
      ${'elevated'} | ${'elevated'}
      ${'outlined'} | ${'outlined'}
    `('should be $expectedClass if variant is $variant', ({ expectedClass, variant }) => {
      component.variant = variant ? variant : component.variant;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Paper classes', () => {
    it.each`
      elevation
      ${5}
      ${'5'}
    `('should apply elevation for number or string', ({ elevation }) => {
      component.elevation = elevation;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.classList).toContain(paperClasses.elevation5);
    });

    it('should not be rounded if square is true', () => {
      component.square = true;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.classList).not.toContain(paperClasses.rounded);
    });
  });
});

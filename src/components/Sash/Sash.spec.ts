import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Sash } from './Sash';
import testHelper from '../../testing/testHelper/index';
import { TypographyModule } from '../Typography/index';

describe('Sash', () => {
  let component: Sash;
  let fixture: ComponentFixture<Sash>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Sash],
      imports: [TypographyModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sash);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sash component', () => {
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

  it('should accept a label as a string', () => {
    const label = 'plus';
    component.label = label;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector(`.${component.classes.typography}`);
    expect(compiled.textContent.trim()).toBe(label);
  });

  it('should accept a label as a number', () => {
    const label = 100;
    component.label = label;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector(`.${component.classes.typography}`);
    expect(compiled.textContent.trim()).toBe(`${label}`);
  });
});

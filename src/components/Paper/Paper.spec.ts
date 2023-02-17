import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Paper } from './Paper';
import testHelper from '../../testing/testHelper/index';

describe('Paper', () => {
  let component: Paper;
  let fixture: ComponentFixture<Paper>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Paper]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paper);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a paper element', () => {
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

  it('should accept a number for elevation', () => {
    component.elevation = 5;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.elevation5);
  });

  it('should accept a string for elevation', () => {
    component.elevation = '5';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.elevation5);
  });

  it('should not be rounded if square is true', () => {
    component.square = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).not.toContain(component.classes.rounded);
  });

  it('should be outlined if outlined is true', () => {
    component.outlined = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.outlined);
  });

  it('should be outlined if outlined is "true"', () => {
    component.outlined = 'true';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.outlined);
  });

  it('should not be outlined if outlined is false', () => {
    component.outlined = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).not.toContain(component.classes.outlined);
  });

  it('should not be outlined if outlined is "false"', () => {
    component.outlined = 'false';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).not.toContain(component.classes.outlined);
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Flex } from './Flex';
import testHelper from '../../testing/testHelper/index';

describe('Flex', () => {
  let component: Flex;
  let fixture: ComponentFixture<Flex>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Flex]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flex);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a flex element', () => {
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

  it('should apply a gap class if gap is provided', () => {
    component.gap = 24;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.gapClass);
  });
});

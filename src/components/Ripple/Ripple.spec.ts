import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Ripple } from './Ripple';
import testHelper from '../../testing/testHelper/index';

describe('Ripple', () => {
  let component: Ripple;
  let fixture: ComponentFixture<Ripple>;
  const selector = 'span';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Ripple]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ripple);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a ripple element', () => {
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
});

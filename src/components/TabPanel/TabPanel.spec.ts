import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TabPanel } from './TabPanel';

describe('TabPanel', () => {
  let component: TabPanel;
  let fixture: ComponentFixture<TabPanel>;
  const selector = `div`;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TabPanel]
    }).compileComponents();
    fixture = TestBed.createComponent(TabPanel);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a TabPanel element', () => {
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
});

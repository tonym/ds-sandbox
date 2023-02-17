import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PaperModule } from '../Paper/index';
import { ScrimModule } from '../Scrim/index';
import { Dialog } from './Dialog';
import testHelper from '../../testing/testHelper/index';

describe('Dialog', () => {
  let component: Dialog;
  let fixture: ComponentFixture<Dialog>;
  const dialogSelector = '.og-dialog-root';
  const scrimSelector = '.og-scrim-root';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Dialog],
      imports: [PaperModule, ScrimModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog);
    component = fixture.componentInstance;
    component.open = true;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a dialog element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(dialogSelector)).toBeTruthy();
  });

  it('should have a root class', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(dialogSelector);
    expect(selectedElement.classList).toContain(component.classes.root);
  });

  it('should accept a custom className', () => {
    const customClass = 'custom-class';
    component.className = customClass;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(dialogSelector);
    expect(selectedElement.classList).toContain(customClass);
  });

  it('should detect changes', () => {
    spyOn(component, 'prepareComponent');
    component.ngOnChanges();
    expect(component.prepareComponent).toHaveBeenCalled();
  });

  it('should have a scrim by default', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(scrimSelector);
    expect(selectedElement).toBeTruthy();
  });

  it('should have a scrim if withScrim is true', () => {
    component.withScrim = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(scrimSelector);
    expect(selectedElement).toBeTruthy();
  });

  it('should have a scrim if withScrim is "true"', () => {
    component.withScrim = 'true';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(scrimSelector);
    expect(selectedElement).toBeTruthy();
  });

  it('should not have a scrim if withScrim is false', () => {
    component.withScrim = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(scrimSelector);
    expect(selectedElement).toBeFalsy();
  });

  it('should not have a scrim if withScrim is "false"', () => {
    component.withScrim = 'false';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(scrimSelector);
    expect(selectedElement).toBeFalsy();
  });

  it('should be centered by default', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(dialogSelector);
    expect(selectedElement.classList).toContain(component.classes.centered);
  });

  it('should be centered if centered is true', () => {
    component.centered = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(dialogSelector);
    expect(selectedElement.classList).toContain(component.classes.centered);
  });

  it('should be centered if centered is "true"', () => {
    component.centered = 'true';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(dialogSelector);
    expect(selectedElement.classList).toContain(component.classes.centered);
  });

  it('should not be centered if centered is false', () => {
    component.centered = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(dialogSelector);
    expect(selectedElement.classList).not.toContain(component.classes.centered);
  });

  it('should not be centered if centered is "false"', () => {
    component.centered = 'false';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(dialogSelector);
    expect(selectedElement.classList).not.toContain(component.classes.centered);
  });

  it('should emit an dialogScrimClick event when the scrim is clicked', () => {
    fixture.detectChanges();
    spyOn(component.dialogScrimClick, 'emit');
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(scrimSelector);
    selectedElement.click();
    fixture.whenStable().then(() => {
      expect(component.dialogScrimClick.emit).toHaveBeenCalled();
    });
  });

  it('should not emit an dialogScrimClick event when the dialog is clicked', () => {
    fixture.detectChanges();
    spyOn(component.dialogScrimClick, 'emit');
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(dialogSelector);
    selectedElement.click();
    fixture.whenStable().then(() => {
      expect(component.dialogScrimClick.emit).not.toHaveBeenCalled();
    });
  });

  it('should not emit an dialogScrimClick event when disableScrimClick is true', () => {
    component.disableScrimClick = true;
    fixture.detectChanges();
    spyOn(component.dialogScrimClick, 'emit');
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(scrimSelector);
    selectedElement.click();
    fixture.whenStable().then(() => {
      expect(component.dialogScrimClick.emit).not.toHaveBeenCalled();
    });
  });

  it('should not emit an dialogScrimClick event when disableScrimClick is "true"', () => {
    component.disableScrimClick = 'true';
    fixture.detectChanges();
    spyOn(component.dialogScrimClick, 'emit');
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(scrimSelector);
    selectedElement.click();
    fixture.whenStable().then(() => {
      expect(component.dialogScrimClick.emit).not.toHaveBeenCalled();
    });
  });

  it('should emit an dialogEscapeKeyDown event when the escape key is pressed', () => {
    fixture.detectChanges();
    spyOn(component.dialogEscapeKeyDown, 'emit');
    const event = new KeyboardEvent('keydown', { key: 'esc' });
    component.escapeKeyDown(event);
    fixture.whenStable().then(() => {
      expect(component.dialogEscapeKeyDown.emit).toHaveBeenCalled();
    });
  });

  it('should not emit an dialogEscapeKeyDown event when disableEscapeKey is true', () => {
    component.disableEscapeKey = true;
    fixture.detectChanges();
    spyOn(component.dialogEscapeKeyDown, 'emit');
    const event = new KeyboardEvent('keydown', { key: 'esc' });
    component.escapeKeyDown(event);
    fixture.whenStable().then(() => {
      expect(component.dialogEscapeKeyDown.emit).not.toHaveBeenCalled();
    });
  });

  it('should not emit an dialogEscapeKeyDown event when disableEscapeKey is "true"', () => {
    component.disableEscapeKey = 'true';
    fixture.detectChanges();
    spyOn(component.dialogEscapeKeyDown, 'emit');
    const event = new KeyboardEvent('keydown', { key: 'esc' });
    component.escapeKeyDown(event);
    fixture.whenStable().then(() => {
      expect(component.dialogEscapeKeyDown.emit).not.toHaveBeenCalled();
    });
  });
});

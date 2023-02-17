import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ClickAwayListener } from './ClickAwayListener';
import testHelper from '../../testing/testHelper/index';

describe('ClickAwayListener', () => {
  let component: ClickAwayListener;
  let fixture: ComponentFixture<ClickAwayListener>;
  const selector = `span`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClickAwayListener]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickAwayListener);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a click away listener element', () => {
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

  it('should emit an event on document click when component is visible', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    document.dispatchEvent(new MouseEvent('click'));
    expect(component.clickAwayListenerClick.emit).toHaveBeenCalled();
  });

  it('should not emit an event on document click when component is invisible', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    document.dispatchEvent(new MouseEvent('click'));
    expect(component.clickAwayListenerClick.emit).not.toHaveBeenCalled();
  });

  it('should emit an event on escape when component is visible', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    const event = new KeyboardEvent('keydown', {
      key: 'Escape'
    });
    window.dispatchEvent(event);
    expect(component.clickAwayListenerClick.emit).toHaveBeenCalled();
  });

  it('should not emit an event on escape when component is invisible', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    const event = new KeyboardEvent('keydown', {
      key: 'Escape'
    });
    window.dispatchEvent(event);
    expect(component.clickAwayListenerClick.emit).not.toHaveBeenCalled();
  });

  it('should not emit an event on element click when component is visible', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    fixture.debugElement.nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(component.clickAwayListenerClick.emit).not.toHaveBeenCalled();
  });

  it('should emit an event on document click when shouldHandle is true', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    component.shouldHandle = true;
    fixture.detectChanges();
    document.dispatchEvent(new MouseEvent('click'));
    expect(component.clickAwayListenerClick.emit).toHaveBeenCalled();
  });

  it('should emit an event on document click when shouldHandle is "true"', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    component.shouldHandle = 'true';
    fixture.detectChanges();
    document.dispatchEvent(new MouseEvent('click'));
    expect(component.clickAwayListenerClick.emit).toHaveBeenCalled();
  });

  it('should emit an event on escape when shouldHandle is true', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    component.shouldHandle = true;
    fixture.detectChanges();
    const event = new KeyboardEvent('keydown', {
      key: 'Escape'
    });
    window.dispatchEvent(event);
    expect(component.clickAwayListenerClick.emit).toHaveBeenCalled();
  });

  it('should emit an event on escape when shouldHandle is "true"', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    component.shouldHandle = 'true';
    fixture.detectChanges();
    const event = new KeyboardEvent('keydown', {
      key: 'Escape'
    });
    window.dispatchEvent(event);
    expect(component.clickAwayListenerClick.emit).toHaveBeenCalled();
  });

  it('should not emit an event on document click when shouldHandle is false', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    component.shouldHandle = false;
    fixture.detectChanges();
    document.dispatchEvent(new MouseEvent('click'));
    expect(component.clickAwayListenerClick.emit).not.toHaveBeenCalled();
  });

  it('should not emit an event on escape when shouldHandle is false', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    component.shouldHandle = false;
    fixture.detectChanges();
    document.dispatchEvent(new MouseEvent('click'));
    expect(component.clickAwayListenerClick.emit).not.toHaveBeenCalled();
  });

  it('should not emit an event on document click when shouldHandle is "false"', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    component.shouldHandle = 'false';
    fixture.detectChanges();
    document.dispatchEvent(new MouseEvent('click'));
    expect(component.clickAwayListenerClick.emit).not.toHaveBeenCalled();
  });

  it('should not emit an event on escape when shouldHandle is "false"', () => {
    spyOn(component.clickAwayListenerClick, 'emit');
    jest.spyOn(component, 'isVisible').mockReturnValue(true);
    component.shouldHandle = 'false';
    fixture.detectChanges();
    document.dispatchEvent(new MouseEvent('click'));
    expect(component.clickAwayListenerClick.emit).not.toHaveBeenCalled();
  });
});

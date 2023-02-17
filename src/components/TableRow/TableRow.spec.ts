import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TableRow } from './TableRow';
import testHelper from '../../testing/testHelper/index';

describe('TableRow', () => {
  let component: TableRow;
  let fixture: ComponentFixture<TableRow>;
  const selector = 'tr';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TableRow]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRow);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table-row element', () => {
    const compiled = component.template.elementRef.nativeElement;
    expect(compiled).toBeTruthy();
  });

  it('should have a root class', () => {
    component.prepareComponent();
    expect(component.composedClasses).toContain(component.classes.root);
  });

  it('should accept a custom className', () => {
    const customClass = 'custom-class';
    component.className = customClass;
    component.prepareComponent();
    expect(component.composedClasses).toContain(customClass);
  });

  it('should detect changes', () => {
    spyOn(component, 'prepareComponent');
    component.ngOnChanges();
    expect(component.prepareComponent).toHaveBeenCalled();
  });

  it('should not hover by default', () => {
    component.prepareComponent();
    expect(component.composedClasses).not.toContain(component.classes.hover);
  });

  it('should not hover if hover is false', () => {
    component.hover = false;
    component.prepareComponent();
    expect(component.composedClasses).not.toContain(component.classes.hover);
  });

  it('should not hover if hover is "false"', () => {
    component.hover = 'false';
    component.prepareComponent();
    expect(component.composedClasses).not.toContain(component.classes.hover);
  });

  it('should hover if hover is true', () => {
    component.hover = true;
    component.prepareComponent();
    expect(component.composedClasses).toContain(component.classes.hover);
  });

  it('should hover if hover is "true"', () => {
    component.hover = 'true';
    component.prepareComponent();
    expect(component.composedClasses).toContain(component.classes.hover);
  });

  it('should not highlight as selected by default', () => {
    component.prepareComponent();
    expect(component.composedClasses).not.toContain(component.classes.selected);
  });

  it('should not highlight as selected if selected is false', () => {
    component.selected = false;
    component.prepareComponent();
    expect(component.composedClasses).not.toContain(component.classes.selected);
  });

  it('should not highlight as selected if selected is "false"', () => {
    component.selected = 'false';
    component.prepareComponent();
    expect(component.composedClasses).not.toContain(component.classes.selected);
  });

  it('should highlight as selected if selected is true', () => {
    component.selected = true;
    component.prepareComponent();
    expect(component.composedClasses).toContain(component.classes.selected);
  });

  it('should highlight as selected if selected is "true"', () => {
    component.selected = 'true';
    component.prepareComponent();
    expect(component.composedClasses).toContain(component.classes.selected);
  });
});

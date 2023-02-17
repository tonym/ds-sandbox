import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TableService } from './Table.service';
import { Table } from './Table';
import testHelper from '../../testing/testHelper/index';

describe('Table', () => {
  let component: Table;
  let fixture: ComponentFixture<Table>;
  const selector = 'table';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Table],
      providers: [TableService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table element', () => {
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

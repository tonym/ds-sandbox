import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TableFoot } from './TableFoot';
import testHelper from '../../testing/testHelper/index';

describe('TableFoot', () => {
  let component: TableFoot;
  let fixture: ComponentFixture<TableFoot>;
  const selector = 'tfoot';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TableFoot]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFoot);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table-foot element', () => {
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
});

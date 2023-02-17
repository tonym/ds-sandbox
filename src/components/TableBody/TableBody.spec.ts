import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TableBody } from './TableBody';
import testHelper from '../../testing/testHelper/index';

describe('TableBody', () => {
  let component: TableBody;
  let fixture: ComponentFixture<TableBody>;
  const selector = 'tbody';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TableBody]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBody);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table-body element', () => {
    const selectedElement = component.template.elementRef.nativeElement;
    expect(selectedElement).toBeTruthy();
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

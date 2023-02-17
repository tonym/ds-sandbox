import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TableHead } from './TableHead';
import testHelper from '../../testing/testHelper/index';

describe('TableHeader', () => {
  let component: TableHead;
  let fixture: ComponentFixture<TableHead>;
  const selector = 'thead';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TableHead]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHead);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table-head element', () => {
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

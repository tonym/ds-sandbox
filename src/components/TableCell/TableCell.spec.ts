import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TableService } from '../Table/index';
import { TableCell } from './TableCell';
import testHelper from '../../testing/testHelper/index';

describe('TableCell', () => {
  let component: TableCell;
  let fixture: ComponentFixture<TableCell>;
  const selector = 'td';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TableCell],
      providers: [TableService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCell);
    component = fixture.componentInstance;
    component.tablePaddingProp = 'default';
    component.tableSizeProp = 'md';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table-cell element', () => {
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

  describe('Align', () => {
    it.each`
      align          | expectedClass
      ${undefined}   | ${'alignInherit'}
      ${'center'}    | ${'alignCenter'}
      ${'inherit'}   | ${'alignInherit'}
      ${'justified'} | ${'alignJustified'}
      ${'left'}      | ${'alignLeft'}
      ${'right'}     | ${'alignRight'}
    `('should have an $expectedClass when align is $align', ({ align, expectedClass }) => {
      component.align = align ? align : component.align;
      component.prepareComponent();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Padding', () => {
    it.each`
      expectedClass          | padding       | size
      ${'paddingDefaultMd'}  | ${undefined}  | ${undefined}
      ${'paddingDefaultMd'}  | ${undefined}  | ${'md'}
      ${'paddingDefaultMd'}  | ${'default'}  | ${undefined}
      ${'paddingDefaultMd'}  | ${'default'}  | ${'md'}
      ${'paddingDefaultSm'}  | ${undefined}  | ${'sm'}
      ${'paddingDefaultSm'}  | ${'default'}  | ${'sm'}
      ${'paddingCheckboxMd'} | ${'checkbox'} | ${undefined}
      ${'paddingCheckboxMd'} | ${'checkbox'} | ${'md'}
      ${'paddingCheckboxSm'} | ${'checkbox'} | ${'sm'}
      ${'paddingNone'}       | ${'none'}     | ${undefined}
      ${'paddingNone'}       | ${'none'}     | ${'md'}
      ${'paddingNone'}       | ${'none'}     | ${'sm'}
    `('should have a $expectedClass when padding is $padding and size is $size', ({ expectedClass, padding, size }) => {
      component.padding = padding ? padding : component.padding;
      component.size = size ? size : component.size;
      component.prepareComponent();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });
});

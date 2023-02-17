import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SvgIconModule } from '../SvgIcon/index';
import { TableSortLabel } from './TableSortLabel';
import testHelper from '../../testing/testHelper/index';

describe('TableSortLabel', () => {
  let component: TableSortLabel;
  let fixture: ComponentFixture<TableSortLabel>;
  const selector = 'span';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TableSortLabel],
      imports: [HttpClientModule, SvgIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortLabel);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table sort label element', () => {
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

  describe('Active', () => {
    it.each`
      active       | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should check for an active class and return $expectedResult when active is $active', ({ active, expectedResult }) => {
      component.active = active || active === false ? active : component.active;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.active)).toBe(expectedResult);
    });
  });

  describe('Direction', () => {
    it.each`
      direction    | expectedClass
      ${undefined} | ${'iconDirectionAsc'}
      ${'asc'}     | ${'iconDirectionAsc'}
      ${'desc'}    | ${'iconDirectionDesc'}
    `('should have an $expectedClass when direction is $direction', ({ direction, expectedClass }) => {
      component.direction = direction ? direction : component.direction;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Sort icon', () => {
    it.each`
      hideSortIcon | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `(
      'should check for a hideSortIcon class and return $expectedResult when hideSortIcon is $hideSortIcon',
      ({ hideSortIcon, expectedResult }) => {
        component.hideSortIcon = hideSortIcon || hideSortIcon === false ? hideSortIcon : component.hideSortIcon;
        fixture.detectChanges();
        expect(component.composedClasses.includes(component.classes.hideSortIcon)).toBe(expectedResult);
      }
    );
  });
});

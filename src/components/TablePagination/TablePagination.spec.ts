import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TablePagination } from './TablePagination';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { IconButtonModule } from '../IconButton/index';
import testHelper from '../../testing/testHelper/index';

describe('TablePagination', () => {
  let component: TablePagination;
  let fixture: ComponentFixture<TablePagination>;
  const selector = 'div';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TablePagination],
      imports: [FlexChildModule, FlexModule, HttpClientTestingModule, IconButtonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePagination);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table pagination element', () => {
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

  it('should accept a page number as a number', () => {
    component.page = 3;
    component.rows = 30;
    fixture.detectChanges();
    expect(component._page).toBe(3);
  });

  it('should accept a page number as a string', () => {
    component.page = '3';
    component.rows = 30;
    fixture.detectChanges();
    expect(component._page).toBe(3);
  });

  it('should accept rows as a number', () => {
    component.rows = 33;
    fixture.detectChanges();
    expect(component._rows).toBe(33);
  });

  it('should accept rows as a string', () => {
    component.rows = '33';
    fixture.detectChanges();
    expect(component._rows).toBe(33);
  });

  it('should accept rows per page as a number', () => {
    component.rowsPerPage = 12;
    fixture.detectChanges();
    expect(component._rowsPerPage).toBe(12);
  });

  it('should accept rows per page as a string', () => {
    component.rowsPerPage = '12';
    fixture.detectChanges();
    expect(component._rowsPerPage).toBe(12);
  });

  it('should set page number no larger then the total number of pages', () => {
    component.page = 9;
    component.rows = 3;
    fixture.detectChanges();
    expect(component._page).toBe(1);
  });

  it('should select the next sequential page if there are more pages to show', () => {
    component.page = 1;
    component.rows = 50;
    component.rowsPerPage = 10;
    spyOn(component.onPageChange, 'emit');
    fixture.detectChanges();
    const event = new MouseEvent('click');
    const expectedResult = { component: 'TablePagination', event: event, page: 2 };
    component.nextPage(event);
    expect(component.onPageChange.emit).toHaveBeenCalledWith(expectedResult);
  });

  it('should select the last sequential page if there are no more pages to show', () => {
    component.page = 6;
    component.rows = 50;
    component.rowsPerPage = 10;
    spyOn(component.onPageChange, 'emit');
    fixture.detectChanges();
    const event = new MouseEvent('click');
    const expectedResult = { component: 'TablePagination', event: event, page: 5 };
    component.nextPage(event);
    expect(component.onPageChange.emit).toHaveBeenCalledWith(expectedResult);
  });

  it('should select the previous sequential page if page is greater than one', () => {
    component.page = 3;
    component.rows = 50;
    component.rowsPerPage = 10;
    spyOn(component.onPageChange, 'emit');
    fixture.detectChanges();
    const event = new MouseEvent('click');
    const expectedResult = { component: 'TablePagination', event: event, page: 2 };
    component.previousPage(event);
    expect(component.onPageChange.emit).toHaveBeenCalledWith(expectedResult);
  });

  it('should select the first sequential page if page is less than one', () => {
    component.page = 0;
    component.rows = 50;
    component.rowsPerPage = 10;
    spyOn(component.onPageChange, 'emit');
    fixture.detectChanges();
    const event = new MouseEvent('click');
    const expectedResult = { component: 'TablePagination', event: event, page: 1 };
    component.previousPage(event);
    expect(component.onPageChange.emit).toHaveBeenCalledWith(expectedResult);
  });

  it('should calculate the correct number of pages when there are more rows than rows per page', () => {
    component.rows = 50;
    fixture.detectChanges();
    expect(component._pages).toBe(5);
  });

  it('should calculate the correct number of pages when there are fewer rows than rows per page', () => {
    component.rows = 5;
    fixture.detectChanges();
    expect(component._pages).toBe(1);
  });

  it('should calculate the correct page counts when rows is less than rows per page', () => {
    component.rows = 5;
    fixture.detectChanges();
    const expectedResult = ['1 - 5'];
    expect(component._pageCounts).toEqual(expectedResult);
  });

  it('should calculate the correct page counts when rows is greater than rows per page', () => {
    component.rows = 15;
    fixture.detectChanges();
    const expectedResult = ['1 - 10', '11 - 15'];
    expect(component._pageCounts).toEqual(expectedResult);
  });

  it('should clamp the page at the total pages', () => {
    component.page = 3;
    component.rows = 15;
    fixture.detectChanges();
    expect(component._page).toBe(2);
  });

  it('should disallow a page less than one', () => {
    component.page = 0;
    component.rows = 15;
    fixture.detectChanges();
    expect(component._page).toBe(1);
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLink } from './RouterLink';
import testHelper from '../../testing/testHelper/index';
import { TypographyModule } from '../Typography/index';

describe('RouterLink', () => {
  let component: RouterLink;
  let fixture: ComponentFixture<RouterLink>;
  const selector = `span a`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RouterLink],
      imports: [RouterModule, RouterTestingModule, TypographyModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLink);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link element', () => {
    fixture.detectChanges();
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

  it('should have default hover state', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.underlineHover);
  });

  it('should accept an underline prop for hover state', () => {
    component.underline = 'always';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.classList).toContain(component.classes.underlineAlways);
  });

  it('should accept a string for a link, and make it an array', () => {
    const link = '/link-path';
    component.link = link;
    fixture.detectChanges();
    expect(component.link).toEqual([link]);
  });

  it('should be a string again in the HTML', () => {
    const link = '/link-path';
    component.link = link;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.href).toContain(link);
  });

  it('should accept an array for a complicated link, and keep it an array', () => {
    const teamId = 11;
    const userName = 'Emma';
    const link = ['/team', teamId, 'user', userName, { details: true }];
    component.link = link;
    fixture.detectChanges();
    expect(component.link).toEqual(link);
  });

  it('should be a generated string in the HTML', () => {
    const teamId = 11;
    const userName = 'Emma';
    const link = ['/team', teamId, 'user', userName, { details: true }];
    const expectedHref = '/team/11/user/Emma;details=true';
    component.link = link;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selector);
    expect(selectedElement.href).toContain(expectedHref);
  });
});

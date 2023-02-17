import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardHeader } from './CardHeader';
import testHelper from '../../testing/testHelper/index';
import { TypographyModule, TypographyProps } from '../Typography/index';

describe('CardHeader', () => {
  let component: CardHeader;
  let fixture: ComponentFixture<CardHeader>;
  const selector = 'div';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardHeader],
      imports: [TypographyModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeader);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a card header element', () => {
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

  it('should detect changes', () => {
    spyOn(component, 'prepareComponent');
    component.ngOnChanges();
    expect(component.prepareComponent).toHaveBeenCalled();
  });

  it('should accept custom subheading typography props', () => {
    const subheadingTypographyProps: TypographyProps = { variant: 'body2' };
    component.subheadingTypographyProps = subheadingTypographyProps;
    fixture.detectChanges();
    expect(component.subheadingTypography.variant).toBe(subheadingTypographyProps.variant);
  });

  it('should accept custom title typography props', () => {
    const titleTypographyProps: TypographyProps = { variant: 'body2' };
    component.titleTypographyProps = titleTypographyProps;
    fixture.detectChanges();
    expect(component.titleTypography.variant).toBe(titleTypographyProps.variant);
  });
});

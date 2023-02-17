import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardActionArea } from './CardActionArea';
import { ButtonBaseModule } from '../ButtonBase/index';
import testHelper from '../../testing/testHelper/index';

describe('CardActionArea', () => {
  let component: CardActionArea;
  let fixture: ComponentFixture<CardActionArea>;
  const buttonSelector = `button`;
  const anchorSelector = 'a';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardActionArea],
      imports: [ButtonBaseModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActionArea);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a card action area button element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(buttonSelector)).toBeTruthy();
  });

  it('should have a card action area anchor element if there is a link', () => {
    component.link = '/link/to/something';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(anchorSelector)).toBeTruthy();
  });

  it('should have a card action area button element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(buttonSelector)).toBeTruthy();
  });

  it('should have a root class', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(buttonSelector);
    expect(selectedElement.classList).toContain(component.classes.root);
  });

  it('should accept a custom className', () => {
    const customClass = 'custom-class';
    component.className = customClass;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(buttonSelector);
    expect(selectedElement.classList).toContain(customClass);
  });

  it('should detect changes', () => {
    spyOn(component, 'prepareComponent');
    component.ngOnChanges();
    expect(component.prepareComponent).toHaveBeenCalled();
  });
});

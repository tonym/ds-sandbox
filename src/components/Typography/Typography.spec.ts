import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TypographyComponent as Typography, TypographyElementMap } from './Typography';
import testHelper from '../../testing/testHelper/index';

describe('Typography', () => {
  let component: Typography;
  let fixture: ComponentFixture<Typography>;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Typography]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Typography);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a typography element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.body1)).toBeTruthy();
  });

  it('should have a root class', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.root);
  });

  it('should accept a custom className', () => {
    const customClass = 'custom-class';
    component.className = customClass;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(customClass);
  });

  it('should apply an align class', () => {
    component.align = 'left';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.alignLeft);
  });

  it('should apply a display class', () => {
    component.display = 'block';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.displayBlock);
  });

  it('should apply a gutterBottom if gutterBottom is true', () => {
    component.gutterBottom = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.gutterBottom);
  });

  it('should apply a gutterBottom if gutterBottom is "true"', () => {
    component.gutterBottom = 'true';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.gutterBottom);
  });

  it('should not apply a gutterBottom if gutterBottom is "false"', () => {
    component.gutterBottom = 'false';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).not.toContain(component.classes.gutterBottom);
  });

  it('should apply a paragraph if paragraph is true', () => {
    component.paragraph = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.paragraph);
  });

  it('should apply a paragraph if paragraph is "true"', () => {
    component.paragraph = 'true';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.paragraph);
  });

  it('should not apply a paragraph if paragraph is "false"', () => {
    component.paragraph = 'false';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).not.toContain(component.classes.paragraph);
  });

  it('should only apply a paragraph if both paragraph and gutterBottom are true', () => {
    component.paragraph = true;
    component.gutterBottom = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.paragraph);
    expect(selectedElement.classList).not.toContain(component.classes.gutterBottom);
  });

  it('should not apply a fontWeight class if fontWeight is not provided', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList.toString()).not.toMatch(new RegExp('weight'));
  });

  it('should be fontWeightBold if fontWeight is "bold"', () => {
    component.fontWeight = 'bold';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.fontWeightBold);
  });

  it('should be fontWeightInherit if fontWeight is "inherit"', () => {
    component.fontWeight = 'inherit';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.fontWeightInherit);
  });

  it('should be fontWeightLight if fontWeight is "light"', () => {
    component.fontWeight = 'light';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.fontWeightLight);
  });

  it('should be fontWeightMedium if fontWeight is "medium"', () => {
    component.fontWeight = 'medium';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.fontWeightMedium);
  });

  it('should be fontWeightRegular if fontWeight is "regular"', () => {
    component.fontWeight = 'regular';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.fontWeightRegular);
  });

  it('should apply no-wrap if noWrap is true', () => {
    component.noWrap = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.noWrap);
  });

  it('should apply no-wrap if noWrap is "true"', () => {
    component.noWrap = 'true';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).toContain(component.classes.noWrap);
  });

  it('should not apply no-wrap if noWrap is "false"', () => {
    component.noWrap = 'false';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(TypographyElementMap.body1);
    expect(selectedElement.classList).not.toContain(component.classes.noWrap);
  });

  it('should return the default element when variant is "h1"', () => {
    component.variant = 'h1';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.h1)).toBeTruthy();
  });

  it('should return the default element when variant is "h2"', () => {
    component.variant = 'h2';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.h2)).toBeTruthy();
  });

  it('should return the default element when variant is "h3"', () => {
    component.variant = 'h3';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.h3)).toBeTruthy();
  });

  it('should return the default element when variant is "h4"', () => {
    component.variant = 'h4';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.h4)).toBeTruthy();
  });

  it('should return the default element when variant is "h5"', () => {
    component.variant = 'h5';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.h5)).toBeTruthy();
  });

  it('should return the default element when variant is "h6"', () => {
    component.variant = 'h6';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.h6)).toBeTruthy();
  });

  it('should return the default element when variant is "subtitle1"', () => {
    component.variant = 'subtitle1';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.subtitle1)).toBeTruthy();
  });

  it('should return the default element when variant is "subtitle2"', () => {
    component.variant = 'subtitle2';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.subtitle2)).toBeTruthy();
  });

  it('should return the default element when variant is "body1"', () => {
    component.variant = 'body1';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.body1)).toBeTruthy();
  });

  it('should return the default element when variant is "body2"', () => {
    component.variant = 'body2';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.body2)).toBeTruthy();
  });

  it('should return the default element when variant is "button"', () => {
    component.variant = 'button';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.button)).toBeTruthy();
  });

  it('should return the default element when variant is "caption"', () => {
    component.variant = 'caption';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.caption)).toBeTruthy();
  });

  it('should return the default element when variant is "overline"', () => {
    component.variant = 'overline';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.overline)).toBeTruthy();
  });

  it('should return the default element when variant is "srOnly"', () => {
    component.variant = 'srOnly';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(TypographyElementMap.srOnly)).toBeTruthy();
  });

  it('should return the custom element when an element is provided', () => {
    const customElement = 'h2';
    component.variant = 'h1';
    component.element = customElement;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(customElement)).toBeTruthy();
  });

  it('should accept a custom element map', () => {
    const customElementMap = { ...TypographyElementMap };
    const customElement = 'h1';
    customElementMap.body1 = customElement;
    component.elementMap = customElementMap;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(customElement)).toBeTruthy();
  });

  describe('Color', () => {
    it('should be textPrimary color by default', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorTextPrimary);
    });

    it('should be textPrimary when color is textPrimary', () => {
      component.color = 'textPrimary';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorTextPrimary);
    });

    it('should be textSecondary when color is textSecondary', () => {
      component.color = 'textSecondary';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorTextSecondary);
    });

    it('should be error when color is error', () => {
      component.color = 'error';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorError);
    });

    it('should be info when color is info', () => {
      component.color = 'info';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorInfo);
    });

    it('should inherit color is inherit', () => {
      component.color = 'inherit';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorInherit);
    });

    it('should be primary when color is primary', () => {
      component.color = 'primary';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorPrimary);
    });

    it('should be secondary when color is secondary', () => {
      component.color = 'secondary';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorSecondary);
    });

    it('should be success when color is success', () => {
      component.color = 'success';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorSuccess);
    });

    it('should be textSecondary when color is textSecondary', () => {
      component.color = 'textSecondary';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorTextSecondary);
    });

    it('should be warning when color is warning', () => {
      component.color = 'warning';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(TypographyElementMap.body1);
      expect(selectedElement.classList).toContain(component.classes.colorWarning);
    });
  });
});

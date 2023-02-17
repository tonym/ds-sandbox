import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardMedia } from './CardMedia';
import testHelper from '../../testing/testHelper/index';

describe('CardMedia', () => {
  let component: CardMedia;
  let fixture: ComponentFixture<CardMedia>;
  const selectorMap = {
    audio: 'audio',
    div: 'div',
    img: 'img',
    picture: 'picture',
    video: 'video'
  };

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardMedia]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMedia);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default card media element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selectorMap.div)).toBeTruthy();
  });

  it('should have a root class', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selectorMap.div);
    expect(selectedElement.classList).toContain(component.classes.root);
  });

  it('should have a background image if element is div', () => {
    const image = 'image.jpg';
    component.src = image;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selectorMap.div);
    expect(selectedElement.style.background).toContain(image);
  });

  it('should accept a custom className', () => {
    const customClass = 'custom-class';
    component.className = customClass;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selectorMap.div);
    expect(selectedElement.classList).toContain(customClass);
  });

  it('should detect changes', () => {
    spyOn(component, 'prepareComponent');
    component.ngOnChanges();
    expect(component.prepareComponent).toHaveBeenCalled();
  });

  describe('Element', () => {
    it.each`
      element
      ${'audio'}
      ${'img'}
      ${'picture'}
      ${'video'}
    `('should be $element if element is $element', ({ element, selector }) => {
      component.element = element;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(selectorMap[element])).toBeTruthy();
    });
  });

  describe('Element classes', () => {
    it.each`
      element      | expectedClass
      ${'audio'}   | ${'media'}
      ${'img'}     | ${'media'}
      ${'img'}     | ${'img'}
      ${'picture'} | ${'media'}
      ${'picture'} | ${'img'}
      ${'video'}   | ${'media'}
    `('should have a $expectedClass if element is $element', ({ element, expectedClass }) => {
      component.element = element;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Element alt attribute', () => {
    it.each`
      alt             | element
      ${undefined}    | ${'img'}
      ${'custom alt'} | ${'img'}
      ${undefined}    | ${'picture'}
      ${'custom alt'} | ${'picture'}
    `('should have default alt or custom alt if alt provided when element is $element', ({ alt, element }) => {
      const composedAlt = alt ? alt : component.alt;
      component.alt = composedAlt;
      component.element = element;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selectorMap.img);
      expect(selectedElement.alt).toBe(composedAlt);
    });
  });
});

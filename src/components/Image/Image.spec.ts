import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Image } from './Image';
import useTheme from '../../styles/useTheme/index';
import testHelper from '../../testing/testHelper/index';

describe('Image', () => {
  let component: Image;
  let fixture: ComponentFixture<Image>;
  const phonySrc = 'https://www.opensesame.com/assets/images/cat.jpg';
  const theme = useTheme();
  const selectorMap = {
    img: 'img',
    picture: 'picture'
  };

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Image]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default media element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selectorMap.img)).toBeTruthy();
  });

  it('should have a root class', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selectorMap.img);
    expect(selectedElement.classList).toContain(component.classes.root);
  });

  it('should accept a custom className', () => {
    const customClass = 'custom-class';
    component.className = customClass;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selectorMap.img);
    expect(selectedElement.classList).toContain(customClass);
  });

  it('should detect changes', () => {
    spyOn(component, 'prepareImage');
    component.ngOnChanges();
    expect(component.prepareImage).toHaveBeenCalled();
  });

  describe('Alt', () => {
    it('should be img if element is img', () => {
      component.element = 'img';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(selectorMap.img)).toBeTruthy();
    });

    it.each`
      alt             | element
      ${undefined}    | ${'img'}
      ${'custom alt'} | ${'img'}
      ${undefined}    | ${'picture'}
      ${'custom alt'} | ${'picture'}
    `('should have $alt or default alt when alt is $alt and element is $element', ({ alt, element }) => {
      component.alt = alt ? alt : component.alt;
      component.element = element;
      fixture.detectChanges();
      const selector = element === 'img' ? selectorMap.img : `${selectorMap.picture} img`;
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.alt).toBe(component.alt);
    });
  });
  describe('Intrinsic values', () => {
    beforeEach(() => {
      component.height = 400;
      component.width = 200;
    });

    it.each`
      attribute   | intrinsicValues
      ${'height'} | ${undefined}
      ${'height'} | ${false}
      ${'height'} | ${'false'}
      ${'width'}  | ${undefined}
      ${'width'}  | ${false}
      ${'width'}  | ${'false'}
    `('should not have a $attribute attribute if intrinsicValues is $intrinsicValues', ({ attribute, intrinsicValues }) => {
      component.intrinsicValues = intrinsicValues ? intrinsicValues : component.intrinsicValues;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selectorMap.img);
      expect(selectedElement[attribute]).toBeFalsy();
    });

    it.each`
      attribute   | intrinsicValues
      ${'height'} | ${true}
      ${'height'} | ${'true'}
      ${'width'}  | ${true}
      ${'width'}  | ${'true'}
    `('should have a $attribute attribute if intrinsicValues is $intrinsicValues', ({ attribute, intrinsicValues }) => {
      component.intrinsicValues = intrinsicValues ? intrinsicValues : component.intrinsicValues;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selectorMap.img);
      expect(selectedElement[attribute]).toBe(component[attribute]);
    });
  });

  describe('Selected Variant', () => {
    it('should return empty if no variant or props provided', () => {
      fixture.detectChanges();
      const selectedVariant = component.selectVariant();
      expect(selectedVariant).toEqual({});
    });

    it('should return theme variant if variant is provided', () => {
      component.variant = 'sm';
      fixture.detectChanges();
      const selectedVariant = component.selectVariant();
      const expectedVariant = theme.media.images.variants.sm;
      expect(selectedVariant).toEqual(expectedVariant);
    });

    it.each`
      property          | value
      ${'bgColor'}      | ${'fcfcfc'}
      ${'blur'}         | ${'50'}
      ${'brightness'}   | ${'50'}
      ${'canvas'}       | ${'320,240,offset-x0.25,offset-y0.50'}
      ${'contrast'}     | ${'50'}
      ${'crop'}         | ${'200.400'}
      ${'disable'}      | ${'upscale'}
      ${'dpr'}          | ${2}
      ${'enable'}       | ${'upscale'}
      ${'fit'}          | ${'cover'}
      ${'format'}       | ${'gif'}
      ${'height'}       | ${200}
      ${'optimize'}     | ${'medium'}
      ${'orient'}       | ${'h'}
      ${'pad'}          | ${'25,50,75,100'}
      ${'quality'}      | ${'75'}
      ${'resizeFilter'} | ${'nearest'}
      ${'saturation'}   | ${'50'}
      ${'sharpen'}      | ${'a5,r2,t0'}
      ${'trim'}         | ${'25,50,75,100'}
      ${'width'}        | ${200}
    `('should have a $property prop if $property is provided', ({ property, value }) => {
      component[property] = value;
      fixture.detectChanges();
      const selectedVariant = component.selectVariant();
      expect(selectedVariant[property]).toBe(component[property]);
    });

    it('should combine user and variant values', () => {
      component.variant = 'sm';
      component.height = 800;
      fixture.detectChanges();
      const selectedVariant = component.selectVariant();
      const themeVariant = theme.media.images.variants.sm;
      const expectedVariant = {
        height: component.height,
        width: themeVariant.width
      };
      expect(selectedVariant).toEqual(expectedVariant);
    });

    it('should use user values over theme values if both exist', () => {
      component.variant = 'sm';
      component.width = 800;
      fixture.detectChanges();
      const selectedVariant = component.selectVariant();
      expect(selectedVariant.width).toBe(component.width);
    });
  });

  describe('Query String', () => {
    it('should be empty string if no variant or props provided', () => {
      fixture.detectChanges();
      const selectedQueryString = component.selectQueryString();
      expect(selectedQueryString).toBe('');
    });

    it('should create a query string if there are values', () => {
      component.width = 200;
      fixture.detectChanges();
      const selectedQueryString = component.selectQueryString();
      expect(selectedQueryString).toBeTruthy();
    });

    it('should prepend a question mark if there are values', () => {
      component.width = 200;
      fixture.detectChanges();
      const selectedQueryString = component.selectQueryString();
      expect(selectedQueryString.charAt(0)).toBe('?');
    });

    it('should contain a value if there is a value', () => {
      component.width = 200;
      fixture.detectChanges();
      const selectedQueryString = component.selectQueryString();
      const expectedQueryString = '?width=200';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should contain delimited values if there are values', () => {
      component.height = 400;
      component.width = 200;
      fixture.detectChanges();
      const selectedQueryString = component.selectQueryString();
      const expectedQueryString = '?height=400&width=200';
      expect(selectedQueryString).toBe(expectedQueryString);
    });
  });

  describe('Image Source', () => {
    it('should have a plain source if no props or variant', () => {
      component.src = phonySrc;
      fixture.detectChanges();
      expect(component.composedSrc).toBe(phonySrc);
    });

    it('should have a query string if props', () => {
      component.src = phonySrc;
      component.width = 200;
      fixture.detectChanges();
      const selectedQueryString = component.selectQueryString();
      const expectedSrc = `${phonySrc}${selectedQueryString}`;
      expect(component.composedSrc).toBe(expectedSrc);
    });

    it('should build source from variant', () => {
      component.src = phonySrc;
      component.variant = 'sm';
      fixture.detectChanges();
      const selectedQueryString = component.selectQueryString();
      const expectedSrc = `${phonySrc}${selectedQueryString}`;
      expect(component.composedSrc).toBe(expectedSrc);
    });
  });
});

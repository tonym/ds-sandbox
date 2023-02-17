import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ImageSourceProp, ResponsiveImage } from './ResponsiveImage';
import { ImageModule } from '../Image/index';
import useTheme from '../../styles/useTheme/index';
import { ImageVariantValues } from '../../types/index';
import testHelper from '../../testing/testHelper/index';

describe('ResponsiveImage', () => {
  let component: ResponsiveImage;
  let fixture: ComponentFixture<ResponsiveImage>;
  const phonySrc = 'https://www.opensesame.com/assets/images/cat.jpg';
  const selectorMap = {
    img: 'img',
    picture: 'picture'
  };
  const theme = useTheme();

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveImage],
      imports: [ImageModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveImage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a responsive image element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selectorMap.img)).toBeTruthy();
  });

  it('should have an img element if element is "img"', () => {
    component.element = 'img';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selectorMap.img)).toBeTruthy();
  });

  it('should have a picture element if element is "picture"', () => {
    component.element = 'picture';
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

  describe('Query String', () => {
    it('should be empty string if no variant or props provided', () => {
      fixture.detectChanges();
      const selectedQueryString = component.selectQueryString();
      expect(selectedQueryString).toBe('');
    });

    it('should create a query string if there are values in the variant', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { width: 200 };
      const selectedQueryString = component.selectQueryString(variant);
      expect(selectedQueryString).toBeTruthy();
    });

    it('should prepend a question mark if there are values', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { width: 200 };
      const selectedQueryString = component.selectQueryString(variant);
      expect(selectedQueryString.charAt(0)).toBe('?');
    });

    it('should contain a value if there is a value', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { width: 200 };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?width=200';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should contain delimited values if there are values', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { height: 400, width: 200 };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?height=400&width=200';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have bgColor if bgColor provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { bgColor: 'fcfcfc' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?bg-color=fcfcfc';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have blur if blur provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { blur: '50' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?blur=50';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have brightness if brightness provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { brightness: '50' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?brightness=50';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have canvas if canvas provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { canvas: '320,240,offset-x0.25,offset-y0.50' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?canvas=320,240,offset-x0.25,offset-y0.50';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have contrast if contrast provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { contrast: '50' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?contrast=50';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have crop if crop provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { crop: '200,400' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?crop=200,400';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have disable if disable provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { disable: 'upscale' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?disable=upscale';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have dpr if dpr provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { dpr: '2' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?dpr=2';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have enable if enable provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { enable: 'upscale' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?enable=upscale';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have fit if fit provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { fit: 'cover' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?fit=cover';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have format if format provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { format: 'gif' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?format=gif';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have height if height provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { height: 200 };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?height=200';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have optimize if optimize provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { optimize: 'medium' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?optimize=medium';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have orient if orient provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { orient: 'h' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?orient=h';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have pad if pad provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { pad: '25,50,75,100' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?pad=25,50,75,100';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have quality if quality provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { quality: '75' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?quality=75';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have resizeFilter if resizeFilter provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { resizeFilter: 'nearest' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?resize-filter=nearest';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have saturation if saturation provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { saturation: '50' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?saturation=50';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have sharpen if sharpen provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { sharpen: 'a5,r2,t0' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?sharpen=a5,r2,t0';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have trim if trim provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { trim: '25,50,75,100' };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?trim=25,50,75,100';
      expect(selectedQueryString).toBe(expectedQueryString);
    });

    it('should have width if width provided', () => {
      fixture.detectChanges();
      const variant: ImageVariantValues = { width: 200 };
      const selectedQueryString = component.selectQueryString(variant);
      const expectedQueryString = '?width=200';
      expect(selectedQueryString).toBe(expectedQueryString);
    });
  });

  describe('Breakpoints', () => {
    it('should create a breakpoint from a theme value', () => {
      fixture.detectChanges();
      const themeBreakpointKey = 'sm';
      const themeBreakpoint = theme.breakpoints.values[themeBreakpointKey];
      const selectedBreakpoint = component.selectBreakpoint(themeBreakpointKey);
      const expectedBreakpoint = `(max-width: ${themeBreakpoint}px)`;
      expect(selectedBreakpoint).toBe(expectedBreakpoint);
    });

    it('should create a breakpoint from a number', () => {
      fixture.detectChanges();
      const breakpoint = 1024;
      const selectedBreakpoint = component.selectBreakpoint(breakpoint);
      const expectedBreakpoint = `(max-width: ${breakpoint}px)`;
      expect(selectedBreakpoint).toBe(expectedBreakpoint);
    });

    it('should create a breakpoint from a string', () => {
      fixture.detectChanges();
      const breakpoint = '1024';
      const selectedBreakpoint = component.selectBreakpoint(breakpoint);
      const expectedBreakpoint = `(max-width: ${breakpoint}px)`;
      expect(selectedBreakpoint).toBe(expectedBreakpoint);
    });

    it('should create a breakpoint from a qualified string', () => {
      fixture.detectChanges();
      const breakpoint = '1024px';
      const selectedBreakpoint = component.selectBreakpoint(breakpoint);
      const expectedBreakpoint = `(max-width: ${breakpoint})`;
      expect(selectedBreakpoint).toBe(expectedBreakpoint);
    });
  });

  describe('Picture Source', () => {
    it('should have a srcset prop', () => {
      component.src = phonySrc;
      fixture.detectChanges();
      const source = {};
      const selectedPictureSource = component.selectPictureSource(source);
      const expectedPictureSource = { srcset: component.src };
      expect(selectedPictureSource).toEqual(expectedPictureSource);
    });

    it('should have a srcset prop with query string if variant provided', () => {
      component.src = phonySrc;
      fixture.detectChanges();
      const source = { imageOptions: { variant: 'sm' } };
      const variant = { ...theme.media.images.variants.sm, ...source.imageOptions };
      const selectedQueryString = component.selectQueryString(variant);
      const selectedPictureSource = component.selectPictureSource(source);
      const expectedPictureSource = { srcset: `${component.src}${selectedQueryString}` };
      expect(selectedPictureSource).toEqual(expectedPictureSource);
    });

    it('should have a srcset prop with query string if props provided', () => {
      component.src = phonySrc;
      fixture.detectChanges();
      const source = { imageOptions: { width: 200 } };
      const variant = { ...source.imageOptions };
      const selectedQueryString = component.selectQueryString(variant);
      const selectedPictureSource = component.selectPictureSource(source);
      const expectedPictureSource = { srcset: `${component.src}${selectedQueryString}` };
      expect(selectedPictureSource).toEqual(expectedPictureSource);
    });

    it('should have a media value if a breakpoint provided', () => {
      component.src = phonySrc;
      fixture.detectChanges();
      const source: ImageSourceProp = { breakpoint: 'sm' };
      const selectedBreakpoint = component.selectBreakpoint('sm');
      const selectedPictureSource = component.selectPictureSource(source);
      expect(selectedPictureSource.media).toEqual(selectedBreakpoint);
    });

    it('should not have a media value if no breakpoint provided', () => {
      component.src = phonySrc;
      fixture.detectChanges();
      const source = {};
      const selectedPictureSource = component.selectPictureSource(source);
      expect(selectedPictureSource.media).toBeFalsy();
    });

    it('should have a type value if a type provided', () => {
      component.src = phonySrc;
      fixture.detectChanges();
      const source = { type: 'image/jpg' };
      const selectedPictureSource = component.selectPictureSource(source);
      expect(selectedPictureSource.type).toEqual(source.type);
    });

    it('should not have a type value if no type provided', () => {
      component.src = phonySrc;
      fixture.detectChanges();
      const source = {};
      const selectedPictureSource = component.selectPictureSource(source);
      expect(selectedPictureSource.type).toBeFalsy();
    });

    it('should create composed picture sources from sources if element is picture', () => {
      component.src = phonySrc;
      component.element = 'picture';
      component.sources = [{ breakpoint: 'sm', imageOptions: { variant: 'sm ' } }];
      fixture.detectChanges();
      expect(component.composedPictureSources.length).toEqual(1);
    });
  });

  describe('Image Sources', () => {
    it('should compose image srcset', () => {
      component.src = phonySrc;
      component.sources = [
        { breakpoint: 'sm', size: 200, srcset: 200 },
        { size: 680, srcset: 680 }
      ];
      fixture.detectChanges();
      expect(component.composedImageSrcset).toBeTruthy();
    });

    it('should not compose image srcset if element is "picture"', () => {
      component.src = phonySrc;
      component.element = 'picture';
      component.sources = [
        { breakpoint: 'sm', size: 200, srcset: 200 },
        { size: 680, srcset: 680 }
      ];
      fixture.detectChanges();
      expect(component.composedImageSrcset).toBe('');
    });

    it('should compose image sizes', () => {
      component.src = phonySrc;
      component.sources = [
        { breakpoint: 'sm', size: 200, srcset: 200 },
        { size: 680, srcset: 680 }
      ];
      fixture.detectChanges();
      expect(component.composedImageSizes).toBeTruthy();
    });

    it('should not compose image sizes if srcset is not width', () => {
      component.src = phonySrc;
      component.sources = [
        { breakpoint: 'sm', size: 200, srcset: '2x' },
        { size: 680, srcset: 680 }
      ];
      fixture.detectChanges();
      expect(component.composedImageSizes).toBe('');
    });

    it('should not compose image sizes if element is "picture"', () => {
      component.src = phonySrc;
      component.element = 'picture';
      component.sources = [
        { breakpoint: 'sm', size: 200, srcset: '2x' },
        { size: 680, srcset: 680 }
      ];
      fixture.detectChanges();
      expect(component.composedImageSizes).toBe('');
    });

    it('should compose srcset from size if no srcset given', () => {
      component.src = phonySrc;
      component.sources = [{ breakpoint: 'sm', size: 200 }, { size: 680 }];
      fixture.detectChanges();
      expect(component.composedImageSrcset).toBeTruthy();
    });

    it('should compose srcset from breakpoint if breakpoint given for srcset', () => {
      component.src = phonySrc;
      component.sources = [
        { breakpoint: 'sm', size: 200, srcset: 'sm' },
        { size: 680, srcset: 'md' }
      ];
      fixture.detectChanges();
      const breakpoint = theme.breakpoints.values.sm;
      expect(component.composedImageSrcset).toContain(breakpoint);
    });

    it('should compose srcset from image variant if variant given', () => {
      component.src = phonySrc;
      component.sources = [
        {
          breakpoint: 'sm',
          imageOptions: {
            variant: 'sm'
          },
          size: 200,
          srcset: 'sm'
        },
        { size: 680, srcset: 'md' }
      ];
      fixture.detectChanges();
      const variant = theme.media.images.variants.sm;
      expect(component.composedImageSrcset).toContain(variant.width);
    });

    it('should compose image sizes from breakpoint if no size given', () => {
      component.src = phonySrc;
      component.sources = [{ breakpoint: 'sm', srcset: 200 }, { srcset: 680 }];
      fixture.detectChanges();
      const expectedSize = theme.breakpoints.values.sm;
      expect(component.composedImageSizes).toContain(expectedSize);
    });
  });
});

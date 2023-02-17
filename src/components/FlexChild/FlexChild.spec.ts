import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FlexChild } from './FlexChild';
import testHelper from '../../testing/testHelper/index';

describe('FlexChild', () => {
  let component: FlexChild;
  let fixture: ComponentFixture<FlexChild>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FlexChild]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexChild);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a flex child element', () => {
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

  describe('Align self', () => {
    it.each`
      alignSelf      | expectedClass
      ${undefined}   | ${'alignSelfAuto'}
      ${'auto'}      | ${'alignSelfAuto'}
      ${'flexStart'} | ${'alignSelfFlexStart'}
      ${'flexEnd'}   | ${'alignSelfFlexEnd'}
      ${'center'}    | ${'alignSelfCenter'}
      ${'flexStart'} | ${'alignSelfFlexStart'}
      ${'baseline'}  | ${'alignSelfBaseline'}
      ${'stretch'}   | ${'alignSelfStretch'}
    `('should have class $expectedClass when alignSelf is $alignSelf', ({ alignSelf, expectedClass }) => {
      component.alignSelf = alignSelf ? alignSelf : component.alignSelf;
      fixture.detectChanges();
      expect(component.composedClasses).toContain(component.classes[expectedClass]);
    });
  });

  describe('Flex classes', () => {
    it.each`
      property        | value
      ${'flex'}       | ${'1 1 100%'}
      ${'flexBasis'}  | ${'auto'}
      ${'flexGrow'}   | ${1}
      ${'flexShrink'} | ${1}
      ${'order'}      | ${1}
    `('should have a $property class if $property is provided', ({ property, value }) => {
      component[property] = value;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector(selector);
      expect(selectedElement.classList).toContain(component[`${property}Class`]);
    });
  });
});

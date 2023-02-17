import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppBar } from './AppBar';
import { PaperModule } from '../Paper/index';
import capitalize from '../../helpers/capitalize/index';
import testHelper from '../../testing/testHelper/index';

describe('AppBar', () => {
  let component: AppBar;
  let fixture: ComponentFixture<AppBar>;
  const selector = `div`;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppBar],
      imports: [PaperModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBar);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an appBar element', () => {
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

  describe('Background color', () => {
    it.each`
      backgroundColor
      ${undefined}
      ${'default'}
      ${'error'}
      ${'info'}
      ${'inherit'}
      ${'primary'}
      ${'secondary'}
      ${'success'}
      ${'transparent'}
      ${'warning'}
    `('should set backgroundColor to provided color or primary if undefined: $backgroundColor', ({ backgroundColor }) => {
      component.backgroundColor = backgroundColor ? backgroundColor : component.backgroundColor;
      fixture.detectChanges();
      const backgroundColorClass = `backgroundColor${capitalize(component.backgroundColor)}`;
      expect(component.composedClasses).toContain(component.classes[backgroundColorClass]);
    });
  });

  describe('Placement, shadow, and position', () => {
    it.each`
      test                             | classExpected | elevated     | placement    | position      | testClass
      ${'set placement to top'}        | ${true}       | ${undefined} | ${undefined} | ${undefined}  | ${'placementTop'}
      ${'set placement to top'}        | ${true}       | ${undefined} | ${'top'}     | ${undefined}  | ${'placementTop'}
      ${'have a shadow'}               | ${true}       | ${undefined} | ${'top'}     | ${undefined}  | ${'elevatedTop'}
      ${'have a shadow'}               | ${true}       | ${true}      | ${'top'}     | ${undefined}  | ${'elevatedTop'}
      ${'have a shadow'}               | ${true}       | ${'true'}    | ${'top'}     | ${undefined}  | ${'elevatedTop'}
      ${'not have a shadow'}           | ${false}      | ${false}     | ${'top'}     | ${undefined}  | ${'elevatedTop'}
      ${'not have a shadow'}           | ${false}      | ${'false'}   | ${'top'}     | ${undefined}  | ${'elevatedTop'}
      ${'set placement to bottom'}     | ${true}       | ${undefined} | ${'bottom'}  | ${undefined}  | ${'elevatedBottom'}
      ${'have a shadow'}               | ${true}       | ${undefined} | ${'bottom'}  | ${undefined}  | ${'elevatedBottom'}
      ${'have a shadow'}               | ${true}       | ${true}      | ${'bottom'}  | ${undefined}  | ${'elevatedBottom'}
      ${'have a shadow'}               | ${true}       | ${'true'}    | ${'bottom'}  | ${undefined}  | ${'elevatedBottom'}
      ${'not have a shadow'}           | ${false}      | ${false}     | ${'bottom'}  | ${undefined}  | ${'elevatedBottom'}
      ${'not have a shadow'}           | ${false}      | ${'false'}   | ${'bottom'}  | ${undefined}  | ${'elevatedBottom'}
      ${'set placement to top'}        | ${true}       | ${undefined} | ${'top'}     | ${'fixed'}    | ${'placementTop'}
      ${'set placement to top'}        | ${true}       | ${undefined} | ${'top'}     | ${'absolute'} | ${'placementTop'}
      ${'set placement to bottom'}     | ${true}       | ${undefined} | ${'bottom'}  | ${'fixed'}    | ${'placementBottom'}
      ${'set placement to bottom'}     | ${true}       | ${undefined} | ${'bottom'}  | ${'absolute'} | ${'placementBottom'}
      ${'not set placement to top'}    | ${false}      | ${undefined} | ${undefined} | ${'relative'} | ${'placementTop'}
      ${'not set placement to top'}    | ${false}      | ${undefined} | ${'top'}     | ${'relative'} | ${'placementTop'}
      ${'not set placement to bottom'} | ${false}      | ${undefined} | ${'bottom'}  | ${'relative'} | ${'placementBottom'}
      ${'not set placement to top'}    | ${false}      | ${undefined} | ${undefined} | ${'static'}   | ${'placementTop'}
      ${'not set placement to top'}    | ${false}      | ${undefined} | ${'top'}     | ${'static'}   | ${'placementTop'}
      ${'not set placement to bottom'} | ${false}      | ${undefined} | ${'bottom'}  | ${'static'}   | ${'placementBottom'}
      ${'set position to fixed'}       | ${true}       | ${undefined} | ${undefined} | ${undefined}  | ${'positionFixed'}
      ${'set position to fixed'}       | ${true}       | ${undefined} | ${undefined} | ${'fixed'}    | ${'positionFixed'}
      ${'set position to absolute'}    | ${true}       | ${undefined} | ${undefined} | ${'absolute'} | ${'positionAbsolute'}
      ${'set position to relative'}    | ${true}       | ${undefined} | ${undefined} | ${'relative'} | ${'positionRelative'}
      ${'set position to static'}      | ${true}       | ${undefined} | ${undefined} | ${'static'}   | ${'positionStatic'}
    `(
      'should $test when elevated is $elevated, placement is $placement, and position is $position',
      ({ classExpected, elevated, placement, position, testClass }) => {
        component.elevated = elevated || elevated === false ? elevated : component.elevated;
        component.placement = placement ? placement : component.placement;
        component.position = position ? position : component.position;
        fixture.detectChanges();
        expect(component.composedClasses.includes(component.classes[testClass])).toBe(classExpected);
      }
    );
  });
});

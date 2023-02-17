import { ChangeDetectionStrategy, Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab } from '../Tab/index';
import { Tabs } from './Tabs';
import testHelper from '../../testing/testHelper/index';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'og-test-tabs',
  template: `
    <og-tabs>
      <og-tab>tab one</og-tab>
      <og-tab>tab two</og-tab>
    </og-tabs>
  `
})
class TestTabs {}

const selectors = {
  root: '#tabs-root',
  variantContainer: '#variant-container'
};

describe('Tabs', () => {
  let component: Tabs;
  let fixture: ComponentFixture<TestTabs>;

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab, Tabs, TestTabs],
      imports: []
    })
      .overrideComponent(TestTabs, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTabs);
    component = fixture.debugElement.children[0].componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Tabs element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selectors.root)).toBeTruthy();
  });

  it('should have a root class', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selectors.root);
    expect(selectedElement.classList).toContain(component.classes.root);
  });

  it('should detect changes', () => {
    spyOn(component, 'prepareComponent');
    component.ngOnChanges();
    expect(component.prepareComponent).toHaveBeenCalled();
  });

  it('should accept a custom className', () => {
    const customClass = 'custom-class';
    component.className = customClass;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector(selectors.root);
    expect(selectedElement.classList).toContain(customClass);
  });

  describe('Centered', () => {
    it.each`
      centered     | expectedResult
      ${undefined} | ${false}
      ${false}     | ${false}
      ${'false'}   | ${false}
      ${true}      | ${true}
      ${'true'}    | ${true}
    `('should check for a centered class and return $expectedResult when centered is $centered', ({ centered, expectedResult }) => {
      component.centered = centered || centered === false ? centered : component.centered;
      fixture.detectChanges();
      expect(component.composedClasses.includes(component.classes.centered)).toBe(expectedResult);
    });
  });

  it('should select the correct tab when the tab is clicked', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const controlElement = compiled.querySelector('#tab-container-1 span');
    controlElement.click();
    expect(component.activeTab).toBe(1);
  });

  it('should not select a tab when the tab is clicked and selfSelect is false', () => {
    component.selfSelect = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const controlElement = compiled.querySelector('#tab-container-1 span');
    controlElement.click();
    expect(component.activeTab).toBe(-1);
  });

  it('should make activeTab a number if a string is provided', () => {
    component.activeTab = '1';
    fixture.detectChanges();
    expect(component.activeTab).toBe(1);
  });

  it('should select the correct tab when activeTab is provided', () => {
    component.activeTab = 1;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const selectedElement = compiled.querySelector('#tab-1');
    expect(selectedElement.classList).toContain(component.classes.selected);
  });
});

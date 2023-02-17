import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Pagination } from './Pagination';
import { ButtonBaseModule } from '../ButtonBase/index';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { IconButtonModule } from '../IconButton/index';
import testHelper from '../../testing/testHelper/index';
import { ComponentPortal } from '@angular/cdk/portal';

describe('Pagination', () => {
  let component: Pagination;
  let fixture: ComponentFixture<Pagination>;
  const selector = 'ul';

  testHelper.configureTestSuite();

  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Pagination],
      imports: [ButtonBaseModule, FlexChildModule, FlexModule, HttpClientTestingModule, IconButtonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagination);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a pagination element', () => {
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

  describe('Count and Page values', () => {
    it.each`
      prop       | value
      ${'count'} | ${3}
      ${'count'} | ${'3'}
      ${'page'}  | ${4}
      ${'page'}  | ${'4'}
    `('should have a _$prop of $value when $prop is $value', ({ prop, value }) => {
      component.count = 4;
      component[prop] = value;
      fixture.detectChanges();
      expect(component[`_${prop}`]).toBe(parseInt(`${value}`, 10));
    });

    it('should not accept a count less than one', () => {
      component.count = 0;
      fixture.detectChanges();
      expect(component._count).toBe(1);
    });
  });

  describe('Page clamp', () => {
    it.each`
      test                             | expectedResult | page | pageClamp
      ${'clamp the starting page'}     | ${1}           | ${0} | ${undefined}
      ${'clamp the ending page'}       | ${1}           | ${2} | ${undefined}
      ${'clamp the starting page'}     | ${1}           | ${0} | ${true}
      ${'clamp the starting page'}     | ${1}           | ${0} | ${'true'}
      ${'clamp the ending page'}       | ${1}           | ${2} | ${true}
      ${'clamp the ending page'}       | ${1}           | ${2} | ${'true'}
      ${'not clamp the starting page'} | ${0}           | ${0} | ${false}
      ${'not clamp the starting page'} | ${0}           | ${0} | ${'false'}
      ${'not clamp the ending page'}   | ${2}           | ${2} | ${false}
      ${'not clamp the ending page'}   | ${2}           | ${2} | ${'false'}
    `('should $test to $expectedResult when page is $page and pageClamp is $pageClamp', ({ expectedResult, page, pageClamp }) => {
      component.pageClamp = pageClamp || pageClamp === false ? pageClamp : component.pageClamp;
      component.page = page;
      fixture.detectChanges();
      expect(component._page).toBe(expectedResult);
    });
  });

  describe('Size', () => {
    it.each`
      expectedClass        | size
      ${'itemContainerSm'} | ${undefined}
      ${'itemContainerSm'} | ${'sm'}
      ${'itemContainerMd'} | ${'md'}
    `('should have a $expectedClass when size is $size', ({ expectedClass, size }) => {
      component.size = size ? size : component.size;
      fixture.detectChanges();
      expect(component.itemContainerClass).toContain(component.classes[expectedClass]);
    });
  });

  describe('First button', () => {
    it.each`
      count        | showFirstButton
      ${undefined} | ${undefined}
      ${undefined} | ${false}
      ${undefined} | ${'false'}
      ${0}         | ${true}
      ${0}         | ${'true'}
      ${0}         | ${false}
      ${0}         | ${'false'}
      ${3}         | ${false}
      ${3}         | ${'false'}
    `('should not show first button if count is $count and showFirstButton is $showFirstButton', ({ count, showFirstButton }) => {
      component.count = count > -1 ? count : component.count;
      component.showFirstButton = showFirstButton || showFirstButton === false ? showFirstButton : component.showFirstButton;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector('.first_button');
      expect(selectedElement).toBeFalsy();
    });

    it.each`
      count | showFirstButton
      ${3}  | ${true}
      ${3}  | ${'true'}
    `('should show first button if count is $count and showFirstButton is $showFirstButton', ({ count, showFirstButton }) => {
      component.count = count;
      component.showFirstButton = showFirstButton;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector('.first_button');
      expect(selectedElement).toBeTruthy();
    });
  });

  describe('Last button', () => {
    it.each`
      count        | showLastButton
      ${undefined} | ${undefined}
      ${undefined} | ${false}
      ${undefined} | ${'false'}
      ${0}         | ${true}
      ${0}         | ${'true'}
      ${0}         | ${false}
      ${0}         | ${'false'}
      ${3}         | ${false}
      ${3}         | ${'false'}
    `('should not show last button if count is $count and showLastButton is $showLastButton', ({ count, showLastButton }) => {
      component.count = count > -1 ? count : component.count;
      component.showLastButton = showLastButton || showLastButton === false ? showLastButton : component.showLastButton;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector('.last_button');
      expect(selectedElement).toBeFalsy();
    });

    it.each`
      count | showLastButton
      ${3}  | ${true}
      ${3}  | ${'true'}
    `('should show last button if count is $count and showLastButton is $showLastButton', ({ count, showLastButton }) => {
      component.count = count;
      component.showLastButton = showLastButton;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector('.last_button');
      expect(selectedElement).toBeTruthy();
    });
  });

  describe('Previous button', () => {
    it.each`
      count        | showPreviousButton
      ${undefined} | ${undefined}
      ${undefined} | ${false}
      ${undefined} | ${'false'}
      ${0}         | ${true}
      ${0}         | ${'true'}
      ${0}         | ${false}
      ${0}         | ${'false'}
      ${3}         | ${false}
      ${3}         | ${'false'}
    `(
      'should not show the previous button if count is $count and showPreviousButton is $showPreviousButton',
      ({ count, showPreviousButton }) => {
        component.count = count > -1 ? count : component.count;
        component.showPreviousButton =
          showPreviousButton || showPreviousButton === false ? showPreviousButton : component.showPreviousButton;
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const selectedElement = compiled.querySelector('.previous_button');
        expect(selectedElement).toBeFalsy();
      }
    );

    it.each`
      count | showPreviousButton
      ${3}  | ${undefined}
      ${3}  | ${true}
      ${3}  | ${'true'}
    `(
      'should show the previous button if count is $count and showPreviousButton is $showPreviousButton',
      ({ count, showPreviousButton }) => {
        component.count = count;
        component.showPreviousButton = showPreviousButton ? showPreviousButton : component.showPreviousButton;
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const selectedElement = compiled.querySelector('.previous_button');
        expect(selectedElement).toBeTruthy();
      }
    );
  });

  describe('Next button', () => {
    it.each`
      count        | showNextButton
      ${undefined} | ${undefined}
      ${undefined} | ${false}
      ${undefined} | ${'false'}
      ${0}         | ${true}
      ${0}         | ${'true'}
      ${0}         | ${false}
      ${0}         | ${'false'}
      ${3}         | ${false}
      ${3}         | ${'false'}
    `('should not show the previous button if count is $count and showNextButton is $showNextButton', ({ count, showNextButton }) => {
      component.count = count > -1 ? count : component.count;
      component.showNextButton = showNextButton || showNextButton === false ? showNextButton : component.showNextButton;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector('.next_button');
      expect(selectedElement).toBeFalsy();
    });

    it.each`
      count | showNextButton
      ${3}  | ${undefined}
      ${3}  | ${true}
      ${3}  | ${'true'}
    `('should show the previous button if count is $count and showNextButton is $showNextButton', ({ count, showNextButton }) => {
      component.count = count;
      component.showNextButton = showNextButton ? showNextButton : component.showNextButton;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const selectedElement = compiled.querySelector('.next_button');
      expect(selectedElement).toBeTruthy();
    });
  });

  describe('Page change', () => {
    it('should emit a page change event when page changes', () => {
      component.count = 9;
      spyOn(component.onPageChange, 'emit');
      fixture.detectChanges();
      const event = new MouseEvent('click');
      const expectedResult = { component: 'Pagination', event: event, page: 2 };
      component.changePage(2, event);
      expect(component.onPageChange.emit).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('Container classes', () => {
    it('should have a container class', () => {
      fixture.detectChanges();
      expect(component.itemContainerClass).toContain(component.classes.itemContainer);
    });

    it.each`
      expectedClass        | size
      ${'itemContainerSm'} | ${undefined}
      ${'itemContainerSm'} | ${'sm'}
      ${'itemContainerMd'} | ${'md'}
    `('should have an $expectedClass when size is $size', ({ expectedClass, size }) => {
      component.size = size ? size : component.size;
      fixture.detectChanges();
      expect(component.itemContainerClass).toContain(component.classes[expectedClass]);
    });
  });

  describe('Item classes', () => {
    it('should have an enabled class if index !== page', () => {
      component.count = 3;
      fixture.detectChanges();
      const response = component.composeItemClass(component._page + 1);
      expect(response).toContain(component.iconButtonClasses.enabled);
    });

    it.each`
      color          | count | expectedClass
      ${undefined}   | ${3}  | ${'selectedDefault'}
      ${'default'}   | ${3}  | ${'selectedDefault'}
      ${'primary'}   | ${3}  | ${'selectedPrimary'}
      ${'secondary'} | ${3}  | ${'selectedSecondary'}
    `('should have class $expectedClass when color is $color and count is $count', ({ color, count, expectedClass }) => {
      component.color = color ? color : component.color;
      component.count = count ? count : component.count;
      fixture.detectChanges();
      const response = component.composeItemClass(component._page);
      expect(response).toContain(component.classes[expectedClass]);
    });

    it.each`
      expectedClass        | size
      ${'itemContainerSm'} | ${undefined}
      ${'itemContainerSm'} | ${'sm'}
      ${'itemContainerMd'} | ${'md'}
    `('should have class $expectedClass when size is $size', ({ expectedClass, size }) => {
      component.size = size ? size : component.size;
      fixture.detectChanges();
      const response = component.composeItemClass(component._page);
      expect(component.itemContainerClass).toContain(component.classes[expectedClass]);
    });
  });

  describe('Big item classes', () => {
    it('should compose big item classes if count is > 8', () => {
      component.count = 9;
      spyOn(component, 'composeBigItemClasses');
      fixture.detectChanges();
      expect(component.composeBigItemClasses).toHaveBeenCalled();
    });

    it('should weight the first 5 when page is < 5', () => {
      component.count = 9;
      fixture.detectChanges();
      expect(component.itemClasses[5]).toEqual('...');
    });

    it('should only show the last number after the ... when page is < 5', () => {
      component.count = 9;
      fixture.detectChanges();
      expect(component.itemClasses[component.itemClasses.length - 2]).toEqual('');
    });

    it('should have one elipsis when page is < 5', () => {
      component.count = 9;
      fixture.detectChanges();
      const expectedDots = component.itemClasses.filter(item => item === '...');
      expect(expectedDots.length).toBe(1);
    });

    it('should weight the last 5 when page is > count - 5', () => {
      component.count = 9;
      component.page = 8;
      fixture.detectChanges();
      expect(component.itemClasses[1]).toEqual('...');
    });

    it('should have one elipsis when page > count - 5', () => {
      component.count = 9;
      component.page = 8;
      fixture.detectChanges();
      const expectedDots = component.itemClasses.filter(item => item === '...');
      expect(expectedDots.length).toBe(1);
    });

    it('should weight the middle pages on the low end when page is > 5 and < count - 5', () => {
      component.count = 20;
      component.page = 10;
      fixture.detectChanges();
      expect(component.itemClasses[7]).toBe('');
    });

    it('should weight the middle pages on the low end when page is > 5 and < count - 5', () => {
      component.count = 20;
      component.page = 10;
      fixture.detectChanges();
      expect(component.itemClasses[11]).toBe('...');
    });

    it('should have two elipses when page < 5 and > count - 5', () => {
      component.count = 20;
      component.page = 10;
      fixture.detectChanges();
      const expectedDots = component.itemClasses.filter(item => item === '...');
      expect(expectedDots.length).toBe(2);
    });
  });

  describe('Small item classes', () => {
    it('should compose small item classes if count is < 7', () => {
      component.count = 6;
      spyOn(component, 'composeSmallItemClasses');
      fixture.detectChanges();
      expect(component.composeSmallItemClasses).toHaveBeenCalled();
    });

    it('should have no elipsis', () => {
      component.count = 6;
      fixture.detectChanges();
      const expectedDots = component.itemClasses.filter(item => item === '...');
      expect(expectedDots.length).toBe(0);
    });
  });
});

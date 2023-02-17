import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Accordion } from './Accordion';
import { DividerModule } from '../Divider/index';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { SvgIconModule } from '../SvgIcon/index';
import { TypographyModule } from '../Typography/index';

@NgModule({
  declarations: [Accordion],
  exports: [Accordion],
  imports: [CommonModule, DividerModule, FlexChildModule, FlexModule, SvgIconModule, TypographyModule]
})
export class AccordionModule {}

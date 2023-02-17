import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListItem } from './MenuListItem';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { SvgIconModule } from '../SvgIcon/index';
import { TypographyModule } from '../Typography/index';

@NgModule({
  declarations: [MenuListItem],
  exports: [MenuListItem],
  imports: [CommonModule, FlexChildModule, FlexModule, SvgIconModule, TypographyModule]
})
export class MenuListItemModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from './MenuItem';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { SvgIconModule } from '../SvgIcon/index';
import { TypographyModule } from '../Typography/index';

@NgModule({
  declarations: [MenuItem],
  exports: [MenuItem],
  imports: [CommonModule, FlexChildModule, FlexModule, SvgIconModule, TypographyModule]
})
export class MenuItemModule {}

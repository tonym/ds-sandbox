import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagination } from './Pagination';
import { ButtonBaseModule } from '../ButtonBase/index';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { IconButtonModule } from '../IconButton/index';

@NgModule({
  declarations: [Pagination],
  exports: [Pagination],
  imports: [ButtonBaseModule, CommonModule, FlexChildModule, FlexModule, IconButtonModule]
})
export class PaginationModule {}

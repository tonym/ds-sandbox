import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePagination } from './TablePagination';
import { FlexChildModule } from '../FlexChild/index';
import { FlexModule } from '../Flex/index';
import { IconButtonModule } from '../IconButton/index';

@NgModule({
  declarations: [TablePagination],
  exports: [TablePagination],
  imports: [CommonModule, FlexChildModule, FlexModule, IconButtonModule]
})
export class TablePaginationModule {}

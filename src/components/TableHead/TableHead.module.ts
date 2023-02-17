import { NgModule } from '@angular/core';
import { TableHead } from './TableHead';
import { TableService } from '../Table/Table.service';

@NgModule({
  declarations: [TableHead],
  exports: [TableHead],
  imports: [],
  providers: [TableService]
})
export class TableHeadModule {}

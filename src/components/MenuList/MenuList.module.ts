import { NgModule } from '@angular/core';
import { MenuList } from './MenuList';
import { PaperModule } from '../Paper/index';

@NgModule({
  declarations: [MenuList],
  exports: [MenuList],
  imports: [PaperModule]
})
export class MenuListModule {}

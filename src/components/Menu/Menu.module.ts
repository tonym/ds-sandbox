import { NgModule } from '@angular/core';
import { Menu } from './Menu';
import { PaperModule } from '../Paper/index';

@NgModule({
  declarations: [Menu],
  exports: [Menu],
  imports: [PaperModule]
})
export class MenuModule {}

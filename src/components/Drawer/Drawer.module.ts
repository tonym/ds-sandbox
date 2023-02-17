import { NgModule } from '@angular/core';
import { Drawer } from './Drawer';
import { PaperModule } from '../Paper/index';

@NgModule({
  declarations: [Drawer],
  exports: [Drawer],
  imports: [PaperModule]
})
export class DrawerModule {}

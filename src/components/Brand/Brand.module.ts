import { NgModule } from '@angular/core';
import { Brand } from './Brand';
import { ImageModule } from '../Image/index';

@NgModule({
  declarations: [Brand],
  exports: [Brand],
  imports: [ImageModule]
})
export class BrandModule {}

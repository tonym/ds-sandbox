import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from './Image';

@NgModule({
  declarations: [Image],
  exports: [Image],
  imports: [CommonModule]
})
export class ImageModule {}

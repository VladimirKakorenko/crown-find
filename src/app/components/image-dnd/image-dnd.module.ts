import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDndComponent } from './image-dnd.component';



@NgModule({
    declarations: [ImageDndComponent],
    exports: [
        ImageDndComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class ImageDndModule { }

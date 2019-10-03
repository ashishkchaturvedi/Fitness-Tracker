import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatFormFieldModule} from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatFormFieldModule],
    exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatFormFieldModule]
})
export class MaterialModule {}
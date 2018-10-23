import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTaskModalPage } from './new-task-modal';

@NgModule({
  declarations: [
    NewTaskModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTaskModalPage),
  ],
})
export class NewTaskModalPageModule {}

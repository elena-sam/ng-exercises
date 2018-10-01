import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment4Component } from './assignment4.component';
import { GameControlComponent } from './game-control.component';
import { OddComponent } from './odd.component';
import { EvenComponent } from './even.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [Assignment4Component],
  declarations: [Assignment4Component, GameControlComponent, OddComponent, EvenComponent],
})
export class Assignment4Module { }

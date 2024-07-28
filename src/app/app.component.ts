import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './store/counter.actions';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';

/*
imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
*/

@Component({
  selector: 'app-root',
  imports:[RouterOutlet, MyCounterComponent],
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {}

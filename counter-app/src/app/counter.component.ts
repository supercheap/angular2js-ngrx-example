import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter';

interface AppState {
  counter: number;
}

@Component({
  selector: 'counter',
  template: `
  <h1>Counter</h1>
  <p>A very simple "hello world" introduction to the Redux pattern using '@ngrx/store' and Angular 2.</p>
  <p>Current count: <span>{{counter | async}} </span></p>
  <p>
    <button (click)="increment()">Increment +</button>
    <button (click)="decrement()">Decrement -</button>
    <button (click)="reset()">Reset</button>
  </p>
  `
})
export class CounterComponent {
    title = 'Counter Example';
    counter: Observable<number>;

    constructor(private store: Store<AppState>){
        this.counter = store.select('counter');
    }

    increment() {
        this.store.dispatch({ type: INCREMENT });
    }

    decrement() {
        this.store.dispatch({ type: DECREMENT });
    }

    reset() {
        this.store.dispatch({ type: RESET });
    }
}
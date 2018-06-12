import { Assignment6Module } from './assignment6/assignment6.module';
import { Assignment5Module } from './assignment5/assignment5.module';
import { Assignment4Module } from './assignment4/assignment4.module';
import { Assignment3Module } from './assignment3/assignment3.module';
import { Assignment2Module } from './assignment2/assignment2.module';
import { Assignment1Module } from './assignment1/assignment1.module';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        Assignment1Module,
        Assignment2Module,
        Assignment3Module,
        Assignment4Module,
        Assignment5Module,
        Assignment6Module,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});

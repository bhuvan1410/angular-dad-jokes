import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadJokesComponent } from './dad-jokes.component';

describe('DadJokesComponent', () => {
  let component: DadJokesComponent;
  let fixture: ComponentFixture<DadJokesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadJokesComponent]
    });
    fixture = TestBed.createComponent(DadJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

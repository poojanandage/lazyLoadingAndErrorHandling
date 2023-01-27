import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecriuterComponent } from './recriuter.component';

describe('RecriuterComponent', () => {
  let component: RecriuterComponent;
  let fixture: ComponentFixture<RecriuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecriuterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecriuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

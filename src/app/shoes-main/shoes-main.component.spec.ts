import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesMainComponent } from './shoes-main.component';

describe('ShoesMainComponent', () => {
  let component: ShoesMainComponent;
  let fixture: ComponentFixture<ShoesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

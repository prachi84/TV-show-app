import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdetailNewpageComponent } from './showdetail-newpage.component';

describe('ShowdetailNewpageComponent', () => {
  let component: ShowdetailNewpageComponent;
  let fixture: ComponentFixture<ShowdetailNewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdetailNewpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdetailNewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

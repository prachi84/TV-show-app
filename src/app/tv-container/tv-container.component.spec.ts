import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVContainerComponent } from './tv-container.component';

describe('TVContainerComponent', () => {
  let component: TVContainerComponent;
  let fixture: ComponentFixture<TVContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

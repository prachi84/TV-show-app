import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaGenreComponent } from './drama-genre.component';

describe('DramaGenreComponent', () => {
  let component: DramaGenreComponent;
  let fixture: ComponentFixture<DramaGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DramaGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

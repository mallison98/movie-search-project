import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverDisplayComponent } from './cover-display.component';

describe('CoverDisplayComponent', () => {
  let component: CoverDisplayComponent;
  let fixture: ComponentFixture<CoverDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

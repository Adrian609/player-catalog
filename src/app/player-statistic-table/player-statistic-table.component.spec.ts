import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatisticTableComponent } from './player-statistic-table.component';

describe('PlayerStatisticTableComponent', () => {
  let component: PlayerStatisticTableComponent;
  let fixture: ComponentFixture<PlayerStatisticTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerStatisticTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatisticTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

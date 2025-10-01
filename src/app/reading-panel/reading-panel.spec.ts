import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingPanel } from './reading-panel';

describe('ReadingPanel', () => {
  let component: ReadingPanel;
  let fixture: ComponentFixture<ReadingPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

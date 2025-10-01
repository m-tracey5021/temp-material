import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingPanel } from './writing-panel';

describe('WritingPanel', () => {
  let component: WritingPanel;
  let fixture: ComponentFixture<WritingPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

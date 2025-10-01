import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyPanel } from './vocabulary-panel';

describe('VocabularyPanel', () => {
  let component: VocabularyPanel;
  let fixture: ComponentFixture<VocabularyPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabularyPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabularyPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

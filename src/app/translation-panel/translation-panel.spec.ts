import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationPanel } from './translation-panel';

describe('TranslationPanel', () => {
  let component: TranslationPanel;
  let fixture: ComponentFixture<TranslationPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslationPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslationPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

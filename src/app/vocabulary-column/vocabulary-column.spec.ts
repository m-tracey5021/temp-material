import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyColumn } from './vocabulary-column';

describe('VocabularyColumn', () => {
  let component: VocabularyColumn;
  let fixture: ComponentFixture<VocabularyColumn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabularyColumn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabularyColumn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

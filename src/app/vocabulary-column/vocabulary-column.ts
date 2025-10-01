import { Component, Input } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-vocabulary-column',
  imports: [MatDividerModule, MatListModule],
  templateUrl: './vocabulary-column.html',
  styleUrl: './vocabulary-column.css'
})
export class VocabularyColumn {

    @Input() column: string[] = [];
}

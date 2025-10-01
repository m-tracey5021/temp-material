import { Component, Input } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { VocabularyColumn } from "../vocabulary-column/vocabulary-column";

@Component({
  selector: 'app-vocabulary-panel',
  imports: [MatDividerModule, MatListModule, VocabularyColumn],
  templateUrl: './vocabulary-panel.html',
  styleUrl: './vocabulary-panel.css'
})
export class VocabularyPanel {

    @Input() wordMap: Map<string, string> = new Map<string, string>([

        ["Bed", "Letto"],

        ["Room", "Camera"],
        
        ["Car", "Macchina"],
    ]);
    firstColumn: string[] = [];
    secondColumn: string[] = [];

    ngOnInit() {

        for (const [key, value] of this.wordMap) {

            this.firstColumn.push(key);
            this.secondColumn.push(value);
        }
    }
}

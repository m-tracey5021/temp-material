import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { MatDrawer } from '@angular/material/sidenav';

import { WritingPanel } from "../writing-panel/writing-panel";
import { ReadingPanel } from "../reading-panel/reading-panel";
import { TranslationPanel } from "../translation-panel/translation-panel";
import { VocabularyPanel } from "../vocabulary-panel/vocabulary-panel";
import { ReviewEntry } from '../../model/review-entry';


@Component({
    selector: 'app-main-panel',
    imports: [
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    WritingPanel,
    ReadingPanel,
    TranslationPanel,
    VocabularyPanel
    
],
    templateUrl: './main-panel.html',
    styleUrl: './main-panel.css'
})
export class MainPanel {

    @ViewChild('drawer') drawer!: MatDrawer;

    showFiller = true;
    learningMode: string = '';

    create: boolean = true;
    reviewEntries: ReviewEntry[] = [

        {
            name: 'The Beach',

            date: '03-10-2025',

            timesReviewed: 3
        },
        {
            name: 'The Forest',

            date: '04-12-2025',

            timesReviewed: 1
        },
        {
            name: 'At the shops',

            date: '04-12-2025',

            timesReviewed: 1
        },
        {
            name: 'My House',

            date: '21-09-2025',

            timesReviewed: 2
        }
    ]

    reviewEntryClick(entry: ReviewEntry, event?: any) {

        console.log(entry.name);
    }

    setMode(mode: string) {

        console.log(mode);
    }
}

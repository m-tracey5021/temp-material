import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

import { WritingPanel } from "../writing-panel/writing-panel";
import { ReadingPanel } from "../reading-panel/reading-panel";
import { TranslationPanel } from "../translation-panel/translation-panel";
import { VocabularyPanel } from "../vocabulary-panel/vocabulary-panel";

@Component({
    selector: 'app-main-panel',
    imports: [
        FormsModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatButtonModule, 
        MatButtonToggleModule, 
        MatCheckboxModule, 
        MatCardModule,
        WritingPanel, 
        ReadingPanel, 
        TranslationPanel, 
        VocabularyPanel],
    templateUrl: './main-panel.html',
    styleUrl: './main-panel.css'
})
export class MainPanel {

    learningMode: string = '';

    review: boolean = false;
}

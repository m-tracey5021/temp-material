import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { KeyValuePipe } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-writing-panel',
  imports: [MatCardModule, MatGridListModule, MatInputModule, MatFormFieldModule, FormsModule, KeyValuePipe],
  templateUrl: './writing-panel.html',
  styleUrl: './writing-panel.css'
})
export class WritingPanel {

    @Input() exercises: string[] = [];
    @Input() answerMap: Map<string, string> = new Map<string, string>([

        ["What is your favourite colour and why?", "Il mio colore preferito e rossa."],

        ["How do I get to the train station?", "Vai a centro e poi vai destro."],
        
        ["What time does the film start?", "La film inizia alle 8 ora."],
    ]);
}

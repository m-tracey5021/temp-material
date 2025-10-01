import { Component, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { ReadingPanel } from "./reading-panel/reading-panel";
import { WritingPanel } from "./writing-panel/writing-panel";
import { MainPanel } from "./main-panel/main-panel";

@Component({
    selector: 'app-root',
    imports: [
    RouterOutlet,
    FormsModule,
    ReadingPanel,
    WritingPanel,
    MainPanel
],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('temp-material');
}

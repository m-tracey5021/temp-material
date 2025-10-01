import { Component, Input, } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-reading-panel',
  imports: [MatCardModule],
  templateUrl: './reading-panel.html',
  styleUrl: './reading-panel.css'
})
export class ReadingPanel {

    @Input() passage: string[] = ['these', 'are', 'words'];
    @Input() toReview: string[] = ['these', 'are', 'more', 'words'];
    @Input() isReviewMode: boolean = true;

    ngOnInit() {

        var ex = '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"';
    
        var total = ex + ex + ex + ex + ex + ex + ex + ex;

        this.passage = total.split(/\s+/).filter(w => w);
    }

    onWordClick(word: string) {

        console.log('Clicked: ', word);
    }

}

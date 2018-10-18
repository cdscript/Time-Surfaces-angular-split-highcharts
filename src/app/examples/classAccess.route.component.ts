import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { SplitComponent, SplitAreaDirective } from 'angular-split';

import { examples } from './../listExamples';


@Component({
  selector: 'sp-ex-class-access',
  styles: [`
    :host {
        display: block;
        width: 100%;
        margin: 50px 0;
    }
    .btns {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    .btns > div {
        flex: 1 1 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  `],
  template: `
    <div class="container">
        <sp-example-title [ex]="data"></sp-example-title>
        <div class="split-example" [dir]="splitEl.dir">
            <split direction="horizontal">
              <split-area [size]="75">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </split-area>
              <split-area [size]="3">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </split-area>
              <split-area [visible]="false" [size]="18">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </split-area>
              <split-area [size]="4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </split-area>
          </split>
        </div>
        <br>
        <div class="btns">
            <div>
                <button class="btn btn-warning" [class.active]="!splitEl.disabled" (click)="splitEl.disabled = !splitEl.disabled">{{ 'splitEl.disabled: ' + splitEl.disabled }}</button>
            </div>
            <div>
                <button class="btn btn-warning" (click)="splitEl.dir = (splitEl.dir === 'rtl' ? 'ltr' : 'rtl')">{{ 'splitEl.dir: "' + splitEl.dir + '"' }}</button>
            </div>
        </div>
    </div>`
})
export class ClassAccessComponent implements AfterViewInit {
    data: IExampleData

    @ViewChild(SplitComponent) splitEl: SplitComponent
    @ViewChildren(SplitAreaDirective) areasEl: QueryList<SplitAreaDirective> 
    
    constructor() {
        this.data = examples[6];
    }

    ngAfterViewInit() {
        console.log('this.splitEl', this.splitEl);
        console.log('this.areasEl', this.areasEl);
    }
}

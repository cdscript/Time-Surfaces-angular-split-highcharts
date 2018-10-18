import { Component, ViewChild } from "@angular/core";
import { SortableComponent } from "ngx-bootstrap/sortable";

import { examples } from "./../listExamples";

//import { ts_data } from "./data";

@Component({
  selector: "sp-ex-geek-demo",
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        margin: 50px 0;
      }

      split-area {
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
          1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
      }

      .opts-prop {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
      }
      .opts-prop > div {
        margin-bottom: 10px;
      }

      .opts-area > .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: #e8e8e8;
      }

      .area-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 4px;
        cursor: move;
      }
      .area-item button {
        margin: 0 5px;
      }

      .num {
        color: #000000;
        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
          1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
      }
      label {
        margin: 0;
      }
    `
  ],
  template: `
    <div class="container">
      <!--
        <sp-example-title [ex]="data"></sp-example-title>
-->
        <div class="split-example" style="background-color: #e5e0e0;">
            <split [direction]="d.dir" 
                   [gutterSize]="d.gutterSize" 
                   [width]="d.width" 
                   [height]="d.height" 
                   useTransition="true" 
                   style="background-color: #ffffff;">
                <ng-template ngFor let-area [ngForOf]="d.areas" let-index="index">
                    <split-area *ngIf="area.present" 
                                [visible]="area.visible" 
                                [order]="index" 
                                [size]="area.size"
                                [style.background-color]="area.color">
                              
                                {{ area.id }}
                                    <chart [options]="options"></chart>
                              </split-area>
                </ng-template>
            </split>
        </div>
    

        <div class="opts-prop">
            <div>
                <label>Direction: </label>
                <div class="btn-group">
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.dir" btnRadio="horizontal">horizontal</label>
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.dir" btnRadio="vertical">vertical</label>
                </div>
            </div>
            <div>
                <label>Width: </label>
                <div class="btn-group">
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.width" [btnRadio]="null">null</label>
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.width" btnRadio="400">400</label>
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.width" btnRadio="600">600</label>
                </div>
            </div>
            <div>
                <label>Height: </label>
                <div class="btn-group">
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.height" [btnRadio]="null">null</label>
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.height" btnRadio="200">200</label>
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.height" btnRadio="350">350</label>
                </div>
            </div>
            <div>
                <label>Gutter size: </label>
                <div class="btn-group">
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.gutterSize" [btnRadio]="null">null</label>
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.gutterSize" btnRadio="7">7</label>
                    <label class="btn btn-warning btn-sm" [(ngModel)]="d.gutterSize" btnRadio="22">22</label>
                </div>
            </div>
        </div>
   <chart [options]="options"></chart>
        <div class="opts-area">
            <div class="title">
                <label><b>(Drag elements to change order):</b></label>
                <button class="btn btn-warning btn-sm" (click)="addArea()">Add area</button>            
            </div>
            <bs-sortable [(ngModel)]="d.areas" [itemTemplate]="itemTemplate"></bs-sortable>
            
            <ng-template #itemTemplate let-item="item" let-index="index">
                <div [style.background-color]="item.value.color" class="area-item">
                    <div class="num">{{ item.value.id }}</div>
                    <div>
                        <button class="btn btn-warning btn-sm" [class.active]="!item.value.present" (click)="item.value.present = !item.value.present">{{ '*ngIf="' + item.value.present + '"' }}</button>
                        <button class="btn btn-warning btn-sm" [class.active]="!item.value.visible" (click)="item.value.visible = !item.value.visible">{{ '[visible]="' + item.value.visible + '"' }}</button>
                        <button class="btn btn-warning btn-sm" (click)="removeArea(item.value)">Remove</button>
                    </div>
                </div>
            </ng-template>
        </div>
</div>`
})
export class GeekDemoComponent {
  data: IExampleData;

  @ViewChild(SortableComponent)
  sortableComponent: SortableComponent;
  /*
  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: "heatmap",
      margin: [60, 10, 80, 50]
    },
    title: {
      text: "Highcharts-ng map example",
      align: "left",
      x: 40
    },
    subtitle: {
      text: "Temperature variation",
      align: "left",
      x: 40
    }
  };
  */

  d = {
    dir: "horizontal",
    gutterSize: null,
    width: null,
    height: null,
    areas: [
      {
        id: getRandomNum(),
        color: getRandomColor(),
        size: 25,

        present: true,
        visible: true
      },
      {
        id: getRandomNum(),
        color: getRandomColor(),
        size: 50,

        present: true,
        visible: true
      } /*,
      {
        id: getRandomNum(),
        color: getRandomColor(),
        size: 25,

        present: true,
        visible: true
      }*/
    ]
  };

  constructor() {
    this.data = examples[7];
    //this.tsdata = document.getElementById("csv").innerHTML;
    //console.log(ts_data["Ambient Temperature"].chartOptions.series["0"].data);
    //timeSurfaces["Ambient Temperature"].chartOptions.series["0"].data
    this.options = {
      chart: { type: "heatmap", margin: [60, 10, 80, 50] },
      series: [
        {
          name: "Sales per employee",
          borderWidth: 0,
          data: [
            [Date.UTC(2013, 0, 1), 0, 1.3],
            [Date.UTC(2013, 0, 1), 1, 1.4],
            [Date.UTC(2013, 0, 1), 2, 1.6],
            [Date.UTC(2013, 0, 1), 3, 2.0],
            [Date.UTC(2013, 0, 1), 4, 2.4],
            [Date.UTC(2013, 0, 1), 5, 2.9],
            [Date.UTC(2013, 0, 1), 6, 3.1],
            [Date.UTC(2013, 0, 1), 7, 2.8],
            [Date.UTC(2013, 0, 1), 8, 2.8],
            [Date.UTC(2013, 0, 1), 9, 2.7],
            [
              Date.UTC(2013, 0, 1),
              10,
              3.4
            ] /*
            [Date.UTC(2013,1, 1), 0, 2.2],
            [2, 2, 123],
            [2, 3, 64],
            [2, 4, 52],
            [3, 0, 72],
            [3, 1, 132],
            [3, 2, 114],
            [3, 3, 19],
            [3, 4, 16],
            [4, 0, 38],
            [4, 1, 5],
            [4, 2, 8],
            [4, 3, 117],
            [4, 4, 115],
            [5, 0, 88],
            [5, 1, 32],
            [5, 2, 12],
            [5, 3, 6],
            [5, 4, 120],
            [6, 0, 13],
            [6, 1, 44],
            [6, 2, 88],
            [6, 3, 98],
            [6, 4, 96],
            [7, 0, 31],
            [7, 1, 1],
            [7, 2, 82],
            [7, 3, 32],
            [7, 4, 30],
            [8, 0, 85],
            [8, 1, 97],
            [8, 2, 123],
            [8, 3, 64],
            [8, 4, 84],
            [9, 0, 47],
            [9, 1, 114],
            [9, 2, 31],
            [9, 3, 48],
            [9, 4, 91]
            */
          ]
          // dataLabels: { enabled: true, color: "#000000" }
        }
      ],
      boostThreshold: 100,
      nullColor: "#EFEFEF",
      colsize: 24 * 36e5,
      tooltip: {
        headerFormat: "Temperature<br/>",
        pointFormat: "{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>"
      },
      turboThreshold: Number.MAX_VALUE,
      boost: { useGPUTranslations: true }, // one day // #3404, remove after 4.0.5 release
      title: { text: "MAHAN TIME SURFACES", align: "left", x: 40 },
      subtitle: {
        text: "Temperature variation by day and hour through 2013",
        align: "left",
        x: 40
      },
      xAxis: {
        type: "datetime",
        //min: Date.UTC(2013, 0, 1),
        //max: Date.UTC(2014, 0, 1),
        labels: { align: "left", x: 5, y: 14, format: "{value:%B}" },
        showLastLabel: false,
        tickLength: 16
      }, // long month

      yAxis: {
        title: { text: null },
        labels: { format: "{value}:00" },
        minPadding: 0,
        maxPadding: 0,
        startOnTick: false,
        endOnTick: false,
        tickPositions: [0, 6, 12, 18, 24],
        tickWidth: 1,
        min: 0,
        max: 23,
        reversed: true
      },
      colorAxis: {
        stops: [
          [0, "#3060cf"],
          [0.5, "#fffbbc"],
          [0.9, "#c4463a"],
          [1, "#c4463a"]
        ],
        min: -15,
        max: 25,
        startOnTick: false,
        endOnTick: false,
        labels: { format: "{value}℃" }
      }
    }; // one day // #3404, remove after 4.0.5 release
  }
  options: Object;

  addArea() {
    this.d.areas.push({
      id: getRandomNum(),
      color: getRandomColor(),
      size: 25,

      present: true,
      visible: true
    });

    this.sortableComponent.writeValue(this.d.areas);
  }

  removeArea(area: any) {
    this.d.areas.splice(this.d.areas.indexOf(area), 1);

    this.sortableComponent.writeValue(this.d.areas);
  }
}

function getRandomNum(): number {
  return Math.round(Math.random() * 1000);
}

function getRandomColor(): string {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
}

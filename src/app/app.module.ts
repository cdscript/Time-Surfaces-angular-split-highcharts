import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { SortableModule } from "ngx-bootstrap/sortable";
import { AngularSplitModule } from "angular-split";

import { AppComponent } from "./app.component";
import { TopbarComponent } from "./topbar.component";
import { ExampleTitleComponent } from "./exampleTitle.component";
import { HomeComponent } from "./home/home.route.component";
import { ChangelogComponent } from "./changelog/changelog.route.component";
import { DocComponent } from "./doc/doc.route.component";

import { SimpleComponent } from "./examples/simple.route.component";
import { NestedComponent } from "./examples/nested.route.component";
import { TransitionsComponent } from "./examples/transitions.route.component";
import { CustomGutterStyleComponent } from "./examples/customGutterStyle.route.component";
import { TogglingDomAndVisibleComponent } from "./examples/togglingDomAndVisible.route.component";
import { GutterClickComponent } from "./examples/gutterClick.route.component";
import { ClassAccessComponent } from "./examples/classAccess.route.component";
import { GeekDemoComponent } from "./examples/geekDemo.route.component";
import { DirRtlComponent } from "./examples/dirRtl.route.component";
import { WorkspaceLocalstorageComponent } from "./examples/workspaceLocalstorage.route.component";

import { ChangelogService } from "./changelog.service";

import { examples } from "./listExamples";

//import { AngularHighchartsChartModule } from "angular-highcharts-chart";

import { ChartModule } from "angular2-highcharts";
import { HighchartsStatic } from "angular2-highcharts/dist/HighchartsService";
import * as highchart from "highcharts";
import * as highchartsHeatmap from "highcharts/modules/heatmap";
declare var require: any;
const Highcharts = require("highcharts");
Highcharts.setOptions({
  colors: ["#50B432"]
});

const routes = [
  { path: "", component: GeekDemoComponent },
  { path: "changelog", component: ChangelogComponent },
  { path: "documentation", component: DocComponent },
  ...examples
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    ChangelogComponent,
    DocComponent,
    ExampleTitleComponent,
    SimpleComponent,
    NestedComponent,
    TransitionsComponent,
    CustomGutterStyleComponent,
    TogglingDomAndVisibleComponent,
    GutterClickComponent,
    ClassAccessComponent,
    GeekDemoComponent,
    DirRtlComponent,
    WorkspaceLocalstorageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    SortableModule.forRoot(),
    AngularSplitModule,
    ChartModule.forRoot(
      //require('highcharts'),
      Highcharts,
      highchartsHeatmap,
      require("highcharts/highcharts-more"),
      //require('highcharts/highcharts-heatmap'),
      //require('highcharts/highchart-3d'),
      require("highcharts/modules/exporting")
    )
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    ChangelogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function highchartsFactory() {
  highchartsHeatmap(highchart);
  return highchart;
}

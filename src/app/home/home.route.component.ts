import { Component } from "@angular/core";

@Component({
  selector: "sp-home",
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        margin: 80px 0 50px 0;
      }

      h1 {
        color: #ffc421;
        margin-bottom: 30px;
      }
      h1 > small {
        color: #000000;
      }

      .jumbotron {
        margin-bottom: 0;
      }
      .jumbotron > div {
        margin: 20px;
      }
    `
  ],
  template: `
    <div class="container">
        <div class="jumbotron">
            <h1>
              Time surfaces explained           
            </h1>        
        </div>
    </div>`
})
export class HomeComponent {
  code1: string = `npm install angular-split`;

  code2: string = `import { AngularSplitModule } from 'angular-split';
  
@NgModule({
  imports: [
    AngularSplitModule,
    ...
  ],
  ...
})
export class AppModule {}`;

  code3: string = `System.config({
  map: {
    'angular-split': 'node_modules/angular-split/bundles/angular-split.umd.js',
    ...
  },
  ...
});`;
}

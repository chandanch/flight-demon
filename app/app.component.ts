import { Component } from '@angular/core';

@Component({
  selector: 'flight-demon',
  styles: [`
    
  `],
  template: `
   <div>
    <h2> Flight Demon </h2>
    <p> Packs all the modules using SystemJs</p>
    <p>Version <b>{{version}}</b></p>
   </div>
  `
})
export class AppComponent {

  // current version of the demon
  version = '1.0.2';
}
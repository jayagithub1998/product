import { Component } from '@angular/core';
import { faBell} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tododlist';
  faBell=faBell
}

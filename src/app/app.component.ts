import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { LoginService } from './components/login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecommerce-lari';
  showLoading = true;
  showMenu = false;
  constructor(private router: Router,
    private loginService: LoginService) {
    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart) {
        this.showLoading = true;
      }

      if(routerEvent instanceof NavigationEnd) {
        this.showLoading = false;
      }
    });
  }

  ngOnInit() {
    this.loginService.menuEvent.subscribe((res) => {
      this.showMenu = res;
    });
  }

}

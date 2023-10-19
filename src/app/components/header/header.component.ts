import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  redirectToProjects() {
    this.router.navigate(['/home'])
  }

  redirectToAbout() {
    this.router.navigate(['/about'])
  }

  getRoute(url: String): boolean {
    return this.router.url == url
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private sharedService: SharedService) { }

  redirectToProjects() {
    this.sharedService.triggerScrollToPortfolioArea();
  }

  getRoute(url: String): boolean {
    return this.router.url == url
  }
}

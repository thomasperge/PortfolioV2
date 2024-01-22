import { Component, ElementRef } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
})
export class AllProjectsComponent {
  constructor(private el: ElementRef, private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.scrollToPortfolioArea$.subscribe(() => {
      this.scrollToPortfolioArea();
    });
  }

  private scrollToPortfolioArea() {
    const portfolioArea = this.el.nativeElement.querySelector('#portfolioArea');

    if (portfolioArea) {
      portfolioArea.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}

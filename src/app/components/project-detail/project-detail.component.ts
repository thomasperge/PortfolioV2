import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  @Input() direction: string = "";
  @Input() titleProject: string = "";
  @Input() descriptionProject: string = "";
  @Input() tagProject: string[] = [];
  @Input() imgProject1: string = "";
  @Input() imgProject2: string = "";
  @Input() colorProject: string = "";
  @Input() link: string = "";
  @Input() linkName: string = "";
  @Input() githubLink: string = "";
  @Input() users: string = "";
  @Input() imgStyle: { [key: string]: string } = {};
  
  constructor() { }
}

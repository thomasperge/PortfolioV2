import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-project',
  templateUrl: './left-project.component.html',
  styleUrls: ['./left-project.component.scss']
})
export class LeftProjectComponent {
  @Input() titleProject: string = "";
  @Input() descriptionProject: string = "";
  @Input() tagProject: string[] = [];
  @Input() imgProject1: string = "";
  @Input() imgProject2: string = "";
  @Input() colorProject: string = "";
  @Input() link: string = "";
  @Input() linkName: string = "";
  @Input() githubLink: string = "";
  @Input() imgStyle: { [key: string]: string } = {};

  constructor() { }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-project',
  templateUrl: './right-project.component.html',
  styleUrls: ['./right-project.component.scss']
})
export class RightProjectComponent {
  @Input() titleProject: string = "";
  @Input() descriptionProject: string = "";
  @Input() tagProject: string[] = [];
  @Input() imgProject1: string = "";
  @Input() imgProject2: string = "";
  @Input() colorProject: string = "";

  
  constructor() { }
}

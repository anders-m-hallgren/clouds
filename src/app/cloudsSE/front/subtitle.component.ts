import { Component, Input } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'app-subtitle',
  templateUrl: 'subtitle.component.html',
})
export class SubtitleComponent {
  @Input() subtitle = '';
  
}
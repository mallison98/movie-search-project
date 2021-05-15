import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cover-display',
  templateUrl: './cover-display.component.html',
  styleUrls: ['./cover-display.component.css']
})
export class CoverDisplayComponent implements OnInit {
  @Input() imgPath: string = null;

  constructor() { }

  ngOnInit(): void {
  }

}

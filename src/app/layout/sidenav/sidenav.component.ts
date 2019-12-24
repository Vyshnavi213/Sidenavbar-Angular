import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  innerWidth: number;
  @Input() open: boolean

  constructor() { }

  @Output() close = new EventEmitter<boolean>();

  ngOnInit() {
  }
  // this.close.emit(this.open);
  @HostListener('window:resize', ['$event'])
  onResize(event) {

    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);

    if (this.innerWidth < 1200) {
      this.open = false;
    }
    else {
      this.open = true;
    }
    this.close.emit(this.open);
  }
}
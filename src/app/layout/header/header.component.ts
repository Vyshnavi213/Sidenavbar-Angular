import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

navbar:boolean=true;
show:boolean;

  constructor(IconRegistry:MatIconRegistry,sanitizer:DomSanitizer, private route:Router) {
    IconRegistry.addSvgIcon(
      'baricon',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/baricon.svg'));
   }

  ngOnInit() {    
  }

  onToggleSidenav() {
    this.navbar=!this.navbar;
  }

  onClose(close) {
    if (close) {
      this.show = false;
    }
    else {
      this.show = true;
    }
  }

  loginpage() 
  {
    this.route.navigate(['login']);
    localStorage.removeItem('mail');
  }
}

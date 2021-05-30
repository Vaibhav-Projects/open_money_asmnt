import { Component, OnInit, HostListener } from '@angular/core';
import { NavItem } from '../models/nav-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  isScrolled: boolean = false;

  navItems: NavItem[] = [{ name: "Products", isButton: false },
  { name: "Solutions", isButton: false },
  { name: "Pricing", isButton: false },
  { name: "Login", isButton: true },
  { name: "Get Started", isButton: true }];

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll")
  scrollEvent() {
    window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
}

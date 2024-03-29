import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleMenu(menuElement: HTMLDivElement) {
    menuElement.classList.contains('show')
      ? menuElement.classList.remove('show')
      : menuElement.classList.add('show');
  }
}

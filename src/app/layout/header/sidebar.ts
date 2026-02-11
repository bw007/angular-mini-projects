import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { MegaMenuItem, PrimeIcons } from "primeng/api";
import { Button } from "primeng/button";
import { Drawer } from "primeng/drawer";

@Component({
  selector: "app-header",
  templateUrl: "./sidebar.html",
  imports: [Drawer, Button, RouterLink]
})

export class Sidebar implements OnInit {
  items: MegaMenuItem[] | undefined;
  private router: Router;
  visible: boolean = false;

  constructor(router: Router) {
    this.router = router
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Topic-related tasks',
        icon: PrimeIcons.BOOK,
        items: [
          [
            {
              items: [
                { label: '1. Math Operations', routerLink: '/math-operations' },
                { label: '2. Inc-Dec Button', routerLink: '/inc-dec-button' },
                { label: '3. Student CRUD', routerLink: '/student-crud' },
                { label: '4. Simple Users', routerLink: '/simple-users' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Additional tasks',
        icon: PrimeIcons.BOOK,
        items: [
          []
        ]
      }
    ];
  }
}
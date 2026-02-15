import { Component, DestroyRef, inject, OnInit, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";
import { Button } from "primeng/button";
import { Drawer } from "primeng/drawer";
import { PanelMenu } from "primeng/panelmenu";
import { filter } from "rxjs";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.html",
  imports: [Drawer, Button, PanelMenu, RouterLink]
})

export class Sidebar implements OnInit {
  items!: MenuItem[];
  visible = signal(false);

  private dsRef = inject(DestroyRef);
  private router = inject(Router);

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntilDestroyed(this.dsRef)
    ).subscribe(() => {
      this.visible.set(false);
    });

    this.items = [
      {
        label: 'Topic-related tasks',
        icon: PrimeIcons.BOOK,
        items: [
          { label: '1. Math Operations', routerLink: '#' },
          { label: '2. Inc-Dec Button', routerLink: '#' },
          { label: '3. Student CRUD', routerLink: '/student-crud' },
          { label: '4. Simple Users', routerLink: '/simple-users' }
        ]
      },
      {
        label: 'Additional tasks',
        icon: PrimeIcons.BOOK,
        items: [
          { label: '1. Portfolio', routerLink: '#' },
          { label: '2. Quiz', routerLink: '#' },
        ]
      }
    ];
  }
}
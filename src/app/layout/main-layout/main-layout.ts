import { Component } from "@angular/core";
import { Sidebar } from "../sidebar/sidebar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.html",
  imports: [Sidebar, RouterOutlet]
})
export class MainLayout {

}
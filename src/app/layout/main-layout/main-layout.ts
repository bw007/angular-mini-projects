import { Component } from "@angular/core";
import { Sidebar } from "../header/sidebar";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.html",
  imports: [Sidebar]
})
export class MainLayout {

}
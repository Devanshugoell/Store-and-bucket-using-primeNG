import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenubarModule } from "primeng/menubar";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule, MenubarModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  items = [
    {
      label: "Store",
      icon: "pi pi-home",
      routerLink: "/store",
    },
    {
      label: "Bucket",
      icon: "pi pi-shopping-cart",
      routerLink: "/bucket",
    },
  ];
}

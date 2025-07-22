import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MenubarModule } from "primeng/menubar";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MenubarModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  items: MenuItem[] = [];

  showStoreForm = false;
  storeName = "";
  storeLocation = "";

  ngOnInit() {
    this.items = [
      {
        label: "Store",
        icon: "pi pi-store",
        command: () => {
          this.showStoreForm = true;
        },
      },
      {
        label: "Bucket",
        icon: "pi pi-shopping-cart",
        command: () => {
          alert("Bucket clicked!");
        },
      },
    ];
  }

  submitForm() {
    console.log("Store Name:", this.storeName);
    console.log("Store Location:", this.storeLocation);
    this.showStoreForm = false;

    // Clear form
    this.storeName = "";
    this.storeLocation = "";
  }
}

import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-store",
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: "./store.component.html",
  styleUrl: "./store.component.css",
})
export class StoreComponent {
  item: string = "";
  price: number | null = null;
  storeItems: { item: string; price: number }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    const stored = localStorage.getItem("storeItems");
    this.storeItems = stored ? JSON.parse(stored) : [];
  }

  addItem() {
    if (!this.item || this.price === null) return;

    const newItem = { item: this.item, price: this.price };

    this.storeItems.push(newItem);
    localStorage.setItem("storeItems", JSON.stringify(this.storeItems));

    // Reset inputs
    this.item = "";
    this.price = null;
  }

  moveToBucket(index: number) {
    const itemToMove = this.storeItems.splice(index, 1)[0];

    // Update storeItems in localStorage
    localStorage.setItem("storeItems", JSON.stringify(this.storeItems));

    // Update bucketItems in localStorage
    const bucket = JSON.parse(localStorage.getItem("bucketItems") || "[]");
    bucket.push(itemToMove);
    localStorage.setItem("bucketItems", JSON.stringify(bucket));
  }

  goHome() {
    this.router.navigate(["/"]);
  }
}

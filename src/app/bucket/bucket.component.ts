import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-bucket",
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: "./bucket.component.html",
  styleUrl: "./bucket.component.css",
})
export class BucketComponent {
  bucketItems: { item: string; price: number }[] = [];

  constructor(public router: Router) {}

  ngOnInit() {
    const stored = localStorage.getItem("bucketItems");
    this.bucketItems = stored ? JSON.parse(stored) : [];
  }

  moveToStore(index: number) {
    const itemToMove = this.bucketItems.splice(index, 1)[0];
    localStorage.setItem("bucketItems", JSON.stringify(this.bucketItems));

    const store = JSON.parse(localStorage.getItem("storeItems") || "[]");
    store.push(itemToMove);
    localStorage.setItem("storeItems", JSON.stringify(store));
  }

  removeItem(index: number) {
    this.bucketItems.splice(index, 1);
    localStorage.setItem("bucketItems", JSON.stringify(this.bucketItems));
  }
}

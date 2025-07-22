import { Component, OnInit } from "@angular/core";
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

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadBucketItems();
  }

  loadBucketItems() {
    const stored = localStorage.getItem("bucketItems");
    this.bucketItems = stored ? JSON.parse(stored) : [];
  }

  moveToStore(index: number) {
    const itemToMove = this.bucketItems.splice(index, 1)[0];

    // Update localStorage for bucket
    localStorage.setItem("bucketItems", JSON.stringify(this.bucketItems));

    // Optional: move back to store (you can manage this separately)
    const storeItems = JSON.parse(localStorage.getItem("storeItems") || "[]");
    storeItems.push(itemToMove);
    localStorage.setItem("storeItems", JSON.stringify(storeItems));
  }

  clearBucket() {
    localStorage.removeItem("bucketItems");
    this.bucketItems = [];
  }

  goToStore() {
    this.router.navigate(["/store"]);
  }
}

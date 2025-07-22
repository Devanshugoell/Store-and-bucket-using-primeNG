import { Routes } from "@angular/router";
import { StoreComponent } from "./store/store.component";
import { BucketComponent } from "./bucket/bucket.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: "store", component: StoreComponent },
  { path: "bucket", component: BucketComponent },
  { path: "", component: HomeComponent },
];

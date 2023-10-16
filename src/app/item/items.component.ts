import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ItemEventData, LoadEventData, WebView } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";
import { HostListener } from "@angular/core";
@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./item.component.css", "../../style/all.min.css"],
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;

  constructor(
    private itemService: ItemService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.items = this.itemService.getFlicks();

    // const view = document.getElementById("view");
    // view.animate({
    //   translate: { x: 0, y: 100 },
    //   duration: 1000,
    //   curve: Enums.AnimationCurve.easeIn,
    // });
  }
  onFlickTap(args: ItemEventData): void {
    this.routerExtensions.navigate(["item", this.items[args.index].id]);
  }
  onScroll(event: any) {
    console.log(event);
  }
}

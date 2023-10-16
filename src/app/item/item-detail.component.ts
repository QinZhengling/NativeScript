import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Location } from "@angular/common";
import { LoadEventData, WebView } from "@nativescript/core";
@Component({
  selector: "ns-details",
  templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
  item: Item | undefined = undefined;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    if (id) {
      this.item = this.itemService.getFlickById(id);
    }
  }
  goBack() {
    console.log("go back");

    this.location.back();
  }

  openSettings() {
    console.log("open settings");
    // implement the cusotm logic
  }
  webViewSrc = "https://nativescript.org/";

  onLoadStarted(args: LoadEventData) {
    const webView = args.object as WebView;

    if (!args.error) {
      console.log("Load Start");
      console.log(`EventName: ${args.eventName}`);
      console.log(`NavigationType: ${args.navigationType}`);
      console.log(`Url: ${args.url}`);
    } else {
      console.log(`EventName: ${args.eventName}`);
      console.log(`Error: ${args.error}`);
    }
  }

  onLoadFinished(args: LoadEventData) {
    const webView = args.object as WebView;

    if (!args.error) {
      console.log("Load Finished");
      console.log(`EventName: ${args.eventName}`);
      console.log(`NavigationType: ${args.navigationType}`);
      console.log(`Url: ${args.url}`);
    } else {
      console.log(`EventName: ${args.eventName}`);
      console.log(`Error: ${args.error}`);
    }
  }
}

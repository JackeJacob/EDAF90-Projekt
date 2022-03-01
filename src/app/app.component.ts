import { Component } from "@angular/core";
import { NavbarModule, WavesModule, ButtonsModule } from "angular-bootstrap-md";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Your Movie Library";
}

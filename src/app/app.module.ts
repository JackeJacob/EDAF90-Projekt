import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {
  NavbarModule,
  WavesModule,
  ButtonsModule,
  IconsModule
} from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IconsModule,
    NavbarModule,
    FormsModule,
    WavesModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

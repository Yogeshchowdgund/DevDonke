import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  constructor(private spinner: NgxSpinnerService) { }
  startSpinner(){
    this.spinner.show(undefined,{
      type: "square-jelly-box",
      bdColor: "rgba(0,0,0,0.8)",
      color:"#fff",
      size:"default"
    });
  }
  stopSpinner(){
    this.spinner.hide();
  }
}

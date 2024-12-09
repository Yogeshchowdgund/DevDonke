import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DataInitService } from './Services/data-init.service';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { publicDecrypt } from 'crypto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private dataInitService: DataInitService
  ) {}

  ngOnInit() {
    // console.log('Spinner shown on loading')
    // this.spinner.show();
        
    // this.dataInitService.getLoadingStatus().subscribe({
    //   next: (loading) => {
    //     console.log('Loading status changed:', loading);
    //     if (loading) {
    //       this.spinner.show()
    //       console.log('Spinner shown on loading')
    //     } else {
    //       this.spinner.hide()
    //       console.log('Spinner hidden')
    //     }
    //   },
    //   error: (err) => {
    //     console.error('Error with loading status:', err);
    //     this.spinner.hide();
    //   }
    // });
  }
}
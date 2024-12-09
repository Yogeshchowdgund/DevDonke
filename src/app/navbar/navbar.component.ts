import { Component, inject, OnInit,Inject ,PLATFORM_ID } from '@angular/core';
import { DataInitService } from '../Services/data-init.service';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  lightLogoUrl: string;
  darkLogoUrl: string;
  brandName:string;
  isLightTheme: boolean = true;
  private dataInitService = inject(DataInitService);
  constructor(@Inject(PLATFORM_ID) private platformId: Object){
    this.lightLogoUrl = this.dataInitService.getlightLogoUrl();
    this.darkLogoUrl = this.dataInitService.getdarkLogoUrl();
    this.brandName = this.dataInitService.getBrandName();
  }

  ngOnInit() {
    
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)){
    this.isLightTheme = !this.isLightTheme;
      document.body.classList.toggle('dark', this.isLightTheme);
      document.body.classList.toggle('light', !this.isLightTheme);  
      this.dataInitService.changeTheme(this.isLightTheme);
    }
  }
}

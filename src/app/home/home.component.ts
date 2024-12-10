import { Component, inject ,PLATFORM_ID,Inject} from '@angular/core';
import { DataInitService } from '../Services/data-init.service';
import { isPlatformBrowser } from '@angular/common';
import { LatestCourseComponent } from '../latest-course/latest-course.component';
import { CoursesComponent } from '../courses/courses.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LatestCourseComponent,CoursesComponent,ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private dataInitService = inject(DataInitService);
  lightLogoUrl: string;
  darkLogoUrl: string;
  isLightTheme: boolean;
  homeTagLine1: string;
  homeTagLine2: string;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.lightLogoUrl = this.dataInitService.getlightLogoUrl();
    this.darkLogoUrl = this.dataInitService.getdarkLogoUrl();
    this.homeTagLine1 = this.dataInitService.gethomeTagLine1();
    this.homeTagLine2 = this.dataInitService.gethomeTagLine2();
    this.isLightTheme = true;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)){
      document.body.classList.toggle('dark', this.isLightTheme);
      document.body.classList.toggle('light', !this.isLightTheme);
    }
    this.dataInitService.theme$.subscribe((isLightTheme) => {
      this.isLightTheme = isLightTheme;
      document.body.classList.toggle('dark', this.isLightTheme);
      document.body.classList.toggle('light', !this.isLightTheme);
    });
  }
}

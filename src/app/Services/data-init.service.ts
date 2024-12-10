import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProgressBarService } from './progress-bar.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInitService {
  navBarData: any = null; 
  private themeSubject = new Subject<boolean>();
  theme$ = this.themeSubject.asObservable();

  constructor(
    private http: HttpClient,
    private progressBarService: ProgressBarService
  ) {
    
  }

  async loadData() {
    return await this.http.get<any>('data/navBarData/navBarData.json').toPromise()
  }

  async initializeData(): Promise<void> {
    let navBarData = await this.loadData();
    this.navBarData = navBarData;
  }

  getlightLogoUrl() {
    return this.navBarData.lightLogoURL;
  }

  getdarkLogoUrl() {
    return this.navBarData.darkLogoURL;
  }

  getBrandName(){
    return this.navBarData.brandName;
  }

  gethomeTagLine1(){
    return this.navBarData.homeTagLine1;
  }

  gethomeTagLine2(){
    return this.navBarData.homeTagLine2;
  }

  getLatestCourses(){
    return this.navBarData.latestCourses;
  }

  getCourses(){
    return this.navBarData.Courses;
  }

  getcontactUsImageURL(){
    return this.navBarData.contactUsImageURL;
  }

  changeTheme(isLightTheme: boolean): void {
    this.themeSubject.next(isLightTheme);
  }
}

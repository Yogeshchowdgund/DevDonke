import { Component,ElementRef,inject, ViewChild } from '@angular/core';
import { DataInitService } from '../Services/data-init.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-latest-course',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './latest-course.component.html',
  styleUrl: './latest-course.component.scss'
})
export class LatestCourseComponent {
  private dataInitService = inject(DataInitService);
  public latestCourseTitle:string;
  public btnName:string;
  public latestCourses:any;
  private latestCourseData:any;

  
  constructor(){
    this.latestCourseData = this.dataInitService.getLatestCourses();
    this.latestCourseTitle = this.latestCourseData.title;
    this.btnName = this.latestCourseData.buttonName;
    this.latestCourses = this.latestCourseData.Courses;
  }
}

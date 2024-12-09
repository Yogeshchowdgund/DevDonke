import { Component,inject } from '@angular/core';
import { DataInitService } from '../Services/data-init.service';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  private dataInitService = inject(DataInitService);
  public title:string;
  public coursesData:any;
  public subjects:any;
  public btnName:string;
  constructor(){
    this.coursesData = this.dataInitService.getCourses();
    this.title = this.coursesData.title;
    this.subjects = this.coursesData.subjects;
    this.btnName = this.coursesData.buttonName;
  }
}

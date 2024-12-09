import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogLayoutComponent } from './blog-layout/blog-layout.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'Blogs', component: BlogLayoutComponent }
];

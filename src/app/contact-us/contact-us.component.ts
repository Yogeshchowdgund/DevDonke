import { Component,inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataInitService } from '../Services/data-init.service';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  private dataInitService = inject(DataInitService);
  contactForm: FormGroup;
  public contactUsImageURL:string;
  constructor(private fb: FormBuilder) {
    this.contactUsImageURL = this.dataInitService.getcontactUsImageURL();
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Form submitted successfully!');
      // You can send the form data to a server or process it here.
    }
  }
}

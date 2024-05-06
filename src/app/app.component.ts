import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface SubmittedDataType {
  email: string;
  question: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mfe2';
  form!: FormGroup;
  submittedData: SubmittedDataType[] = [];
  hostAccess:boolean = false;
  remoteAccess:boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      question: ['', [Validators.required, Validators.minLength(6)]]
    });

    const currentUrl = window.location.href;
    console.log('Current URL:', currentUrl);
    console.log(typeof(currentUrl));
    if (currentUrl.includes("host")) {
      this.remoteAccess = false;
      this.hostAccess = true;
      console.log("The URL contains 'host'.");
    }
    
  }


  onSubmit() {
    if (this.form.valid) {
      const email = this.form.get('email')?.value;
      const question = this.form.get('question')?.value;
      this.submittedData.push(this.form.value);
      this.form.reset();

      console.log('Email:', email);
      console.log('Question:', question);

      console.log('Complete Data:', this.submittedData);
      
    }
  }
}

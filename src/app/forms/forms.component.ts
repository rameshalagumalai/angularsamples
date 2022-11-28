import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  email = '';
  name = '';
  handleSubmit(formData: { email: string; name: string }) {
    this.email = formData.email;
    this.name = formData.name;
  }
}

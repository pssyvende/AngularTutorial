import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (e) => {
        if (e.target) {
          this.imageUrl = e.target.result;                   
        }
      }
    }
  }

  onFileSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append("image", this.selectedFile);
      const upload$ = this.http.post("https://api.trace.moe/search", formData);
      upload$.subscribe(data => console.log(data));
    }
  }
}

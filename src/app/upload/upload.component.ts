import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Result } from './response.model';
import { Store } from '@ngrx/store';
import { State } from '../store/app.reducer';
import { requestedSuccesfully, startRequesting } from '../store/app.actions';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  resultsList: Result[] = [];
  isRequesting: boolean = false;

  constructor(private http: HttpClient, private store: Store<{app: State}>) { }

  ngOnInit(): void {
    this.store.select('app').subscribe(appState => {
      this.isRequesting = appState.isRequesting;
    })
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
      this.store.dispatch(startRequesting({image: formData}));
    }
  }

  convertSimilarity(similarity: number) {
    return Math.round(similarity * 100 * 100) / 100;
  }
}

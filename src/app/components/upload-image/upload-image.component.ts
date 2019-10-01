import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  @Input() image: string;
  @Output() myEvent = new EventEmitter<string>();

  constructor(public storage: AngularFireStorage, public contentService: ContentService) {}

  ngOnInit() {
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.downloadURL = url;
          this.image = url;
          this.myEvent.emit(url);
          // location.reload();
        });
      } ))
    .subscribe();
  }

}

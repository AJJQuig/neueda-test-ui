import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})
export class ShortenerComponent implements OnInit {

  shortenerForm: FormGroup;
  shortenClicked = false;
  @Output() shorten = new EventEmitter<FormGroup>();

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.setupFormGroup();
  }

  /**
   * Creates the form used for validation on the shortener field
   * @private
   */
  private setupFormGroup() {
    this.shortenerForm = this.builder.group({
      url: [null, [Validators.required]],
    });
  }

  /**
   * Sends the url to be shortened, so long as the form is valid
   */
  shortenUrl() {
    this.shortenClicked = true;

    if (this.shortenerForm.invalid) {
      return;
    }
    this.shorten.emit(this.shortenerForm);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  //Modals
  showDeleteModal: boolean = false;
  showSuccessModal: boolean = false;
  showWarningModal: boolean = false;
  @Input() showInfoModal: boolean = false;
  @Output() emitter: EventEmitter<boolean> = new  EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  //--DELETE
  ShowDeleteProduct(id: any) {
    this.showDeleteModal = true;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
  }
//-SUCCESS
  ShowSuccessModal(id: any){
    this.showSuccessModal = true;
  }
  closeSuccessModal() {
    this.showSuccessModal = false;
  }
//--WARNING
  ShowWarningModal(id: any){
    this.showWarningModal = true;
  }
  closeWarningModal() {
    this.showWarningModal = false;
  }
//--Info
  ShowInfoModal(id: any){
    console.log('openmodel');
    this.showInfoModal = true;
  }
  closeInfoModal() {
    console.log('closemodel');
    this.showInfoModal = false;
    this.emitter.emit(false);
  }
}

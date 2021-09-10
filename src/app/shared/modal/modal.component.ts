import { PeriodicElemente } from './../../components/home/admin/produtos-detalhes/produtos-detalhes.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  element?: PeriodicElemente

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElemente,
    public dialogRef: MatDialogRef<ModalComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.element, 'ele');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}

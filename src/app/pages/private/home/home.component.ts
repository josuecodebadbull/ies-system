import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalNameComponent } from '../share/modal-name/modal-name.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name: string = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalNameComponent, {
      width: '450px',
      data: { name: '' },
    });

    dialogRef.afterClosed().subscribe((name: string) => {
      this.name = name;
    });
  }

}
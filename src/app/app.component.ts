import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api'; 
  @ViewChild('htmlData') htmlData!: ElementRef
  USERS = [
    {
      id: 1,
      name: 'ghaith Bouslimi',
      email: 'ghaith@gmail.com',
      phone: '1-111-111-1111x1111',
    },
    {
      id: 2,
      name: 'nejia balti',
      email: 'nejia@gmail.com',
      phone: '1-111-111-1111x1111',
    },
    {
      id: 3,
      name: ' slah',
      email: 'slah@gmail.com',
      phone: '1-111-111-1111x1111',
    },
    {
      id: 4,
      name: 'mahdi ',
      email: 'mahdidev@gmail.com',
      phone: '1-111-111-1111x1111',
    },
    {
      id: 5,
      name: 'tawfik',
      email: 'tawfik@gmail.com',
      phone: '1-111-111-1111x1111',
    },
    {
      id: 6,
      name: 'dalila',
      email: 'dalila@gmail.com',
      phone: '1-111-111-1111x1111',
    },
  ];
  constructor() {}
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}

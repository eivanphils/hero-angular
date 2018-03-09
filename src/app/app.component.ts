import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  public json;
  convertFile(event): void {
    const input = (<HTMLInputElement>document.getElementById('fileInput'));

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
      this.json = text
      console.log('CSV: ', this.json);

      // convert text to json here
      const json = JSON.parse(this.csvJSON(text));
      console.log('Json', json);
    };
    reader.readAsText(input.files[0]);
    console.log('upload file');
  };

  csvJSON(csv) {

    const lines = csv.split('\n');

    const result = [];

    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {

      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);

    }

    // return result; //JavaScript object
    return JSON.stringify(result); // JSON
  }
}

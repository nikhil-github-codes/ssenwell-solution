import { Component } from '@angular/core';
import { filter, from, map, toArray } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';

  Morethan10: any;
  more10length: any;
  lessthan10: any;
  lessthantenlength: any;
  student = [
    { srNum: 1, name: 'ravi' },
    { srNum: 2, name: 'ravi' },
    { srNum: 3, name: 'ravi' },
    { srNum: 4, name: 'ravi' },
    { srNum: 5, name: 'ravi' },

    { srNum: 6, name: 'ravi' },
    { srNum: 7, name: 'ravi' },
    { srNum: 8, name: 'ravi' },
    { srNum: 9, name: 'ravi' },
    { srNum: 10, name: 'ravi' },
    { srNum: 11, name: 'ravi' },
    { srNum: 12, name: 'ravi' },
    { srNum: 13, name: 'ravi' },

    { srNum: 14, name: 'ravi' },
    { srNum: 15, name: 'ravi' },
    { srNum: 16, name: 'ravi' },
    { srNum: 17, name: 'ravi' },
    { srNum: 18, name: 'ravi' },
    { srNum: 19, name: 'ravi' },

    { srNum: 20, name: 'ravi' },
    { srNum: 21, name: 'ravi' },
    { srNum: 22, name: 'ravi' },

    { srNum: 23, name: 'ravi' },
    { srNum: 24, name: 'ravi' },
    { srNum: 25, name: 'ravi' },

    { srNum: 26, name: 'ravi' },
    { srNum: 27, name: 'ravi' },
    { srNum: 28, name: 'ravi' },
    { srNum: 29, name: 'ravi' },

    { srNum: 30, name: 'ravi' },
    { srNum: 31, name: 'ravi' },
    { srNum: 32, name: 'ravi' },
    { srNum: 33, name: 'ravi' },
    { srNum: 34, name: 'ravi' },
    { srNum: 35, name: 'ravi' },

    { srNum: 36, name: 'ravi' },
    { srNum: 37, name: 'ravi' },
    { srNum: 38, name: 'ravi' },
    { srNum: 39, name: 'ravi' },
    { srNum: 40, name: 'ravi' },
    { srNum: 41, name: 'ravi' },

    { srNum: 42, name: 'ravi' },
    { srNum: 43, name: 'ravi' },
    { srNum: 44, name: 'ravi' },

    { srNum: 45, name: 'ravi' },
    { srNum: 46, name: 'ravi' },

    { srNum: 47, name: 'ravi' },

    { srNum: 48, name: 'ravi' },

    { srNum: 49, name: 'ravi' },
    { srNum: 50, name: 'ravi' },

    { srNum: 51, name: 'ravi' },
    { srNum: 52, name: 'ravi' },

    { srNum: 53, name: 'ravi' },
    { srNum: 54, name: 'ravi' },
    { srNum: 55, name: 'ravi' },
    { srNum: 56, name: 'ravi' },

    { srNum: 57, name: 'ravi' },
    { srNum: 58, name: 'ravi' },
    { srNum: 59, name: 'ravi' },

    { srNum: 60, name: 'ravi' },
    { srNum: 61, name: 'ravi' },

    { srNum: 62, name: 'ravi' },
    { srNum: 63, name: 'ravi' },
    { srNum: 64, name: 'ravi' },

    { srNum: 64, name: 'ravi' },
    { srNum: 65, name: 'ravi' },

    { srNum: 66, name: 'ravi' },
    { srNum: 67, name: 'ravi' },
    { srNum: 68, name: 'ravi' },
    { srNum: 69, name: 'ravi' },

    { srNum: 70, name: 'ravi' },
    { srNum: 71, name: 'ravi' },

    { srNum: 72, name: 'ravi' },
    { srNum: 73, name: 'ravi' },
    { srNum: 74, name: 'ravi' },

    { srNum: 75, name: 'ravi' },
    { srNum: 76, name: 'ravi' },

    { srNum: 78, name: 'ravi' },
    { srNum: 79, name: 'ravi' },

    { srNum: 80, name: 'ravi' },
    { srNum: 81, name: 'ravi' },
    { srNum: 82, name: 'ravi' },
    { srNum: 83, name: 'ravi' },
    { srNum: 84, name: 'ravi' },
    { srNum: 85, name: 'ravi' },
    { srNum: 86, name: 'ravi' },
    { srNum: 87, name: 'ravi' },
    { srNum: 88, name: 'ravi' },
    { srNum: 89, name: 'ravi' },
    { srNum: 90, name: 'ravi' },
    { srNum: 91, name: 'ravi' },
    { srName: 92, name: 'thakre' },
    { srName: 93, name: 'thakre' },

    { srNum: 94, name: 'nikhil' },
    { srNum: 95, name: 'nikhil' },
    { srNum: 96, name: 'nikhil' },
    { srNum: 97, name: 'nikhil' },
    { srNum: 98, name: 'nikhil' },
    { srNum: 99, name: 'nikhil' },
    { srNum: 100, name: 'nikhil' },

    //  { srNum: 89, name: 'thakre' },
  ];

  arlenght: any;
  data = [];
  length: any;
  lenLen: any;
  data1: Array<any> = [];
  data2: Array<any> = [];
  data3: Array<any> = [];
  ngOnInit(): void {
    const studentdata = from(this.student);

    studentdata.pipe(toArray()).subscribe((res: any) => {
      console.log(res, 'res');
      this.data = res;
    });

    studentdata
      .pipe(
        filter((res: any) => {
          return res.name === 'ravi';
        })
      )
      .pipe(toArray())
      .subscribe((res: any) => {
        console.log(res, '10>');
        this.data1 = res;
        this.Morethan10 = res[0].name;
        this.more10length = res.length;
      });

    studentdata
      .pipe(filter((res: any) => res.name === 'nikhil'))
      .pipe(toArray())
      .subscribe((res) => {
        this.data2 = res;
        this.length = res.length;
        this.lenLen = res[0].name;
      });

    studentdata
      .pipe(filter((res: any) => res.name === 'thakre'))
      .pipe(toArray())
      .subscribe((res) => {
        console.log(res, 'dfdsfadsags');
        this.data3 = res;
        this.lessthantenlength = res.length;
        this.lessthan10 = res[0].name;
      });
  }
}
    



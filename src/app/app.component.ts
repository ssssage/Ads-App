import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // data: string;
  title = "ElixirHand";
  // myNumber: number;
  // message: string;
  products: any;
  
 
  constructor(private http: HttpClient){
    // this.message = "Hello, World";
    // this.myNumber = 5 + 6;
    // this.data = "ElixirHand";
    
  }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products').subscribe({
      next: response => this.products = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
      
    })
  }
  
}

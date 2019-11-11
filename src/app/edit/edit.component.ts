import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router,ActivatedRoute} from '@angular/router';
import{MovieServiceService} from '../Services/movie-service.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
movie:any=[];
  constructor(private movieService:MovieServiceService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
   this.movieService.GetMovie(this.route.snapshot.params['id']).subscribe((data)=>{
this.movie=data;
console.log(this.movie);
    }
   )}
  onEditMovie(form: NgForm) {
    this.movieService.UpdateMovie(this.movie._id,form.value.title,form.value.year,form.value.poster).subscribe();
    }
}

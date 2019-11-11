import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../movie-model';

@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {
 
  constructor(private http:HttpClient) { }

  GetMovieInformation():Observable<any>{
    return this.http.get('http://localhost:3000/api/movies');
    //https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772
  }
  
  SendMovieInformation(title:string,year:string,poster:string):Observable<any>{
    const movie:Movie = {title:title, year:year, poster:poster};
    return this.http.post('http://localhost:3000/api/movies', movie)
    }
  
    DeleteMovie(id:String):Observable<any>{
    return this.http.delete('http://localhost:3000/api/movies/'+id);

}

GetMovie(id:String):Observable<any> {
  return this.http.get('http://localhost:3000/api/movies/'+id);
}

UpdateMovie(id:string,title:string,year:string,poster:string):Observable<any> {
  const movie:Movie = {title:title, year:year, poster:poster};
  return this.http.put('http://localhost:3000/api/movies/'+id,movie);
}
}

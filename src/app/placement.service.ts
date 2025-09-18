import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {
  API = "http://localhost:8083";

  public registerPlacement(placementData: any) {
    return this.http.post(`${this.API}/placements`, placementData);
  }

  public getPlacements() {
    return this.http.get(`${this.API}/placements`);
  }

  public deletePlacement(placementId: any) {
    return this.http.delete(`${this.API}/placements/${placementId}`);
  }

  public updatePlacement(placement: any) {
    return this.http.put(`${this.API}/placements/${placement.id}`, placement);
  }

  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisrationServiceService {

  user = {
    username: '',
    email: '',
    password: ''
  };
  
  accountType: string = "creator";

  earningPlan: object = {
    receiveDonations: false,
    build_membership: false,
    sell_products: false,
    offer_commission_services: false
  }

  profile_picture: string | undefined;


  constructor() { }
}

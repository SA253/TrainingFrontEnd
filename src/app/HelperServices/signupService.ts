import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class ServiceProvider {
    constructor(
        public id: string,
        public name: string,
        public fname: string,
        public lname: string,
        public email: string,
        public companyName: string,
        public password: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    constructor(private httpClient: HttpClient) { }

    public createServiceProvider(sp) {
        return this.httpClient.post<ServiceProvider>('http://localhost:8001/ServiceProviders', sp);
    }
}
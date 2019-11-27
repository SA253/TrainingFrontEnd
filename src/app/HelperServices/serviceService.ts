import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceProvider, SignUpService} from './signupService';


export class Service {
    constructor(
        public svcName: string,
        public category: string,
        public desc: string,
        public sp: ServiceProvider
    ) { }
}

@Injectable({
    providedIn: 'root'
})

export class ServiceService {
    constructor(private httpClient: HttpClient) { }

    // public createService(sp) {
    //     return this.httpClient.post<ServiceProvider>("http://localhost:8001/ServiceProviders", sp);
    // }

    // // public deleteServiceProvider(sp){
    // //     return this.httpClient.delete<ServiceProvider>("http://localhost:8001/ServiceProviders" )
    // // }

    // public findSP(name){
    //     return this.httpClient.get<ServiceProvider>("http://localhost:8001/ServiceProviders/" + name);
    // }

    public getServices(){
        return this.httpClient.get<Service[]>("http://localhost:8001/Services");
    }
}
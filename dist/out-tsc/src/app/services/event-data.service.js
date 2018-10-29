var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {eventListApi,eventDetailsApi} from '../../environments/environment';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var EventDataService = /** @class */ (function () {
    function EventDataService(http) {
        this.http = http;
        this.eventListApi = "http://192.168.1.40:8084/api/vendor/getVendorList";
        this.eventDetailsApi = "http://192.168.1.40:8084/api/event/eventtickets/";
    }
    EventDataService.prototype.getEventList = function (myObj) {
        return this.http.post(this.eventListApi, myObj, httpOptions);
    };
    EventDataService.prototype.getEventDetails = function (eventId) {
        var url = this.eventDetailsApi + "/" + eventId;
        return this.http.get(url, httpOptions);
    };
    EventDataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], EventDataService);
    return EventDataService;
}());
export { EventDataService };
//# sourceMappingURL=event-data.service.js.map
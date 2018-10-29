import { TestBed, inject } from '@angular/core/testing';
import { EventDataService } from './event-data.service';
describe('EventDataService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [EventDataService]
        });
    });
    it('should be created', inject([EventDataService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=event-data.service.spec.js.map
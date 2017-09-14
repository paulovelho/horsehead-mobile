/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MyService } from './services/my.service';

describe('Service: Feed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [MyService]
    });
  });

  it('should inject the MyService', inject([FeedService], (service: MyService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve the requested feed', async(inject([MyService], (service: MyService) => {
    service.getFeedContent('www.platypusweb.com.br')
        .subscribe(result => {
          expect(result).toBeDefined();
          expect(result.status).toBe('ok');
          expect(result.items.length).toBeGreaterThan(0);
        });
    }))
  );
});

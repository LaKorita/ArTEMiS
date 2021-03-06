/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ArTEMiSTestModule } from '../../../test.module';
import { DragAndDropSubmittedAnswerDetailComponent } from '../../../../../../main/webapp/app/entities/drag-and-drop-submitted-answer/drag-and-drop-submitted-answer-detail.component';
import { DragAndDropSubmittedAnswerService } from '../../../../../../main/webapp/app/entities/drag-and-drop-submitted-answer/drag-and-drop-submitted-answer.service';
import { DragAndDropSubmittedAnswer } from '../../../../../../main/webapp/app/entities/drag-and-drop-submitted-answer/drag-and-drop-submitted-answer.model';

describe('Component Tests', () => {

    describe('DragAndDropSubmittedAnswer Management Detail Component', () => {
        let comp: DragAndDropSubmittedAnswerDetailComponent;
        let fixture: ComponentFixture<DragAndDropSubmittedAnswerDetailComponent>;
        let service: DragAndDropSubmittedAnswerService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ArTEMiSTestModule],
                declarations: [DragAndDropSubmittedAnswerDetailComponent],
                providers: [
                    DragAndDropSubmittedAnswerService
                ]
            })
            .overrideTemplate(DragAndDropSubmittedAnswerDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DragAndDropSubmittedAnswerDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DragAndDropSubmittedAnswerService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new DragAndDropSubmittedAnswer(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.dragAndDropSubmittedAnswer).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});

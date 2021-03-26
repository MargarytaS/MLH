import sel from '../../data/selectors';
import exp from '../../data/expected.json';

 describe ('My Little Hero', function () {
     describe( 'Getting to the page', function () {
         // before('Open App', function () {
         //     browser.url('');
         // });
        it('TC-001 Page Title is MLH trial', function () {
            browser.url('');
            let title = browser.getTitle();
            expect(title).toEqual(exp.title);
        });
    });

    describe('Elements exist', function () {

        it('TC-002 Header is present', () => {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present', () => {
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004 Name field label is present', () => {
            let label = $$(sel.requiredLabel)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Name field is present', () => {
            let name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-006 Gender radio buttons label is present', () => {
            let label = $$(sel.requiredLabel)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007.a Gender radio button 1 is present', () => {
            let buttonHe = $$(sel.radioButtons)[0].isDisplayed();
           expect(buttonHe).toEqual(true);
        });

        it('TC-007.b Gender radio button 2 is present', () => {
            let buttonShe = $$(sel.radioButtons)[1].isDisplayed();
            expect(buttonShe).toEqual(true);

        });

        it('TC-007.c Gender radio button 3 is present', () => {
            let buttonIt = $$(sel.radioButtons)[2].isDisplayed();
            expect(buttonIt).toEqual(true);
        });

        it('TC-008 Age field label is present ', () => {
            let label = $$(sel.requiredLabel)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009 Age field is present', () => {
            let age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-010 Story Type label is present', () => {
            let label = $$(sel.requiredLabel)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-011 Story Type dropdown is present', () => {
            let dropdown = $(sel.storyType).isDisplayed();
            expect(dropdown).toEqual(true);
        });

        it('TC-012 Image field label is present', () => {
            let label = $$(sel.imageLabel)[4].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-013 Image field is present', () => {
            let image = $(sel.image).isDisplayed();
            expect(image).toEqual(true);
        });

        it('TC-014 Submit button is present', () => {
            let submit = $(sel.submit).isDisplayed();
            expect(submit).toEqual(true);
        });
    });
 })

import * as cookie from '@tests/helpers/cookie';
import * as route from '@tests/helpers/route';
import { ROUTES } from '@tests/const/routes';
import * as data from '@tests/data/login.data';
import { qase } from 'cypress-qase-reporter/dist/mocha';
// import * as assert from '@tests/helpers/asserts';

describe('Login', () => {
    beforeEach(() => {
        cookie.clearCookies();
        route.visitLogin(ROUTES.login);
        
    });

    qase(41,
    it('Ensure that user will able to login user admin lv 3 using valid username or password', () => {

        cy.get('.auth__right').click();
        cy.get('#email').click();
        cy.get('#email').type(data.VALID_DATA.username);
        cy.get('#password').click();
        cy.get('#password').type(data.VALID_DATA.password);
        cy.get('.MuiButton-root').click();
        cy.url().should('contains', 'https://dev-digid-ntt-admin.loyalto.id/');
        cy.get('div:nth-child(4) .new-layout__sidebar-head > .text-left').click();
        cy.get('[class="pb-2 new-layout__sidebar-child "]').click();

        //class="action-btn-process w-100 btn btn-secondary"
        cy.get('[class="action-btn-process w-100 btn btn-secondary(1)]').click();
        cy.get('.MuiCardContent-root').click();
        // cy.get('.row:nth-child(1) > .col-2 img:nth-child(1)').click();
        // cy.get('.border').click();
        // cy.get('.border').type('TEST rICO');
        // cy.get('.row:nth-child(1) > .col-2 .ml-2').click();
        // cy.get('.custom-input-form').click();
        // cy.get('.custom-input-form').type('VERIF LV 3');
        // cy.get('.action-btn-submit').click();
        // cy.get('.done').click();





        // assert.shouldContainText(loginPage.errorAlert('Epic sadface'))

    })
    );
});
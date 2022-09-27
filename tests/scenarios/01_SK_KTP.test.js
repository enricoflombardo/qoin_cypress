import * as cookie from '@tests/helpers/cookie';
import * as route from '@tests/helpers/route';
import { ROUTES } from '@tests/const/routes';
import * as data from '@tests/data/login.data';
import { qase } from 'cypress-qase-reporter/dist/mocha';
// import * as assert from '@tests/helpers/asserts';

let no_registration;

describe('Sentra Kependudukan', () => {
    beforeEach(() => {
        cookie.clearCookies();
        route.visitLogin(ROUTES.login);
        
    });

    qase(6,
    it('Web Admin - Kependudukan Lv 3', () => {

        cy.get('.auth__right').click();
        cy.get('#email').click();
        cy.get('#email').type(data.VALID_DATA.username);
        cy.get('#password').click();
        cy.get('#password').type(data.VALID_DATA.password);
        cy.get('.MuiButton-root').click();
        cy.url().should('contains', 'https://dev-digid-ntt-admin.loyalto.id/');
        cy.get('div:nth-child(4) .new-layout__sidebar-head > .text-left').click();
        cy.get('[class="no__child my-1 new-layout__sidebar-child "]').click();

        cy.wait(1000);

        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[2]').invoke('text').then((text) => {
            no_registration = text
          });
        
        no_registration = 'abc'
        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[7]/div/a/button').first().click();

        
        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[2]/span[1]/input').click();
        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[6]/div/div/input').click();
        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[6]/div/div/input').type(' Test Mocha Mocha');
        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[2]/span[2]/input').click();
        
        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[2]/div[2]/div[4]/div[3]/div[2]/span[1]/input').click();
        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[2]/div[2]/div[4]/div[6]/div/div/input').click();
        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[2]/div[2]/div[4]/div[6]/div/div/input').type('DOLOR');
        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[2]/div[2]/div[4]/div[3]/div[2]/span[2]/input').click();

        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[3]/div[2]/div/div/div/div/textarea[1]').click();
        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[3]/div[2]/div/div/div/div/textarea[1]').type('VERIV LV 3');


        cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[4]/div[2]/div/div[2]/button').click();

        cy.get('.fa-chevron-down:nth-child(1)').click();
        cy.get('[class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root change-pass logout mt-3 css-1e6y48t-MuiButtonBase-root-MuiButton-root"]')
        
        cy.log(no_registration)
    })
    );

    qase(5,
        it('Web Admin - Kependudukan Lv 2', () => {
    
            cy.get('.auth__right').click();
            cy.get('#email').click();
            cy.get('#email').type(data.VALID_DATA_ADMIN_LV2.username);
            cy.get('#password').click();
            cy.get('#password').type(data.VALID_DATA_ADMIN_LV2.password);
            cy.get('.MuiButton-root').click();
            cy.url().should('contains', 'https://dev-digid-ntt-admin.loyalto.id/');
            cy.get('div:nth-child(4) .new-layout__sidebar-head > .text-left').click();
            cy.get('[class="no__child my-1 new-layout__sidebar-child "]').click();
    
            cy.wait(1000);
            cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[7]/div/a/button').click();
            // cy.contains('td', 'NTT2022092711017').parent('tr').children('td').find('button').click();

            cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[3]/div[2]/div/div[3]/div/div/div/button').click();
            cy.get('[aria-label="Sep 27, 2022"]').click();
            cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[4]/div[2]/div/div[3]/div/div/input').click();
            cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[4]/div[2]/div/div[3]/div/div/input').type('09:30');

            cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[6]/div[2]/div[2]/div/div/div/textarea[1]').click();
            cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[6]/div[2]/div[2]/div/div/div/textarea[1]').type('VERIF LV2');
            cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[1]/div[7]/div[2]/div/div[2]/button').click();

        })
        );

        qase(7,
            it('Web Admin - Kependudukan Lv 1', () => {
        
                cy.get('.auth__right').click();
                cy.get('#email').click();
                cy.get('#email').type(data.VALID_DATA_ADMIN_LV1.username);
                cy.get('#password').click();
                cy.get('#password').type(data.VALID_DATA_ADMIN_LV1.password);
                cy.get('.MuiButton-root').click();
                cy.url().should('contains', 'https://dev-digid-ntt-admin.loyalto.id/');
                cy.get('div:nth-child(4) .new-layout__sidebar-head > .text-left').click();
                cy.xpath('//*[@id="root"]/div/div[1]/div[1]/div[2]/div[4]/div/div[2]/a/div').click();
        
                cy.wait(1000);
                cy.xpath('//*[@id="root"]/div/div[6]/div[2]/div[1]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[7]/div/a/button').click();
                // cy.contains('td', 'NTT2022092711017').parent('tr').children('td').find('button').click();
    
            })
            );
});
// App Imports 
import HttpService from './HttpServices';
import { log } from '../utils/logger';
import { AppConstants } from '../constants/AppConstants';


export default class OfferService {

    offersList;

    /**
     * Function to fetch the list of offers available
     * @returns array of offers
     */
    async fetchOffersList() {
        try {
            log.info('Fetching offers list...');
            const response = await HttpService.get(AppConstants.API_ENDPOINTS.OFFERS);
            this.offersList = response.data;
            return response.data;
        } catch (err) {
            log.error('Error while fetching offers...', err);
            throw err;
        }
    }

    /**
     * Function to get the list of offers available
     * @returns array of offers
     */
    async getOffersList() {
        log.info('Getting offers list...');
        try {
            if (!this.offersList) {
                log.info('No in-memory offers list present...');
                await this.fetchOffersList();
            }
            return this.offersList;
        } catch (err) {
            log.error('Error while getting offers...', err);
            throw err;
        }
    }
}
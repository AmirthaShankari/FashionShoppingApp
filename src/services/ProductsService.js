// App Imports 
import HttpService from './HttpServices';
import { log } from '../utils/logger';
import { AppConstants } from '../constants/AppConstants';


export default class ProductsService {

    /**
     * Function to fetch the list of offers available
     * @returns array of offers
     */
    async fetchProductsList(category) {
        try {
            log.info('Fetching Products list...');
            const response = await HttpService.get(AppConstants.API_ENDPOINTS[category]);
            return response.data;
        } catch (err) {
            log.error('Error while fetching products...', err);
            throw err;
        }
    }

}
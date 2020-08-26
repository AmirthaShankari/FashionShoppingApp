import axios from 'axios';

// App Imports
import { Config } from '../config';

export default axios.create({
    baseURL: Config.BASE_PATH
});
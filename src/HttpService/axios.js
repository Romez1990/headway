import axiosStatic from 'axios';
import applyConverters from 'axios-case-converter';

const axios = applyConverters(axiosStatic);

export default axios;

import axios from "axios";
import { apiUrl, apiKey } from "../config";

const api = axios.create({
  baseURL: apiUrl,
})

api.defaults.params = {};
api.defaults.params['api-key'] = apiKey;


const getLocations = (params) => api.get("property/location", { params  })
const getPropertyTypes = (params) => api.get("property/type", { params });
const getSales = (params) => api.get("/property/residential/sale", { params : params.values });
const getLettings = (params) => api.get("/property/residential/letting", { params :  params.values });
const getSaleProperyDetails = (propretyId) => api.get(`/property/residential/sale/${propretyId}?expand=MainPhoto,Address,Types,Media,Currency&fi elds=Id,TransactionTypeId,Bedrooms,Bathrooms,Description,Price,Address.Street,Address. Town,Types.Id,Types.Name,Media.TypeId,Media.Data,Currency.Symbol`);
const getLettingProperyDetails = (propretyId) => api.get(`/property/residential/letting/${propretyId}?expand=MainPhoto,Address,Types,Media,Currency&fi elds=Id,TransactionTypeId,Bedrooms,Bathrooms,Description,Price,Address.Street,Address. Town,Types.Id,Types.Name,Media.TypeId,Media.Data,Currency.Symbol`);

export default {
  getLocations,
  getPropertyTypes,
  getSales,
  getLettings,
  getSaleProperyDetails,
  getLettingProperyDetails
};
           
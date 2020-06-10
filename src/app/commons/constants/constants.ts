const BASE_URL = 'https://aks-mimovistar-ingress-prod.eastus2.cloudapp.azure.com';

const CONSTANTS = {
    endPointBonosList: 'campaign-fidelizacion/v1/getPromotionsByTime',
    endPointBonosHome: 'campaign-fidelizacion/v1/getAvailablePromotions',
    endPointCanjearBono: 'campaign-fidelizacion/v1/canjearBono',
    endPointToken: 'https://login.microsoftonline.com/929616ff-818c-4541-b071-2bd6ab912e88/oauth2/token'
};

export { BASE_URL, CONSTANTS };

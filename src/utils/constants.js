import { generateDates } from './misc';

const BOG_CITY_ID = 'tipi33';
const BOG_HQ_ID = 'tipi48';
const MDE_CITY_ID = 'tipi45';
const MDE_HQ_ID = 'tipi53';

export const BASE_URL_BOG =
  'https://agendamigracolbackend.emtelco.co/api/schedule/?nopaginate=true&city_id=tipi33&headquarters_id=tipi48&schedulecstm__level1=Cedula_Extranjeria&date=';

export const BASE_URL_MDE =
  'https://agendamigracolbackend.emtelco.co/api/schedule/?nopaginate=true&city_id=tipi45&headquarters_id=tipi53&schedulecstm__level1=Cedula_Extranjeria&date=';

export const DATES = generateDates();

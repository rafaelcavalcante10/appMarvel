import { Comicevents } from './comicevents';
import { Comicstories } from './comicstories';
import { Comiccharacters } from './comiccharacters';
import { Comiccreators } from './comiccreators';
import { Comicprices } from './comicprices';
import { Comicdates } from './comicdates';
import { Comicseries } from './comicseries';
import { Thumbnail } from './../thumbnail';
export interface Comic {
  id : number;
  digitalId : number;
  title : string;
  issueNumber : number;
  variantDescription : string;
  description : string;
  modified : Date;
  isbn : string;
  upc : string;
  diamondCode : string;
  ean : string;
  issn : string;
  format : string;
  pageCount : number;
  textObjects : any;
  resourceURI : string;
  urls : any;
  series : Comicseries;
  variants : any;
  collections : any;
  collectedIssues : any;
  dates : Comicdates;
  prices : Comicprices;
  thumbnail : Thumbnail;
  images : any;
  creators : Comiccreators;
  characters : Comiccharacters;
  stories : Comicstories;
  events : Comicevents;
}

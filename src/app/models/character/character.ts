import { Characterevents } from './characterevents';
import { Characterstories } from './characterstories';
import { Characterseries } from './characterseries';
import { Charactercomics } from './charactercomics';
import { Thumbnail } from '../thumbnail';

export interface Character {
  id : number;
  name : string;
  description : string;
  modified : Date;
  thumbnail : Thumbnail;
  resourceURI : string;
  comics : Charactercomics;
  series : Characterseries;
  stories : Characterstories;
  events : Characterevents;
  urls : any;
}

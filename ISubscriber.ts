import {IVideo} from './IVideo.js'

export interface ISubscriber {
    readonly name: string;
    country: string;
    readonly videos: IVideo[];
}




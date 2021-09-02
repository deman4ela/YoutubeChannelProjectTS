import {IVideo} from './IVideo.js'
import {ISubscriber} from './ISubscriber.js'
import {Video} from './Video.js'

export class Subscriber implements ISubscriber {
    protected _name: string;
    protected _country: string;
    protected _videos: IVideo[];

    public constructor(name: string, country: string) {
        this._name = name;
        this._country = country;
        this._videos = [];
    }

    public get name(): string {
        return this._name;
    }

    public get country(): string {
        return this._country;
    }

    public set country(country: string) {
        this._country = country;
    }

    public get videos(): IVideo[] {
        return this._videos;
    }

    public getVideoByName(name: string): IVideo {

        const neededVideo: IVideo = this._videos.find(item => item.name === name);

        return neededVideo;
    }


    public addVideo(videoObj: IVideo): void {
        this._videos.push(videoObj);
    }

    public addVideoAsync(videoObj: IVideo): Promise<void> {
        return new Promise<void>((resolve, reject) => {
                if (videoObj.name !== "") {
                    setTimeout(() => {
                            this.addVideo(videoObj);
                            resolve();
                        }, 4000
                    );
                } else {
                    reject(new Error("Error! The name of an object was not filled."));
                }
            }
        )
    }

    public removeVideoByName(name: string): void {
        const neededVideo: number = this.videos.findIndex(item => item.name === name);
        this.videos.splice(neededVideo, 1);
    }

}


// addVideoAsync(videoObj) {
//     return new Promise ((resolve, reject) => {
//             if (videoObj instanceof Video) {
//                 setTimeout(() => {
//                         this.addVideo(videoObj);
//                         resolve(videoObj);
//                     }, 4000
//                 );
//             } else {
//                 reject(new Error("Error!"));
//             }
//         }
//     )
// }



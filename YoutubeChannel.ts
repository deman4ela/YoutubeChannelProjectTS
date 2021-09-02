import {IVideo} from './IVideo.js'
import {ISubscriber} from './ISubscriber.js'

export class YoutubeChannel {
    protected _name: string;
    protected _subscribers: ISubscriber[];
    protected _videos: IVideo[];

    public constructor(name: string) {
        this._name = name;
        this._subscribers = [];
        this._videos = [];
    }

    public get name(): string {
        return this._name;
    }

    public get subscribers(): ISubscriber[] {
        return this._subscribers;
    }

    public addSubscriber(subscriber: ISubscriber): void {
        this._subscribers.push(subscriber);
    }

    public get videos(): IVideo[] {
        return this._videos;
    }

    public addVideo(video: IVideo): void {
        this._videos.push(video);

    }

    public addVideoToSubscriber(subscriberName: string, videoName: string): void {

        const video: IVideo = this.videos.find(item => item.name === videoName);

        const subscriber: ISubscriber = this.subscribers.find(item => item.name === subscriberName);

        subscriber.videos.push(video);
    }

}
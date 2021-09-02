import {IVideo} from './IVideo.js'


export class Video implements IVideo {
    protected _name: string;
    protected _category: string;
    protected _isLiked: boolean;

    public constructor(name: string, category: string) {
        this._name = name;
        this._category = category;
        this._isLiked = false;
    }

    public get name(): string {
        return this._name;
    }

    public get category(): string {
        return this._category;
    }

    public checkIfLiked(): boolean {
        return this._isLiked;
    }

    public likeVideo(): void {
        this._isLiked = true;
    }

    public dislikeVideo(): void {
        this._isLiked = false;
    }
}


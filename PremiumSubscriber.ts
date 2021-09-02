import {Subscriber} from './Subscriber.js'

export class PremiumSubscriber extends Subscriber {
    protected _name: string;
    protected _country: string;
    protected _billingCycle: string;

    public constructor(name: string, country: string, billingCycle: string) {
        super(name, country);
        this._billingCycle = billingCycle;
    }

    public get billingCycle(): string {
        return this._billingCycle;
    }

    public set billingCycle(billingCycle: string) {
        this._billingCycle = billingCycle;
    }

}
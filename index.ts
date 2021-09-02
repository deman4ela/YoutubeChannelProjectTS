import {ISubscriber} from './ISubscriber.js'
import {IVideo} from './IVideo.js'
import {PremiumSubscriber} from './PremiumSubscriber.js'
import {Subscriber} from './Subscriber.js'
import {Video} from './Video.js'
import {YoutubeChannel} from './YoutubeChannel.js'


//FOR CHECKING Video.js file
const video1: Video = new Video("1", "humor");
const video2: Video = new Video("2", "horror");
const video3: Video = new Video("3", "drama");
const video4: Video = new Video("4", "action");

console.log(video1.name);
console.log(video1.checkIfLiked());
console.log(video1.likeVideo());
console.log(video1.checkIfLiked());
console.log(video1.dislikeVideo());
console.log(video1.checkIfLiked());
console.log(video1.category);


// FOR CHECKING Subscribers.js file
const s1: Subscriber = new Subscriber("Sasha", "Ukraine");
s1.addVideo(video1);
s1.addVideo(video2);
s1.addVideo(video3);

console.log(s1.videos);
console.log(s1.getVideoByName("2"));
console.log(s1.removeVideoByName("3"));
console.log(s1.videos);

console.log(s1.name);
console.log(s1.country);
s1.country = "USA";
console.log(s1.country);
// console.log(s1.addVideoAsync(video4).then(result => console.log(result)).catch(error => console.log(error)));

// FOR CHECKING PremiumSubscriber.js file
const ps1: PremiumSubscriber = new PremiumSubscriber("Ivan", "Belarus", "1 month");
console.log(ps1);
console.log(ps1.billingCycle);
ps1.billingCycle = "1 year";
console.log(ps1);
console.log(ps1.billingCycle);
console.log(ps1.videos);

// FOR CHECKING YoutubeChannel.js file
const yc1: YoutubeChannel = new YoutubeChannel("firstchannel");
console.log(yc1.name);
const ivan: ISubscriber = new Subscriber("ivan", "uk");
const john: ISubscriber = new Subscriber("john", "usa");
console.log(yc1.addSubscriber(ivan));
console.log(yc1.addSubscriber(john));
console.log(yc1.subscribers);
console.log(yc1.addVideo(video1));
console.log(yc1.addVideo(video2));
console.log(yc1.videos);
console.log(yc1.addVideoToSubscriber("ivan", "1"));
console.log(yc1.addVideoToSubscriber("ivan", "2"));
console.log(yc1.subscribers[0].videos);

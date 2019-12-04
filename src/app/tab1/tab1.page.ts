import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SeriesService } from '../services/series.service';
//remove toastcontroller with a more viable option

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public cssClass: string;
  // private answers = ['A Place Further Than the Universe', 'A Silent Voice',
  //                    'A.I.C.O. -Incarnation-', 'After the Rain',
  //                    'AJIN: Demi-Human', 'AJIN: Demi-Human 2', 'Angel Beats!',
  //                    'Angel Beats!: Another Epilogue',
  //                    'Asobi Asobase - workshop of fun', 'Attack on Titan',
  //                    'Attack on Titan Season 2', 'Attack on Titan Season 3',
  //                    'Attack on Titan Season 3 Part 2', 'Baccano!',
  //                    'Bakemonogatari', 'BANANA FISH', 'Barakamon',
  //                    'Black Lagoon', 'Black Lagoon: Roberta`s Blood Trail',
  //                    'Black Lagoon: The Second Barrage', 'Blast of Tempest',
  //                    'BLEND-S', 'Bokurano', 'Boogiepop and Others',
  //                    'Cells at Work!', 'Chaika -The Coffin Princess-',
  //                    'Chaika -The Coffin Princess- AVENGING BATTLE', 'Citrus',
  //                    'Claymore', 'Code Geass: Lelouch of the Rebellion',
  //                    'Code Geass: Lelouch of the Rebellion R2',
  //                    'CROSS ANGE Rondo of Angel and Dragon', 'D-Frag!',
  //                    'Daily Lives of High School Boys', 'DARLING in the FRANXX',
  //                    'Death March to the Parallel World Rhapsody',
  //                    'Death Parade', 'Devilman Crybaby', 'Dororo', 'Eureka Seven',
  //                    'Evangelion: 1.0 You Are (Not) Alone',
  //                    'Evangelion: 2.0 You Can (Not) Advance',
  //                    'Evangelion: 3.0 You Can (Not) Redo', 'Fate/EXTRA Last Encore',
  //                    'Fate/stay night',
  //                    'Fate/stay night [Heaven`Feel] I. presage flower',
  //                    'Fate/stay night [Heaven`Feel] II. lost butterfly',
  //                    'Fate/stay night: Unlimited Blade Works',
  //                    'Fate/stay night: Unlimited Blade Works 2nd Season',
  //                    'Fate/Zero', 'Fate/Zero Season 2',
  //                    'Final Chapter: the Garden of sinners', 'FLCL', 'Flip Flappers',
  //                    'From the New World', 'Full Metal Panic!',
  //                    'Full Metal Panic! Invisible Victory',
  //                    'Full Metal Panic! The Second Raid',
  //                    'Fullmetal Alchemist: Brotherhood', 'Gate', 'Gate 2',
  //                    'Ghost in the Shell: Stand Alone Complex',
  //                    'Ghost in the Shell: Stand Alone Complex - Solid State Society',
  //                    'Ghost in the Shell: Stand Alone Complex 2nd GIG',
  //                    'Girls und Panzer', 'Girls und Panzer das Finale',
  //                    'Girls und Panzer der Film', 'Girl`s Last Tour',
  //                    'GOBLIN SLAYER', 'Golden Kamuy', 'Golden Kamuy 2',
  //                    'Grand Blue Dreaming', 'Great Teacher Onizuka', 'Gurren Lagann',
  //                    'Gurren Lagann The Movie: Childhood`s End',
  //                    'Gurren Lagann The Movie: The Lights in the Sky are Stars',
  //                    'Haibane Renmei', 'Hakata Tonkotsu Ramens',
  //                    'Hakumei and Mikochi', 'Hanamonogatari', 'Happy Sugar Life',
  //                    'Hellsing Ultimate', 'HINAMATSURI',
  //                    'Hitoribocchi no Marumaruseikatsu',
  //                    'Humanity Has Declined',
  //                    'I Want to Eat Your Pancreas', 'In This Corner of the World',
  //                    'Interviews with Monster Girls', 'IRODUKU: The World in Colors',
  //                    'Jormungand', 'Jormungand: Perfect Order', 'JUNI TAISEN: ZODIAC WAR',
  //                    'Kaguya-same: Love is War', 'Kakegurui', 'Kakegurui XX',
  //                    'KARAKAI JOZU NO TAKAGI-SAN', 'Katanagatari', 'Kill la Kill',
  //                    'Kill la Kill Special',
  //                    'Kizumonogatari Part 1: Tekketsu', 'Kizumonogatari Part 2: Nekketsu',
  //                    'Kizumonogatari Part 3: Reiketsu', 'KOKKOKU', 'Kokoro Connect',
  //                    'Kokoro Connect: Michi Random', 'KONOHANA KITAN',
  //                    'KONOSUBA -God`s blessing on this wonderful world!',
  //                    'KONOSUBA -God`s blessing on this wonderful world! 2',
  //                    'Koyomimonogatari',
  //                    'Kubikiri Cycle: The Blue Savant and the Nonsense User',
  //                    'Kyousougiga', 'Laid-Back Camp', 'Land of the Lustrous',
  //                    'Legend of the Galactic Heroes: Die Neue These',
  //                    'Little Witch Academia (TV)', 'Log Horizon',
  //                    'Lord El-Melloi II`s Case Files {Rail Zeppelin} Grace note - A Grave Keeper, a Cat, and a Mage',
  //                    'Made in Abyss', 'MAGICAL GIRL SITE', 'MEGALOBOX', 'Mitsuboshi Colors',
  //                    'Mob Psycho 100', 'Mob Psycho 100 II',
  //                    'Monogatari Series: Second Season', 'Monthly Girls` Nozaki-kun',
  //                    'My Hero Academia', 'My Hero Academia Season 2',
  //                    'My Hero Academia Season 3', 'My Hero Academia the Movie: Two Heroes',
  //                    'My Teen Romantic Comedy SNAFU', 'My Teen Romantic Comedy SNAFU TOO!',
  //                    'Nekomonogatari Black', 'Neon Genesis Evangelion',
  //                    'Neon Genesis Evangelion: The End of Evangelion',
  //                    'Nichijou - My Ordinary Life', 'Nisemonogatari',
  //                    'No Game No Life', 'No Game No Life -Zero-', 'Noragami',
  //                    'Noragami Aragoto', 'Noragami OVA', 'Ouran High School Host Club',
  //                    'Overlord', 'Overlord II', 'Overlord III', 'Owarimonogatari',
  //                    'Owarimonogatari Second Season', 'Parasyte -the maxim-',
  //                    'Patema Inverted', 'Plastic Memories', 'Princess Principal',
  //                    'PSYCHO-PASS', 'Puella Magi Madoka Magica',
  //                    'Puella Magi Madoka Magica the Movie Part III: Rebellion',
  //                    'Rascal Does Not Dream of Bunny Girl Senpai', 'Re:CREATORS',
  //                    'Re:ZERO -Starting Life in Another World-',
  //                    'Record of Grandcrest War', 'Recovery of an MMO Junkie',
  //                    'Recovery of an MMO Junkie OVA', 'Saga of Tanya the Evil',
  //                    'Sankarea', 'Sankarea OVA', 'Sankarea: Wagahai mo... Zombie de Aru...',
  //                    'Scrapped Princess', 'Scum`s Wish', 'Senyuu', 'Senyuu. 2',
  //                    'Shelter', 'Silver Spoon', 'Silver Spoon Season 2', 'Slow Start',
  //                    'Space Patrol Luluco', 'Spice and Wolf',
  //                    'Spice and Wolf 2 OVA: Wolf and the Amber Melancholy',
  //                    'Spice and Wolf II', 'SSSS.GRIDMAN', 'Steins;Gate',
  //                    'Steins;Gate', 'Steins;Gate 0: 23B - Divide by Zero',
  //                    'Steins;Gate The Movie - Load Region of Deja Vu',
  //                    'Steins;Gate: Egoistic Poriomania', 'Sword Art Online',
  //                    'Sword Art Online Alternative: Gun Gale Online',
  //                    'Sword Art Online II', 'Sword Art Online the Movie: Ordinal Scale',
  //                    'Sword Art Online: Alicization', 'Sword of the Stranger',
  //                    'Tada Never Falls In Love', 'Terror in Resonance',
  //                    'That Time I Got Reincarnated as a Slime', 'The Ancient Magus` Bride',
  //                    'The Devil is a Part-Timer!', 'The Disappearance of Haruhi Suzumiya',
  //                    'The Disastrous Life of Saiki K.', 'The Disastrous Life of Saiki K. 2',
  //                    'The Future Diary', 'The Future Diary Redial',
  //                    'the Garden of sinners -recalled out summer-',
  //                    'the Garden of sinners Chapter 1: Thanatos. (Overlooking View)',
  //                    'the Garden of sinners Chapter 2: ...and nothing heart. (Murdering Speculation Part A)',
  //                    'the Garden of sinners Chapter 3: ever cry, never life. (Remaining Sense of Pain)',
  //                    'the Garden of sinners Chapter 4: garan-no-dou. (The Hollow Shrine)',
  //                    'the Garden of sinners Chapter 5: Paradox Paradigm',
  //                    'the Garden of sinners Chapter 6: Fairy Tale. (Oblivion Recording)',
  //                    'the Garden of sinners Chapter 7: ...and nothing heart. (Murdering Speculation Part B)',
  //                    'The Garden of Words', 'The Kawai Complex Guide to Manors and Hostel Behavior',
  //                    'The Melancholy of Haruhi Suzumiya', 'The Melancholy of Haruhi Suzumiya (2009)',
  //                    'The Pet Girl of Sakurasou', 'The Promised Neverland',
  //                    'The Quintessential Quintuplets', 'The Rising of the Shield Hero',
  //                    'Tokyo Ghoul', 'Tokyo Ghoul 2A', 'Tokyo Ghoul:re', 'Tokyo Ghoul:re 2',
  //                    'Tsukimonogatari', 'Tsuredure Children', 'Violet Evergarden',
  //                    'Wotakoi: Love is Hard for Otaku', 'Yona of the Dawn',
  //                    'Yona of the Dawn OVA', 'Your Name.', 'YUKI YUNA IS A HERO',
  //                    'Yuki Yuna is a Hero: Washio Sumi no Shou',
  //                    'YUKI YUNA IS A HERO: Yuusha no Shou', 'Zoku Owarimonogatari',
  //                    'ZOMBIE LAND SAGA']

  //constructor() {}

  constructor(private toastCtrl: ToastController, private seriesService: SeriesService) {}

  giveAnswer() {
    this.cssClass = "animated shake";
    //let answer = this.answers[Math.floor(Math.random() * this.answers.length)];
    let answer = this.seriesService.series[Math.floor(Math.random() * this.seriesService.series.length)];
    // this.presentToast(answer);
    console.log(answer);

    var temp = this;
    setTimeout(function(){
      temp.presentToast(answer.description);
    })
  }

  async presentToast(answer) {
    // console.log(answer);
    const toast = await this.toastCtrl.create({
      message: answer,
      duration: 5000,
      position: 'bottom'
    });

    toast.onDidDismiss().then(() => {
      console.log('toast dismissed');
      this.cssClass = "";
    });
    toast.present();
  }
//remove 135-160 with a mor eviable option via firebase when possible
}

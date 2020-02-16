// TODO: Make sounds possible

// import Sound from 'react-native-sound';

// configure react native sound
// Sound.setCategory('Playback');

// define possible sounds
export const A2 = 'A2';
export const F2 = 'F2';
export const C3 = 'C3';

// prepare available sounds
const sounds = {
    // A2: new Sound('a2.mp3', Sound.MAIN_BUNDLE /*, error => {}*/),
    // F2: new Sound('f2.mp3', Sound.MAIN_BUNDLE /*, error => {}*/),
    // C3: new Sound('c3.mp3', Sound.MAIN_BUNDLE /*, error => {}*/)
};

export default function playSound(sound: string): void {
    // if (sounds[sound]) {
    //     sounds[sound].setVolume(10).play(/*success => {}*/);
    // }
}

import Sound from 'react-native-sound'
Sound.setCategory('Playback')

class NotificationService {



    constructor() {
        this.a2 = new Sound('a2.mp3', Sound.MAIN_BUNDLE, (error) => { })
        this.f2 = new Sound('f2.mp3', Sound.MAIN_BUNDLE, (error) => { })
        this.c3 = new Sound('c3.mp3', Sound.MAIN_BUNDLE, (error) => { })
    }

    playA2() {
        this.a2.setVolume(10).play((success) => { })
    }

    playF2() {
        this.f2.setVolume(10).play((success) => { })
    }

    playC3() {
        this.c3.setVolume(10).play((success) => { })
    }

}

export default new NotificationService()

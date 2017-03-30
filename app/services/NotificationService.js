import Sound from 'react-native-sound'
Sound.setCategory('Playback')

class NotificationService {

    constructor() {
        this.sound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => { })
    }

    playSound() {
        this.sound.setVolume(10).play((success) => { })
    }

}

export default new NotificationService()

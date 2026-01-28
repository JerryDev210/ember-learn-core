import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class VideoPlayer extends Component {
  videoUrl = '/test.mp4';
  @tracked isPlaying = false;
  @action play() {
    this.isPlaying = true;
  }
  @action pause() {
    this.isPlaying = false;
  }
}

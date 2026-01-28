import { modifier } from 'ember-modifier';

export default modifier(function playWhen(element, [isPlaying]) {
  if (isPlaying) element.play();
  else element.pause();
});

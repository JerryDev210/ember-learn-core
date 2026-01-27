import Component from '@glimmer/component';

export default class MessageIndex extends Component {
  substring = (string, start, end) => string.substring(start, end);
}

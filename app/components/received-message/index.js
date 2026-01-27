import Component from '@glimmer/component';

export default class ReceivedMessage extends Component {
    localTime = () => new Date().toLocaleTimeString();
}

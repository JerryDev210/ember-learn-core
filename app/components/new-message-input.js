import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewMessageInput extends Component {
  @tracked message = '';

  @action
  updateMessage(event) {
    this.message = event.target.value;
  }
  @action
  createMessage(event) {
    event.preventDefault();

    if (this.message && this.args.onCreate) {
      this.args.onCreate(this.message);

      this.message = '';
    }
  }
}

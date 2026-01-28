import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewMessageInput extends Component {
  @tracked message = '';

  @action
  updateMessage(event) {
    let formData = new FormData(event.currentTarget);
    this.message = formData.get('message');
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

import React from 'react';

class ChannelSearch extends React.Component {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name=title]');
    this.$ul = this.$el.find('.channels');

    this.$input.on('input', this.handleInput.bind(this));
  }

  handleInput(event) {
    if (this.$input.val() === '') {
      this.renderResults([]);
      return;
    }
    APIUtil.searchUsers(this.$input.val())
      .then(users => this.renderResults(users));
  }

  renderResults(users) {
    this.$ul.empty();

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      let $a = $('<a></a>');
      $a.text(`@${user.username}`);
      $a.attr('href', `/users/${user.id}`);

      const $followToggle = $('<button></button>');
      new FollowToggle($followToggle, {
        userId: user.id,
        followState: user.followed ? 'followed' : 'unfollowed'
      });

      const $li = $('<li></li>');
      $li.append($a);
      $li.append($followToggle);

      this.$ul.append($li);
    }
  }
}
